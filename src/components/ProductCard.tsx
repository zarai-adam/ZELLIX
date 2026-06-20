import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Product } from "../data/products";

export function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const message = `Hi, I'm interested in the ${product.name} (${product.price})`;

  return (
    <div className="bg-brand-light flex flex-col group">
      <div className="aspect-square overflow-hidden bg-gray-200 relative">
        {/* Placeholder image */}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-brand-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-black mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-700 mb-6 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-brand-green/20 pt-4 mt-auto">
          <span className="font-bold text-brand-black text-lg">
            {product.price}
          </span>
          <WhatsAppButton text="Order" message={message} className="px-4 py-2 text-sm" />
        </div>
      </div>
    </div>
  );
}
