import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Elena R.",
    initials: "EL",
    rating: 5,
    title: "Perfect tailoring",
    body: `The cut of this blazer is absolute perfection. I was hesitant about the 
      shoulder pads, but they give such a professional yet avant-garde look. 
      The material feels incredible.`,
    date: "March 12, 2024",
    verified: true,
  },
  {
    id: 2,
    name: "Marcus K.",
    initials: "MK",
    rating: 4,
    title: "Exceptional quality",
    body: `I've purchased from many high-end brands, but the fabric quality here is 
      unparalleled for the price point. Highly recommended for anyone building 
      a capsule wardrobe.`,
    date: "Feb 28, 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Sophie T.",
    initials: "ST",
    rating: 5,
    title: "Stunning silhouette",
    body: `Exactly as described. The beige is a beautiful neutral stone color that 
      goes with everything. True to size, but definitely a more structured fit.`,
    date: "Feb 15, 2024",
    verified: true,
  },
];

const StarRating = ({ rating, size = "sm" }) => {
  const sizeClass = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={sizeClass}
          viewBox="0 0 24 24"
          fill={star <= rating ? "#F59E0B" : "none"}
          stroke={star <= rating ? "#F59E0B" : "#D1D5DB"}
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
};

const ProductReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="mt-20 border-t border-gray-100 pt-16">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Customer Sentiment
          </h2>
          <div className="flex items-center gap-3">
            <StarRating rating={Math.round(avgRating)} size="sm" />
            <span className="text-sm font-medium">{avgRating} / 5.0</span>
            <span className="text-sm text-gray-400">
              Based on {reviews.length * 40 + 4} reviews
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowForm((v) => !v)}
          className="px-5 py-3 border border-black text-xs tracking-widest
            uppercase hover:bg-black hover:text-white transition-colors"
        >
          Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="mb-10 p-6 border border-gray-100 bg-gray-50">
          <h3 className="text-sm font-medium tracking-widest uppercase mb-6">
            Your Review
          </h3>
          <div className="flex flex-col gap-4">

            {/* Star picker */}
            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
                Rating
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
                      viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
                  Name
                </p>
                <input type="text" placeholder="Your name"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200
                    outline-none focus:border-black transition-colors bg-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
                  Title
                </p>
                <input type="text" placeholder="Review title"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200
                    outline-none focus:border-black transition-colors bg-white" />
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
                Review
              </p>
              <textarea rows={4} placeholder="Share your experience..."
                className="w-full px-3 py-2.5 text-sm border border-gray-200
                  outline-none focus:border-black transition-colors bg-white resize-none" />
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-black text-white text-xs
                tracking-widest uppercase hover:bg-gray-800 transition-colors">
                Submit Review
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-gray-300 text-xs
                  tracking-widest uppercase hover:border-black transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id}
            className="flex flex-col gap-4 p-6 border border-gray-100">

            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center
                  justify-center text-xs font-medium text-gray-600">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  {review.verified && (
                    <p className="text-[10px] tracking-widest uppercase text-gray-400">
                      Verified Buyer
                    </p>
                  )}
                </div>
              </div>
              <StarRating rating={review.rating} />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium mb-2">"{review.title}"</p>
              <p className="text-xs text-gray-500 leading-relaxed">{review.body}</p>
            </div>

            {/* Date */}
            <p className="text-[11px] text-gray-300 tracking-wide uppercase mt-auto">
              {review.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductReviews