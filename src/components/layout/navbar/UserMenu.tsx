"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSignOutAlt, FaCog, FaClipboardList, FaChevronDown } from "react-icons/fa";
import { useAuth } from "@/lib/hooks/useAuth";

export default function UserMenu() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <Link 
          href="/login" 
          className="px-4 py-1.5 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Sign In
        </Link>
        <Link 
          href="/signup" 
          className="px-4 py-1.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
        >
          Sign Up
        </Link>
      </div>
    );
  }
  
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowUserMenu(false);
    await logout();
  };
  
  return (
    <div className="relative ml-2">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        onBlur={() => setTimeout(() => setShowUserMenu(false), 100)}
        className="flex items-center space-x-1 p-1 rounded-full hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors focus:outline-none"
      >
        {user?.image ? (
          <Image 
            width={32}
            height={32}
            src={user.image} 
            alt={user.name || "Profile"} 
            className="h-8 w-8 rounded-full object-cover border-2 border-primary"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FaUser className="h-4 w-4" />
          </div>
        )}
        <FaChevronDown className={`h-3 w-3 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
      </button>
      
      {showUserMenu && (
        <div
          className="absolute right-0 mt-2 w-48 bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-lg border border-border-light dark:border-border-dark overflow-hidden z-50 transition-opacity duration-200"
        >
          <div className="p-3 border-b border-border-light dark:border-border-dark">
            <p className="font-medium text-sm">{user?.name}</p>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate">{user?.email}</p>
          </div>
          
          <div className="py-1">
            <Link 
              href="/profile" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
            >
              <FaUser className="mr-2 h-4 w-4 text-primary" />
              Profile
            </Link>
            
            {user?.isAdmin && (
              <Link 
                href="/admin/dashboard" 
                className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
              >
                <FaClipboardList className="mr-2 h-4 w-4 text-primary" />
                Admin Dashboard
              </Link>
            )}
            
            <Link 
              href="/orders" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
            >
              <FaClipboardList className="mr-2 h-4 w-4 text-primary" />
              Orders
            </Link>
            
            <Link 
              href="/settings" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
            >
              <FaCog className="mr-2 h-4 w-4 text-primary" />
              Settings
            </Link>
            
            <button 
              onClick={handleLogout}
              disabled={isLoading}
              className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors text-red-500 disabled:opacity-50"
            >
              <FaSignOutAlt className="mr-2 h-4 w-4" />
              {isLoading ? "Signing out..." : "Sign out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 