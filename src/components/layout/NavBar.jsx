// src/components/layout/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4">
      
      {/* Desktop Nav */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-widest text-black">
          THE CURATOR
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Shop", "Journal", "Sustainability"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-blue-600 border-b border-blue-600"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          

          {/* Wishlist */}
          <button className="text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z" />
            </svg>
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] 
              w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Account */}
          <Link to="/auth">
          <button className="text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
            </svg>
          </button>
          </Link>
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 border-t border-gray-100 pt-4">
          {["Shop", "Journal", "Sustainability"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;