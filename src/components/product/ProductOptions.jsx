import { useState } from "react";

const ProductOptions = ({product, selectedColor, selectedSize, onColorChange, onSizeChange,}) => {
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div className="flex flex-col gap-6">

      {/* ===== Color Selector ===== */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
            Select Color
          </p>
          <p className="text-[10px] tracking-wide text-black font-medium uppercase">
            {selectedColor?.label}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <button
              key={color.label}
              onClick={() => onColorChange(color)}
              title={color.label}
              className={`w-8 h-8 rounded-full transition-all ${
                selectedColor?.label === color.label
                  ? "ring-2 ring-offset-2 ring-black scale-110"
                  : "hover:scale-110 ring-1 ring-gray-200"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* ===== Size Selector ===== */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">
            Select Size
          </p>
          <button className="text-[10px] tracking-widest uppercase text-blue-600
            hover:text-blue-800 transition-colors underline underline-offset-2">
            Size Guide
          </button>
        </div>

        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`w-12 h-12 text-xs border transition-colors ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* ===== Buttons ===== */}
      <div className="flex flex-col gap-3">

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className={`w-full py-4 text-sm tracking-widest uppercase font-medium
            transition-all flex items-center justify-center gap-2 ${
              added
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
            }`}
        >
          {added ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 13l4 4L19 7" />
              </svg>
              Added to Cart
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Cart
            </>
          )}
        </button>

        {/* Wishlist */}
        <button className="w-full py-4 text-sm tracking-widest uppercase font-medium
          border border-gray-300 text-gray-700 hover:border-black hover:text-black
          transition-colors flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
          </svg>
          Wishlist
        </button>
      </div>

      {/* ===== Shipping Badges ===== */}
      <div className="grid grid-cols-2 gap-3">

        <div className="flex items-center gap-3 p-3 border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M5 8h14M5 8a2 2 0 1 0 0-4h14a2 2 0 1 0 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
          </svg>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400">
              Complimentary
            </p>
            <p className="text-xs font-medium text-black">Global Shipping</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" />
          </svg>
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400">
              30-Day
            </p>
            <p className="text-xs font-medium text-black">Seamless Returns</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductOptions