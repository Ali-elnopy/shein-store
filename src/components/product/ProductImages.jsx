import { useState } from "react";


const ProductImages = ({ images, name }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="flex gap-4">

      {/* Thumbnails — عمود على الشمال */}
      <div className="flex flex-col gap-2 w-[72px]">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`w-[72px] h-[88px] bg-gray-100 overflow-hidden flex-shrink-0
              transition-all ${
                activeIdx === idx
                  ? "ring-1 ring-black"
                  : "ring-1 ring-transparent hover:ring-gray-300"
              }`}
          >
            {img ? (
              <img
                src={img}
                alt={`${name} view ${idx + 1}`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-300 text-[10px]">{idx + 1}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 bg-gray-100 overflow-hidden group">

        {images[activeIdx] ? (
          <img
            src={images[activeIdx]}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-300 text-xs tracking-widest uppercase">
              No Image
            </span>
          </div>
        )}

        {/* Zoom icon */}
        <button className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center
          justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>

        {/* Navigation arrows — للموبايل */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIdx((i) => (i === 0 ? images.length - 1 : i - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white
                flex items-center justify-center shadow-sm
                opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIdx((i) => (i === images.length - 1 ? 0 : i + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white
                flex items-center justify-center shadow-sm
                opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                activeIdx === idx ? "bg-black scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProductImages