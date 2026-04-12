import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Structure Canvas Tote",
    color: "Neutral Beige",
    price: "$450.00",
    badge: null,
    img: null, // حط الـ import بتاعك
  },
  {
    id: 2,
    name: "Sun-Drenched Silk Slip",
    color: "Electric Yellow",
    price: "$225.00",
    badge: "New Arrival",
    img: null,
  },
  {
    id: 3,
    name: "Nara Slim Heel",
    color: "Sage Velvet",
    price: "$310.00",
    badge: null,
    img: null,
  },
  {
    id: 4,
    name: "Tailored Wool Blazer",
    color: "Slate Grey",
    price: "$595.00",
    badge: "Trending",
    img: null,
  },
];

const TrendingEdit = () => {
    const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f5f5f3]">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold tracking-widest uppercase">
          The Trending Edit
        </h2>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 flex items-center justify-center border border-gray-300
              hover:border-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 flex items-center justify-center border border-gray-300
              hover:border-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4
          scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="relative flex-shrink-0 w-[280px] snap-start cursor-pointer group"
          >
            {/* Image */}
            <div className="relative w-full h-[340px] bg-gray-100 overflow-hidden">

              {p.img ? (
                <img src={p.img} alt={p.name}
                  className="w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}

              {/* Badge */}
              {p.badge && (
                <span className="absolute top-3 left-3 px-2 py-1 text-[10px]
                  tracking-widest uppercase bg-[#E91E8C] text-white">
                  {p.badge}
                </span>
              )}

              {/* Wishlist */}
              <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full
                flex items-center justify-center opacity-0 group-hover:opacity-100
                transition-opacity shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
                </svg>
              </button>

            </div>

            {/* Info */}
            <div className="mt-3">
              <p className="text-sm font-medium tracking-wide">{p.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{p.color}</p>
              <p className="text-sm text-blue-600 font-medium mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingEdit