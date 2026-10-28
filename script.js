// Kenyan Artisans marketplace.
// Artwork publishing is handled in seller.html.

const $ = (id) => document.getElementById(id);

const PRODUCT_KEY = "kenyanArtisansProducts";
const CART_KEY = "kenyanArtisansCart";
const FAV_KEY = "kenyanArtisansFavourites";
const CUSTOMER_KEY = "kenyanArtisansCustomer";
const THEME_KEY = "kenyanArtisansTheme";

const ORDER_WHATSAPP = "254787424047";

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

let localProducts = readStorage(PRODUCT_KEY, []);
if (!Array.isArray(localProducts)) localProducts = [];

let remoteProducts = [];
let remoteProductsLoaded = false;
let products = [...localProducts];

let cart = readStorage(CART_KEY, []);
if (!Array.isArray(cart)) cart = [];

const savedFavourites = readStorage(FAV_KEY, []);
let favourites = new Set(
  Array.isArray(savedFavourites) ? savedFavourites.map(String) : []
);

let selectedCategory = "All";
let selectedProductId = null;
let favouritesOnly = false;
let toastTimer;

const productGrid = $("product-grid");
const searchInput = $("product-search");
const categoryFilters = $("category-filters");
const resultCount = $("result-count");
const emptyState = $("empty-state");
const cartCount = $("cart-count");
const cartItems = $("cart-items");
const cartTotal = $("cart-total");
const toastElement = $("toast");
const wishlistGrid = $("wishlist-grid");
const wishlistTotal = $("wishlist-total");
const wishlistEmpty = $("wishlist-empty");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getProductName(product) {
  return product.name || product.title || "Untitled artwork";
}

function formatPrice(price) {
  const amount = Number(price) || 0;

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount).replace("KES", "KSh");
}

function showToast(message) {
  if (!toastElement) return;

  toastElement.textContent = message;
  toastElement.classList.add("show");

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2600);
}

function openModal(id) {
  const modal = $(id);

  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.classList.add("hidden");
  });

  document.body.style.overflow = "";
}

function saveProducts() {
  return writeStorage(PRODUCT_KEY, products);
}

function canonicalProductId(value) {
  if (value && typeof value === "object") {
    if (
      value.databaseId !== undefined &&
      value.databaseId !== null &&
      value.databaseId !== ""
    ) {
      return String(value.databaseId);
    }

    value = value.id;
  }

  const id = String(value ?? "");

  return id.startsWith("remote-")
    ? id.slice("remote-".length)
    : id;
}

function getProduct(productId) {
  const id = String(productId ?? "");
  const canonicalId = canonicalProductId(id);

  return products.find((product) =>
    String(product.id ?? "") === id ||
    String(product.databaseId ?? "") === id ||
    canonicalProductId(product) === canonicalId
  );
}

function makeCartSnapshot(product) {
  const image = String(product.image || "");

  return {
    id: String(product.id ?? ""),
    databaseId: product.databaseId || null,
    name: getProductName(product),
    category: product.category || "Other",
    price: Number(product.price || 0),
    maker: product.maker || "Kenyan artisan",
    location: product.location || "Kenya",
    description: product.description || "",
    image: image.startsWith("data:") ? "" : image
  };
}

function getCartProduct(item) {
  if (!item) return null;

  const snapshot = item.product || null;

  const liveProduct =
    getProduct(item.id) ||
    getProduct(item.databaseId) ||
    getProduct(snapshot?.id) ||
    getProduct(snapshot?.databaseId);

  // Always use the current database record when it exists.
  if (liveProduct) return liveProduct;

  // Once Supabase has confirmed the current catalogue,
  // do not keep deleted artwork from an old cart snapshot.
  if (remoteProductsVerified) return null;

  // Keep old cart details while the first database request loads.
  return snapshot;
}

