// YOUTH — Store Data & Configuration
// Edit this file to customize products, collections, and brand settings

const STORE_CONFIG = {
  "name": "YOUTH",
  "tagline": "Premium Bangladeshi streetwear built for everyday confidence.",
  "description": "Premium Bangladeshi streetwear — t-shirts, cargos, denim, shirts, hoodies and accessories.",
  "currency": "BDT",
  "currencySymbol": "৳",
  "email": "hello@youthbd.com",
  "instagram": "@youth.bd"
};

const COLLECTIONS = [
  {
    "id": "all",
    "label": "All",
    "count": 10
  },
  {
    "id": "tshirts",
    "label": "T-Shirts",
    "count": 2
  },
  {
    "id": "bottoms",
    "label": "Bottoms",
    "count": 2
  },
  {
    "id": "shirts",
    "label": "Shirts",
    "count": 2
  },
  {
    "id": "outerwear",
    "label": "Outerwear",
    "count": 2
  },
  {
    "id": "accessories",
    "label": "Accessories",
    "count": 2
  }
];

const PRODUCTS = [
  {
    "id": 1,
    "collection": "tshirts",
    "name": "Oversized Washed Tee",
    "subtitle": "Heavyweight Cotton / Jet Black",
    "price": 890,
    "originalPrice": 1150,
    "costPrice": 430,
    "badge": "Bestseller",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Jet Black",
        "hex": "#111111"
      },
      {
        "name": "Off White",
        "hex": "#eee7d8"
      },
      {
        "name": "Ash Grey",
        "hex": "#8b8b8b"
      }
    ],
    "description": "A premium oversized tee built with heavyweight cotton, dropped shoulders, and a clean streetwear fit for everyday rotation.",
    "details": [
      "240 GSM cotton",
      "Oversized fit",
      "Drop shoulder",
      "Made in Bangladesh",
      "Color guaranteed"
    ],
    "images": [
      "washed-tee",
      "tee-detail",
      "tee-model"
    ],
    "rating": 4.9,
    "reviews": 286,
    "featured": true
  },
  {
    "id": 2,
    "collection": "tshirts",
    "name": "Core Logo Tee",
    "subtitle": "Premium Cotton / Cream",
    "price": 790,
    "originalPrice": 990,
    "costPrice": 360,
    "badge": "New",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Cream",
        "hex": "#f1e6d2"
      },
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Mocha",
        "hex": "#6b4b35"
      }
    ],
    "description": "A clean logo tee with a premium handfeel, breathable cotton, and minimal branding designed for daily wear.",
    "details": [
      "100% cotton",
      "Regular street fit",
      "Soft enzyme wash",
      "Screen printed logo"
    ],
    "images": [
      "core-tee",
      "logo-detail"
    ],
    "rating": 4.8,
    "reviews": 174,
    "featured": true
  },
  {
    "id": 3,
    "collection": "bottoms",
    "name": "Tactical Cargo Pants",
    "subtitle": "Multi-Pocket / Relaxed Fit",
    "price": 1490,
    "originalPrice": 1790,
    "costPrice": 820,
    "badge": "Hot Drop",
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Olive",
        "hex": "#596044"
      },
      {
        "name": "Black",
        "hex": "#101010"
      },
      {
        "name": "Sand",
        "hex": "#b8a276"
      }
    ],
    "description": "Functional cargo pants with durable fabric, deep pockets, and a relaxed silhouette made for streetwear styling.",
    "details": [
      "Durable twill fabric",
      "6-pocket utility design",
      "Adjustable hem",
      "Relaxed straight fit"
    ],
    "images": [
      "cargo-pants",
      "cargo-detail",
      "cargo-model"
    ],
    "rating": 4.9,
    "reviews": 321,
    "featured": true
  },
  {
    "id": 4,
    "collection": "bottoms",
    "name": "Straight Fit Denim",
    "subtitle": "Washed Denim / Off White",
    "price": 999,
    "originalPrice": 1290,
    "costPrice": 540,
    "badge": "Limited",
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Off White",
        "hex": "#e9dfcf"
      },
      {
        "name": "Vintage Blue",
        "hex": "#607894"
      },
      {
        "name": "Washed Black",
        "hex": "#2b2b2b"
      }
    ],
    "description": "A clean straight-fit denim made for premium casual styling with a structured shape and comfortable waist fit.",
    "details": [
      "Straight fit",
      "Sizes 30–36",
      "Premium denim feel",
      "All over BD delivery"
    ],
    "images": [
      "straight-denim",
      "denim-detail"
    ],
    "rating": 4.7,
    "reviews": 132,
    "featured": false
  },
  {
    "id": 5,
    "collection": "shirts",
    "name": "Check Regular Fit Shirt",
    "subtitle": "100% Cotton / Breathable",
    "price": 890,
    "originalPrice": 1090,
    "costPrice": 460,
    "badge": "Fresh",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Navy Check",
        "hex": "#1e3148"
      },
      {
        "name": "Brown Check",
        "hex": "#6d4c3d"
      },
      {
        "name": "Green Check",
        "hex": "#384b39"
      }
    ],
    "description": "A comfortable check shirt made with breathable cotton, clean finishing, and color guaranteed fabric.",
    "details": [
      "100% cotton",
      "Regular fit",
      "Breathable fabric",
      "Color guaranteed"
    ],
    "images": [
      "check-shirt",
      "shirt-detail"
    ],
    "rating": 4.8,
    "reviews": 118,
    "featured": false
  },
  {
    "id": 6,
    "collection": "shirts",
    "name": "Minimal Half Sleeve Shirt",
    "subtitle": "Premium Summer Fabric",
    "price": 990,
    "originalPrice": 1250,
    "costPrice": 520,
    "badge": null,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Stone",
        "hex": "#b8ad9a"
      },
      {
        "name": "White",
        "hex": "#f5f1e8"
      },
      {
        "name": "Black",
        "hex": "#111111"
      }
    ],
    "description": "A clean minimal half sleeve shirt with premium finishing, made for summer layering and smart casual streetwear looks.",
    "details": [
      "Soft summer fabric",
      "Premium collar finish",
      "Relaxed regular fit",
      "Easy to style"
    ],
    "images": [
      "half-shirt"
    ],
    "rating": 4.7,
    "reviews": 94,
    "featured": false
  },
  {
    "id": 7,
    "collection": "outerwear",
    "name": "Urban Coach Jacket",
    "subtitle": "Water-Resistant / Boxy Fit",
    "price": 1890,
    "originalPrice": 2290,
    "costPrice": 980,
    "badge": "Editor Pick",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#0d0d0d"
      },
      {
        "name": "Charcoal",
        "hex": "#3a3a3a"
      },
      {
        "name": "Khaki",
        "hex": "#8b7f5a"
      }
    ],
    "description": "A lightweight coach jacket with a boxy silhouette, subtle detailing, and weather-ready finish for urban styling.",
    "details": [
      "Water-resistant shell",
      "Boxy street fit",
      "Snap button closure",
      "Lightweight layering"
    ],
    "images": [
      "coach-jacket",
      "jacket-detail"
    ],
    "rating": 4.9,
    "reviews": 155,
    "featured": true
  },
  {
    "id": 8,
    "collection": "outerwear",
    "name": "Heavy Fleece Hoodie",
    "subtitle": "Oversized / Drop Shoulder",
    "price": 1590,
    "originalPrice": 1990,
    "costPrice": 850,
    "badge": "Winter Essential",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#101010"
      },
      {
        "name": "Heather Grey",
        "hex": "#9b9b9b"
      },
      {
        "name": "Forest",
        "hex": "#233b2b"
      }
    ],
    "description": "A warm oversized hoodie built with heavy fleece, ribbed finishing, and a premium drape for winter streetwear fits.",
    "details": [
      "Heavy fleece",
      "Oversized fit",
      "Ribbed cuffs",
      "Kangaroo pocket"
    ],
    "images": [
      "fleece-hoodie",
      "hoodie-detail"
    ],
    "rating": 4.8,
    "reviews": 201,
    "featured": false
  },
  {
    "id": 9,
    "collection": "accessories",
    "name": "Logo Cap",
    "subtitle": "Adjustable / Washed Cotton",
    "price": 490,
    "originalPrice": 650,
    "costPrice": 230,
    "badge": "Add-on",
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Cream",
        "hex": "#e8dfcc"
      },
      {
        "name": "Olive",
        "hex": "#5b6047"
      }
    ],
    "description": "A clean adjustable cap with washed cotton texture and minimal YOUTH logo embroidery.",
    "details": [
      "Adjustable strap",
      "Washed cotton",
      "Embroidered logo",
      "One size fits most"
    ],
    "images": [
      "logo-cap"
    ],
    "rating": 4.6,
    "reviews": 76,
    "featured": false
  },
  {
    "id": 10,
    "collection": "accessories",
    "name": "Utility Crossbody Bag",
    "subtitle": "Street Utility / Compact",
    "price": 1190,
    "originalPrice": 1450,
    "costPrice": 610,
    "badge": "Utility",
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Grey",
        "hex": "#626262"
      }
    ],
    "description": "A compact crossbody bag with utility pockets, adjustable strap, and daily carry capacity for streetwear looks.",
    "details": [
      "Adjustable strap",
      "Multiple compartments",
      "Durable fabric",
      "Daily carry size"
    ],
    "images": [
      "crossbody-bag",
      "bag-detail"
    ],
    "rating": 4.8,
    "reviews": 89,
    "featured": false
  }
];

