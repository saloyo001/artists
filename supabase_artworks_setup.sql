-- Run this once in Supabase: Dashboard > SQL Editor > New query.
-- This creates the public artworks table and image bucket used by seller.html.

create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(trim(title)) > 0),
  price numeric(12, 2) not null check (price > 0),
  category text not null check (char_length(trim(category)) > 0),
  maker text not null check (char_length(trim(maker)) > 0),
  location text not null check (char_length(trim(location)) > 0),
  description text not null check (char_length(trim(description)) > 0),
  image_url text not null,
  image_path text not null,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.artworks enable row level security;

grant select on public.artworks to anon, authenticated;
grant insert, delete on public.artworks to authenticated;

drop policy if exists "Anyone can view published artwork" on public.artworks;
create policy "Anyone can view published artwork"
  on public.artworks
  for select
  to anon, authenticated
  using (published = true or seller_id = auth.uid());

drop policy if exists "Sellers can publish their own artwork" on public.artworks;
create policy "Sellers can publish their own artwork"
  on public.artworks
  for insert
  to authenticated
  with check (
    seller_id = auth.uid()
    and exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'seller'
    )
  );

drop policy if exists "Sellers can delete their own artwork" on public.artworks;
create policy "Sellers can delete their own artwork"
  on public.artworks
  for delete
  to authenticated
  using (seller_id = auth.uid());

-- Create a public image bucket. The contents are public to view, but each seller
-- can upload/delete only files stored inside their own user-id folder.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'artwork-images',
  'artwork-images',
  true,
  1572864,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']
)
on conflict (id) do update
set public = true,
    file_size_limit = 1572864,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];

drop policy if exists "Anyone can view artwork images" on storage.objects;
create policy "Anyone can view artwork images"
  on storage.objects
  for select
  to public
  using (bucket_id = 'artwork-images');

drop policy if exists "Sellers can upload their artwork images" on storage.objects;
create policy "Sellers can upload their artwork images"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'artwork-images'
    and (storage.foldername(name))[1] = auth.uid()::text
    and exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'seller'
    )
  );

drop policy if exists "Sellers can delete their artwork images" on storage.objects;
create policy "Sellers can delete their artwork images"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'artwork-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
