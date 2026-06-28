# Elorine Jewellery Website

A complete, ready-to-deploy jewellery website with cart, wishlist, AI image placeholder tool, and full Netlify hosting.

---

## ✏️ How to Edit Text & Headings

Every editable text area is marked with `<!-- EDIT: ... -->` comments in the HTML files. Open them in VS Code — you'll see exactly what to change.

### Key text areas:

| What to change | File | Look for |
|---|---|---|
| Brand name | All HTML files | `class="header__logo"` |
| Hero heading & subtitle | `index.html` | Inside `.hero__content` |
| Announcement bar | `index.html` | `class="announcement"` |
| Footer description | `index.html` | `class="footer__desc"` |
| About page story | `about.html` | Main text sections |
| Contact details (email, phone) | `contact.html` | `contact-info__item` blocks |
| Product names, prices, descriptions | `js/products.js` | The `PRODUCTS` array |

---

## 🖼️ How to Add Your Images

All images go inside the `images/` folder. Replace the placeholder filenames with your own photos.

### Image slots:

```
images/
├── hero/
│   └── hero-banner.jpg          ← Main homepage hero (recommended: 1920×1080px)
│
├── categories/
│   ├── necklaces.jpg            ← Category card (recommended: 600×800px)
│   ├── earrings.jpg
│   ├── rings.jpg
│   ├── bracelets.jpg
│   └── others.jpg
│
├── products/
│   ├── necklace1.jpg            ← Product photos (recommended: 800×800px square)
│   ├── necklace2.jpg
│   ├── earrings1.jpg
│   ├── ring1.jpg
│   ├── bracelet1.jpg
│   └── ...
│
├── instagram/
│   ├── insta1.jpg               ← Lookbook/Instagram grid (recommended: 600×600px)
│   ├── insta2.jpg
│   ├── insta3.jpg
│   └── insta4.jpg
│
├── about-story.jpg              ← About page photo (recommended: 600×750px)
└── about-founder.jpg            ← Founder photo (recommended: 600×750px)
```

> **Tip:** If an image is missing, the site shows a styled grey placeholder — so nothing breaks.

### Using the AI Image Tool 🪄

While viewing the site in your browser, look for the **gold wand button (✦)** in the bottom-left corner.

1. Click it to open the AI Image Tool
2. Choose which image slot you want to fill
3. Type a description of the image you want
4. Click **Generate Description** — it uses Claude AI to write a professional photo prompt
5. Copy that prompt into Midjourney, DALL·E, or send to a photographer
6. Save the resulting image with the correct filename in the `images/` folder

---

## 🛍️ How to Add / Edit Products

All products are in **`js/products.js`**. Open that file and edit the `PRODUCTS` array.

### Example product entry:
```javascript
{
  id: 13,                          // Unique number — don't repeat
  name: "Gold Lotus Ring",         // Product name
  category: "rings",               // necklaces | earrings | rings | bracelets | others
  price: 2800,                     // Price in ₹ (no commas)
  originalPrice: 3500,             // Set to null if no sale price
  badge: "New",                    // "New" | "Sale" | "Bestseller" | null
  description: "A delicate...",    // Full description shown on product page
  material: "Sterling silver",     // Short material summary
  careInstructions: "Avoid...",    // Care text shown in accordion
  images: [
    "images/products/ring3.jpg",   // First image = main image
    "images/products/ring3-b.jpg"  // Additional images = thumbnails
  ],
  inStock: true,
  featured: true                   // true = shown on homepage
}
```

---

## 🚀 Deploy to GitHub + Netlify

### Step 1: Install Git (if not already)
Download from https://git-scm.com/

### Step 2: Create a GitHub repository
1. Go to https://github.com → click **New repository**
2. Name it `elorine-jewellery`
3. Set it to **Public**
4. **Don't** initialise with README (you already have one)
5. Click **Create repository**

### Step 3: Push your code

Open VS Code's terminal (`Ctrl+`` `) and run these commands one by one:

```bash
cd path/to/elorine-jewellery    # Navigate to your folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/elorine-jewellery.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy on Netlify
1. Go to https://netlify.com → Sign up / Log in (free)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → Authorise Netlify
4. Select your `elorine-jewellery` repository
5. Build settings: leave everything blank (static site)
6. Click **Deploy site**

Your site will be live at a URL like `https://elorine-jewellery.netlify.app` within 1–2 minutes!

### Step 5: Custom domain (optional)
In Netlify → **Domain settings** → Add your own domain (e.g. `elorine.in`).

### Future updates — push changes live:
```bash
git add .
git commit -m "Updated hero image"
git push
```
Netlify auto-deploys every time you push. Changes go live in ~30 seconds.

---

## 🎨 How to Change Colours

Open `css/style.css`. At the very top you'll find the design tokens:

```css
:root {
  --gold:        #C9A84C;   ← Main gold accent colour
  --gold-light:  #E8D5A3;   ← Light gold (used on dark backgrounds)
  --gold-dark:   #8B6914;   ← Darker gold (hover states)
  --cream:       #FAF7F2;   ← Page background
  --charcoal:    #1A1A1A;   ← Dark sections / header
  --mid-gray:    #6B6B6B;   ← Subtext colour
}
```

Change any hex value to update that colour across the entire site instantly.

---

## 📂 File Structure

```
elorine-jewellery/
├── index.html       ← Homepage
├── shop.html        ← All products with filters
├── product.html     ← Single product detail
├── about.html       ← Brand story
├── contact.html     ← Contact form
├── wishlist.html    ← Saved items
├── css/
│   └── style.css    ← All styles (edit colours/fonts here)
├── js/
│   ├── products.js  ← ALL product data (edit this to add/change products)
│   ├── cart.js      ← Shopping cart logic
│   ├── wishlist.js  ← Wishlist logic
│   └── main.js      ← Shared utilities + AI image tool
├── images/          ← Drop your images here
├── netlify.toml     ← Netlify deployment config
└── README.md        ← This file
```

---

## 💡 Tips

- **VS Code Live Server**: Install the "Live Server" extension in VS Code, right-click `index.html` → "Open with Live Server" to preview with hot reload.
- **Images not showing?** Double-check the filename matches exactly (including `.jpg` vs `.jpeg`, uppercase vs lowercase).
- **Cart persists**: The cart uses `localStorage` — items survive page refreshes. Users' carts are saved between visits.
- **Checkout**: The checkout button currently shows an alert. To add real payments, integrate Razorpay or Stripe.
