"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  return (
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
  );
} 