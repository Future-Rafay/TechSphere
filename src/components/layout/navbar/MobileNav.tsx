"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { ThemeToggle } from "../../ui";
import { useAuth } from "@/lib/hooks/useAuth";
import { useCart } from "@/lib/context/CartContext";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import gsap from "gsap";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const cartBadgeRef = useRef<HTMLSpanElement>(null);
  
  // Animation for menu button
  useEffect(() => {
    if (!menuButtonRef.current) return;
    
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.inOut" } });
    
    if (isMenuOpen) {
      tl.to(menuButtonRef.current, { 
        rotate: 90, 
        scale: 1.1,
      });
    } else {
      tl.to(menuButtonRef.current, { 
        rotate: 0, 
        scale: 1,
      });
    }
  }, [isMenuOpen]);
  
  // Animation for cart badge
  useEffect(() => {
    if (cartBadgeRef.current && itemCount > 0) {
      gsap.fromTo(
        cartBadgeRef.current,
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.3, 
          ease: "back.out(1.7)" 
        }
      );
    }
  }, [itemCount]);
  
  return (
    <>
      <div className="flex md:hidden items-center space-x-3">
        <ThemeToggle />
        
        <Link href="/cart" className="p-2 hover:text-primary transition-colors relative group">
          <FaShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
          {itemCount > 0 && (
            <span 
              ref={cartBadgeRef}
              className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full flex items-center justify-center"
            >
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
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>
      
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
} 