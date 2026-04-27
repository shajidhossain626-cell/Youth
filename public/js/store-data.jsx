// YOUTH — Store Data & Configuration
// Edit this file to customize products, collections, and brand settings

const STORE_CONFIG = {
  "name": "YOUTH",
  "tagline": "Premium Bangladeshi streetwear built for everyday confidence.",
  "currency": "BDT",
  "currencySymbol": "৳",
  "accent": "#d6b25e"
};

const COLLECTIONS = [
  {
    "id": "all",
    "label": "All",
    "count": 12
  },
  {
    "id": "tshirts",
    "label": "T-Shirts",
    "count": 2
  },
  {
    "id": "shirts",
    "label": "Shirts",
    "count": 2
  },
  {
    "id": "bottoms",
    "label": "Bottoms",
    "count": 2
  },
  {
    "id": "cargo",
    "label": "Cargo Pants",
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
    "name": "Oversized Signature Tee",
    "subtitle": "Heavyweight Cotton / Black",
    "price": 890,
    "originalPrice": 1100,
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
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Cream",
        "hex": "#f0e6d2"
      },
      {
        "name": "Ash",
        "hex": "#777777"
      }
    ],
    "description": "Premium oversized streetwear t-shirt made for everyday confidence with a structured drop-shoulder fit.",
    "details": [
      "240 GSM cotton",
      "Drop shoulder fit",
      "Screen printed graphic",
      "Made in Bangladesh"
    ],
    "images": [
      "oversized-tee"
    ],
    "rating": 4.9,
    "reviews": 128,
    "featured": true
  },
  {
    "id": 2,
    "collection": "tshirts",
    "name": "Minimal Logo Tee",
    "subtitle": "Soft Cotton / Off White",
    "price": 790,
    "originalPrice": 950,
    "costPrice": 380,
    "badge": "New",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Off White",
        "hex": "#f4ead8"
      },
      {
        "name": "Black",
        "hex": "#111111"
      }
    ],
    "description": "Clean minimal logo tee for premium daily styling.",
    "details": [
      "Breathable cotton",
      "Regular oversized fit",
      "Color guaranteed",
      "Made in Bangladesh"
    ],
    "images": [
      "minimal-tee"
    ],
    "rating": 4.8,
    "reviews": 72,
    "featured": true
  },
  {
    "id": 3,
    "collection": "shirts",
    "name": "Premium Check Shirt",
    "subtitle": "100% Cotton / Regular Fit",
    "price": 890,
    "costPrice": 470,
    "badge": "Trending",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Blue Check",
        "hex": "#3e5f88"
      },
      {
        "name": "Brown Check",
        "hex": "#7a4b32"
      }
    ],
    "description": "Comfortable, breathable check shirt with a clean smart-casual silhouette.",
    "details": [
      "100% cotton",
      "Regular fit",
      "Breathable fabric",
      "All-season wear"
    ],
    "images": [
      "check-shirt"
    ],
    "rating": 4.7,
    "reviews": 64,
    "featured": true
  },
  {
    "id": 4,
    "collection": "shirts",
    "name": "Oxford Essential Shirt",
    "subtitle": "Premium Oxford / White",
    "price": 990,
    "costPrice": 520,
    "badge": null,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#ffffff"
      },
      {
        "name": "Sky",
        "hex": "#b7d6ef"
      },
      {
        "name": "Black",
        "hex": "#111111"
      }
    ],
    "description": "A refined button-down shirt built for office, casual wear, and premium styling.",
    "details": [
      "Oxford weave",
      "Button-down collar",
      "Long lasting color",
      "Made in Bangladesh"
    ],
    "images": [
      "oxford-shirt"
    ],
    "rating": 4.8,
    "reviews": 59,
    "featured": false
  },
  {
    "id": 5,
    "collection": "bottoms",
    "name": "Straight Fit Denim",
    "subtitle": "Off White Cream / 30-36 Waist",
    "price": 999,
    "costPrice": 560,
    "badge": "Hot Drop",
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Cream",
        "hex": "#e8dfcf"
      },
      {
        "name": "Washed Blue",
        "hex": "#5c7390"
      }
    ],
    "description": "Straight fit denim with a premium streetwear cut and comfortable waist fit.",
    "details": [
      "Straight fit",
      "Waist 30-36",
      "Premium denim",
      "Delivery all over BD"
    ],
    "images": [
      "straight-denim"
    ],
    "rating": 4.9,
    "reviews": 91,
    "featured": true
  },
  {
    "id": 6,
    "collection": "bottoms",
    "name": "Relaxed Utility Trouser",
    "subtitle": "Cotton Twill / Black",
    "price": 1190,
    "costPrice": 690,
    "badge": null,
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Olive",
        "hex": "#555844"
      }
    ],
    "description": "Relaxed utility trouser designed for clean everyday streetwear looks.",
    "details": [
      "Cotton twill",
      "Relaxed leg",
      "Durable stitching",
      "Utility pockets"
    ],
    "images": [
      "utility-trouser"
    ],
    "rating": 4.7,
    "reviews": 41,
    "featured": false
  },
  {
    "id": 7,
    "collection": "cargo",
    "name": "Camo Cargo Pants",
    "subtitle": "Printed Cargo / Multi Pocket",
    "price": 1390,
    "originalPrice": 1590,
    "costPrice": 820,
    "badge": "Bestseller",
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Forest Camo",
        "hex": "#46513a"
      },
      {
        "name": "Desert Camo",
        "hex": "#a88d64"
      }
    ],
    "description": "Statement camo cargo pants with functional pockets and a strong streetwear silhouette.",
    "details": [
      "Multi-pocket design",
      "Adjustable hem",
      "Durable fabric",
      "Streetwear fit"
    ],
    "images": [
      "camo-cargo"
    ],
    "rating": 4.9,
    "reviews": 103,
    "featured": true
  },
  {
    "id": 8,
    "collection": "cargo",
    "name": "Solid Cargo Pants",
    "subtitle": "Black / Relaxed Fit",
    "price": 1290,
    "costPrice": 760,
    "badge": "New",
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Khaki",
        "hex": "#8a7a56"
      },
      {
        "name": "Olive",
        "hex": "#556044"
      }
    ],
    "description": "Clean solid cargo pants for everyday outfits, ads, shoots, and casual streetwear.",
    "details": [
      "Relaxed fit",
      "Cargo pockets",
      "Comfortable waist",
      "Strong stitching"
    ],
    "images": [
      "solid-cargo"
    ],
    "rating": 4.8,
    "reviews": 77,
    "featured": false
  },
  {
    "id": 9,
    "collection": "outerwear",
    "name": "Urban Zip Hoodie",
    "subtitle": "Fleece / Heavyweight",
    "price": 1490,
    "costPrice": 850,
    "badge": "Winter Pick",
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111111"
      },
      {
        "name": "Grey",
        "hex": "#707070"
      }
    ],
    "description": "Heavyweight zip hoodie made for premium layering and winter streetwear.",
    "details": [
      "Soft fleece",
      "Zip closure",
      "Ribbed cuff",
      "Premium hood structure"
    ],
    "images": [
      "hoodie"
    ],
    "rating": 4.8,
    "reviews": 56,
    "featured": true
  },
  {
    "id": 10,
    "collection": "outerwear",
    "name": "Varsity Street Jacket",
    "subtitle": "Statement Outerwear / Black Cream",
    "price": 2490,
    "costPrice": 1450,
    "badge": "Limited",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Black/Cream",
        "hex": "#1a1714"
      },
      {
        "name": "Navy/Cream",
        "hex": "#1c2b44"
      }
    ],
    "description": "Premium varsity-style jacket for high impact streetwear styling.",
    "details": [
      "Statement fit",
      "Snap buttons",
      "Ribbed collar",
      "Limited drop"
    ],
    "images": [
      "varsity-jacket"
    ],
    "rating": 4.9,
    "reviews": 38,
    "featured": false
  },
  {
    "id": 11,
    "collection": "accessories",
    "name": "YOUTH Classic Cap",
    "subtitle": "Embroidered / Adjustable",
    "price": 590,
    "costPrice": 260,
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
        "name": "Beige",
        "hex": "#c7b99c"
      }
    ],
    "description": "Minimal embroidered cap made to complete everyday streetwear outfits.",
    "details": [
      "Adjustable strap",
      "Embroidery logo",
      "Cotton twill",
      "One size"
    ],
    "images": [
      "cap"
    ],
    "rating": 4.7,
    "reviews": 44,
    "featured": false
  },
  {
    "id": 12,
    "collection": "accessories",
    "name": "Streetwear Crossbody Bag",
    "subtitle": "Nylon / Utility Storage",
    "price": 790,
    "costPrice": 410,
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
        "name": "Olive",
        "hex": "#576247"
      }
    ],
    "description": "Lightweight crossbody bag for daily carry and streetwear styling.",
    "details": [
      "Water resistant nylon",
      "Adjustable strap",
      "Compact pockets",
      "Daily carry"
    ],
    "images": [
      "crossbody-bag"
    ],
    "rating": 4.8,
    "reviews": 36,
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

Object.assign(window, { STORE_CONFIG, COLLECTIONS, PRODUCTS, ProductImage });
