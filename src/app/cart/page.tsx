"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaTrash, FaArrowLeft, FaLock, FaCreditCard, FaPaypal } from "react-icons/fa";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 349.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Premium wireless headphones",
    link: "/products/wireless-noise-cancelling-headphones"
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 399.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch with fitness tracking",
    link: "/products/smart-watch-series-7"
  },
  {
    id: 3,
    name: "Wireless Charging Dock",
    price: 79.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1608751819407-8c8734b2c66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Wireless charging dock for multiple devices",
    link: "/products/wireless-charging-dock"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "tech20") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Calculate discount
  const discount = promoApplied ? subtotal * 0.2 : 0;
  
  // Calculate shipping
  const shipping = subtotal > 100 ? 0 : 10;
  
  // Calculate total
  const total = subtotal - discount + shipping;
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <FaShoppingCart className="text-primary text-2xl mr-3" />
          <h1 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark">
            Shopping Cart
          </h1>
          <span className="ml-3 bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark text-sm px-2 py-1 rounded-full">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} items
          </span>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Cart Items
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-error hover:text-error/80 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="divide-y divide-border-light dark:divide-border-dark">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="flex-shrink-0 w-full sm:w-24 h-24 relative mb-4 sm:mb-0">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-grow sm:ml-6">
                          <Link 
                            href={item.link}
                            className="text-text-primary-light dark:text-text-primary-dark font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          
                          <div className="flex flex-wrap items-center justify-between mt-2">
                            <div className="flex items-center mr-4 mb-2 sm:mb-0">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center border border-border-light dark:border-border-dark rounded-l-md bg-bg-hover-light dark:bg-bg-hover-dark text-text-primary-light dark:text-text-primary-dark hover:bg-primary hover:text-white transition-colors"
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                min="1" 
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-12 h-8 border-y border-border-light dark:border-border-dark text-center bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark"
                              />
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center border border-border-light dark:border-border-dark rounded-r-md bg-bg-hover-light dark:bg-bg-hover-dark text-text-primary-light dark:text-text-primary-dark hover:bg-primary hover:text-white transition-colors"
                              >
                                +
                              </button>
                            </div>
                            
                            <div className="flex items-center">
                              <span className="font-bold text-primary mr-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-text-muted-light dark:text-text-muted-dark hover:text-error transition-colors"
                                aria-label={`Remove ${item.name} from cart`}
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <FaArrowLeft className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">Subtotal</span>
                      <span className="text-text-primary-light dark:text-text-primary-dark font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-success">
                        <span>Discount (20%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">Shipping</span>
                      <span className="text-text-primary-light dark:text-text-primary-dark font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="border-t border-border-light dark:border-border-dark pt-4 flex justify-between">
                      <span className="text-text-primary-light dark:text-text-primary-dark font-semibold">Total</span>
                      <span className="text-primary font-bold text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label htmlFor="promo-code" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">
                      Promo Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo-code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        placeholder={promoApplied ? "TECH20 Applied" : "Enter code"}
                        className="flex-grow px-3 py-2 border border-border-light dark:border-border-dark rounded-l-md bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        onClick={applyPromoCode}
                        disabled={promoApplied || !promoCode}
                        className={`px-4 py-2 rounded-r-md font-medium ${
                          promoApplied
                            ? 'bg-success text-white cursor-not-allowed'
                            : promoCode
                              ? 'bg-primary text-white hover:bg-primary-dark'
                              : 'bg-bg-hover-light dark:bg-bg-hover-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed'
                        } transition-colors`}
                      >
                        {promoApplied ? "Applied" : "Apply"}
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-success mt-1">
                        Promo code TECH20 applied successfully!
                      </p>
                    )}
                  </div>
                  
                  {/* Checkout Button */}
                  <button
                    className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center"
                  >
                    <FaLock className="mr-2" />
                    Proceed to Checkout
                  </button>
                  
                  {/* Payment Methods */}
                  <div className="mt-6">
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center mb-3">
                      We accept the following payment methods:
                    </p>
                    <div className="flex justify-center space-x-3">
                      <div className="p-2 bg-bg-hover-light dark:bg-bg-hover-dark rounded">
                        <FaCreditCard className="text-text-secondary-light dark:text-text-secondary-dark" />
                      </div>
                      <div className="p-2 bg-bg-hover-light dark:bg-bg-hover-dark rounded">
                        <FaPaypal className="text-text-secondary-light dark:text-text-secondary-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-bg-card-light dark:bg-bg-card-dark rounded-lg">
            <FaShoppingCart className="text-text-muted-light dark:text-text-muted-dark text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
              Your cart is empty
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Looks like you haven&#39;t added any products to your cart yet.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              Start Shopping
            </Link>
          </div>
        )}
        
        {/* Recommended Products */}
        {cartItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Portable Bluetooth Speaker", price: 149.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "4K Drone with Camera", price: 799.99, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Smart Home Hub", price: 129.99, image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Wireless Gaming Mouse", price: 89.99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <button 
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <FaShoppingCart size={16} />
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