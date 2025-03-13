"use client";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { ThemeToggle } from "../../ui";
import CategoryMenu from "./CategoryMenu";
import CartPreview from "./CartPreview";
import WishlistPreview from "./WishlistPreview";
import UserMenu from "./UserMenu";

export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ThemeToggle />

      <CategoryMenu />

      <Link href="/deals" className="p-2 hover:text-primary transition-colors">
        Deals
      </Link>

      <Link href="/blog" className="p-2 hover:text-primary transition-colors">
        Tech Blog
      </Link>

      <div className="flex items-center space-x-3 ml-4">
        <WishlistPreview />

        <div className="relative">
          <Link
            href="/notifications"
            className="p-2 hover:text-primary transition-colors relative group"
          >
            <FaBell className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span className="absolute top-6 left-4 h-2 w-2 bg-secondary rounded-full flex items-center justify-center">
            </span>
          </Link>
        </div>

        <CartPreview />

        <UserMenu />
      </div>
    </div>
  );
} 