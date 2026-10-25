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
        <button class="quick-add" data-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to cart">+</button>
      </div>
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
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModals));
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
