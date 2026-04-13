// src/components/shop/Pagination.jsx

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end   = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-16">

      {/* السهم الشمال */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center border border-gray-200
          text-gray-400 hover:border-black hover:text-black
          disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* الأرقام */}
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span
            key={`dots-${idx}`}
            className="w-9 h-9 flex items-center justify-center
              text-sm text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 flex items-center justify-center text-sm
              transition-colors border ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-200 text-gray-600 hover:border-black hover:text-black"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* السهم اليمين */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center border border-gray-200
          text-gray-400 hover:border-black hover:text-black
          disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
};

export default Pagination;