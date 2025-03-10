"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaSignOutAlt, FaHeart, FaShoppingCart, FaBell } from "react-icons/fa";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
        </div>
        <div className="hidden md:block">
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated" || !session) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
          <FaUser className="h-5 w-5" />
          <span className="hidden md:inline">Sign In</span>
        </Link>
        <Link
          href="/signup"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors duration-200"
        >
          <span>Sign Up</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 focus:outline-none group"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        {session.user?.image ? (
          <div className="relative">
            <Image
              src={session.user.image}
              alt={session.user.name || "User"}
              width={40}
              height={40}
              className="rounded-full border-2 border-primary transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
        ) : (
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105">
              {session.user?.name?.charAt(0) || "U"}
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
        )}
        <span className="hidden md:inline text-text-primary-light dark:text-text-primary-dark group-hover:text-primary transition-colors duration-200">
          {session?.user?.name?.split(" ")[0] || "User"}
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-xl py-1 z-50 border border-border-light dark:border-border-dark transform origin-top-right transition-all duration-200 ease-out animate-in fade-in slide-in-from-top-5">
          <div className="px-4 py-3 border-b border-border-light dark:border-border-dark">
            <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark truncate">
              {session?.user?.email || ""}
            </p>
          </div>
          
          <div className="py-2">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-all duration-200 flex items-center gap-2"
              onClick={() => setIsDropdownOpen(false)}
            >
              <FaUser className="h-4 w-4 text-primary" />
              View Profile
            </Link>
            
            <Link
              href="/wishlist"
              className="block px-4 py-2 text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-all duration-200 flex items-center gap-2"
              onClick={() => setIsDropdownOpen(false)}
            >
              <FaHeart className="h-4 w-4 text-primary" />
              Wishlist
            </Link>
            
            <Link
              href="/cart"
              className="block px-4 py-2 text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-all duration-200 flex items-center gap-2"
              onClick={() => setIsDropdownOpen(false)}
            >
              <FaShoppingCart className="h-4 w-4 text-primary" />
              Cart
            </Link>
            
            <Link
              href="/notifications"
              className="block px-4 py-2 text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark hover:text-primary transition-all duration-200 flex items-center gap-2"
              onClick={() => setIsDropdownOpen(false)}
            >
              <FaBell className="h-4 w-4 text-primary" />
              Notifications
            </Link>
          </div>
          
          <div className="border-t border-border-light dark:border-border-dark py-2">
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark flex items-center gap-2 transition-all duration-200"
            >
              <FaSignOutAlt className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 