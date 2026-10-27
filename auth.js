
const SUPABASE_URL = "https://dpkttivsoqfoumahieqx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lRBZmxGIQ_MdH371SSVwGg_xvCGeSyq";

let supabaseClient = null;

function getSupabaseClient() {
    if (supabaseClient) {
        return supabaseClient;
    }

    if (
        SUPABASE_URL === "PASTE_YOUR_PROJECT_URL_HERE" ||
        SUPABASE_PUBLISHABLE_KEY === "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
    ) {
        throw new Error("Add your Supabase project details first.");
    }

    if (!window.supabase) {
        throw new Error("Supabase has not loaded. Check your script tags.");
    }

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    return supabaseClient;
}


// LOGIN

const loginForm = document.querySelector("#login-form");

if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const message = document.querySelector("#login-message");
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;

        message.textContent = "Logging in...";

        try {
            const client = getSupabaseClient();

            const { data, error } = await client.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                throw error;
            }

            const user = data.user;

            const { data: profile, error: profileError } = await client
                .from("profiles")
                .select("role")
                .eq("id", user.id)
                .single();

            if (profileError || !profile) {
                throw new Error(
                    "Your account role could not be found. Please contact support."
                );
            }

            if (profile.role === "seller") {
                window.location.href = "seller.html";
            } else if (profile.role === "customer") {
                window.location.href = "customer.html";
            } else {
                throw new Error("Your account has an invalid role.");
            }

        } catch (error) {
            message.textContent =
                error.message || "Could not log in. Please try again.";
        }
    });
}


// SIGN UP

const signupForm = document.querySelector("#signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const message = document.querySelector("#signup-message");
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;
        const role = document.querySelector("#role").value;
        const username = document.querySelector("#username").value.trim();

        message.textContent = "Creating your account...";

        try {
            if (!["seller", "customer"].includes(role)) {
                throw new Error("Please select a valid account type.");
            }

            if (role === "seller" && !username) {
                throw new Error("Please enter your seller username.");
            }

            const client = getSupabaseClient();

            const { data, error } = await client.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo:
                        window.location.origin + "/login.html",
                    data: {
                        full_name: name,
                        role: role,
                        username: role === "seller" ? username : null
                    }
                }
            });

            if (error) {
                throw error;
            }

            if (data.session) {
                message.textContent =
                    "Account created! Redirecting to your dashboard...";

                const { data: profile, error: profileError } = await client
                    .from("profiles")
                    .select("role")
                    .eq("id", data.user.id)
                    .single();

                if (profileError || !profile) {
                    message.textContent =
                        "Account created, but your profile is not ready. Please log in after your profile has been set up.";
                    return;
                }

                if (profile.role === "seller") {
                    window.location.href = "seller.html";
                } else if (profile.role === "customer") {
                    window.location.href = "customer.html";
                } else {
                    message.textContent =
                        "Your account was created, but its role is invalid.";
                }

            } else {
                message.textContent =
                    "Account created! Check your email to confirm your account, then log in.";
            }

            signupForm.reset();

        } catch (error) {
            message.textContent =
                error.message || "Could not create your account. Please try again.";
        }
    });
}


// NAVIGATION FOR SELLERS AND CUSTOMERS

async function updateAuthNavigation() {
    const authLink = document.getElementById("auth-link");
    const signupLink = document.getElementById("signup-link");
    const dashboardLink = document.getElementById("dashboard-link");

    if (!authLink) {
        return;
    }

    try {
        const client = getSupabaseClient();

        const { data: { session }, error } =
            await client.auth.getSession();

        if (error) {
            throw error;
        }

        if (!session) {
            authLink.textContent = "Log in";
            authLink.href = "login.html";
            authLink.onclick = null;

            if (signupLink) {
                signupLink.hidden = false;
            }

            if (dashboardLink) {
                dashboardLink.hidden = true;
            }

            return;
        }

        authLink.textContent = "Log out";
        authLink.href = "#";

        authLink.onclick = async function (event) {
            event.preventDefault();

            authLink.textContent = "Logging out...";

            const { error } = await client.auth.signOut();

            if (error) {
                authLink.textContent = "Log out";
                alert("Could not log out. Please try again.");
                return;
            }

            window.location.href = "index.html";
        };

        if (signupLink) {
            signupLink.hidden = true;
        }

        if (dashboardLink) {
            dashboardLink.hidden = true;
        }

        const { data: profile, error: profileError } = await client
            .from("profiles")
            .select("role")
            .eq("id", session.user.id)
            .single();

        if (profileError || !profile) {
            console.error("Could not load the user's role.");
            return;
        }

        if (profile.role === "seller") {
            if (dashboardLink) {
                dashboardLink.href = "seller.html";
                dashboardLink.textContent = "Seller Dashboard";
                dashboardLink.hidden = false;
            }
        } else if (profile.role === "customer") {
            if (dashboardLink) {
                dashboardLink.href = "customer.html";
                dashboardLink.textContent = "My Dashboard";
                dashboardLink.hidden = false;
            }
        }

    } catch (error) {
        console.error("Navigation error:", error.message);
    }
}


// RUN THE NAVIGATION CHECK

document.addEventListener("DOMContentLoaded", function () {
    updateAuthNavigation();
});


// UPDATE WHEN LOGIN STATE CHANGES

getSupabaseClient().auth.onAuthStateChange(function () {
    setTimeout(function () {
        updateAuthNavigation();
    }, 0);
});