function saveCart() {
  cart = cart.map((item) => {
    const product =
      getProduct(item.id) ||
      getProduct(item.databaseId) ||
      getProduct(item.product?.id) ||
      getProduct(item.product?.databaseId) ||
      item.product;

    if (!product) {
      return {
        ...item,
        quantity: Math.max(1, Number(item.quantity || 1))
      };
    }

    return {
      ...item,
      id: String(product.id ?? item.id),
      quantity: Math.max(1, Number(item.quantity || 1)),
      product: makeCartSnapshot(product)
    };
  });

  if (remoteProductsLoaded) {
    cart = cart.filter((item) => getCartProduct(item));
  }

  writeStorage(CART_KEY, cart);

  if (cartCount) {
    cartCount.textContent = cart.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0
    );
  }

  renderCart();
}

function saveFavourites() {
  writeStorage(FAV_KEY, [...favourites]);
}

function productCard(product, saved = false) {
  const id = escapeHtml(product.id);
  const name = getProductName(product);
  const image = escapeHtml(product.image || "");
  const category = escapeHtml(product.category || "Other");
  const maker = escapeHtml(product.maker || "Kenyan artisan");
  const location = escapeHtml(
    String(product.location || "Kenya").split(",")[0]
  );

  const pressed = favourites.has(String(product.id));

  return `
    <article
      class="product-card"
      data-product-id="${id}"
      tabindex="0"
      aria-label="View ${escapeHtml(name)}"
    >
      <div class="product-image-wrap">
        <img
          src="${image}"
          alt="${escapeHtml(name)}"
          loading="lazy"
        >

        <span class="product-tag">
          ${saved ? "SAVED" : "ARTIST LISTING"}
        </span>

        <button
          type="button"
          class="wishlist-toggle${pressed ? " restored" : ""}"
          data-wishlist="${id}"
          aria-label="${pressed ? "Remove" : "Add"} ${escapeHtml(name)} ${pressed ? "from" : "to"} favourites"
          aria-pressed="${pressed}"
        >${pressed ? "♥" : "♡"}</button>

        <button
          type="button"
          class="quick-add"
          data-add="${id}"
          aria-label="Add ${escapeHtml(name)} to cart"
        >+</button>
      </div>

      <div class="product-info">
        <span class="product-category">${category}</span>
        <h3>${escapeHtml(name)}</h3>
        <span class="product-maker">By ${maker}</span>

        <div class="product-price-row">
          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>
          <span class="product-location">${location}</span>
        </div>
      </div>
    </article>
  `;
}

function getVisibleProducts() {
  const term = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  return products.filter((product) => {
    const name = getProductName(product);
    const category = String(product.category || "Other");
    const maker = String(product.maker || "");
    const location = String(product.location || "");

    const matchesCategory =
      selectedCategory === "All" ||
      category === selectedCategory;

    const text = `
      ${name}
      ${category}
      ${maker}
      ${location}
      ${product.description || ""}
    `.toLowerCase();

    const matchesSearch = text.includes(term);

    const matchesFavourite =
      !favouritesOnly ||
      favourites.has(String(product.id));

    return matchesCategory && matchesSearch && matchesFavourite;
  });
}

function renderWishlist() {
  const saved = products.filter((product) =>
    favourites.has(String(product.id))
  );

  if (wishlistTotal) {
    wishlistTotal.textContent =
      `${saved.length} saved ${saved.length === 1 ? "piece" : "pieces"}`;
  }

  if (wishlistEmpty) {
    wishlistEmpty.classList.toggle("hidden", saved.length > 0);
  }

  if (wishlistGrid) {
    wishlistGrid.innerHTML = saved
      .map((product) => productCard(product, true))
      .join("");
  }

  const badge = document.querySelector(".fav-badge");

  if (badge) {
    badge.textContent = favourites.size;
    badge.classList.toggle("has-items", favourites.size > 0);
  }
}

