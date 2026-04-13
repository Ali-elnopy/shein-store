import { useState } from "react";

const categories = [
  { label: "All Apparel", value: "all",        count: 98 },
  { label: "Outerwear",   value: "outerwear",  count: 24 },
  { label: "Tailoring",   value: "tailoring",  count: 18 },
  { label: "Knitwear",    value: "knitwear",   count: 31 },
  { label: "Accessories", value: "accessories",count: 25 },
];

const sizes = ["XS", "S", "M", "L", "XL"];

const colorPalette = [
  { value: "black",  hex: "#1a1a1a" },
  { value: "blue",   hex: "#2962FF" },
  { value: "pink",   hex: "#C2185B" },
  { value: "gray",   hex: "#757575" },
];
const FilterSidebar = ({ filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([150, 850]);

  const updateFilter = (key, value) => {
    onFilterChange((prev) => ({ ...prev, [key]: value }));
  };

  const toggleColor = (color) => {
    const current = filters.colors || [];
    const updated  = current.includes(color)
      ? current.filter((c) => c !== color)
      : [...current, color];
    updateFilter("colors", updated);
  };
  return (
     <div className="flex flex-col gap-8 text-sm">

      {/* ===== Category ===== */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-medium">
          Category
        </p>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => updateFilter("category", cat.value)}
                className={`flex items-center justify-between w-full text-left
                  transition-colors group ${
                    filters.category === cat.value
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-black"
                  }`}
              >
                <span className="text-sm">{cat.label}</span>
                <span className={`text-xs ${
                  filters.category === cat.value ? "text-blue-400" : "text-gray-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-100" />

      {/* ===== Size ===== */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-medium">
          Size
        </p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                updateFilter("size", filters.size === size ? null : size)
              }
              className={`w-10 h-10 text-xs border transition-colors ${
                filters.size === size
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

      {/* ===== Price Range ===== */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-medium">
          Price Range
        </p>

        {/* Slider */}
        <input
          type="range"
          min={150}
          max={850}
          value={priceRange[1]}
          onChange={(e) => {
            const val = Number(e.target.value);
            setPriceRange([priceRange[0], val]);
            updateFilter("priceRange", [priceRange[0], val]);
          }}
          className="w-full accent-black"
        />

        {/* Labels */}
        <div className="flex justify-between mt-2">
          <span className="text-xs text-gray-500">${priceRange[0]}</span>
          <span className="text-xs text-gray-500">${priceRange[1]}</span>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* ===== Palette ===== */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-medium">
          Palette
        </p>
        <div className="flex items-center gap-2">
          {colorPalette.map((c) => (
            <button
              key={c.value}
              onClick={() => toggleColor(c.value)}
              title={c.value}
              className={`w-7 h-7 rounded-full transition-all ${
                filters.colors?.includes(c.value)
                  ? "ring-2 ring-offset-2 ring-black scale-110"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* ===== Reset ===== */}
      <button
        onClick={() =>
          onFilterChange({
            category: "all",
            size: null,
            priceRange: [150, 850],
            colors: [],
          })
        }
        className="text-xs tracking-widest uppercase text-gray-400
          hover:text-black transition-colors text-left"
      >
        Clear all filters
      </button>

    </div>
  )
}

export default FilterSidebar