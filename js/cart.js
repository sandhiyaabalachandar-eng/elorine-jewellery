const Cart = (() => {
  let items = JSON.parse(localStorage.getItem("elorine_cart") || "[]");

  function save() {
    localStorage.setItem("elorine_cart", JSON.stringify(items));
    updateBadge();
    renderSidebar();
  }

  function add(productId, qty = 1) {
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      const p = getProductById(productId);
      if (!p) return;
      items.push({ id: p.id, name: p.name, price: p.price, image: p.images[0], qty });
    }
    save();
    Toast.show("Added to cart", "ti-shopping-bag");
    openCart();
  }

  function remove(productId) {
    items = items.filter(i => i.id !== productId);
    save();
  }

  function updateQty(productId, qty) {
    const item = items.find(i => i.id === productId);
    if (!item) return;
    if (qty <= 0) { remove(productId); return; }
    item.qty = qty;
    save();
  }

  function total() {
    return items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  function count() {
    return items.reduce((s, i) => s + i.qty, 0);
  }

  function updateBadge() {
    document.querySelectorAll(".cart-count").forEach(el => {
      const c = count();
      el.textContent = c;
      el.style.display = c > 0 ? "flex" : "none";
    });
  }

  function renderSidebar() {
    const body = document.getElementById("cart-body");
    const totalEl = document.getElementById("cart-total-price");
    if (!body) return;

    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <i class="ti ti-shopping-bag"></i>
          <p>Your cart is empty</p>
          <a href="shop.html" class="btn btn--primary" style="margin-top:20px;">Browse Collection</a>
        </div>`;
      if (totalEl) totalEl.textContent = "₹0";
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="cart-item" id="cart-item-${item.id}">
        <div class="cart-item__img">
          <img src="${item.image}" alt="${item.name}"
            onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><i class=\\'ti ti-photo\\'></i></div>'" />
        </div>
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__sub">${formatPrice(item.price)}</div>
          <div class="cart-item__row">
            <div class="qty-selector" style="border:1px solid #e8e4dd;border-radius:4px;display:flex;align-items:center;">
              <button onclick="Cart.updateQty(${item.id}, ${item.qty - 1})" style="width:32px;height:32px;font-size:16px;">−</button>
              <span style="width:32px;text-align:center;font-size:14px;">${item.qty}</span>
              <button onclick="Cart.updateQty(${item.id}, ${item.qty + 1})" style="width:32px;height:32px;font-size:16px;">+</button>
            </div>
            <button onclick="Cart.remove(${item.id})" style="font-size:12px;color:#6b6b6b;text-decoration:underline;">Remove</button>
          </div>
        </div>
      </div>`).join("");

    if (totalEl) totalEl.textContent = formatPrice(total());
  }

  function openCart() {
    document.getElementById("cart-sidebar")?.classList.add("open");
    document.getElementById("cart-overlay")?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    document.getElementById("cart-sidebar")?.classList.remove("open");
    document.getElementById("cart-overlay")?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function init() {
    updateBadge();
    renderSidebar();
    document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
    document.getElementById("cart-close")?.addEventListener("click", closeCart);
    document.getElementById("cart-checkout")?.addEventListener("click", () => {
      const options = {
        key: "rzp_test_T03LdxQe3E43Uo",
        amount: total() * 100,
        currency: "INR",
        name: "swethaa B",
        description: "Order from Elorine",
        handler: function (response) {
          items = [];
          save();
          closeCart();
          Toast.show("Order confirmed! Payment ID: " + response.razorpay_payment_id, "ti-check");
        },
        theme: {
          color: "#C9A84C"
        }
      };
      const rzp = new Razorpay(options);
      rzp.open();
    });
  }

  return { add, remove, updateQty, total, count, openCart, closeCart, init, renderSidebar };
})();