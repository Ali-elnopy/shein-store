import { useState } from "react";
import { Link } from "react-router-dom";

const allProducts = [
  { id: 1,  name: "Structured Wool Coat",      color: "Oatmeal Melange", price: 540, badge: "New Arrival",   category: "outerwear",   size: ["XS","S","M"],     img: null },
  { id: 2,  name: "Kinetic Wrapdress",          color: "Electric Cobalt", price: 320, badge: "Trending",      category: "knitwear",    size: ["S","M","L"],      img: null },
  { id: 3,  name: "Recycled Silk Camisole",     color: "Dusty Rose",      price: 185, badge: "Sustainability", category: "accessories", size: ["XS","S","M","L"], img: null },
  { id: 4,  name: "Modern Denim Jacket",        color: "Raw Indigo",      price: 425, badge: null,            category: "outerwear",   size: ["S","M","L","XL"], img: null },
  { id: 5,  name: "Architectural Tote",         color: "Obsidian Black",  price: 780, badge: null,            category: "accessories", size: ["M"],              img: null },
  { id: 6,  name: "Modern Tailored Blazer",     color: "Slate Grey",      price: 895, badge: null,            category: "tailoring",   size: ["XS","S","M"],     img: null },
  { id: 7,  name: "Cashmere Ribbed Sweater",    color: "Ivory Cream",     price: 460, badge: "New Arrival",   category: "knitwear",    size: ["S","M","L"],      img: null },
  { id: 8,  name: "Wide Leg Trousers",          color: "Stone Beige",     price: 310, badge: null,            category: "tailoring",   size: ["XS","S","M","L"], img: null },
  { id: 9,  name: "Leather Crossbody",          color: "Cognac Brown",    price: 620, badge: "Trending",      category: "accessories", size: ["M"],              img: null },
];

const badgeColors = {
  "New Arrival":   "bg-[#E91E8C] text-white",
  "Trending":      "bg-[#E91E8C] text-white",
  "Sustainability":"bg-[#4CAF50] text-white",
};

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[340px] bg-gray-100 overflow-hidden">

        {product.img ? (
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover object-top
              group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-300 text-xs tracking-widest uppercase">
              No Image
            </span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2 py-1 text-[10px]
            tracking-widest uppercase ${badgeColors[product.badge] ?? "bg-black text-white"}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted((w) => !w);
          }}
          className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full
            flex items-center justify-center shadow-sm
            opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill={wishlisted ? "currentColor" : "none"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
            />
          </svg>
        </button>

      </div>

      {/* Info */}
      <div className="mt-3 space-y-0.5">
        <p className="text-sm font-medium tracking-wide text-black">
          {product.name}
        </p>
        <p className="text-xs text-gray-400">{product.color}</p>
        <p className="text-sm text-blue-600 font-medium pt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};


const ProductGrid = ({ filters, sortBy }) => {
    
  const filtered = allProducts
    .filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category)
        return false;
      if (filters.size && !p.size.includes(filters.size))
        return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1])
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price_asc")  return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return 0;
    });

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] gap-3">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          No products found
        </p>
        <p className="text-xs text-gray-300">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid