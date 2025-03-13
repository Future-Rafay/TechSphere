"use client";
import { useState, useEffect } from "react";
import { Logo, SearchBar, DesktopNav, MobileNav } from "./navbar/index";

export default function Navbar() {
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
          <Logo />

          {/* Search Bar - Hidden on mobile */}
          <SearchBar />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
