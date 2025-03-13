"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaTrash, FaShare, FaEllipsisH, FaSpinner } from "react-icons/fa";
import { useWishlist } from "@/lib/context/WishlistContext";
import { useCart } from "@/lib/context/CartContext";

export default function WishlistPage() {
  const { items: wishlistItems, removeItem, clearWishlist, isLoading } = useWishlist();
  const { addItem: addToCart } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Format date to relative time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Toggle dropdown menu
  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };
  
  // Handle add to cart
  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-primary text-4xl mx-auto mb-4" />
          <p className="text-text-secondary-light dark:text-text-secondary-dark">Loading your wishlist...</p>
        </div>
      </div>
    );
  }
  
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
                  <Link href={`/products/${item.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
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
                              onClick={() => removeItem(item.id)}
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
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.category && (
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                        {item.category}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-success">
                      In Stock
                    </span>
                    
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-hover transition-colors"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors duration-300"
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
                { id: "rec1", name: "Portable Bluetooth Speaker", price: 149.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { id: "rec2", name: "4K Drone with Camera", price: 799.99, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { id: "rec3", name: "Smart Home Hub", price: 129.99, image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { id: "rec4", name: "Wireless Gaming Mouse", price: 89.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              ].map((product) => (
                <div 
                  key={product.id} 
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
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <button 
                        className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                        onClick={() => {
                          const item = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          };
                          const { addItem } = useWishlist();
                          addItem(item);
                        }}
                      >
                        <FaHeart />
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