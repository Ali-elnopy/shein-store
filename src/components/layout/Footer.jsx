import { Link } from "react-router-dom";
const Footer = () => {
    const columns = [
    {
      title: "Discover",
      links: ["Journal", "Sustainability", "Stores"],
    },
    {
      title: "Service",
      links: ["Shipping", "Returns", "Orders"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms"],
    },
  ];
  return (
     <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-lg font-bold tracking-widest text-black">
              THE CURATOR
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
              Redefining the digital shopping experience through intentional
              curation and high-fashion editorial excellence.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {/* Globe */}
              <button className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 0c-2.5 0-4-4-4-9s1.5-9 4-9m0 18c2.5 0 4-4 4-9s-1.5-9-4-9M3 12h18" />
                </svg>
              </button>
              {/* Instagram */}
              <button className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </button>
              {/* Twitter/X */}
              <button className="text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.918l4.304 5.686 5.772-5.686zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-widest text-black uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-sm text-gray-500 hover:text-black tracking-wide transition-colors uppercase"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row 
          items-center justify-between gap-4">
          <p className="text-xs text-gray-400 tracking-widest uppercase">
            © 2024 The Curator. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer