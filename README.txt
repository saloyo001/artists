# Kenyan Artisans Marketplace

A handmade-art marketplace for discovering, selling and buying work made by Kenyan artisans.

This README is based on the code and project details shared in our conversations. It documents the storefront, authentication, customer order history, seller listings, seller verification, administrator review and manual direct-payment workflow.

> **Scope note:** Some pages and SQL migrations were discussed or supplied as separate files, but their complete source code was not pasted into the conversation. Their behaviour is documented from the available project context. Check the actual files in your VS Code project if their names or contents differ.

## 1. What the website does

Kenyan Artisans has three account roles:

| Role | What the person can do |
|---|---|
| Customer | Create an account, browse artwork, save favourites, add products to a basket, place orders and view purchase history. |
| Seller | Create an account, publish artwork, manage listings, view sales information and optionally apply for verification. |
| Administrator | Review seller verification applications and approve, reject or request changes. |

Seller verification is optional for using the seller dashboard. In the current design, a seller must be approved before their direct-to-seller payment details are shown to customers.

## 2. Technology used

- **HTML** builds the pages and forms.
- **CSS** controls colours, layout, spacing and responsive design.
- **JavaScript** makes the website interactive.
- **Supabase** provides authentication, the database and file storage.
- **SQL** creates database tables, functions, constraints and security policies.
- **WhatsApp** receives the order message prepared at checkout.

The site uses the Supabase JavaScript client from a CDN. The code shared so far does not show a `package.json` or a Node.js backend, so do not assume that `npm start` is the correct way to run this project.

## 3. Main project files

Your project may contain more files, but these are the main files discussed:

| File | Purpose |
|---|---|
| `index.html` | Main marketplace homepage and product catalogue. |
| `style.css` | Shared visual styling. |
| `script.js` | Storefront behaviour: products, search, categories, favourites, basket, checkout and WhatsApp order message. |
| `auth.js` | Supabase connection, login, signup, logout, navigation and password reset. |
| `login.html` | Login form. |
| `signup.html` | Registration form. |
| `forgot-password.html` | Password-reset email form, if included. |
| `reset-password.html` | Form for setting a new password, if included. |
| `seller.html` | Seller dashboard and artwork publishing. |
| `seller-verification.html` | Seller identity and payment-method application form. |
| `seller-verification-admin.html` | Administrator page for reviewing seller applications. |
| `customer.html` | Customer dashboard and purchase history. |
| `customer-dashboard.js` | Customer order-history logic, if kept as a separate file. |
| `*.sql` | Database setup and migration scripts. |

Keep files in the locations expected by their HTML links. For example, if a page contains `src="auth.js"`, the browser expects `auth.js` at that relative path.

## 4. How the website fits together

A typical page loads in this order:

1. The browser reads the HTML.
2. The browser loads the CSS to style the page.
3. The Supabase JavaScript library loads.
4. `auth.js` creates or returns the Supabase connection.
5. The page's own JavaScript uses that connection when it needs to read or save data.

