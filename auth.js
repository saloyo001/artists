// Supabase project details used by the website.
const SUPABASE_URL = "https://dpkttivsoqfoumahieqx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lRBZmxGIQ_MdH371SSVwGg_xvCGeSyq";

// Keep one Supabase connection and reuse it on this page.
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
            } else if (profile.role === "admin") {
                // Administrators go straight to the seller-application review page.
                window.location.href = "seller-verification-admin.html";
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
        const agreementCheckbox = document.querySelector("#artisan-agreement-accepted");

        message.textContent = "Creating your account...";

        try {
            // Public registration is only for sellers and customers.
            if (!["seller", "customer"].includes(role)) {
                throw new Error("Please select a valid account type.");
            }

            if (role === "seller" && !username) {
                throw new Error("Please enter your seller username.");
            }

            // Only sellers/artisans must accept the Artisan Participation Agreement.
            if (role === "seller" && (!agreementCheckbox || !agreementCheckbox.checked)) {
                throw new Error("Please open, read, and accept the Artisan Participation Agreement to create a seller account.");
            }

            const client = getSupabaseClient();

            // Keep the agreement version with the signup record so the accepted
            // version can be identified later. The SQL trigger records the server time.
            const agreementVersion = "2026-10-30-v1";

            const signupMetadata = {
                full_name: name,
                role: role,
                username: role === "seller" ? username : null,
                artisan_agreement_accepted: role === "seller",
                artisan_agreement_version: role === "seller" ? agreementVersion : null
            };

            const { data, error } = await client.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo:
                        window.location.origin + "/login.html",
                    data: signupMetadata
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
                } else if (profile.role === "admin") {
                    // This is normally not used for public signup, but handles the role safely.
                    window.location.href = "seller-verification-admin.html";
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


// NAVIGATION FOR SELLERS, CUSTOMERS, AND ADMINISTRATORS
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
        } else if (profile.role === "admin") {
            if (dashboardLink) {
                dashboardLink.href = "seller-verification-admin.html";
                dashboardLink.textContent = "Admin Dashboard";
                dashboardLink.hidden = false;
            }
        }

    } catch (error) {
        console.error("Navigation error:", error.message);
    }
}


// Run navigation after the page's HTML has loaded.
document.addEventListener("DOMContentLoaded", function () {
    updateAuthNavigation();
});


// Refresh navigation when login state changes.
getSupabaseClient().auth.onAuthStateChange(function () {
    setTimeout(function () {
        updateAuthNavigation();
    }, 0);
});


// FORGOT PASSWORD: send the password-reset email.
const forgotPasswordForm = document.querySelector("#forgot-password-form");

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const message = document.querySelector("#forgot-password-message");
        const email = document.querySelector("#forgot-email").value.trim();
        const button = forgotPasswordForm.querySelector("button[type='submit']");

        message.textContent = "Sending reset link...";
        button.disabled = true;

        try {
            const client = getSupabaseClient();
            const redirectTo = new URL(
                "reset-password.html",
                window.location.href
            ).href;

            const { error } = await client.auth.resetPasswordForEmail(email, {
                redirectTo: redirectTo
            });

            if (error) {
                throw error;
            }

            message.textContent =
                "If an account exists for that email, a reset link will be sent. Check your inbox and spam folder.";

            forgotPasswordForm.reset();
        } catch (error) {
            message.textContent =
                error.message || "Could not send the reset email. Please try again.";
        } finally {
            button.disabled = false;
        }
    });
}


// RESET PASSWORD: save the new password.
const resetPasswordForm = document.querySelector("#reset-password-form");

if (resetPasswordForm) {
    const message = document.querySelector("#reset-password-message");
    const passwordInput = document.querySelector("#new-password");
    const confirmInput = document.querySelector("#confirm-password");
    const submitButton = resetPasswordForm.querySelector("button[type='submit']");

    let resetSessionReady = false;

    async function checkResetSession() {
        try {
            const client = getSupabaseClient();
            const { data, error } = await client.auth.getSession();

            if (error) {
                throw error;
            }

            resetSessionReady = Boolean(data.session);

            if (!resetSessionReady) {
                message.textContent =
                    "Open this page using the password reset link sent to your email. If the link expired, request a new one.";
                submitButton.disabled = true;
            }
        } catch (error) {
            message.textContent =
                "We couldn't verify your reset link. Please request a new password reset email.";
            submitButton.disabled = true;
        }
    }

    document.addEventListener("DOMContentLoaded", checkResetSession);

    resetPasswordForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        if (password.length < 6) {
            message.textContent =
                "Your password must contain at least 6 characters.";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "The passwords do not match.";
            confirmInput.focus();
            return;
        }

        submitButton.disabled = true;
        message.textContent = "Updating your password...";

        try {
            const client = getSupabaseClient();
            const { data, error: sessionError } =
                await client.auth.getSession();

            if (sessionError) {
                throw sessionError;
            }

            if (!data.session) {
                throw new Error(
                    "Your reset link is missing or has expired. Please request a new one."
                );
            }

            const { error } = await client.auth.updateUser({
                password: password
            });

            if (error) {
                throw error;
            }

            await client.auth.signOut();
            resetPasswordForm.reset();

            message.textContent = "Your password has been updated successfully. ";

            const loginLink = document.createElement("a");
            loginLink.href = "login.html";
            loginLink.textContent = "Log in with your new password";
            message.appendChild(loginLink);
        } catch (error) {
            message.textContent =
                error.message || "Could not update your password. Please try again.";
        } finally {
            submitButton.disabled = false;
        }
    });
}
