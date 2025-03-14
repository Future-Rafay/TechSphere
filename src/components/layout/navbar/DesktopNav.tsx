"use client";
import { FaBell } from "react-icons/fa";
import { ThemeToggle, TransitionLink } from "../../ui";
import CategoryMenu from "./CategoryMenu";
import CartPreview from "./CartPreview";
import WishlistPreview from "./WishlistPreview";
import UserMenu from "./UserMenu";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ThemeToggle />

      <CategoryMenu />

      <TransitionLink 
        href="/deals" 
        className="p-2 hover:text-primary transition-colors"
        direction="down"
      >
        Deals
      </TransitionLink>

      <TransitionLink 
        href="/blog" 
        className="p-2 hover:text-primary transition-colors"
        direction="down"
      >
        Tech Blog
      </TransitionLink>

      <div className="flex items-center space-x-3 ml-4">
        <WishlistPreview />

        <div className="relative">
          <TransitionLink
            href="/notifications"
            className="p-2 hover:text-primary transition-colors relative group"
            direction="up"
          >
            <FaBell className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span className="absolute top-6 left-4 h-2 w-2 bg-secondary rounded-full flex items-center justify-center">
            </span>
          </TransitionLink>
        </div>

        <CartPreview />

        <UserMenu />
      </div>
    </div>
  );
} 