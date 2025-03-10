"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaTrash, FaShare, FaEllipsisH } from "react-icons/fa";

// Sample wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Ultra HD Smart TV",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Ultra HD Smart TV with thin bezels",
    link: "/products/ultra-hd-smart-tv",
    inStock: true,
    dateAdded: "2023-05-10T14:30:00"
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Premium wireless headphones",
    link: "/products/wireless-noise-cancelling-headphones",
    inStock: true,
    dateAdded: "2023-05-08T09:15:00"
  },
  {
    id: 3,
    name: "Professional Gaming Laptop",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Gaming laptop with RGB keyboard",
    link: "/products/professional-gaming-laptop",
    inStock: false,
    dateAdded: "2023-05-05T16:45:00"
  },
  {
    id: 4,
    name: "Smart Watch Series 7",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch with fitness tracking",
    link: "/products/smart-watch-series-7",
    inStock: true,
    dateAdded: "2023-05-03T11:20:00"
  },
  {
    id: 5,
    name: "Wireless Charging Dock",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608751819407-8c8734b2c66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Wireless charging dock for multiple devices",
    link: "/products/wireless-charging-dock",
    inStock: true,
    dateAdded: "2023-04-28T13:10:00"
  }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  
  // Format date to relative time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Remove item from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setActiveDropdown(null);
  };
  
  // Toggle dropdown menu
  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };
  
  // Clear all items from wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FaHeart className="text-primary text-2xl mr-3" />
            <h1 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark">
              My Wishlist
            </h1>
            <span className="ml-3 bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark text-sm px-2 py-1 rounded-full">
              {wishlistItems.length} items
            </span>
          </div>
          
          {wishlistItems.length > 0 && (
            <button 
              onClick={clearWishlist}
              className="text-sm text-error hover:text-error/80 transition-colors"
            >
              Clear Wishlist
            </button>
          )}
        </div>
        
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden border border-border-light dark:border-border-dark group hover:border-primary transition-colors duration-300"
              >
                <div className="relative">
                  <Link href={item.link}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  
                  <div className="absolute top-3 right-3">
                    <div className="relative">
                      <button 
                        onClick={() => toggleDropdown(item.id)}
                        className="p-2 rounded-full bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                        aria-label="More options"
                      >
                        <FaEllipsisH />
                      </button>
                      
                      {activeDropdown === item.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-bg-card-light dark:bg-bg-card-dark rounded-md shadow-lg z-10 border border-border-light dark:border-border-dark">
                          <div className="py-1">
                            <button 
                              onClick={() => removeFromWishlist(item.id)}
                              className="flex items-center w-full px-4 py-2 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-error transition-colors"
                            >
                              <FaTrash className="mr-2" />
                              Remove from wishlist
                            </button>
                            <button 
                              className="flex items-center w-full px-4 py-2 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-colors"
                            >
                              <FaShare className="mr-2" />
                              Share product
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link href={item.link}>
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      Added on {formatDate(item.dateAdded)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium ${
                      item.inStock 
                        ? 'text-success' 
                        : 'text-error'
                    }`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                    
                    <button 
                      className={`flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium ${
                        item.inStock 
                          ? 'bg-primary text-white hover:bg-primary-dark' 
                          : 'bg-bg-hover-light dark:bg-bg-hover-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed'
                      } transition-colors`}
                      disabled={!item.inStock}
                    >
                      <FaShoppingCart className="mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-bg-card-light dark:bg-bg-card-dark rounded-lg">
            <FaHeart className="text-text-muted-light dark:text-text-muted-dark text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Add items to your wishlist to save them for later.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Browse Products
            </Link>
          </div>
        )}
        
        {wishlistItems.length > 0 && (
          <div className="mt-12 bg-bg-card-light dark:bg-bg-card-dark rounded-lg p-6">
            <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Portable Bluetooth Speaker", price: 149.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "4K Drone with Camera", price: 799.99, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Smart Home Hub", price: 129.99, image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Wireless Gaming Mouse", price: 89.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="bg-bg-hover-light dark:bg-bg-hover-dark rounded-lg overflow-hidden group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <button 
                        className="p-1 text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                        aria-label={`Add ${product.name} to wishlist`}
                      >
                        <FaHeart size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

    </div>
  );
} 