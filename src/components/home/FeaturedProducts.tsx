"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { products } from "@/data/products";
import { useCart } from "@/lib/context/CartContext";

// Get a subset of products for the featured section
const featuredProducts = products.slice(0, 8);

export default function FeaturedProducts() {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="py-16 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Featured Products
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
            Discover our handpicked selection of the latest and most innovative tech products that are trending right now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      <FaShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 