function ProductImage({ type, className, style, dark }) {
  const palettes = {
    "washed-tee": { bg: "#111111", fg: "#d6b25e", label: "oversized tee" },
    "tee-detail": { bg: "#2b2b2b", fg: "#f2d27a", label: "cotton detail" },
    "tee-model": { bg: "#1a1a1a", fg: "#f5efe4", label: "model fit" },
    "core-tee": { bg: "#f1e6d2", fg: "#111111", label: "core logo tee" },
    "logo-detail": { bg: "#d6b25e", fg: "#080807", label: "logo detail" },
    "cargo-pants": { bg: "#596044", fg: "#f5efe4", label: "cargo pants" },
    "cargo-detail": { bg: "#2d3425", fg: "#d6b25e", label: "pocket detail" },
    "cargo-model": { bg: "#8b7f5a", fg: "#111111", label: "cargo fit" },
    "straight-denim": { bg: "#e9dfcf", fg: "#3a3a3a", label: "straight denim" },
    "denim-detail": { bg: "#607894", fg: "#f5efe4", label: "denim detail" },
    "check-shirt": { bg: "#1e3148", fg: "#d6b25e", label: "check shirt" },
    "shirt-detail": { bg: "#6d4c3d", fg: "#f5efe4", label: "fabric detail" },
    "half-shirt": { bg: "#b8ad9a", fg: "#111111", label: "half sleeve shirt" },
    "coach-jacket": { bg: "#0d0d0d", fg: "#d6b25e", label: "coach jacket" },
    "jacket-detail": { bg: "#3a3a3a", fg: "#f5efe4", label: "jacket detail" },
    "fleece-hoodie": { bg: "#233b2b", fg: "#f2d27a", label: "fleece hoodie" },
    "hoodie-detail": { bg: "#9b9b9b", fg: "#111111", label: "fleece detail" },
    "logo-cap": { bg: "#111111", fg: "#d6b25e", label: "logo cap" },
    "crossbody-bag": { bg: "#242424", fg: "#d6b25e", label: "crossbody bag" },
    "bag-detail": { bg: "#626262", fg: "#f5efe4", label: "bag detail" },
  };
  const p = palettes[type] || { bg: "#1a1a1a", fg: "#d6b25e", label: type };
  return (
    <div className={className} style={{ background: p.bg, position: "relative", overflow: "hidden", ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="500" fill={p.bg} />
        {/* Diagonal stripe texture */}
        <pattern id={`stripe-${type}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="20" height="20" fill={p.bg} />
          <rect width="1" height="20" fill={p.fg} opacity="0.08" />
        </pattern>
        <rect width="400" height="500" fill={`url(#stripe-${type})`} />
        {/* Center label */}
        <text x="200" y="240" textAnchor="middle" fill={p.fg} opacity="0.5" fontFamily="monospace" fontSize="11" fontWeight="400" letterSpacing="2">
          {p.label.toUpperCase()}
        </text>
        <text x="200" y="258" textAnchor="middle" fill={p.fg} opacity="0.3" fontFamily="monospace" fontSize="9">
          drop product image here
        </text>
      </svg>
    </div>
  );
}

function getProducts() {
  const live = window.__appContext && window.__appContext.storeData && window.__appContext.storeData.products;
  return Array.isArray(live) && live.length ? live : (window.PRODUCTS || PRODUCTS);
}
function getCollections() {
  const live = window.__appContext && window.__appContext.storeData && window.__appContext.storeData.categories;
  return Array.isArray(live) && live.length ? live : (window.COLLECTIONS || COLLECTIONS);
}
function getSettings() {
  const live = window.__appContext && window.__appContext.storeData && window.__appContext.storeData.settings;
  return live && Object.keys(live).length ? live : (window.STORE_CONFIG || STORE_CONFIG);
}
Object.assign(window, { STORE_CONFIG, COLLECTIONS, PRODUCTS, ProductImage, getProducts, getCollections, getSettings });
