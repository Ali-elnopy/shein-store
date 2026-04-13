import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import FilterSidebar from '../components/shop/FilterSidebar'
import ProductGrid from '../components/shop/ProductGrid';
import Pagination from '../components/shop/Pagination';
import { useState } from 'react';

const Shop = () => {
  const [sortBy, setSortBy]       = useState("newest");
  const [filters, setFilters]     = useState({
    category: "all",
    size: null,
    priceRange: [150, 850],
    colors: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
      {/* Header */}
      <ShopHeader 
        totalItems={98}
        sortBy={sortBy}
        onSortChange={setSortBy}/>
      {/* Body: Sidebar + Grid */}
      <div className="flex gap-10 mt-8">
        <aside className="w-[200px] flex-shrink-0">
          <FilterSidebar filters={filters} onFilterChange={setFilters}/>
        </aside>
        {/* Grid + Pagination */}
        <div className='flex-1'>
          <ProductGrid filters={filters} sortBy={sortBy}/>
          <Pagination 
            currentPage={currentPage}
            totalPages={12}
            onPageChange={setCurrentPage}/>
        </div>
      </div>
    </div>
  )
}

export default Shop