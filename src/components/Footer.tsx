import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

// Simple Tiktok Icon since it's not standard in Lucide mostly
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-gray-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Logo />
          <p className="mt-6 text-gray-400 max-w-sm text-sm leading-relaxed">
            Custom 3D printing studio based in Sousse, Tunisia. 
            Turning your ideas into reality in 24 hours.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://wa.me/21600000000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
              <MessageCircle size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
              <TikTokIcon size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">
              <Facebook size={22} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Home</Link></li>
            <li><Link to="/products" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Products</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-brand-green text-sm transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-brand-green text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Sousse, Tunisia</li>
            <li>+216 00 000 000</li>
            <li>hello@zellix3d.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left">
          &copy; 2026 ZELLIX 3D — Sousse, Tunisia. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs font-semibold tracking-wider">
          صنع في تونس 🇹🇳
        </p>
      </div>
    </footer>
  );
}
