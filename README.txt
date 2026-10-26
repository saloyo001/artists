KENYAN ARTISANS — LOGIN AND SIGN-UP STARTER

Files:
- login.html       Login page
- signup.html      Account creation page
- auth.js          Connects both forms to Supabase
- auth-style.css   Styling for the forms

IMPORTANT:
These pages require your existing style.css and index.html to be in the same folder.
This is a starter front end. It does not yet restrict marketplace pages or connect artist listings to a database.

SETUP:
1. Open your Supabase project dashboard.
2. Find the project URL and publishable key (sometimes labelled anon/public key) in the project's API/connect settings.
3. Open auth.js in VS Code.
4. Replace PASTE_YOUR_PROJECT_URL_HERE with your project URL.
5. Replace PASTE_YOUR_PUBLISHABLE_KEY_HERE with your publishable key.
6. Save the file.
7. In Supabase, open Authentication settings and check whether email confirmation is enabled.
8. If email confirmation is enabled, add your local development URL to Authentication > URL Configuration > Redirect URLs. For example, if using VS Code Live Server, add the exact local URL pattern it uses, such as http://127.0.0.1:5500/**. Use the actual port shown in your browser.
9. Open the folder with VS Code and run it with Live Server (or another local web server). Do not rely on opening the files directly as file:// URLs.
10. Test sign-up first, confirm the email if requested, then test login.

SECURITY:
- The publishable/anon key is designed to be used in a browser, but database tables still need Row Level Security (RLS) and correct policies.
- NEVER put a Supabase service_role key or secret key in auth.js or any browser file.
- Do not collect or store bank details or payment card numbers yourself.
- Payment integration should be handled separately through a payment provider and a secure server-side process.
