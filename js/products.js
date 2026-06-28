/* ============================================================
   products.js — ALL PRODUCT DATA LIVES HERE
   To add/edit products, change values in this array.
   Images: place files in /images/products/ and update src.
   ============================================================ */

const PRODUCTS = [
  /* ---- NECKLACES ---- */
  {
    id: 1,
    name: "Sweetheart Necklace",
    category: "necklaces",
    price: 299,
    originalPrice: null,
    badge: "Signature",
    description: "Adjustable-Anti Tarnish-Stone colour is Pink and the Base colour is Gold",
    material: "Stainless Steel",
    careInstructions: "Avoid contact with water and perfumes. Wipe with a soft cloth after use. Store in provided pouch.",
    images: [
      "images/products/necklace1.jpg",
      "images/products/necklace1-b.jpg",
      "images/products/necklace1-c.jpg"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Celestia Necklace",
    category: "necklaces",
    price: 319,
    originalPrice: null,
    badge: "Sale",
    description: "Adjustable-Anti Tarnish-Stone colour is White with Blue and the Base colour is Golden",
    material: "Stainless Steel",
    careInstructions: "Keep away from chemicals. Wipe gently after wearing. Restring every 2 years.",
    images: [
      "images/products/necklace2.jpg",
    ],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Emerald Necklace",
    category: "necklaces",
    price: 349,
    originalPrice: null,
    badge: null,
    description: "Timeless.Distinctive.Elegant",
    material: "Premium Stainless Steel with Gold Finish",
    careInstructions: "Store flat or coiled. Polish with a dry cloth to maintain shine.",
    images: [
      "images/products/necklace3.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 22,
    name: "Nayara",
    category: "necklaces",
    price: 299,
    originalPrice: null,
    badge: "New",
    description: "Bold.Ethnic.Effortless",
    material: "Silver-plated brass",
    careInstructions: "Avoid contact with water",
    images: [
      "images/products/necklace4.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 23,
    name: "Traditional Gold Set Necklace",
    category: "necklaces",
    price: 599,
    originalPrice: null,
    badge: "Signature",
    description: "Made for Special Occasions.Bold and Ethnic",
    material: "Stainless Steel, gold finish",
    careInstructions: "Avoid harsh chemicals.",
    images: [
      "images/products/necklace5.jpg"
    ],
    inStock: true,
    featured: true
  },

  {
    id: 24,
    name: "Traditional Gold Set",
    category: "necklaces",
    price: 299,
    originalPrice: null,
    badge: "Sale",
    description: "Choker adorned with coins— grounding and ethnic",
    material: "Stainless Steel, gold finish",
    careInstructions: "Keep dry and store flat.",
    images: [
      "images/products/necklace6.jpg"
    ],
    inStock: true,
    featured: false
  },

  /* ---- EARRINGS ---- */
  {
    id: 4,
    name: "Golden Trio",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: "Special",
    description: "Triple layered open hoop",
    material: "Stainless Steel, gold finish",
    careInstructions: "Clean with a soft damp cloth. Do not soak in water.",
    images: [
      "images/products/earrings1.jpg",
    ],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Silver Jhumka",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: null,
    description: "Classic Jhumka Earrings with intricate detailing",
    material: "Stainless Steel, silver finish",
    careInstructions: "Store separately to avoid scratching.",
    images: [
      "images/products/earrings2.jpg"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Silver Jhumka Pair",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: "New",
    description: "Big Jhumka Earrings for Special Occasions ",
    material: "Silver Plated Brass",
    careInstructions: "Avoid Contact with water",
    images: [
      "images/products/earrings3.jpg"
    ],
    inStock: true,
    featured: true,
  },

  {
    id: 19,
    name: "Gold multicolour Jhumka pair",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: "New",
    description: "Jhumka with a subtle hammered finish for everyday elegance.",
    material: "Gold-plated brass",
    careInstructions: "Avoid water and perfumes. Wipe with a soft cloth.",
    images: [
      "images/products/earrings4.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 20,
    name: "Gold Jhumka pair",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: null,
    description: "Special Jhumka Pair",
    material: "gold-plated brass",
    careInstructions: "Avoid impact and water.",
    images: [
      "images/products/earrings5.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 21,
    name: "Classic Gold Jhumka pair",
    category: "earrings",
    price: 199,
    originalPrice: null,
    badge: "Special",
    description: "Classic Jhumka Pair with a timeless design, perfect for any occasion.",
    material: "Gold-plated brass",
    careInstructions: "Keep dry",
    images: [
      "images/products/earrings6.jpg"
    ],
    inStock: true,
    featured: true
  },

  /* ---- RINGS ---- */
  {
    id: 7,
    name: "Soulmate Ring",
    category: "rings",
    price: 269,
    originalPrice: null,
    badge: "Bestseller",
    description: "Rectangular-cut Ring-Adjustable-Red with White Stone and base is silver",
    material: "Base metal is Copper",
    careInstructions: "Remove before washing hands. Store in dry place.",
    images: [
      "images/products/ring1.jpg",
      "images/products/ring1-b.jpg"
    ],
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "The Forever Ring",
    category: "rings",
    price: 249,
    originalPrice: null,
    badge: "Promise Ring",
    description: "Looks like a dream. Feels like a promise.Adjustable.Stone is White with Purple",
    material: "Base metal is Copper",
    careInstructions: "Avoid Contact with harsh chemicals and Water",
    images: [
      "images/products/ring2.jpg"
    ],
    inStock: true,
    featured: true
  },

  
  /* ---- RINGS ---- */
  {
    id: 13,
    name: "Chunky Gold",
    category: "rings",
    price: 329,
    originalPrice: null,
    badge: "New",
    description: "Adjustable,Anti Tarnish,Gold Finish Premium Quality",
    material: "Stainless Steel",
    careInstructions: "Avoid chemicals and water",
    images: [
      "images/products/ring3.jpg"
    ],
    inStock: true,
    featured: false
  },

  /* ---- BRACELETS ---- */
  {
    id: 9,
    name: "Lava Cuff",
    category: "bracelets",
    price: 399,
    originalPrice: null,
    badge: "Trending",
    description: "A statement that never Fades.Anti Tarnish-Adjustable-Waterproof",
    material: "Gold Plated",
    careInstructions: "Avoid water. Store in the box provided.",
    images: [
      "images/products/bracelet1.jpg"
    ],
    inStock: true,
    featured: true
  },

  {
    id: 10,
    name: "Wing Bracelet",
    category: "bracelets",
    price: 299,
    originalPrice: null,
    badge: null,
    description: "High Quality-Adjustable-Anti Tarnish",
    material: "Gold Plated",
    careInstructions: "Avoid prolonged water exposure.",
    images: [
      "images/products/bracelet2.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 14,
    name: "Torus Band",
    category: "bracelets",
    price: 499,
    originalPrice: null,
    badge: "SOLD OUT",
    description: "High Quality-Everyday Wear",
    material: "Plated With 16K Gold",
    careInstructions: "Avoid water and harsh chemicals. Store separately.",
    images: [
      "images/products/bracelet3.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 15,
    name: "Tulip Bracelet",
    category: "bracelets",
    price: 399,
    originalPrice: null,
    badge: "Bestseller",
    description: "Multi-colour seed beads wrapped for a casual, layered look.",
    material: "Stainless Steel",
    careInstructions: "Remove before showering. Gently hand-clean.",
    images: [
      "images/products/bracelet4.jpg",
      "images/products/bracelet4-b.jpg"
    ],
    inStock: true,
    featured: true
  },

  {
    id: 16,
    name: "Minimal Gold Bracelet",
    category: "bracelets",
    price: 199,
    originalPrice: null,
    badge: "Signature",
    description: "Minimalist gold bracelet with a sleek modern design.Perfect for Everyday Wear.",
    material: "gold finish",
    careInstructions: "Wipe with a soft cloth. Avoid perfumes.",
    images: [
      "images/products/bracelet5.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 17,
    name: "Premium Gold Bracelet",
    category: "bracelets",
    price: 499,
    originalPrice: null,
    badge: "Sale",
    description: "Elegant gold bracelet with a sleek modern design.",
    material: "Stainless Steel, gold finish",
    careInstructions: "Keep dry and store flat. Avoid contact with chemicals.",
    images: [
      "images/products/bracelet6.jpg"
    ],
    inStock: true,
    featured: false
  },

  {
    id: 18,
    name: "Gold Bracelet",
    category: "bracelets",
    price: 349,
    originalPrice: null,
    badge: "New",
    description: "Thin chain with a hammered sun charm — subtle sparkle for everyday.",
    material: "Gold-plated brass",
    careInstructions: "Avoid water and perfumes. Store in a pouch.",
    images: [
      "images/products/bracelet7.jpg"
    ],
    inStock: true,
    featured: false
  },

  /* ---- OTHERS ---- */
  {
    id: 11,
    name: "Mini Pink Jewellery Box",
    category: "others",
    price: 250,
    originalPrice: null,
    badge: null,
    description: "Compact jewellery box with velvet lining and multiple compartments",
    material: "Box",
    careInstructions: "Keep dry. Do not bend repeatedly.",
    images: [
      "images/products/other1.jpg"
    ],
    inStock: true,
    featured: false
  }
];

/* ---- CATEGORIES ---- */
/* EDIT: Change category names and image paths here */
const CATEGORIES = [
  { id: "necklaces", label: "Necklaces", image: "images/categories/necklaces.jpg" },
  { id: "earrings",  label: "Earrings",  image: "images/categories/earrings.jpg"  },
  { id: "rings",     label: "Rings",     image: "images/categories/rings.jpg"     },
  { id: "bracelets", label: "Bracelets", image: "images/categories/bracelets.jpg" },
  { id: "others",    label: "Others",    image: "images/categories/others.jpg"    }
];

/* ---- FORMATTERS ---- */
function formatPrice(p) {
  return "₹" + p.toLocaleString("en-IN");
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function getProductsByCategory(cat) {
  if (!cat || cat === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}

function getFeatured() {
  return PRODUCTS.filter(p => p.featured);
}

function initiatePayment(amount, productName) {
  var options = {
    key: "rzp_test_T03LdxQe3E43Uo",
    amount: amount * 100,
    currency: "INR",
    name: "Elorine Jewellery",
    description: productName,
    handler: function (response) {
      alert("Payment Successful! ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    theme: {
      color: "#2C3E6B"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
