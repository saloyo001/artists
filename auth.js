// 1. Replace these two placeholders with values from your Supabase project.
const SUPABASE_URL = "https://dpkttivsoqfoumahieqx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lRBZmxGIQ_MdH371SSVwGg_xvCGeSyq";

// The URL and publishable key are intended for browser use.
// Never put a service_role/secret key in this file.
let supabaseClient = null;

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;

  if (
  SUPABASE_URL === "PASTE_YOUR_PROJECT_URL_HERE" ||
  SUPABASE_PUBLISHABLE_KEY === "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
) {
  throw new Error("Add your Supabase project URL and publishable key to auth.js first.");
}
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  return supabaseClient;
}

const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

if (loginForm) {
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = document.querySelector("#login-message");
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    message.textContent = "Logging in...";

    try {
      const client = getSupabaseClient();
      const { error } = await client.auth.signInWithPassword({ email, password });

      if (error) throw error;

      message.textContent = "Login successful! Opening the marketplace...";
      window.location.href = "index.html";
    } catch (error) {
      message.textContent = error.message || "Could not log in. Please try again.";
    }
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = document.querySelector("#signup-message");
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    message.textContent = "Creating your account...";

    try {
      const client = getSupabaseClient();
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: window.location.origin + "/login.html"
        }
      });

      if (error) throw error;

      if (data.session) {
        message.textContent = "Account created! You can now log in.";
      } else {
        message.textContent = "Account created. Check your email for a confirmation link, then log in.";
      }
      signupForm.reset();
    } catch (error) {
      message.textContent = error.message || "Could not create your account. Please try again.";
    }
  });
}
