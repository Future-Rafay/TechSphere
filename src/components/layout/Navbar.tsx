"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch, FaShoppingCart, FaHeart, FaBell, FaChevronDown } from "react-icons/fa";
import { ThemeToggle } from "../ui";
import UserProfile from "../auth/UserProfile";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Laptops & Computers",
    subcategories: ["Gaming Laptops", "Business Laptops", "Desktop PCs", "Accessories"]
  },
  {
    name: "Smartphones & Tablets",
    subcategories: ["iPhones", "Android Phones", "iPads", "Android Tablets"]
  },
  {
    name: "Gaming & Entertainment",
    subcategories: ["Consoles", "Video Games", "Gaming Accessories", "VR Headsets"]
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [cartCount] = useState(3);
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
     className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bg-card-light/80 dark:bg-bg-card-dark/80 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-bg-card-light dark:bg-bg-card-dark py-3'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-xl sm:text-2xl font-orbitron font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                  Tech
                </span>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  Sphere
                </span>
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-4 lg:mx-8">
            <div className={`relative transform transition-all duration-300 ${
              isSearchFocused ? 'scale-105' : ''
            }`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className={`h-5 w-5 transition-colors duration-300 ${
                  isSearchFocused 
                    ? 'text-primary' 
                    : 'text-text-muted-light dark:text-text-muted-dark'
                }`} />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="relative group">
              <button
                onMouseEnter={() => setShowCategoryMenu(true)}
                onMouseLeave={() => setShowCategoryMenu(false)}
                className="p-2 hover:text-primary transition-colors flex items-center gap-1 font-medium"
              >
                Categories
                <FaChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                  showCategoryMenu ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {showCategoryMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowCategoryMenu(true)}
                    onMouseLeave={() => setShowCategoryMenu(false)}
                    className="absolute top-full left-0 w-[500px] bg-bg-card-light dark:bg-bg-card-dark shadow-xl rounded-lg border border-border-light dark:border-border-dark p-4 grid grid-cols-2 gap-4"
                  >
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <h3 className="font-medium text-primary">{category.name}</h3>
                        <ul className="space-y-1">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link 
                                href={`/category/${sub.toLowerCase().replace(/ /g, '-')}`}
                                className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/deals" className="p-2 hover:text-primary transition-colors">
              Deals
            </Link>
            
            <Link href="/blog" className="p-2 hover:text-primary transition-colors">
              Tech Blog
            </Link>
            
            <div className="flex items-center space-x-3 ml-4">
              <Link 
                href="/wishlist" 
                className="p-2 hover:text-primary transition-colors relative group"
              >
                <FaHeart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
              </Link>
              
              <div className="relative">
                <Link 
                  href="/notifications" 
                  className="p-2 hover:text-primary transition-colors relative group"
                >
                  <FaBell className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-[10px] text-white font-bold">2</span>
                  </span>
                </Link>
              </div>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setShowCartPreview(true)}
                  onMouseLeave={() => setShowCartPreview(false)}
                  className="p-2 hover:text-primary transition-colors relative group"
                >
                  <FaShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">{cartCount}</span>
                  </span>
                </button>

                <AnimatePresence>
                  {showCartPreview && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setShowCartPreview(true)}
                      onMouseLeave={() => setShowCartPreview(false)}
                      className="absolute top-full right-0 w-80 bg-bg-card-light dark:bg-bg-card-dark shadow-xl rounded-lg border border-border-light dark:border-border-dark p-4 mt-2"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Shopping Cart</h3>
                          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            {cartCount} items
                          </span>
                        </div>
                        <div className="space-y-2">
                          {/* Sample cart items */}
                          <div className="flex gap-2 items-center">
                            <div className="w-12 h-12 bg-bg-hover-light dark:bg-bg-hover-dark rounded"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium truncate">Product Name</p>
                              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">$99.99</p>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-2">
                          <Link
                            href="/cart"
                            className="block w-full py-2 px-4 bg-primary text-white rounded-lg text-center hover:bg-primary-hover transition-colors"
                          >
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="ml-2">
                <UserProfile />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            
            <Link href="/cart" className="p-2 hover:text-primary transition-colors relative group">
              <FaShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">{cartCount}</span>
              </span>
            </Link>
            
            <div className="ml-1">
              <UserProfile />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg-card-light dark:bg-bg-card-dark border-t border-border-light dark:border-border-dark overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              {/* Mobile Search */}
              <div className="py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-text-muted-light dark:text-text-muted-dark" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              {categories.map((category) => (
                <div key={category.name} className="py-2">
                  <h3 className="text-sm font-medium text-primary mb-2">{category.name}</h3>
                  <div className="pl-4 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/category/${sub.toLowerCase().replace(/ /g, '-')}`}
                        className="block text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link 
                href="/deals"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              
              <Link 
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Blog
              </Link>
              
              <Link 
                href="/wishlist"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
              
              <Link 
                href="/notifications"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