function renderProducts() {
  if (!productGrid) return;

  const visibleProducts = getVisibleProducts();

  productGrid.innerHTML = visibleProducts
    .map((product) => productCard(product))
    .join("");

  if (resultCount) {
    resultCount.textContent =
      `${visibleProducts.length} ${visibleProducts.length === 1 ? "piece" : "pieces"} to discover`;
  }

  if (emptyState) {
    if (products.length === 0) {
      emptyState.textContent =
        "No artwork has been published yet. Sellers can add pieces from the Seller Dashboard.";
    } else if (favouritesOnly && visibleProducts.length === 0) {
      emptyState.textContent =
        "No favourites here yet. Tap the heart on artwork you love.";
    } else {
      emptyState.textContent =
        "No artwork matches that search. Try another word or category.";
    }

    emptyState.classList.toggle("hidden", visibleProducts.length > 0);
  }

  renderWishlist();
}

function renderCart() {
  if (!cartItems || !cartTotal) return;

  const visibleItems = cart
    .map((item) => ({
      item,
      product: getCartProduct(item)
    }))
    .filter((line) => line.product);

  if (visibleItems.length === 0) {
    cartItems.innerHTML =
      cart.length && !remoteProductsLoaded
        ? '<p class="empty-cart">Loading your basket…</p>'
        : '<p class="empty-cart">Your basket is waiting for something special.</p>';

    cartTotal.textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = visibleItems.map(({ item, product }) => `
    <div class="cart-row">
      <img src="${escapeHtml(product.image || "")}" alt="">

      <div>
        <strong>${escapeHtml(getProductName(product))}</strong>
        <small>
          ${Number(item.quantity || 1)} × ${formatPrice(product.price)}
        </small>
      </div>

      <button
        type="button"
        class="remove-item"
        data-remove="${escapeHtml(product.id)}"
      >Remove</button>
    </div>
  `).join("");

  const total = visibleItems.reduce(
    (sum, { item, product }) =>
      sum + Number(product.price || 0) * Number(item.quantity || 1),
    0
  );

  cartTotal.textContent = formatPrice(total);
}

function addToCart(productId) {
  const product = getProduct(productId);

  if (!product) {
    showToast("This artwork is still loading. Please try again.");
    return false;
  }

  const targetKey = canonicalProductId(product);

  const existing = cart.find((item) => {
    const itemProduct =
      item.product ||
      getProduct(item.id) ||
      getProduct(item.databaseId);

    return canonicalProductId(
      itemProduct || item.databaseId || item.id
    ) === targetKey;
  });

  if (existing) {
    existing.id = String(product.id);
    existing.quantity =
      Math.max(1, Number(existing.quantity || 1)) + 1;
    existing.product = makeCartSnapshot(product);
  } else {
    cart.push({
      id: String(product.id),
      quantity: 1,
      product: makeCartSnapshot(product)
    });
  }

  saveCart();
  showToast(`${getProductName(product)} added to your basket.`);

  return true;
}

function showProduct(productId) {
  const product = getProduct(productId);

  if (!product) return;

  selectedProductId = product.id;

  if ($("modal-image")) {
    $("modal-image").src = product.image || "";
    $("modal-image").alt = getProductName(product);
  }

  if ($("modal-category")) {
    $("modal-category").textContent = product.category || "Other";
  }

  if ($("modal-title")) {
    $("modal-title").textContent = getProductName(product);
  }

  if ($("modal-description")) {
    $("modal-description").textContent =
      product.description || "A handmade piece from a Kenyan artisan.";
  }

  if ($("modal-maker")) {
    $("modal-maker").textContent =
      `Made by ${product.maker || "Kenyan artisan"} · ${product.location || "Kenya"}`;
  }

  if ($("modal-price")) {
    $("modal-price").textContent = formatPrice(product.price);
  }

  openModal("product-modal");
}

function toggleFavourite(productId) {
  const id = String(productId);
  const product = getProduct(id);

  if (favourites.has(id)) {
    favourites.delete(id);
    showToast("Removed from your favourites.");
  } else {
    favourites.add(id);
    showToast(
      product
        ? `${getProductName(product)} saved to your wishlist.`
        : "Saved to your wishlist."
    );
  }

  saveFavourites();
  renderProducts();
}

// Product cards.
[productGrid, wishlistGrid].filter(Boolean).forEach((grid) => {
  grid.addEventListener("click", (event) => {
    const heart = event.target.closest("[data-wishlist]");

    if (heart) {
      event.preventDefault();
      event.stopPropagation();
      toggleFavourite(heart.dataset.wishlist);
      return;
    }

    const add = event.target.closest("[data-add]");

    if (add) {
      event.preventDefault();
      event.stopPropagation();

      flyToCart(add.closest(".product-card")?.querySelector("img"));
      addToCart(add.dataset.add);
      return;
    }

    const card = event.target.closest("[data-product-id]");

    if (card) {
      showProduct(card.dataset.productId);
    }
  });

  grid.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.matches(".product-card")
    ) {
      event.preventDefault();
      showProduct(event.target.dataset.productId);
    }
  });
});

