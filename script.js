// The marketplace starts empty. Artists add their own products in Artist Studio.
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("product-search");
const filterButtons = document.querySelectorAll(".filter");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const cartCount = document.getElementById("cart-count");
const toast = document.getElementById("toast");
const PRODUCT_KEY = "kenyanArtisansProducts";

let products = JSON.parse(localStorage.getItem(PRODUCT_KEY) || "[]");
let selectedCategory = "All";
let cart = JSON.parse(localStorage.getItem("kenyanArtisansCart") || "[]");
let selectedProductId = null;
let toastTimer;

function formatPrice(price) {
  return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(price).replace("KES", "KSh");
}

function saveProducts() {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const searchableText = `${product.name} ${product.category} ${product.maker} ${product.location}`.toLowerCase();
    return matchesCategory && searchableText.includes(searchTerm);
  });

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card" data-product-id="${product.id}" tabindex="0" aria-label="View ${escapeHtml(product.name)}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"> 
       <span class="product-tag">ARTIST LISTING</span>
       <button class="wishlist-toggle" data-wishlist="${product.id}" aria-label="Add ${escapeHtml(product.name)} to favourites" aria-pressed="false">♡</button>
       <button class="quick-add" data-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to cart">+</button>
       <div class="product-info">
        <span class="product-category">${escapeHtml(product.category)}</span>
        <h3>${escapeHtml(product.name)}</h3>
        <span class="product-maker">By ${escapeHtml(product.maker)}</span>
        <div class="product-price-row"><strong class="product-price">${formatPrice(product.price)}</strong><span class="product-location">${escapeHtml(product.location.split(",")[0])}</span></div>
      </div>
    </article>`).join("");

  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "piece" : "pieces"} to discover`;
  emptyState.textContent = products.length === 0
    ? "No artwork has been added yet. If you're an artist, use Artist Studio below to publish the first piece."
    : "No artwork matches that search. Try another word or category.";
  emptyState.classList.toggle("hidden", visibleProducts.length > 0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function saveCart() {
  localStorage.setItem("kenyanArtisansCart", JSON.stringify(cart));
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  renderCart();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveCart();
  showToast(`${product.name} added to your basket.`);
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  cart = cart.filter((item) => products.some((product) => product.id === item.id));
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your basket is waiting for something special.</p>';
    totalElement.textContent = formatPrice(0);
    return;
  }
  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<div class="cart-row"><img src="${product.image}" alt=""><div><strong>${escapeHtml(product.name)}</strong><small>${item.quantity} × ${formatPrice(product.price)}</small></div><button class="remove-item" data-remove="${product.id}">Remove</button></div>`;
  }).join("");
  const total = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0);
  totalElement.textContent = formatPrice(total);
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.classList.add("hidden"));
  document.body.style.overflow = "";
}
function showProduct(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;
  selectedProductId = product.id;
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-image").alt = product.name;
  document.getElementById("modal-category").textContent = product.category;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-description").textContent = product.description;
  document.getElementById("modal-maker").textContent = `Made by ${product.maker} · ${product.location}`;
  document.getElementById("modal-price").textContent = formatPrice(product.price);
  openModal("product-modal");
}

function renderMyListings() {
  const container = document.getElementById("my-listings");
  document.getElementById("my-listings-count").textContent = `${products.length} ${products.length === 1 ? "listing" : "listings"}`;
  if (products.length === 0) {
    container.innerHTML = '<p class="empty-listings">Your listings will appear here after you publish your first artwork.</p>';
    return;
  }
  container.innerHTML = products.map((product) => `<article class="my-listing"><img src="${product.image}" alt="${escapeHtml(product.name)}"><div><strong>${escapeHtml(product.name)}</strong><small>${formatPrice(product.price)} · ${escapeHtml(product.category)}</small><button type="button" data-delete-product="${product.id}">Remove listing</button></div></article>`).join("");
}

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) { event.stopPropagation(); addToCart(addButton.dataset.add); return; }
  const card = event.target.closest("[data-product-id]");
  if (card) showProduct(card.dataset.productId);
});
productGrid.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) {
    event.preventDefault(); showProduct(event.target.dataset.productId);
  }
});
searchInput.addEventListener("input", renderProducts);
document.getElementById("category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  filterButtons.forEach((filter) => filter.classList.toggle("active", filter === button));
  renderProducts();
});
document.querySelectorAll("[data-jump-category]").forEach((button) => button.addEventListener("click", () => {
  selectedCategory = button.dataset.jumpCategory;
  filterButtons.forEach((filter) => filter.classList.toggle("active", filter.dataset.category === selectedCategory));
  renderProducts(); document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}));
document.getElementById("search-focus").addEventListener("click", () => {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" }); searchInput.focus({ preventScroll: true });
});
document.getElementById("open-cart").addEventListener("click", () => { renderCart(); openModal("cart-modal"); });

const settingsButton = document.getElementById("settings-open");
const settingsModal = document.getElementById("settings-modal");
const themeSelect = document.getElementById("theme-select");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("kenyanArtisansTheme", theme);
}

const savedTheme = localStorage.getItem("kenyanArtisansTheme") || "light";
applyTheme(savedTheme);
themeSelect.value = savedTheme;

settingsButton.addEventListener("click", () => {
  themeSelect.value = document.documentElement.dataset.theme || "light";
  openModal("settings-modal");
});

themeSelect.addEventListener("change", () => {
  applyTheme(themeSelect.value);
});

document.getElementById("modal-add").addEventListener("click", () => { if (selectedProductId !== null) addToCart(selectedProductId); closeModals(); });
document.getElementById("cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  cart = cart.filter((item) => item.id !== Number(button.dataset.remove)); saveCart();
});
document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length === 0) showToast("Add some artwork to your basket first.");
  else showToast("Checkout is a demo. Payment integration is needed before real orders.");
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModals();
});

document.querySelectorAll(".modal-backdrop").forEach((backdrop) => backdrop.addEventListener("click", (event) => { if (event.target === backdrop) closeModals(); }));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); });

function openSellerForm() { openModal("seller-modal"); }
["seller-open", "hero-seller", "artisan-seller", "cta-seller"].forEach((id) => document.getElementById(id).addEventListener("click", openSellerForm));
document.getElementById("go-to-studio").addEventListener("click", () => {
  closeModals(); document.getElementById("artist-studio").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const file = document.getElementById("product-image").files[0];
  const message = document.getElementById("product-form-message");
  if (!file) { message.textContent = "Please choose a photo of your artwork."; return; }
  if (!file.type.startsWith("image/")) { message.textContent = "Please choose an image file."; return; }
  if (file.size > 1.5 * 1024 * 1024) { message.textContent = "That image is too large. Please choose an image smaller than 1.5 MB."; return; }
  const data = new FormData(form);
  const reader = new FileReader();
  reader.onload = () => {
    const product = {
      id: Date.now(),
      name: String(data.get("title")).trim(),
      category: String(data.get("category")),
      price: Number(data.get("price")),
      maker: String(data.get("maker")).trim(),
      location: String(data.get("location")).trim(),
      description: String(data.get("description")).trim(),
      image: reader.result
    };
    if (!product.name || !product.maker || !product.location || !product.description || !Number.isFinite(product.price) || product.price < 1) {
      message.textContent = "Please fill in every field and enter a valid price."; return;
    }
    products.unshift(product);
    try {
      saveProducts();
      renderProducts();
      renderMyListings();
      form.reset();
      message.textContent = "Your artwork has been published to Explore Art!";
      showToast("Artwork published successfully.");
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      products = products.filter((item) => item.id !== product.id);
      message.textContent = "This browser may be out of storage. Try a smaller image or remove an old listing.";
    }
  };
  reader.onerror = () => { message.textContent = "The image could not be read. Please try another file."; };
  reader.readAsDataURL(file);
});

document.getElementById("my-listings").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-product]");
  if (!button) return;
  const id = Number(button.dataset.deleteProduct);
  products = products.filter((product) => product.id !== id);
  cart = cart.filter((item) => item.id !== id);
  saveProducts(); saveCart(); renderProducts(); renderMyListings();
  document.getElementById("product-form-message").textContent = "Listing removed from this browser.";
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("nav-links");
  const isOpen = nav.classList.toggle("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(isOpen));
  document.getElementById("menu-toggle").textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll("#nav-links a").forEach((link) => link.addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("menu-toggle").textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts(); renderMyListings(); saveCart();

(() => {
  const $ = (id) => document.getElementById(id);
  const grid = $("product-grid");
  if (!grid) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const cartButton = $("open-cart");
  const cartCount = $("cart-count");
  const resultCount = $("result-count");
  const emptyState = $("empty-state");
  const toast = (message) => { if (typeof showToast === "function") showToast(message); };

  const FAV_KEY = "kenyanArtisansFavourites";
  let favourites = new Set();
  try { favourites = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]").map(String)); } catch (error) { favourites = new Set(); }
  let favouritesOnly = false;

  function saveFavourites() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...favourites])); } catch (error) {}
  }

  function syncHearts() {
    grid.querySelectorAll("[data-wishlist]").forEach((button) => {
      const on = favourites.has(String(button.dataset.wishlist));
      if (button.getAttribute("aria-pressed") !== String(on)) {
        button.classList.add("restored");
        button.setAttribute("aria-pressed", String(on));
      }
      button.textContent = on ? "♥" : "♡";
    });
  }

  function applyFavouriteFilter() {
    const cards = [...grid.querySelectorAll(".product-card")];
    cards.forEach((card) => {
      card.hidden = favouritesOnly && !favourites.has(String(card.dataset.productId));
    });
    if (!favouritesOnly) return;
    const shown = cards.filter((card) => !card.hidden).length;
    if (resultCount) resultCount.textContent = `${shown} favourite ${shown === 1 ? "piece" : "pieces"}`;
    if (emptyState) {
      if (shown === 0) {
        emptyState.textContent = "No favourites here yet. Tap the heart on any artwork to save it.";
        emptyState.classList.remove("hidden");
      } else {
        emptyState.classList.add("hidden");
      }
    }
  }

  grid.addEventListener("click", (event) => {
    const heart = event.target.closest("[data-wishlist]");
    if (!heart) return;
    event.stopPropagation();
    const id = String(heart.dataset.wishlist);
    heart.classList.remove("restored");
    if (favourites.has(id)) {
      favourites.delete(id);
      heart.setAttribute("aria-pressed", "false");
      heart.textContent = "♡";
      toast("Removed from your favourites.");
    } else {
      favourites.add(id);
      heart.setAttribute("aria-pressed", "true");
      heart.textContent = "♥";
      toast("Saved to your favourites.");
    }
    saveFavourites();
    updateFavouriteBadge();
    if (favouritesOnly) setTimeout(applyFavouriteFilter, 350);
  }, true);

  const filters = $("category-filters");
  let favouriteButton = null;
  if (filters) {
    favouriteButton = document.createElement("button");
    favouriteButton.type = "button";
    favouriteButton.className = "filter fav-filter";
    favouriteButton.setAttribute("aria-pressed", "false");
    favouriteButton.innerHTML = '♥ Favourites <span class="fav-badge" aria-hidden="true">0</span>';
    filters.appendChild(favouriteButton);
    favouriteButton.addEventListener("click", () => {
      favouritesOnly = !favouritesOnly;
      favouriteButton.setAttribute("aria-pressed", String(favouritesOnly));
      favouriteButton.classList.toggle("active", favouritesOnly);
      const searchInput = $("product-search");
      if (searchInput) searchInput.dispatchEvent(new Event("input"));
      else applyFavouriteFilter();
    });
  }

  function updateFavouriteBadge() {
    if (!favouriteButton) return;
    const badge = favouriteButton.querySelector(".fav-badge");
    badge.textContent = favourites.size;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
    badge.classList.toggle("has-items", favourites.size > 0);
  }

  new MutationObserver(() => { syncHearts(); applyFavouriteFilter(); }).observe(grid, { childList: true });
  syncHearts();
  updateFavouriteBadge();

  function flyToCart(source) {
    if (reduced || !source || !cartButton) return;
    const from = source.getBoundingClientRect();
    const to = cartButton.getBoundingClientRect();
    if (!from.width || !to.width) return;
    const clone = document.createElement("img");
    clone.src = source.currentSrc || source.src;
    clone.alt = "";
    clone.className = "fly-clone";
    Object.assign(clone.style, {
      left: `${from.left}px`,
      top: `${from.top}px`,
      width: `${from.width}px`,
      height: `${from.height}px`
    });
    document.body.appendChild(clone);
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const animation = clone.animate([
      { transform: "translate(0, 0) scale(1)", opacity: 1, borderRadius: "14px" },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 90}px) scale(.38)`, opacity: .95, borderRadius: "50%", offset: .55 },
      { transform: `translate(${dx}px, ${dy}px) scale(.04)`, opacity: .15, borderRadius: "50%" }
    ], { duration: 900, easing: "cubic-bezier(.5, 0, .2, 1)" });
    animation.onfinish = () => clone.remove();
    animation.oncancel = () => clone.remove();
  }

  grid.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (!add) return;
    flyToCart(add.closest(".product-card")?.querySelector("img"));
  }, true);

  const modalAdd = $("modal-add");
  if (modalAdd) modalAdd.addEventListener("click", () => flyToCart($("modal-image")), true);

  if (cartCount) {
    new MutationObserver(() => {
      cartCount.classList.remove("bump");
      void cartCount.offsetWidth;
      cartCount.classList.add("bump");
      if (cartButton) {
        cartButton.classList.remove("shake");
        void cartButton.offsetWidth;
        cartButton.classList.add("shake");
      }
    }).observe(cartCount, { childList: true, characterData: true, subtree: true });
  }

  if (finePointer && !reduced) {
    grid.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") return;
      const card = event.target.closest(".product-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      card.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${((0.5 - y) * 9).toFixed(2)}deg`);
    });
    grid.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".product-card");
      if (!card || card.contains(event.relatedTarget)) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });

    document.querySelectorAll(".hero-actions .button, .header-actions .button").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.28;
        button.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
      button.addEventListener("pointerleave", () => { button.style.translate = ""; });
    });
  }

  document.addEventListener("pointerdown", (event) => {
    const button = event.target.closest(".button");
    if (!button) return;
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--px", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    button.style.setProperty("--py", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });

  if (!reduced && "IntersectionObserver" in window) {
    const sections = document.querySelectorAll("section:not(.hero)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    sections.forEach((section) => {
      section.classList.add("js-reveal");
      observer.observe(section);
    });
  }

  const toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="track" cx="20" cy="20" r="17"/><circle class="bar" cx="20" cy="20" r="17" pathLength="100"/></svg><span aria-hidden="true">↑</span>';
  document.body.appendChild(toTop);
  const bar = toTop.querySelector(".bar");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.strokeDashoffset = String(100 - progress * 100);
      toTop.classList.toggle("visible", window.scrollY > 600);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target.matches("input, textarea, select, [contenteditable]")) return;
    if (document.querySelector(".modal-backdrop:not(.hidden)")) return;
    const search = $("product-search");
    const shop = $("shop");
    if (!search) return;
    event.preventDefault();
    if (shop) shop.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    search.focus({ preventScroll: true });
  });

  if (document.startViewTransition && !reduced && typeof window.applyTheme === "function") {
    let originX = window.innerWidth / 2;
    let originY = 0;
    document.addEventListener("pointerdown", (event) => { originX = event.clientX; originY = event.clientY; }, true);
    const original = window.applyTheme;
    window.applyTheme = (theme) => {
      if (document.documentElement.dataset.theme === theme) { original(theme); return; }
      const radius = Math.hypot(Math.max(originX, window.innerWidth - originX), Math.max(originY, window.innerHeight - originY));
      const transition = document.startViewTransition(() => original(theme));
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${originX}px ${originY}px)`, `circle(${radius}px at ${originX}px ${originY}px)`] },
          { duration: 800, easing: "cubic-bezier(.7, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    };
  }
})();

(() => {
  const $ = (id) => document.getElementById(id);
  const grid = $("product-grid");
  const wishGrid = $("wishlist-grid");
  if (!grid) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const cartButton = $("open-cart");
  const cartCount = $("cart-count");
  const grids = [grid, wishGrid].filter(Boolean);
  const toast = (message) => { if (typeof showToast === "function") showToast(message); };

  const FAV_KEY = "kenyanArtisansFavourites";
  let favourites = new Set();
  try { favourites = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]").map(String)); } catch (error) { favourites = new Set(); }
  let wishSignature = null;

  function saveFavourites() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...favourites])); } catch (error) {}
  }

  function bump(element) {
    if (!element) return;
    element.classList.remove("bump");
    void element.offsetWidth;
    element.classList.add("bump");
  }

  function savedProducts() {
    return products.filter((product) => favourites.has(String(product.id)));
  }

  function syncHearts() {
    document.querySelectorAll("[data-wishlist]").forEach((button) => {
      const on = favourites.has(String(button.dataset.wishlist));
      if (button.getAttribute("aria-pressed") !== String(on)) {
        button.classList.add("restored");
        button.setAttribute("aria-pressed", String(on));
      }
      button.textContent = on ? "♥" : "♡";
    });
  }

  function renderWishlist(force) {
    const saved = savedProducts();
    const signature = saved.map((product) => product.id).join(",");
    const count = $("wishlist-count");
    const total = $("wishlist-total");
    const empty = $("wishlist-empty");
    if (count && count.textContent !== String(saved.length)) {
      count.textContent = saved.length;
      bump(count);
    }
    if (total) total.textContent = `${saved.length} saved ${saved.length === 1 ? "piece" : "pieces"}`;
    if (empty) empty.classList.toggle("hidden", saved.length > 0);
    if (!wishGrid || (!force && signature === wishSignature)) return;
    wishSignature = signature;
    wishGrid.innerHTML = saved.map((product) => `
      <article class="product-card" data-product-id="${product.id}" tabindex="0" aria-label="View ${escapeHtml(product.name)}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
          <span class="product-tag">SAVED</span>
          <button class="wishlist-toggle restored" data-wishlist="${product.id}" aria-label="Remove ${escapeHtml(product.name)} from favourites" aria-pressed="true">♥</button>
          <button class="quick-add" data-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to cart">+</button>
        </div>
        <div class="product-info">
          <span class="product-category">${escapeHtml(product.category)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <span class="product-maker">By ${escapeHtml(product.maker)}</span>
          <div class="product-price-row"><strong class="product-price">${formatPrice(product.price)}</strong><span class="product-location">${escapeHtml(product.location.split(",")[0])}</span></div>
        </div>
      </article>`).join("");
  }

  function toggleFavourite(button) {
    const id = String(button.dataset.wishlist);
    const product = products.find((item) => String(item.id) === id);
    button.classList.remove("restored");
    if (favourites.has(id)) {
      favourites.delete(id);
      toast("Removed from your wishlist.");
    } else {
      favourites.add(id);
      toast(product ? `${product.name} saved to your wishlist.` : "Saved to your wishlist.");
    }
    saveFavourites();
    document.querySelectorAll(`[data-wishlist="${id}"]`).forEach((heart) => {
      const on = favourites.has(id);
      heart.classList.remove("restored");
      heart.setAttribute("aria-pressed", String(on));
      heart.textContent = on ? "♥" : "♡";
    });
    renderWishlist(false);
  }

  function flyToCart(source) {
    if (reduced || !source || !cartButton) return;
    const from = source.getBoundingClientRect();
    const to = cartButton.getBoundingClientRect();
    if (!from.width || !to.width) return;
    const clone = document.createElement("img");
    clone.src = source.currentSrc || source.src;
    clone.alt = "";
    clone.className = "fly-clone";
    Object.assign(clone.style, {
      left: `${from.left}px`,
      top: `${from.top}px`,
      width: `${from.width}px`,
      height: `${from.height}px`
    });
    document.body.appendChild(clone);
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const animation = clone.animate([
      { transform: "translate(0, 0) scale(1)", opacity: 1, borderRadius: "14px" },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.55 - 90}px) scale(.38)`, opacity: .95, borderRadius: "50%", offset: .55 },
      { transform: `translate(${dx}px, ${dy}px) scale(.04)`, opacity: .15, borderRadius: "50%" }
    ], { duration: 900, easing: "cubic-bezier(.5, 0, .2, 1)" });
    animation.onfinish = () => clone.remove();
    animation.oncancel = () => clone.remove();
  }

  grids.forEach((container) => {
    container.addEventListener("click", (event) => {
      const heart = event.target.closest("[data-wishlist]");
      if (heart) {
        event.stopPropagation();
        toggleFavourite(heart);
        return;
      }
      const add = event.target.closest("[data-add]");
      if (add) flyToCart(add.closest(".product-card")?.querySelector("img"));
    }, true);
  });

  if (wishGrid) {
    wishGrid.addEventListener("click", (event) => {
      const add = event.target.closest("[data-add]");
      if (add) { addToCart(add.dataset.add); return; }
      const card = event.target.closest("[data-product-id]");
      if (card) showProduct(card.dataset.productId);
    });
    wishGrid.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".product-card")) {
        event.preventDefault();
        showProduct(event.target.dataset.productId);
      }
    });
  }

  new MutationObserver(() => { syncHearts(); renderWishlist(false); }).observe(grid, { childList: true });
  syncHearts();
  renderWishlist(true);

  const modalAdd = $("modal-add");
  if (modalAdd) modalAdd.addEventListener("click", () => flyToCart($("modal-image")), true);

  if (cartCount) {
    new MutationObserver(() => {
      bump(cartCount);
      if (cartButton) {
        cartButton.classList.remove("shake");
        void cartButton.offsetWidth;
        cartButton.classList.add("shake");
      }
    }).observe(cartCount, { childList: true, characterData: true, subtree: true });
  }

  if (finePointer && !reduced) {
    grids.forEach((container) => {
      container.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse") return;
        const card = event.target.closest(".product-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
        card.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${((0.5 - y) * 9).toFixed(2)}deg`);
      });
      container.addEventListener("pointerout", (event) => {
        const card = event.target.closest(".product-card");
        if (!card || card.contains(event.relatedTarget)) return;
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });

    document.querySelectorAll(".hero-actions .button, .header-actions .button").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.28;
        button.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
      button.addEventListener("pointerleave", () => { button.style.translate = ""; });
    });
  }

  document.addEventListener("pointerdown", (event) => {
    const button = event.target.closest(".button");
    if (!button) return;
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--px", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    button.style.setProperty("--py", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });

  if (!reduced && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("section:not(.hero)").forEach((section) => {
      section.classList.add("js-reveal");
      observer.observe(section);
    });
  }

  const toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="track" cx="20" cy="20" r="17"/><circle class="bar" cx="20" cy="20" r="17" pathLength="100"/></svg><span aria-hidden="true">↑</span>';
  document.body.appendChild(toTop);
  const bar = toTop.querySelector(".bar");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.strokeDashoffset = String(100 - progress * 100);
      toTop.classList.toggle("visible", window.scrollY > 600);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));

  const navLinks = [...document.querySelectorAll("#nav-links a[href^='#']")];
  if (navLinks.length && "IntersectionObserver" in window) {
    const targets = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach((target) => spy.observe(target));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.target.matches("input, textarea, select, [contenteditable]")) return;
    if (document.querySelector(".modal-backdrop:not(.hidden)")) return;
    const search = $("product-search");
    const shop = $("shop");
    if (!search) return;
    event.preventDefault();
    if (shop) shop.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    search.focus({ preventScroll: true });
  });

  if (document.startViewTransition && !reduced && typeof window.applyTheme === "function") {
    let originX = window.innerWidth / 2;
    let originY = 0;
    document.addEventListener("pointerdown", (event) => { originX = event.clientX; originY = event.clientY; }, true);
    const original = window.applyTheme;
    window.applyTheme = (theme) => {
      if (document.documentElement.dataset.theme === theme) { original(theme); return; }
      const radius = Math.hypot(Math.max(originX, window.innerWidth - originX), Math.max(originY, window.innerHeight - originY));
      const transition = document.startViewTransition(() => original(theme));
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${originX}px ${originY}px)`, `circle(${radius}px at ${originX}px ${originY}px)`] },
          { duration: 800, easing: "cubic-bezier(.7, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    };
  }
})();

renderProducts(); renderMyListings(); saveCart();

(() => {
  const studio = document.getElementById("artist-studio");
  const form = document.getElementById("product-form");
  if (!studio || !form) return;

  function goToStudio() {
    if (typeof closeModals === "function") closeModals();
    const nav = document.getElementById("nav-links");
    const menu = document.getElementById("menu-toggle");
    if (nav) nav.classList.remove("open");
    if (menu) { menu.setAttribute("aria-expanded", "false"); menu.textContent = "☰"; }

    studio.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const firstField = form.querySelector("input[name='title']");
      if (firstField) firstField.focus({ preventScroll: true });
      form.classList.remove("studio-spotlight");
      void form.offsetWidth;
      form.classList.add("studio-spotlight");
    }, 700);
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#seller-open, #hero-seller, #artisan-seller, #cta-seller")) return;
    event.preventDefault();
    event.stopPropagation();
    goToStudio();
  }, true);

  document.querySelectorAll('a[href="#seller"]').forEach((link) => link.setAttribute("href", "#artist-studio"));
})();