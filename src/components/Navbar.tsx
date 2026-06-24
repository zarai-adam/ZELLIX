import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, MessageCircle, Package, Wrench, BookOpen } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const TriggerIcon = () => (
    <div className="relative w-8 h-8 cursor-pointer flex items-center justify-center">
      {/* Subtle pulsing ring */}
      <motion.div 
        className="absolute inset-[-4px] rounded-sm border border-brand-green"
        animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      {/* 4-quadrant motif */}
      <div className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1px]">
         <div className="bg-brand-green w-full h-full"></div>
         <div className="border border-brand-green w-full h-full"></div>
         <div className="border border-brand-green w-full h-full"></div>
         <div className="border border-brand-green w-full h-full"></div>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gray-900 shadow-sm" : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          
          <button 
            className="text-white hover:opacity-80 transition-opacity p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <TriggerIcon />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] flex flex-col bg-[#0A0F0D] overflow-hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex-none max-w-7xl mx-auto px-6 h-20 w-full flex items-center justify-between border-b border-gray-900">
               <Logo />
               <button 
                  className="text-white hover:text-brand-green transition-colors p-2"
                  onClick={() => setIsOpen(false)}
               >
                 <X size={32} />
               </button>
            </div>

            <div className="flex-grow flex items-center justify-center p-6 lg:p-12 overflow-y-auto no-scrollbar" onClick={(e) => { if(e.target === e.currentTarget) setIsOpen(false); }}>
               <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 h-full md:h-auto min-h-[400px]">
                 
                 <Link to="/products" className="group flex flex-col justify-between p-8 border border-gray-900 bg-brand-black hover:border-brand-green/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 min-h-[180px]">
                    <div className="text-gray-600 group-hover:text-brand-green transition-colors mb-6">
                       <Package size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h3 className="text-xl lg:text-3xl font-black uppercase text-white mb-2 tracking-tighter">Shop Reveal Products</h3>
                       <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Keychains, fidgets, personalised pieces</p>
                    </div>
                 </Link>

                 <Link to="/products" className="group flex flex-col justify-between p-8 border border-gray-900 bg-brand-black hover:border-brand-green/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 min-h-[180px]">
                    <div className="text-gray-600 group-hover:text-brand-green transition-colors mb-6">
                       <Wrench size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h3 className="text-xl lg:text-3xl font-black uppercase text-white mb-2 tracking-tighter">Spare Parts & Custom Work</h3>
                       <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Functional pieces for appliances and cars</p>
                    </div>
                 </Link>

                 <Link to="/about" className="group flex flex-col justify-between p-8 border border-gray-900 bg-brand-black hover:border-brand-green/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 min-h-[180px]">
                    <div className="text-gray-600 group-hover:text-brand-green transition-colors mb-6">
                       <BookOpen size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h3 className="text-xl lg:text-3xl font-black uppercase text-white mb-2 tracking-tighter">Our Story</h3>
                       <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Ancient craft, modern layer</p>
                    </div>
                 </Link>

                 <a href="https://wa.me/21600000000" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-8 bg-brand-green text-brand-black transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#23B888] min-h-[180px]">
                    <div className="text-brand-black/50 group-hover:text-brand-black transition-colors mb-6">
                       <MessageCircle size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h3 className="text-xl lg:text-3xl font-black uppercase text-brand-black mb-2 tracking-tighter">Order on WhatsApp</h3>
                       <p className="text-sm font-bold text-brand-black/70 uppercase tracking-widest">Skip the browsing, message us directly</p>
                    </div>
                 </a>

               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