function flyToCart(source) {
  const cartButton = $("open-cart");

  if (
    reducedMotion ||
    !source ||
    !cartButton ||
    typeof source.getBoundingClientRect !== "function"
  ) {
    return;
  }

  const from = source.getBoundingClientRect();
  const to = cartButton.getBoundingClientRect();

  if (!from.width || !to.width) return;

  const clone = document.createElement("img");

  clone.src = source.currentSrc || source.src || "";
  clone.alt = "";
  clone.className = "fly-clone";

  Object.assign(clone.style, {
    left: `${from.left}px`,
    top: `${from.top}px`,
    width: `${from.width}px`,
    height: `${from.height}px`
  });

  document.body.appendChild(clone);

  const dx =
    to.left + to.width / 2 - (from.left + from.width / 2);

  const dy =
    to.top + to.height / 2 - (from.top + from.height / 2);

  const animation = clone.animate([
    {
      transform: "translate(0, 0) scale(1)",
      opacity: 1,
      borderRadius: "14px"
    },
    {
      transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 70}px) scale(.38)`,
      opacity: .95,
      borderRadius: "50%",
      offset: .55
    },
    {
      transform: `translate(${dx}px, ${dy}px) scale(.04)`,
      opacity: .15,
      borderRadius: "50%"
    }
  ], {
    duration: 800,
    easing: "cubic-bezier(.5, 0, .2, 1)"
  });

  animation.onfinish = () => clone.remove();
  animation.oncancel = () => clone.remove();
}

// Search.
if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

// Category filters and favourites filter.
if (categoryFilters) {
  const favouriteButton = document.createElement("button");

  favouriteButton.type = "button";
  favouriteButton.className = "filter fav-filter";
  favouriteButton.setAttribute("aria-pressed", "false");
  favouriteButton.innerHTML =
    '♥ Favourites <span class="fav-badge" aria-hidden="true">0</span>';

  categoryFilters.appendChild(favouriteButton);

  favouriteButton.addEventListener("click", () => {
    favouritesOnly = !favouritesOnly;

    favouriteButton.classList.toggle("active", favouritesOnly);
    favouriteButton.setAttribute("aria-pressed", String(favouritesOnly));

    renderProducts();
  });

  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;

    categoryFilters.querySelectorAll("[data-category]").forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });

    renderProducts();
  });
}

// Category shortcut cards.
document.querySelectorAll("[data-jump-category]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.jumpCategory;

    if (categoryFilters) {
      categoryFilters.querySelectorAll("[data-category]").forEach((filter) => {
        filter.classList.toggle(
          "active",
          filter.dataset.category === selectedCategory
        );
      });
    }

    renderProducts();

    $("shop")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });
});

// Search shortcut.
$("search-focus")?.addEventListener("click", () => {
  $("shop")?.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth"
  });

  searchInput?.focus({ preventScroll: true });
});

// Open basket.
$("open-cart")?.addEventListener("click", async () => {
  if (typeof getSupabaseClient === "function") {
    await loadPublicArtworks();
  }

  renderCart();
  openModal("cart-modal");
});

// Add from the artwork details window.
$("modal-add")?.addEventListener("click", () => {
  if (selectedProductId === null) return;

  const added = addToCart(selectedProductId);

  if (!added) return;

  flyToCart($("modal-image"));
  closeModals();
  renderCart();
  openModal("cart-modal");
});

// Remove an item from the cart.
cartItems?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");

  if (!button) return;

  cart = cart.filter(
    (item) => String(item.id) !== String(button.dataset.remove)
  );

  saveCart();
});

// Theme and settings.
function applyTheme(theme) {
  const value = theme === "dark" ? "dark" : "light";

  document.documentElement.dataset.theme = value;

  try {
    localStorage.setItem(THEME_KEY, value);
  } catch (error) {
    // Theme preferences are optional.
  }
}

window.applyTheme = applyTheme;

const savedThemeRaw = localStorage.getItem(THEME_KEY);
const savedTheme = savedThemeRaw === "dark" ? "dark" : "light";

applyTheme(savedTheme);

const themeSelect = $("theme-select");

if (themeSelect) {
  themeSelect.value = document.documentElement.dataset.theme || "light";
}

$("settings-open")?.addEventListener("click", () => {
  if (themeSelect) {
    themeSelect.value = document.documentElement.dataset.theme || "light";
  }

  openModal("settings-modal");
});

themeSelect?.addEventListener("change", () => {
  applyTheme(themeSelect.value);
});

// Checkout helpers.
function cartLines() {
  return cart
    .map((item) => ({
      item,
      product: getCartProduct(item)
    }))
    .filter(({ item, product }) =>
      product && Number(item.quantity || 1) > 0
    );
}

function cartTotalAmount() {
  return cartLines().reduce(
    (sum, { item, product }) =>
      sum + Number(product.price || 0) * Number(item.quantity || 1),
    0
  );
}

function openCheckout() {
  const form = $("checkout-form");
  const summary = $("checkout-summary");
  const total = $("checkout-total");
  const message = $("checkout-message");

  if (!form || !summary || !total) {
    showToast("Checkout form is missing from this page.");
    return;
  }

  const lines = cartLines();

  if (lines.length === 0) {
    showToast("Add some artwork to your basket first.");
    return;
  }

  summary.innerHTML = lines.map(({ item, product }) => {
    const quantity = Number(item.quantity || 1);
    const title = getProductName(product);

    const image = product.image
      ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(title)}" style="width:68px;height:68px;object-fit:cover;border-radius:6px;flex-shrink:0;">`
      : `<span aria-hidden="true" style="width:68px;height:68px;display:grid;place-items:center;background:#eee5d5;border-radius:6px;flex-shrink:0;">✳</span>`;

    return `
      <li class="checkout-summary-item" style="display:flex;align-items:center;gap:12px;padding:12px 0;">
        ${image}

        <div style="flex:1;min-width:0;">
          <strong style="display:block;">
            ${escapeHtml(title)}
          </strong>

          <small style="display:block;opacity:.75;margin-top:4px;">
            ${quantity} × ${formatPrice(product.price)}
            ${product.category ? ` · ${escapeHtml(product.category)}` : ""}
          </small>
        </div>

        <strong>
          ${formatPrice(Number(product.price || 0) * quantity)}
        </strong>
      </li>
    `;
  }).join("");

  total.textContent = formatPrice(cartTotalAmount());

  if (message) {
    message.textContent = "";
  }

  const saved = readStorage(CUSTOMER_KEY, {});

  ["name", "phone", "town"].forEach((field) => {
    if (
      saved[field] &&
      form.elements[field] &&
      !form.elements[field].value
    ) {
      form.elements[field].value = saved[field];
    }
  });

  closeModals();
  openModal("checkout-modal");

  window.setTimeout(() => {
    const firstEmpty = [...form.elements].find(
      (element) => element.name && !element.value
    );

    (firstEmpty || form.elements.name)?.focus({
      preventScroll: true
    });
  }, 100);
}

