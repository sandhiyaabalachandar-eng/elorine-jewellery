/* ============================================================
   main.js — Shared utilities, header, toast, AI image tool
   ============================================================ */

/* ---- TOAST ---- */
const Toast = {
  show(msg, icon = "ti-check") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<i class="ti ${icon}"></i> ${msg}`;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3100);
  }
};

/* ---- HEADER SCROLL ---- */
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("open");
  });

  // Cart open
  document.getElementById("cart-btn")?.addEventListener("click", Cart.openCart);
  document.getElementById("cart-btn-mobile")?.addEventListener("click", Cart.openCart);

  // Active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header__nav a, .mobile-menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* ---- PRODUCT CARD RENDERER ---- */
function renderProductCard(p) {
  const img = p.images?.[0] || "";
  const badge = p.badge ? `<span class="product-card__badge">${p.badge}</span>` : "";
  const sale = p.originalPrice
    ? `<span style="text-decoration:line-through;color:#999;font-size:13px;margin-right:6px;">${formatPrice(p.originalPrice)}</span>`
    : "";

  return `
    <div class="product-card">
      <div class="product-card__img">
        ${badge}
        <a href="product.html?id=${p.id}">
          <img src="${img}" alt="${p.name}"
            onerror="this.parentElement.insertAdjacentHTML('afterbegin','<div class=\\'img-placeholder\\'><i class=\\'ti ti-photo\\'></i><span>${p.name}</span></div>');this.remove();"
            loading="lazy" />
        </a>
        <div class="product-card__actions">
          <button onclick="initiatePayment(${p.price}, ${JSON.stringify(p.name)})">Buy Now</button>
          <button onclick="Cart.add(${p.id})" class="add-cart-btn">Add to Cart</button>
          <button class="wishlist-btn" data-wishlist-id="${p.id}"
            onclick="Wishlist.toggle(${p.id});this.innerHTML=Wishlist.has(${p.id})?'<i class=\\'ti ti-heart-filled\\'></i>':'<i class=\\'ti ti-heart\\'></i>'">
            <i class="ti ${Wishlist.has(p.id) ? 'ti-heart-filled' : 'ti-heart'}"></i>
          </button>
        </div>
      </div>
      <div class="product-card__info">
        <a href="product.html?id=${p.id}">
          <div class="product-card__name">${p.name}</div>
        </a>
        <div class="product-card__sub">${p.material || ""}</div>
        <div class="product-card__price">${sale}${formatPrice(p.price)}</div>
      </div>
    </div>`;
}

/* ---- CART SIDEBAR HTML (injected into every page) ---- */
function injectCartSidebar() {
  if (document.getElementById("cart-sidebar")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div id="cart-overlay" class="cart-overlay"></div>
    <div id="cart-sidebar" class="cart-sidebar">
      <div class="cart-sidebar__head">
        <h3 style="font-family:var(--font-display);font-size:1.4rem;">Your Cart</h3>
        <button id="cart-close" style="font-size:22px;"><i class="ti ti-x"></i></button>
      </div>
      <div class="cart-sidebar__body" id="cart-body"></div>
      <div class="cart-sidebar__foot">
        <div class="cart-total">
          <span style="font-size:14px;letter-spacing:.08em;text-transform:uppercase;">Total</span>
          <span id="cart-total-price" style="font-family:var(--font-display);font-size:1.3rem;">₹0</span>
        </div>
        <button id="cart-checkout" class="btn btn--primary" style="width:100%;justify-content:center;">
          Proceed to Checkout
        </button>
        <p style="text-align:center;font-size:11px;color:#6b6b6b;margin-top:10px;">Free shipping on orders above ₹999</p>
      </div>
    </div>`);
}

