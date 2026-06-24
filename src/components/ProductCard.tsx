import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Product } from "../data/products";
import { motion } from "motion/react";

export function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const isReveal = ["Keychains", "Name Plates", "Gifts"].includes(product.category);
  const message = `Hi, I'm interested in the ${product.name} (${product.price})`;

  return (
    <motion.div 
      className="bg-[#0A0F0D] border border-gray-900 flex flex-col group relative overflow-hidden h-full"
      whileHover="hover"
    >
      <div className="aspect-square overflow-hidden bg-[#050806] relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-brand-black border border-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 shadow-lg">
          {product.category}
        </div>
        {isReveal && (
          <div className="absolute top-4 right-4 border border-brand-green bg-[#0A0A0A]/80 backdrop-blur-sm text-brand-green text-[10px] uppercase font-bold px-3 py-1 tracking-widest z-10 shadow-lg">
            Reveal Edition
          </div>
        )}
        
        {/* Reveal Snap Hover Animation */}
        {isReveal && (
          <motion.div 
            className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center overflow-hidden"
            variants={{
              hover: { opacity: 1 }
            }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
             {/* Diagonal break line */}
             <motion.div 
               className="w-[150%] h-[2px] bg-brand-green shadow-[0_0_15px_rgba(29,158,117,1)] origin-center -rotate-[20deg] absolute"
               variants={{
                 hover: { scaleX: [0, 1], opacity: [0, 1, 0] }
               }}
               transition={{ duration: 0.5, ease: "easeOut" }}
             />
             <motion.div 
               className="absolute inset-0 bg-brand-green/20 mix-blend-overlay"
               variants={{
                 hover: { opacity: [0, 1, 0] }
               }}
               transition={{ duration: 0.5, delay: 0.1 }}
             />
          </motion.div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 border-t border-gray-900 bg-[#0A0F0D]">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mb-6 flex-grow font-medium">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
          <span className="font-bold text-white text-lg tracking-wider">
            {product.price}
          </span>
          <WhatsAppButton text="Order" message={message} className="px-4 py-2 text-sm" />
        </div>
      </div>
    </motion.div>
  );
}