$("checkout-button")?.addEventListener("click", async () => {
  const button = $("checkout-button");

  if (button) button.disabled = true;

  const refreshed = await loadPublicArtworks();

  if (!refreshed) {
    showToast(
      "Could not verify artwork availability. Please try again."
    );

    if (button) button.disabled = false;
    return;
  }

  if (cartLines().length === 0) {
    showToast(
      "Your basket is empty or an item has been removed."
    );

    renderCart();

    if (button) button.disabled = false;
    return;
  }

  openCheckout();

  if (button) button.disabled = false;
});

// Send the order through WhatsApp.
const checkoutForm = $("checkout-form");

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = $("checkout-message");
  const formData = new FormData(checkoutForm);

  const name = String(formData.get("name") || "").trim();
  const phoneRaw = String(formData.get("phone") || "").trim();
  const town = String(formData.get("town") || "").trim();
  const note = String(formData.get("note") || "").trim();

  const phoneDigits = phoneRaw.replace(/[\s\-()]/g, "");

  if (!name || !town) {
    if (message) {
      message.textContent = "Please enter your name and delivery town.";
    }

    return;
  }

  if (!/^(?:\+?254|0)[17]\d{8}$/.test(phoneDigits)) {
    if (message) {
      message.textContent =
        "Enter a valid Kenyan phone number, such as 0712 345 678.";
    }

    return;
  }

  const lines = cartLines();

  if (!lines.length) {
    if (message) {
      message.textContent = "Your basket is empty.";
    }

    return;
  }

  const orderText = [
    "Hi! I'd like to order from Kenyan Artisans:",
    "",
    ...lines.map(({ item, product }) =>
      `${Number(item.quantity || 1)} × ${getProductName(product)} (by ${product.maker || "Kenyan artisan"}): ${formatPrice(Number(product.price || 0) * Number(item.quantity || 1))}`
    ),
    "",
    `Total: ${formatPrice(cartTotalAmount())}`,
    "",
    `Name: ${name}`,
    `Phone: ${phoneRaw}`,
    `Delivery town: ${town}`,
    note ? `Note: ${note}` : ""
  ]
    .filter((line, index, all) =>
      line !== "" || (index > 0 && all[index - 1] !== "")
    )
    .join("\n")
    .trim();

  writeStorage(CUSTOMER_KEY, {
    name,
    phone: phoneRaw,
    town
  });

  const whatsappUrl =
    `https://wa.me/${ORDER_WHATSAPP}?text=${encodeURIComponent(orderText)}`;

  const opened = window.open(whatsappUrl, "_blank");

