import { useState } from "react";
import { productsData, getCategories } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getCategories();

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-20 pb-12 px-6 border-b border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our catalog of custom designs, spare parts, and personalized items. 
            Don't see what you need? We can custom build it for you.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium transition-colors border ${
                  activeCategory === cat 
                    ? "bg-brand-green border-brand-green text-white" 
                    : "bg-transparent border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