/* ---- AI IMAGE GENERATOR MODAL ---- */
/* 
  This tool lets you generate AI placeholder images by typing a prompt.
  It calls the Anthropic API (proxied) to describe the image concept,
  then shows it as a placeholder overlay with a file-upload option.
  Activate it by pressing the floating ✦ button (dev mode only).
*/
function injectImageTool() {
  const btn = document.createElement("button");
  btn.id = "ai-img-tool-btn";
  btn.innerHTML = '<i class="ti ti-wand"></i>';
  btn.title = "AI Image Tool";
  btn.style.cssText = `
    position:fixed;bottom:24px;left:24px;z-index:8000;
    width:52px;height:52px;border-radius:50%;
    background:#C9A84C;color:#fff;font-size:22px;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 20px rgba(201,168,76,.5);
    cursor:pointer;border:none;
  `;

  const modal = document.createElement("div");
  modal.id = "ai-img-modal";
  modal.style.cssText = `
    display:none;position:fixed;inset:0;z-index:8100;
    background:rgba(0,0,0,.7);align-items:center;justify-content:center;
  `;
  modal.innerHTML = `
    <div style="background:#fff;border-radius:8px;padding:32px;max-width:520px;width:90%;position:relative;">
      <button onclick="document.getElementById('ai-img-modal').style.display='none'"
        style="position:absolute;top:16px;right:16px;font-size:20px;cursor:pointer;"><i class="ti ti-x"></i></button>
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;margin-bottom:8px;">AI Image Placeholder</h3>
      <p style="font-size:13px;color:#6b6b6b;margin-bottom:20px;">
        Describe what you want in the image. The tool generates a styled placeholder
        you can replace with your real photo later.
      </p>
      <div style="margin-bottom:16px;">
        <label style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;display:block;margin-bottom:8px;">Image slot</label>
        <select id="ai-slot" style="width:100%;padding:10px;border:1px solid #e8e4dd;border-radius:4px;font-family:inherit;">
          <option value="hero">Hero Banner</option>
          <option value="categories/necklaces">Category — Necklaces</option>
          <option value="categories/earrings">Category — Earrings</option>
          <option value="categories/rings">Category — Rings</option>
          <option value="categories/bracelets">Category — Bracelets</option>
          <option value="categories/others">Category — Others</option>
          <option value="products/necklace1">Product — Necklace 1</option>
          <option value="products/earrings1">Product — Earrings 1</option>
          <option value="products/ring1">Product — Ring 1</option>
        </select>
      </div>
      <div style="margin-bottom:20px;">
        <label style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;display:block;margin-bottom:8px;">Your prompt</label>
        <textarea id="ai-prompt" rows="3" placeholder="e.g. Elegant gold necklace on white marble, soft studio lighting, minimal…"
          style="width:100%;padding:12px;border:1px solid #e8e4dd;border-radius:4px;font-family:inherit;font-size:14px;resize:vertical;"></textarea>
      </div>
      <div style="display:flex;gap:12px;">
        <button onclick="generateAIImageDesc()" class="btn btn--primary" style="flex:1;justify-content:center;">
          <i class="ti ti-sparkles"></i> Generate Description
        </button>
        <label style="flex:1;" class="btn btn--outline" style="cursor:pointer;justify-content:center;display:inline-flex;align-items:center;gap:8px;">
          <i class="ti ti-upload"></i> Upload Real Image
          <input type="file" accept="image/*" onchange="handleImageUpload(event)" style="display:none">
        </label>
      </div>
      <div id="ai-result" style="margin-top:20px;display:none;">
        <div style="background:#faf7f2;border:1px solid #e8e4dd;border-radius:4px;padding:16px;">
          <p style="font-size:13px;font-style:italic;color:#6b6b6b;" id="ai-result-text"></p>
          <p style="font-size:12px;margin-top:10px;color:#888;">
            💡 Save this description when ordering images from a photographer or AI image tool like Midjourney or DALL·E.
            Then replace the placeholder image in <code>images/</code> folder.
          </p>
        </div>
      </div>
    </div>`;

  document.body.appendChild(btn);
  document.body.appendChild(modal);

  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

async function generateAIImageDesc() {
  const prompt = document.getElementById("ai-prompt").value.trim();
  const slot = document.getElementById("ai-slot").value;
  const resultEl = document.getElementById("ai-result");
  const textEl = document.getElementById("ai-result-text");
  if (!prompt) { alert("Please enter a prompt first."); return; }

  textEl.textContent = "Generating…";
  resultEl.style.display = "block";

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        messages: [{
          role: "user",
          content: `You are an art director for a luxury jewellery brand called Elorine. 
Write a precise, vivid image prompt for a professional photographer or AI image generator for this slot: "${slot}".
User's idea: "${prompt}"
Return ONLY the image prompt, no preamble. Make it detailed, beautiful, and on-brand (luxury, minimal, elegant, warm gold tones).`
        }]
      })
    });
    const data = await resp.json();
    const text = data.content?.map(c => c.text || "").join("") || "Could not generate.";
    textEl.textContent = text;
  } catch (e) {
    textEl.textContent = "Error — make sure you have internet access.";
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  Toast.show(`Image "${file.name}" selected! Place it in images/ folder with the matching filename.`, "ti-photo");
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  injectCartSidebar();
  injectImageTool();
  Cart.init();
  Wishlist.init();
  initHeader();
});