// Clear the local basket after handing off the order request.
cart = [];
writeStorage(CART_KEY, []);

if (cartCount) cartCount.textContent = "0";

renderCart();

if (!opened) {
  window.location.href = whatsappUrl;
}

  checkoutForm.elements.note.value = "";

  closeModals();

  showToast("Order ready. Press Send in WhatsApp to finish.");
});

// Modal close buttons and background clicks.
document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModals();
  }
});

document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModals();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
  }

  if (
    event.key === "/" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.target.matches("input, textarea, select, [contenteditable]") &&
    !document.querySelector(".modal-backdrop:not(.hidden)")
  ) {
    if (searchInput) {
      event.preventDefault();

      $("shop")?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth"
      });

      searchInput.focus({ preventScroll: true });
    }
  }
});

// All seller buttons lead to the seller dashboard.
function goToSellerDashboard() {
  window.location.href = "seller.html";
}

[
  "seller-open",
  "hero-seller",
  "artisan-seller",
  "cta-seller",
  "go-to-studio"
].forEach((id) => {
  $(id)?.addEventListener("click", goToSellerDashboard);
});

// Mobile navigation.
$("menu-toggle")?.addEventListener("click", () => {
  const nav = $("nav-links");
  const menu = $("menu-toggle");

  if (!nav || !menu) return;

  const isOpen = nav.classList.toggle("open");

  menu.setAttribute("aria-expanded", String(isOpen));
  menu.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    $("nav-links")?.classList.remove("open");
    $("menu-toggle")?.setAttribute("aria-expanded", "false");

    if ($("menu-toggle")) {
      $("menu-toggle").textContent = "☰";
    }
  });
});

