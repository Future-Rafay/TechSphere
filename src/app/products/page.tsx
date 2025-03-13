"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaFilter, FaSort } from "react-icons/fa";
import { products } from "@/data/products";
import { useCart } from "@/lib/context/CartContext";

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured - keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortOption]);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Mobile filter toggle */}
        <button
          className="md:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        
        {/* Filters sidebar */}
        <div className={`w-full md:w-64 md:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="bg-bg-card-light dark:bg-bg-card-dark p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            {/* Category filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="all-categories"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="mr-2"
                  />
                  <label htmlFor="all-categories">All Categories</label>
                </div>
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price range filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
            
            {/* Sort dropdown */}
            <div className="relative">
              <div className="flex items-center gap-2">
                <FaSort />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-bg-card-light dark:bg-bg-card-dark border border-border-light dark:border-border-dark rounded-lg p-2"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
                      {product.category}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                            size={14} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <button 
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        aria-label={`Add ${product.name} to cart`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                      >
                        <FaShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                Try adjusting your filters to find what you&#39;re looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 2000]);
                  setSortOption("featured");
                }}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
