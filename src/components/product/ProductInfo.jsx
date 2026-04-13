import React from 'react'

const product = {
  id:1,
  name: "Sculpted Minimalist Blazer",
  collection: "Seasonal Core Collection",
  price: 595,
  originalPrice: 820,
  onSale: true,
  description: `Expertly tailored from a sustainable Italian wool blend. This piece 
    features sharp architectural shoulders, hidden button closure, and a refined 
    hourglass silhouette. Designed to transition seamlessly from day to night.`,
  colors: [
    {label: "stone Beige", hex: "#D4C4A8"},
    { label: "Onyx Black",  hex: "#1a1a1a" },
    { label: "Slate Navy",  hex: "#2C3E6B" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  speces: [
    { label: "Shell",   value: "98% Wool, 2% Elastane" },
    { label: "Lining",  value: "100% Cupro Silk"       },
    { label: "Fit",     value: "Oversized Tailored Fit" },
    { label: "Origin",  value: "Made in Portugal"       },
  ],
  images: [null, null, null, null],
}

const ProductInfo = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Collection badge */}
      <p className='text-[10px] tracking-[0.25em] uppercase text-blue-600 font-semibold'>
        {product.collection}
      </p>
      {/* Name */}
      <h1 className="text-4xl font-bold tracking-tight leading-tight">
        {product.name}
      </h1>
      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-medium text-black">
          ${product.price.toFixed(2)}
        </span>

        {product.onSale && (
          <>
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="px-2 py-0.5 text-[10px] tracking-widest uppercase
              bg-red-500 text-white">
              Sale
            </span>
          </>
        )}
      </div>
      {/* Divider */}
      <div className='border-t border-gray-100'>
        {/* Description */}
        <p className='text-sm text-gray-500 leading-relaxed'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo