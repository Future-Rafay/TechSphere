"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ThemeToggle } from "../../ui";
import { useAuth } from "@/lib/hooks/useAuth";
import { useCart } from "@/lib/context/CartContext";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  
  return (
    <>
      <div className="flex md:hidden items-center space-x-3">
        <ThemeToggle />
        
        <Link href="/cart" className="p-2 hover:text-primary transition-colors relative group">
          <FaShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">{itemCount}</span>
            </span>
          )}
        </Link>
        
        {isAuthenticated && (
          <Link href="/profile" className="p-2 hover:text-primary transition-colors">
            {user?.image ? (
              <Image 
                width={32}
                height={32}
                src={user.image} 
                alt={user.name || "Profile"} 
                className="h-7 w-7 rounded-full object-cover border-2 border-primary"
              />
            ) : (
              <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaUser className="h-3.5 w-3.5" />
              </div>
            )}
          </Link>
        )}
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          <div className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}>
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </div>
        </button>
      </div>
      
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
} 