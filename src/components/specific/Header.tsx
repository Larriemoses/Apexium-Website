import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Our Services" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl w-11/12 mx-auto px-4 flex justify-between items-center py-3 md:py-4">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757606113/WhatsApp_Image_2025-09-06_at_23.37.09_70e673d7_ip3isc.jpg"
            alt="Apexium Logo"
            className="object-contain h-10 md:h-12 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden md:block font-semibold text-[#0B2A44] tracking-wide text-lg md:text-xl">
            Apexium Consult & Services Ltd
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="space-x-8 hidden md:flex text-base font-medium">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `relative transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#0B2A44] after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-[#0B2A44] after:w-full"
                    : "text-gray-600 hover:text-[#0B2A44]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#0B2A44] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 animate-fade-in-down rounded-b-2xl">
          <nav className="flex flex-col space-y-3 px-5 w-11/12 mx-auto text-base font-medium">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-300 rounded-md px-3 py-2 ${
                    isActive
                      ? "text-white bg-[#0B2A44]"
                      : "text-gray-700 hover:text-[#0B2A44] hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
