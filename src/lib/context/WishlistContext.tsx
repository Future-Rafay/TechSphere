"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define wishlist item type
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  brand?: string;
}

// Define wishlist context type
interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
  itemCount: number;
  isLoading: boolean;
}

// Create context with default values
const WishlistContext = createContext<WishlistContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearWishlist: () => {},
  isInWishlist: () => false,
  itemCount: 0,
  isLoading: true,
});

// Custom hook to use wishlist context
export const useWishlist = () => useContext(WishlistContext);

// Wishlist provider component
export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const loadWishlist = () => {
      try {
        const savedWishlist = localStorage.getItem("wishlist");
        if (savedWishlist) {
          const parsedWishlist = JSON.parse(savedWishlist);
          setItems(parsedWishlist);
        }
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only run in browser environment
    if (typeof window !== 'undefined') {
      loadWishlist();
    } else {
      setIsLoading(false);
    }
  }, []);
  
  // Update localStorage when wishlist changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("wishlist", JSON.stringify(items));
    }
    
    // Calculate total items
    setItemCount(items.length);
  }, [items, isLoading]);
  
  // Add item to wishlist
  const addItem = (item: WishlistItem) => {
    setItems(prevItems => {
      // Check if item already exists in wishlist
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item already exists, return current items
        return prevItems;
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, item];
      }
    });
  };
  
  // Remove item from wishlist
  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Clear wishlist
  const clearWishlist = () => {
    setItems([]);
  };
  
  // Check if item is in wishlist
  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };
  
  return (
    <WishlistContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearWishlist,
      isInWishlist,
      itemCount,
      isLoading,
    }}>
      {children}
    </WishlistContext.Provider>
  );
} 