"use client";

import Link from "next/link";
import { FaSearch, FaTag, FaBlog, FaHeart, FaBell } from "react-icons/fa";
import { useAuth } from "@/lib/hooks/useAuth";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const { isAuthenticated } = useAuth();

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Content */}
      <div
        className="fixed inset-x-0 top-0 z-50 w-full origin-top md:hidden bg-bg-card-light dark:bg-bg-card-dark border-b border-border-light dark:border-border-dark shadow-xl transition-transform duration-300"
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-text-primary-light dark:text-text-primary-dark hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-text-muted-light dark:text-text-muted-dark" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 text-base rounded-lg bg-bg-input-light dark:bg-bg-input-dark border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Authentication links */}
          {!isAuthenticated && (
            <div className="flex gap-3 py-2">
              <Link
                href="/login"
                className="flex-1 px-4 py-3 text-center font-medium rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="flex-1 px-4 py-3 text-center font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Menu Items */}
          <nav className="space-y-2">
            <Link
              href="/deals"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors text-text-primary-light dark:text-text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTag className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Deals</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors text-text-primary-light dark:text-text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBlog className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Blog</span>
            </Link>

            <Link
              href="/wishlist"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors text-text-primary-light dark:text-text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHeart className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Wishlist</span>
            </Link>

            <Link
              href="/notifications"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors text-text-primary-light dark:text-text-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBell className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Notifications</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}