import { useState } from "react";
import { Link} from "react-router-dom";
import ProductImages  from "../components/product/ProductImages";
import ProductInfo    from "../components/product/ProductInfo";
import ProductOptions from "../components/product/ProductOptions";
import ProductReviews from "../components/product/ProductReviews";

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

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize,  setSelectedSize]  = useState("S");
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 tracking-wide mb-8">
        <Link to="/"     className="hover:text-black transition-colors">Home</Link>
        <span>›</span>
        <Link to="/shop" className="hover:text-black transition-colors">Ready-to-wear</Link>
        <span>›</span>
        <span className="text-black uppercase tracking-widest">{product.name}</span>
      </nav>
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left — Images */}
        <div className="lg:w-[55%]">
          <ProductImages images={product.images} name={product.name} />
        </div>

        {/* Right — Info + Options */}
        <div className="lg:w-[45%] flex flex-col gap-6">
          <ProductInfo product={product} />
          <ProductOptions
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
          />
        </div>
      </div>
      {/* Reviews */}
      <ProductReviews/>
    </div>
  )
}

export default ProductDetails