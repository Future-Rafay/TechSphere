"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";
import { FaArrowLeft, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount, isLoading } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // In a real app, this would redirect to a checkout page or process
    setTimeout(() => {
      router.push("/checkout");
      setIsProcessing(false);
    }, 1000);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <FaShoppingCart className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Loading your cart...</h1>
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FaShoppingCart className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
              Looks like you haven&#39;t added any products to your cart yet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-border-light dark:border-border-dark">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Items ({itemCount})</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 text-sm hover:underline flex items-center"
                  >
                    <FaTrash className="mr-1 h-3 w-3" />
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-border-light dark:divide-border-dark">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="w-24 h-24 bg-bg-hover-light dark:bg-bg-hover-dark rounded-lg overflow-hidden flex-shrink-0">
                      <Image width={96} height={96} src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.color && (
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                              Color: {item.color}
                            </p>
                          )}
                        </div>
                        <div className="text-primary font-medium mt-2 sm:mt-0">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-l-lg border border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 h-8 text-center border-y border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-r-lg border border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border-light dark:border-border-dark">
                <Link
                  href="/products"
                  className="text-primary hover:underline flex items-center"
                >
                  <FaArrowLeft className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border-light dark:border-border-dark pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary">${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-70 flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Proceed to Checkout"
                )}
              </button>

              <div className="mt-6 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <p className="mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 