// Refresh products if another same-origin tab updates localStorage.
window.addEventListener("storage", (event) => {
  if (event.key === PRODUCT_KEY) {
    try {
      const updated = JSON.parse(event.newValue || "[]");
      localProducts = Array.isArray(updated) ? updated : [];
    } catch (error) {
      localProducts = [];
    }

    products = [...remoteProducts, ...localProducts];

    renderProducts();
    saveCart();
  }

  if (event.key === CART_KEY) {
    cart = readStorage(CART_KEY, []);

    if (!Array.isArray(cart)) {
      cart = [];
    }

    saveCart();
  }
});

// Footer year.
if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

// Section reveal animations.
if (!reducedMotion && "IntersectionObserver" in window) {
  const sections = document.querySelectorAll("section:not(.hero)");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -6% 0px"
  });

  sections.forEach((section) => {
    section.classList.add("js-reveal");
    observer.observe(section);
  });
}

// Back-to-top button.
if (!$("to-top")) {
  const toTop = document.createElement("button");

  toTop.type = "button";
  toTop.className = "to-top";
  toTop.id = "to-top";
  toTop.setAttribute("aria-label", "Back to top");

  toTop.innerHTML = `
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle class="track" cx="20" cy="20" r="17"/>
      <circle class="bar" cx="20" cy="20" r="17" pathLength="100"/>
    </svg>
    <span aria-hidden="true">↑</span>
  `;

  document.body.appendChild(toTop);

  const bar = toTop.querySelector(".bar");
  let ticking = false;

  function onScroll() {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        max > 0 ? Math.min(1, window.scrollY / max) : 0;

      bar.style.strokeDashoffset = String(100 - progress * 100);

      toTop.classList.toggle("visible", window.scrollY > 600);

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, {
    passive: true
  });

  onScroll();

  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });
}

// Load the artwork published through the seller dashboard.
async function loadPublicArtworks() {
  if (typeof getSupabaseClient !== "function") {
    remoteProductsLoaded = true;
    products = [...localProducts];
    renderProducts();
    saveCart();
    return false;
  }

  try {
    const client = getSupabaseClient();

    const { data, error } = await client
      .from("artworks")
      .select(
        "id,seller_id,title,price,category,maker,location,description,image_url,image_path,published,created_at"
      )
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error) throw error;

    remoteProducts = (data || []).map((artwork) => ({
      id: `remote-${artwork.id}`,
      databaseId: artwork.id,
      ownerId: artwork.seller_id,
      name: artwork.title,
      category: artwork.category || "Other",
      price: Number(artwork.price),
      maker: artwork.maker || "Kenyan artisan",
      location: artwork.location || "Kenya",
      description: artwork.description || "",
      image: artwork.image_url || "",
      imagePath: artwork.image_path || null,
      tag: "ARTIST LISTING"
    }));

    // The shared database is the source of truth.
    // Do not re-add old browser-only listings.
    products = [...remoteProducts];

    remoteProductsLoaded = true;
    remoteProductsVerified = true;

    // Remove favourites for products that no longer exist.
    const currentIds = new Set(
      products.map((product) => String(product.id))
    );

    favourites = new Set(
      [...favourites].filter((id) => currentIds.has(String(id)))
    );

    saveFavourites();
    renderProducts();

    // This also removes deleted products from old cart snapshots.
    saveCart();

    return true;
  } catch (error) {
    remoteProductsLoaded = true;

    // Keep the last known catalogue if the network fails.
    // Do not claim that availability was verified.
    products = remoteProductsVerified
      ? [...remoteProducts]
      : [...localProducts];

    renderProducts();
    saveCart();

    console.error(
      "Could not refresh published artwork from Supabase:",
      error
    );

    return false;
  }
}

document.addEventListener("DOMContentLoaded", loadPublicArtworks, {
  once: true
});

window.addEventListener("focus", loadPublicArtworks);

// Initial display.
renderProducts();
saveCart();