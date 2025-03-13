"use client";

import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/lib/context/WishlistContext";

interface WishlistButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category?: string;
    brand?: string;
  };
  className?: string;
  iconSize?: number;
}

export default function WishlistButton({ product, className = "", iconSize = 18 }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const isProductInWishlist = isInWishlist(product.id);
  
  const handleToggleWishlist = () => {
    if (isProductInWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
      setIsAnimating(true);
    }
  };
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isAnimating]);
  
  return (
    <button
      onClick={handleToggleWishlist}
      className={`relative flex items-center justify-center transition-all duration-300 ${
        isProductInWishlist 
          ? "text-primary" 
          : "text-text-secondary-light dark:text-text-secondary-dark hover:text-primary"
      } ${className}`}
      aria-label={isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isAnimating && (
        <div
          className="absolute inset-0 flex items-center justify-center text-primary animate-scale-fade"
        >
          <FaHeart size={iconSize} />
        </div>
      )}
      <FaHeart size={iconSize} />
    </button>
  );
}