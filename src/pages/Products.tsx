import React, { useState } from "react";
import { productsData, getCategories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { motion } from "motion/react";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getCategories();

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <section className="pt-32 pb-12 px-6 border-b border-gray-900 bg-[#0A0F0D]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Database</h1>
          <p className="text-gray-400 font-medium text-lg max-w-2xl">
            Browse our catalog engineered parts and personalized items. 
            Don't see what you need? We can custom build it for you.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="sticky top-[80px] z-40 bg-[#0A0F0D]/95 backdrop-blur-md pt-4 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:bg-transparent border-b border-gray-900 sm:border-0 mb-12"
          >
            <div className="flex flex-nowrap sm:flex-wrap gap-2 md:gap-4 overflow-x-auto no-scrollbar items-center py-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors border ${
                    activeCategory === cat 
                      ? "bg-brand-green border-brand-green text-brand-black shadow-[0_0_10px_rgba(29,158,117,0.2)]" 
                      : "bg-[#0A0F0D] border-gray-800 text-gray-400 hover:text-white flex-shrink-0"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-900 bg-gray-900 gap-px">
            {filteredProducts.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="bg-brand-black"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-gray-500 font-medium text-lg uppercase tracking-widest">No entries found.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

