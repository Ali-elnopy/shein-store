import React from 'react'

const ShopHeader = ({ totalItems = 98, sortBy, onSortChange }) => {
  return (
    <div className="mb-8">

      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight uppercase mb-3">
        New Arrivals
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
        A curated selection of seasonal essentials, blending architectural
        silhouettes with high-voltage accents. Designed for the modern visionary.
      </p>

      {/* Items count + Sort */}
      <div className="flex items-center justify-between mt-6 pb-4 border-b border-gray-200">
        <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
          {totalItems} Items
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs tracking-widest uppercase bg-transparent border-none
              outline-none cursor-pointer text-black font-medium"
          >
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ShopHeader