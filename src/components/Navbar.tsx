import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors ${
                location.pathname === link.path ? "text-brand-green" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <WhatsAppButton className="py-2.5 px-5 text-sm" />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-brand-black px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-lg font-medium ${
                location.pathname === link.path ? "text-brand-green" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <WhatsAppButton className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
}
