// Glorious One World — Cart Management (localStorage)
// Cart persists across pages. Checkout generates WhatsApp order message.

const CART_KEY = "gow_cart_v1";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  window.dispatchEvent(new CustomEvent("cart-updated"));
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product) return false;
  if (product.stock <= 0) {
    alert("This item is currently out of stock.");
    return false;
  }
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    const newQty = existing.qty + qty;
    if (newQty > product.stock) {
      alert(`Only ${product.stock} units available.`);
      return false;
    }
    existing.qty = newQty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  return true;
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQty(productId, qty) {
  if (qty < 1) {
    removeFromCart(productId);
    return;
  }
  const product = getProductById(productId);
  if (product && qty > product.stock) {
    alert(`Only ${product.stock} units available.`);
    return;
  }
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = qty;
    saveCart(cart);
  }
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = getProductById(item.id);
    if (!p) return sum;
    const price = p.discountPrice || p.price;
    return sum + price * item.qty;
  }, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll("[data-cart-count]");
  const count = getCartCount();
  badges.forEach(el => {
    el.textContent = count;
    el.classList.toggle("hidden", count === 0);
  });
}

// Generate WhatsApp order message with full cart + delivery details
function buildWhatsAppOrderMessage(customer = {}) {
  const cart = getCart();
  if (cart.length === 0) return "";

  const lines = [];
  lines.push("NEW ORDER — Glorious One World");
  lines.push("");
  lines.push("*ORDER ITEMS*");
  cart.forEach(item => {
    const p = getProductById(item.id);
    if (!p) return;
    const price = p.discountPrice || p.price;
    lines.push("• " + p.name + " x " + item.qty + " = " + formatPrice(price * item.qty));
  });
  lines.push("");
  lines.push("*SUBTOTAL: " + formatPrice(getCartTotal()) + "*");
  lines.push("(Delivery fee to be confirmed)");
  lines.push("");
  lines.push("*CUSTOMER*");
  if (customer.name) lines.push("Name: " + customer.name);
  if (customer.phone) lines.push("Phone: " + customer.phone);
  if (customer.email) lines.push("Email: " + customer.email);
  lines.push("");
  lines.push("*DELIVERY*");
  if (customer.method) lines.push("Method: " + customer.method);
  if (customer.address) lines.push("Address: " + customer.address);
  if (customer.area) lines.push("Area: " + customer.area);
  if (customer.city) lines.push("City: " + customer.city);
  if (customer.state) lines.push("State: " + customer.state);
  if (customer.landmark) lines.push("Landmark: " + customer.landmark);
  lines.push("");
  if (customer.payment) lines.push("Payment method: " + customer.payment);
  if (customer.paymentRef) lines.push("Payment reference: " + customer.paymentRef);
  if (customer.paymentStatus) lines.push("Payment status: " + customer.paymentStatus);
  if (customer.note) lines.push("Note: " + customer.note);
  lines.push("");
  lines.push("Please confirm stock, delivery fee and total. Thank you!");

  return encodeURIComponent(lines.join("\n"));
}


function openWhatsAppOrder(customer = {}) {
  const msg = buildWhatsAppOrderMessage(customer);
  if (!msg) {
    alert("Your cart is empty.");
    return;
  }
  const url = "https://wa.me/2348164912257?text=" + msg;
  window.open(url, "_blank");
}

// Init badge on load
document.addEventListener("DOMContentLoaded", updateCartBadge);
