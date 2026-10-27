KENYAN ARTISANS — SELLER PUBLISHING UPDATE

Files in this package
- index.html: marketplace page. The Artist Studio publishing form is removed.
- script.js: shopping, search, cart, wishlist, checkout, settings, and loading published Supabase artwork.
- seller.html: seller dashboard. Sellers can publish artwork, upload images, and remove their own listings.
- supabase_artworks_setup.sql: one-time database and image-storage setup.

INSTALLATION
1. Make a backup of your current index.html and script.js.
2. Copy index.html, script.js and seller.html into the same project folder as your existing style.css, auth.js, login.html, signup.html and other pages. Replace those three files when prompted.
3. Open your Supabase project, go to SQL Editor, create a new query, paste all of supabase_artworks_setup.sql, and run it once.
4. Confirm each seller has a row in public.profiles with id matching their Auth user id and role exactly equal to 'seller'. This matches the role check already used by auth.js.
5. Run the site from one local web server (for example VS Code Live Server). Open index.html and seller.html under the same host and port; do not open one using file:// and the other on localhost.
6. Log in with a seller account, open Seller Dashboard, add the artwork details and image, and click Publish Artwork. Refresh Explore Art to see the new listing. Published rows and images are saved in Supabase, not just in browser memory, so other visitors can view them.

IMPORTANT
- Keep your existing auth.js and style.css. This package does not replace those files.
- The SQL expects your existing public.profiles table to have an id column matching auth.users.id and a role column containing 'seller' for sellers.
- The artwork-images bucket is public for image viewing. Storage policies restrict uploads to sellers and their own user-id folder.
- This package uses a public table named public.artworks and a Storage bucket named artwork-images. Run the SQL before testing the seller dashboard.
- If you already created a table or bucket with these names but different columns/policies, review the existing setup before running the SQL.
- The WhatsApp recipient in script.js is currently the demo number 254700000000. Change ORDER_WHATSAPP to your actual order-receiving number (digits only, with Kenya country code 254) before using checkout.
- Checkout sends order details through WhatsApp; it does not process card or M-Pesa payments.
- I checked JavaScript syntax and HTML structure, but I cannot run this against your live Supabase project here. If Supabase displays an error, copy the exact error text from the browser console or dashboard so the specific table/policy issue can be corrected.
