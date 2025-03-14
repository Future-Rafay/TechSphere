"use client";
import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/lib/context/CartContext";
import Image from "next/image";
import { TransitionLink } from "@/components/ui";


export default function CartPreview() {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const { items, itemCount, total, removeItem } = useCart();
  
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShowCartPreview(true)}
        onMouseLeave={() => setShowCartPreview(false)}
        className="p-2 hover:text-primary transition-colors relative group"
      >
        <FaShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-[10px] text-white font-bold">{itemCount}</span>
          </span>
        )}
      </button>

      {showCartPreview && (
        <div
          onMouseEnter={() => setShowCartPreview(true)}
          onMouseLeave={() => setShowCartPreview(false)}
          className="absolute top-full right-0 w-80 bg-bg-card-light dark:bg-bg-card-dark shadow-xl rounded-lg border border-border-light dark:border-border-dark p-4 mt-2 transition-opacity duration-200"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Shopping Cart</h3>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {itemCount} items
              </span>
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-2 items-center">
                    <div className="w-20 h-20 bg-bg-hover-light dark:bg-bg-hover-dark rounded shrink-0">
                      <Image width={48} height={48} src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-xs hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="py-4 text-center text-text-secondary-light dark:text-text-secondary-dark">
                  Your cart is empty
                </div>
                <TransitionLink
                  href="/products"
                  className="mb-2 block w-full py-2 px-4 bg-primary text-white rounded-lg text-center hover:bg-primary-hover transition-colors"
                >
                  View Products
                </TransitionLink>
                <TransitionLink
                  href="/cart"
                  className=" block w-full py-2 px-4 bg-primary text-white rounded-lg text-center hover:bg-primary-hover transition-colors"
                >
                  View Cart
                </TransitionLink>
                </div>
                
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t border-border-light dark:border-border-dark pt-2">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <Link
                  href="/cart"
                  className="block w-full py-2 px-4 bg-primary text-white rounded-lg text-center hover:bg-primary-hover transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  className="block w-full py-2 px-4 mt-2 bg-secondary text-white rounded-lg text-center hover:bg-secondary-hover transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 