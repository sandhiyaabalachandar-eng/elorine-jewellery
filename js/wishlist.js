/* ============================================================
   wishlist.js — Wishlist Logic
   ============================================================ */

const Wishlist = (() => {
  let ids = JSON.parse(localStorage.getItem("elorine_wishlist") || "[]");

  function save() {
    localStorage.setItem("elorine_wishlist", JSON.stringify(ids));
    updateBadge();
    updateButtons();
  }

  function toggle(productId) {
    if (ids.includes(productId)) {
      ids = ids.filter(i => i !== productId);
      Toast.show("Removed from wishlist", "ti-heart");
    } else {
      ids.push(productId);
      Toast.show("Added to wishlist", "ti-heart-filled");
    }
    save();
  }

  function has(productId) {
    return ids.includes(productId);
  }

  function count() { return ids.length; }

  function updateBadge() {
    document.querySelectorAll(".wishlist-count").forEach(el => {
      const c = count();
      el.textContent = c;
      el.style.display = c > 0 ? "flex" : "none";
    });
  }

  function updateButtons() {
    document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
      const id = Number(btn.dataset.wishlistId);
      const icon = btn.querySelector("i");
      if (!icon) return;
      if (has(id)) {
        icon.className = "ti ti-heart-filled";
        btn.style.color = "#C9A84C";
      } else {
        icon.className = "ti ti-heart";
        btn.style.color = "";
      }
    });
  }

  function getItems() {
    return ids.map(id => getProductById(id)).filter(Boolean);
  }

  function init() {
    updateBadge();
    updateButtons();
  }

  return { toggle, has, count, getItems, init, updateBadge, updateButtons };
})();
