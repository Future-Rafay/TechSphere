"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Ultra HD Smart TV",
    category: "Televisions",
    price: 1299.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Ultra HD Smart TV with thin bezels",
    link: "/products/ultra-hd-smart-tv"
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 349.99,
    rating: 4.9,
    reviews: 208,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Premium wireless headphones",
    link: "/products/wireless-noise-cancelling-headphones"
  },
  {
    id: 3,
    name: "Professional Gaming Laptop",
    category: "Computers",
    price: 1899.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Gaming laptop with RGB keyboard",
    link: "/products/professional-gaming-laptop"
  },
  {
    id: 4,
    name: "Smart Watch Series 7",
    category: "Wearables",
    price: 399.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch with fitness tracking",
    link: "/products/smart-watch-series-7"
  },
  {
    id: 5,
    name: "Wireless Charging Dock",
    category: "Accessories",
    price: 79.99,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1608751819407-8c8734b2c66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Wireless charging dock for multiple devices",
    link: "/products/wireless-charging-dock"
  },
  {
    id: 6,
    name: "4K Drone with Camera",
    category: "Cameras",
    price: 799.99,
    rating: 4.7,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Drone with 4K camera",
    link: "/products/4k-drone-with-camera"
  },
  {
    id: 7,
    name: "Smart Home Hub",
    category: "Smart Home",
    price: 129.99,
    rating: 4.4,
    reviews: 53,
    image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart home hub device",
    link: "/products/smart-home-hub"
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 149.99,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Portable waterproof bluetooth speaker",
    link: "/products/portable-bluetooth-speaker"
  }
];

export default function FeaturedProducts() {
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
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link href={product.link} className="block">
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
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
} 