"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useWishlist } from "@/lib/context/WishlistContext";
import Image from "next/image";

export default function WishlistPreview() {
  const [showWishlistPreview, setShowWishlistPreview] = useState(false);
  const { items, itemCount, removeItem } = useWishlist();
  
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowWishlistPreview(true)}
        onMouseLeave={() => setShowWishlistPreview(false)}
        className="p-2 hover:text-primary transition-colors relative group"
      >
        <FaHeart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-[10px] text-white font-bold">{itemCount}</span>
          </span>
        )}
      </button>

      {showWishlistPreview && (
        <div
          onMouseEnter={() => setShowWishlistPreview(true)}
          onMouseLeave={() => setShowWishlistPreview(false)}
          className="absolute top-full right-0 w-80 bg-bg-card-light dark:bg-bg-card-dark shadow-xl rounded-lg border border-border-light dark:border-border-dark p-4 mt-2 z-50 transition-opacity duration-200"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Wishlist</h3>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {itemCount} items
              </span>
            </div>
            
            <div className="max-h-60 overflow-y-auto space-y-3">
              {items.length > 0 ? (
                items.slice(0, 4).map((item) => (
                  <div key={`${item.id}`} className="flex gap-2 items-center">
                    <div className="w-12 h-12 bg-bg-hover-light dark:bg-bg-hover-dark rounded overflow-hidden">
                      <Image width={48} height={48} src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                          ${item.price.toFixed(2)}
                        </p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-xs hover:underline"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-4 text-center text-text-secondary-light dark:text-text-secondary-dark">
                  Your wishlist is empty
                </div>
              )}
              
              {items.length > 4 && (
                <div className="text-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  +{items.length - 4} more items
                </div>
              )}
            </div>
            
            {items.length > 0 && (
              <Link 
                href="/wishlist"
                className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary-hover transition-colors text-sm"
              >
                View Wishlist
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 