A common script order is:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script defer src="auth.js"></script>
<script defer src="script.js"></script>
```

Use the scripts that belong on that page. The customer dashboard needs its dashboard code, while the storefront needs `script.js`.

### Important beginner terms

- **DOM:** The browser's live representation of the HTML page. JavaScript uses it to find and change page elements.
- **Function:** A named set of instructions that performs a task.
- **Array:** A list of values.
- **Object:** A group of related values, such as an artwork's title and price.
- **Event listener:** Code that waits for an action, such as a click or form submission.
- **`async` / `await`:** JavaScript features used when an operation takes time, such as contacting Supabase.
- **`localStorage`:** Small storage inside one browser. It is used for convenience data such as a basket or favourites; it is not the shared marketplace database.
- **RPC:** A call from JavaScript to a function stored in Supabase.

## 5. Supabase connection and authentication

### Supabase configuration

The shared `auth.js` contains two configuration values:

```javascript
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";
```

The actual project URL and publishable key are configured in the local `auth.js`; they are intentionally not repeated in this README.

The `getSupabaseClient()` function creates the Supabase client once and reuses it. This avoids creating a new connection object every time another function needs Supabase.

**Security:** A Supabase publishable key is intended for browser use, but it is not a replacement for database security. Row Level Security (RLS) must be correctly enabled and configured. Never put a Supabase `service_role` or other secret key in browser JavaScript.

### Login

The login code:

1. Finds the login form.
2. Stops the browser from submitting the form in the traditional way.
3. Reads the email and password.
4. Calls Supabase `signInWithPassword()`.
5. Reads the user's role from the `profiles` table.
6. Redirects the user according to that role.

The shared login code currently handles `seller` and `customer`. It does **not** yet show an administrator redirect. To send an administrator to the review page, add this branch before the final invalid-role `else` in the login role check:

```javascript
} else if (profile.role === "admin") {
    window.location.href = "seller-verification-admin.html";
} else {
    throw new Error("Your account has an invalid role.");
}
```

The same administrator case should be added to `updateAuthNavigation()` if the main navigation should show an administrator dashboard link.

Public signup should continue to allow only `seller` and `customer`. Do not add `admin` to the public signup choices. Administrator access should be assigned manually to a trusted account.

### Signup

The signup code:

1. Reads the name, email, password, account role and seller username.
2. Checks that the chosen role is `seller` or `customer`.
3. Requires a username for sellers.
4. Calls Supabase `signUp()`.
5. Includes the user's full name, role and seller username in signup metadata.
6. If email confirmation is enabled, asks the user to check their email.
7. If a session is immediately available, reads the profile role and redirects to the appropriate dashboard.

### Logout and navigation

`updateAuthNavigation()` checks the current Supabase session. If there is no session, it shows login and signup links. If a user is logged in, it changes the login link into a logout action and displays the relevant dashboard link for a seller or customer.

The code listens for Supabase authentication changes so the navigation can refresh after login or logout.

### Forgot and reset password

The forgot-password form calls `resetPasswordForEmail()` and sends a reset link to the supplied email address. The redirect points to `reset-password.html`.

The reset page checks that the user arrived with a valid recovery session, checks that the two password entries match, and calls `updateUser()` to save the new password. The code then signs out the recovery session so the person can log in again using the new password.

Make sure the redirect URLs used by the pages are allowed in the Supabase project's Authentication URL configuration.

## 6. Storefront: `script.js`

The main storefront script controls the customer-facing shopping experience.

### Finding HTML elements

At the start of the script:

```javascript
const $ = (id) => document.getElementById(id);
```

This creates a shortcut. Instead of writing `document.getElementById("product-grid")`, the script can write `$("product-grid")`.

### Browser storage

The script uses these storage keys:

| Key | What it remembers |
|---|---|
| `kenyanArtisansProducts` | Older/local product data. |
| `kenyanArtisansCart` | The shopping basket. |
| `kenyanArtisansFavourites` | Saved/favourite product IDs. |
| `kenyanArtisansCustomer` | Previously entered customer name, phone and town. |
| `kenyanArtisansTheme` | Light or dark theme preference. |

`readStorage()` safely reads saved browser data. `writeStorage()` converts JavaScript data to JSON text and saves it in `localStorage`.

The shared product catalogue is loaded from Supabase. The database is treated as the source of truth for published artwork.

### Product catalogue

`loadPublicArtworks()` reads the `artworks` table and selects published records only. It sorts them with the newest artwork first.

The returned database records are converted into the product format used by the storefront. For example, the database's `title` is mapped to the storefront's `name`.

### Search and categories

`getVisibleProducts()` filters products by the selected category, the text entered in the search box, and whether the customer is viewing favourites only.

`renderProducts()` puts the matching product cards into the product grid and updates the result count and empty-state message.

### Product cards and favourites

`productCard()` creates the HTML for an artwork card. It includes its image, name, category, maker, price, location, favourite button and quick-add button.

`toggleFavourite()` adds or removes a product ID from the favourites `Set`, saves the list in browser storage and refreshes the product display.

Favourites are currently stored in the visitor's browser, rather than in a Supabase customer-favourites table.

### Shopping basket

The basket is held in the `cart` array and saved in `localStorage`.

Important functions:

- `addToCart()` adds an item or increases its quantity.
- `getCartProduct()` finds the current product record for a basket item.
- `saveCart()` saves the basket and refreshes the basket count and display.
- `renderCart()` displays basket items and calculates the current basket total.
- `cartLines()` combines each basket entry with its matching product.
- `cartTotalAmount()` adds up each item's price multiplied by its quantity.

The script keeps a small product snapshot in the basket so it can display basket information while products are loading. Once Supabase confirms the current catalogue, old basket items that are no longer published are removed from the display.

### Artwork details and modals

`showProduct()` fills the product-details modal with the selected artwork's information.

`openModal()` opens a modal and prevents the page behind it from scrolling. `closeModals()` closes open modals and restores scrolling.

The script also supports closing a modal by clicking its backdrop or pressing Escape.

### Checkout

`openCheckout()` displays the basket summary, calculates the total, and fills in previously saved customer details when available.

Before checkout, the script refreshes the published artwork list. This helps prevent a customer from ordering an item that has been removed or is no longer published.

When the customer submits checkout:

1. The script reads the customer's name, phone, delivery town and optional note.
2. It checks the required fields and validates a Kenyan phone number.
3. It checks that the basket contains published Supabase artwork, not only local/demo products.
4. It opens a temporary blank browser tab during the click action so the later WhatsApp page is less likely to be blocked by the browser.
5. It calls the Supabase `create_marketplace_order` function.
6. Supabase records the order and returns the order reference, total and item information.
7. The script looks up approved seller payment instructions.
8. It prepares an order message and opens WhatsApp.

### Direct seller payments

The checkout code supports these seller payment methods:

- M-PESA Send Money.
- Bank transfer.
- M-PESA Buy Goods (Till).
- M-PESA Paybill.

For orders containing multiple sellers, the script totals the items for each seller and prepares separate payment instructions and amounts.

Direct seller payment instructions are used only when **every seller in the order** has approved verification and complete payment details. If not, the code uses the configured marketplace Paybill fallback, or tells the customer not to send money until correct instructions are confirmed.

The script contains this placeholder:

```javascript
const MPESA_PAYBILL_NUMBER = "REPLACE_WITH_YOUR_LIVE_PAYBILL_NUMBER";
```

Replace it only with the real marketplace Paybill number if the marketplace fallback is going to be used. Do not leave the placeholder and assume it is a working Paybill.

`ORDER_WHATSAPP` identifies the WhatsApp destination used for the order message. Keep it configured with the correct business WhatsApp number in international format.

**Payment limitation:** The direct seller instructions are manual payment instructions. The code shown does not automatically contact Safaricom or a bank to verify a Send Money, Till, Paybill or bank transfer. A WhatsApp message being sent does not prove that payment was received. Keep the order pending until payment is checked through a trusted business process.

### Other storefront features

The script also includes a light/dark theme toggle, search shortcut, mobile navigation menu, toast messages, a cart-image animation, a back-to-top button with a scroll-progress indicator, section reveal animations, a dynamic footer year, and a storage event listener to refresh data when another browser tab changes shared `localStorage` values.

## 7. Customer dashboard

The customer dashboard JavaScript reads these HTML elements:

- `orders-list`
- `dashboard-message`
- `total-orders`
- `total-spent`

`loadCustomerOrders()` gets the Supabase client, checks whether a user session exists, sends a visitor without a session to `login.html`, reads the customer's orders from the `orders` table, includes related `order_items`, filters records using the logged-in user's ID in `buyer_id`, sorts orders newest first, and passes the results to `displayOrders()`.

`displayOrders()` clears the old list, counts the orders, calculates the amount spent, and builds an order card for every order.

The amount spent is calculated from orders whose `payment_status` is exactly `paid`. Pending or unpaid orders still appear in the order list but are not included in the paid total.

Each order card displays the order ID, date, order status, payment status, items, quantities, unit prices, subtotals and order total.

If there are no orders, the dashboard displays a link back to the shop.

The dashboard code logs diagnostic messages to the browser console. These are useful during development. Review them before launching publicly and remove unnecessary debug logging if desired.

## 8. Seller dashboard and artwork publishing

The seller dashboard is `seller.html`.

The seller dashboard discussed for this project checks the logged-in session and the user's profile role before showing seller tools. The seller form collects artwork details such as title, price, category, maker, location, image and description.

Artwork images are stored in Supabase Storage. The artwork record is stored in the `artworks` table and links to the image using its URL and storage path.

The public storefront reads published records from `artworks`, so a seller's published listing can appear on the homepage.

Seller verification is separate from the ability to use the seller dashboard. The intended rule is that a seller may use the dashboard without verification, but approval is required before direct-to-seller payment details are made available to customers.

## 9. Seller identity and payment verification

`seller-verification.html` is the seller application page.

The seller provides artisan details and identity documents. The identity-document workflow discussed for the project accepts image files and PDFs, with a maximum file size of 5 MB per file. The documents are stored in a private Supabase Storage bucket named `seller-id-documents`; the database stores document paths rather than making the documents public.

The administrator page can create short-lived signed links to view documents. The discussed links expire after five minutes.

The seller also selects one payment method and enters the corresponding details:

| Method | Details collected |
|---|---|
| Send Money | Recipient phone number. |
| Bank | Bank name, account holder, account number and optional branch. |
| Buy Goods | Till number. |
| Paybill | Business number and account/reference number. |

The seller application starts with a `pending` status. The administrator can approve it, reject it or request changes.

Do not ask sellers to enter their M-PESA PIN, bank password, one-time password (OTP) or other login credentials. The form should collect only the payment destination details needed for a customer to make a payment.

Identity documents are sensitive personal information. Keep the Storage bucket private, restrict access to trusted administrators, and establish a retention/deletion policy before accepting real customers' documents.

## 10. Administrator review

`seller-verification-admin.html` is the administrator review page.

The administrator page checks the signed-in user's profile role. It should only allow an account with `role = 'admin'` to review applications.

It loads seller verification records and displays application information, payment method and identity-document links. The administrator can approve an application, reject it, request changes, and add an administrator note.

The review action calls the Supabase function `admin_review_seller_verification`. The database function must check the caller's administrator role; a front-end role check alone is not sufficient security.

The account's role is stored in `profiles.role`. The project changed the role constraint to allow:

```sql
CHECK (role IN ('customer', 'seller', 'admin'))
```

Assign administrator access only to trusted accounts. Do not add `admin` as a public signup option.

## 11. Database tables and their purpose

The project has used these Supabase tables:

| Table | Purpose |
|---|---|
| `profiles` | User profile information and role (`seller`, `customer` or `admin`). |
| `artworks` | Published artwork details and the seller who owns each listing. |
| `products` | An earlier or additional product table referenced by the order schema. Confirm whether it is still used by the current checkout. |
| `orders` | One record for each customer order, including buyer, amount, order status and payment status. |
| `order_items` | Individual items inside each order, including seller, quantity and unit price. |
| `seller_verifications` | Seller application, identity-document paths, review status, administrator note and payment destination details. |
| `seller_notification_settings` | Seller WhatsApp notification settings, including the seller's notification phone number. |

### Important relationships

- `profiles.id` identifies a user.
- `artworks.seller_id` identifies the seller who published the artwork.
- `orders.buyer_id` identifies the customer who placed the order.
- `order_items.order_id` connects an item to its order.
- `order_items.seller_id` identifies the seller associated with that item.
- `seller_verifications.seller_id` connects a verification application to a seller.

The current checkout uses artwork IDs and the `create_marketplace_order` function. The `products` table exists in the previously discussed schema, but the current storefront loads from `artworks`. Check the database before removing or changing either table.

## 12. Important Supabase functions

The checkout and verification code relies on these database functions discussed or used in this project:

| Function | Purpose |
|---|---|
| `create_marketplace_order(...)` | Validates selected published artworks and creates the order and its order items. |
| `submit_seller_verification(...)` | Validates and saves a seller's verification application. |
| `admin_review_seller_verification(...)` | Allows an administrator to approve, reject or request changes to an application. |
| `get_approved_seller_payment_details(...)` | Returns payment destination details for an approved seller, for use in checkout instructions. |

The JavaScript calls these with Supabase `.rpc()`.

The database functions should validate inputs and permissions themselves. Do not rely only on checks in the browser.

## 13. Storage buckets

| Bucket | Purpose | Access |
|---|---|---|
| `artwork-images` | Artwork photos displayed in the marketplace. | Public image viewing may be used for published artwork, with controlled upload permissions. |
| `seller-id-documents` | Seller identity documents. | Private; access must be restricted and controlled. |

Never make seller identity documents publicly accessible.

## 14. Running the website locally

1. Open the Kenyan Artisans project folder in VS Code.
2. Check that the HTML, CSS and JavaScript files are in the correct locations.
3. Make sure the Supabase CDN script loads before `auth.js`.
4. Make sure the Supabase URL and publishable key in `auth.js` are correct.
5. Start the local web server from the project folder.

One simple option is Python's built-in local server:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

To open the administrator page directly:

```text
http://localhost:3000/seller-verification-admin.html
```

Keep the terminal running while you use the site. If port 3000 is already in use, use the port your existing development server provides.

Do not open the pages by double-clicking the HTML files if the project needs authentication, JavaScript modules or database requests. Use an HTTP local server.

## 15. Database setup and migrations

The project has used separate SQL setup and migration scripts for the marketplace, seller verification, identity documents and seller payment methods.

The discussed verification-related files include:

- `seller_verification_setup.sql`
- `seller_id_verification_migration.sql`
- `seller_payment_method_migration.sql`

There were also earlier marketplace/order setup scripts.

**Do not blindly rerun every SQL file.** Some setup files create policies or database objects that may already exist. A migration should be run against the database state it was written for. Back up important data and check the SQL before running it again.

The seller verification setup, ID-document migration and payment-method migration extend the existing project. They are not a replacement for the base marketplace tables and checkout function.

After changing database functions or table structure, the SQL may ask PostgREST to reload its schema cache. If the website still reports that a column does not exist after a successful migration, check the actual table columns and refresh the Supabase schema as appropriate.

## 16. Testing checklist

### Customer

- [ ] A customer can sign up.
- [ ] A customer can log in.
- [ ] Published artwork appears on the homepage.
- [ ] Search and category filters work.
- [ ] A customer can save and remove favourites.
- [ ] A customer can add and remove basket items.
- [ ] Basket quantities and totals are correct.
- [ ] Checkout rejects invalid details.
- [ ] Checkout rejects demo/local items that do not exist as published Supabase artwork.
- [ ] An order appears in the customer's dashboard.
- [ ] Only paid orders count toward the dashboard's total-spent figure.

### Seller

- [ ] A seller can sign up and log in.
- [ ] A seller can open the seller dashboard.
- [ ] A seller can publish artwork with an image.
- [ ] Published artwork appears on the storefront.
- [ ] A seller can submit a verification application.
- [ ] Identity documents upload to private storage.
- [ ] A seller can submit one of the four supported payment methods.

### Administrator

- [ ] The administrator account has `profiles.role = 'admin'`.
- [ ] The administrator can open the review page.
- [ ] A seller application appears in the review list.
- [ ] The administrator can open the identity-document links.
- [ ] Approve, reject and request-changes actions update the application.
- [ ] A non-admin account cannot use administrator review functions.
- [ ] The login and navigation code has an administrator redirect/link if needed.

### Payments

- [ ] Approved seller details are returned only for approved sellers.
- [ ] The correct amount is calculated for each seller in a multi-seller order.
- [ ] The WhatsApp order message shows the right payment instructions.
- [ ] Incomplete or unapproved seller payment information is not shown as approved instructions.
- [ ] The marketplace Paybill fallback is configured before it is used.
- [ ] Orders are not marked paid just because WhatsApp opened or a customer says they paid.
- [ ] A real payment is checked before the order is treated as paid.

## 17. Known items to check before launch

1. **Administrator login routing:** The `auth.js` code shared in the conversation redirects sellers and customers, but does not yet include the `admin` case. Add the administrator branch described in Section 5 and add an admin dashboard navigation link if required.
2. **Marketplace Paybill placeholder:** `MPESA_PAYBILL_NUMBER` is still a placeholder in the shared `script.js`. Configure a real number only if the marketplace fallback is going to be used.
3. **Manual payment verification:** Direct seller payments are instructions only. There is no automatic transaction confirmation shown in the shared code.
4. **WhatsApp recipient:** Confirm `ORDER_WHATSAPP` is the correct business contact before launch.
5. **Role and database security:** Keep RLS enabled and test with separate customer, seller and administrator accounts.
6. **Customer favourites:** Favourites are stored in browser `localStorage`, so they do not automatically follow a customer to another device.
7. **Browser storage:** The basket and saved customer details are local to the browser. Do not store passwords, identity documents or other secrets in `localStorage`.
8. **Identity document handling:** Keep the ID bucket private, restrict administrator access, and delete documents when they are no longer legitimately needed.
9. **Current source files:** Back up the working project before replacing files with commented or updated versions. The current project folder is the source of truth.

## 18. Troubleshooting

### The browser says `Cannot GET /signup.html`

The server cannot find the file at the requested path. Check that `signup.html` exists in the folder being served and that the link spelling is correct.

### The browser cannot connect to `localhost:3000`

The local server may not be running, or it may be using another port. Start the server from the project folder and open the matching address.

### Supabase says a column does not exist

The page is requesting a column that is missing from the database, or the schema cache has not refreshed. Check the table's actual columns and run the correct migration rather than recreating the table.

### Supabase reports a UUID error

A UUID column needs a real user ID, not placeholder text such as `YOUR_ADMIN_USER_UUID`. Copy the actual user UID from Supabase Authentication → Users.

### Supabase reports a role check constraint error

The `profiles_role_check` constraint may not allow the role being saved. The intended project roles are `customer`, `seller` and `admin`. Check the existing constraint and existing role values before changing it.

### The administrator page says access denied

Check that the logged-in account's matching row in `public.profiles` has `role = 'admin'`. Also check that the administrator database function and RLS policies are installed.

### An order cannot be recorded

Check that the basket contains published Supabase artwork, that the customer is logged in if required by the database function, and that `create_marketplace_order` exists and accepts the arguments sent by the checkout script.

## 19. Privacy and security reminders

- Never put a Supabase secret/service-role key in browser code.
- Keep RLS enabled on private tables.
- Check user roles inside database functions that perform privileged actions.
- Do not expose seller identity documents through public URLs.
- Do not collect M-PESA PINs, bank passwords or OTPs.
- Show direct payment details only for approved sellers.
- Do not mark an order as paid without checking the actual transaction.
- Limit administrator access to trusted people.
- Keep backups before database migrations or code replacement.

## 20. Project learning path

For someone learning how this project works, study the files in this order:

1. `index.html` — learn the page structure.
2. `style.css` — learn how the page is styled.
3. `script.js` — learn products, search, basket and checkout.
4. `auth.js` — learn login, signup, sessions and password resets.
5. `customer.html` and its dashboard JavaScript — learn how orders are displayed.
6. `seller.html` — learn how sellers publish artwork.
7. `seller-verification.html` — learn forms, document uploads and RPC calls.
8. `seller-verification-admin.html` — learn administrator review.
9. The SQL migrations — learn how the database stores and protects information.

The goal is to understand the journey of information:

**HTML form → JavaScript → Supabase function → database/storage → JavaScript response → page update.**

---

**Project:** Kenyan Artisans  
**Purpose:** A marketplace for handmade Kenyan art and artisan products  
**Currency displayed:** Kenyan Shillings (KSh / KES)  
**Payment workflow documented:** Manual seller payment instructions prepared in a WhatsApp order message; automatic payment verification is not included in the shared checkout code.