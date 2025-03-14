"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUser, FaSignOutAlt, FaCog, FaClipboardList, FaChevronDown } from "react-icons/fa";
import { useAuth } from "@/lib/hooks/useAuth";
import { TransitionLink } from "@/components/ui";

export default function UserMenu() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, isAuthenticated, logout} = useAuth();
  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <TransitionLink 
          href="/login" 
          className="px-4 py-1.5 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          direction="up"
        >
          Sign In
        </TransitionLink>
        <TransitionLink 
          href="/signup" 
          className="px-4 py-1.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
          direction="up"
        >
          Sign Up
        </TransitionLink>
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
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-1 focus:outline-none"
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
            <TransitionLink 
              href="/profile" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
              direction="right"
            >
              <FaUser className="mr-2 h-4 w-4 text-primary" />
              Profile
            </TransitionLink>
            
            {user?.isAdmin && (
              <TransitionLink 
                href="/admin/dashboard" 
                className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
                direction="right"
              >
                <FaClipboardList className="mr-2 h-4 w-4 text-primary" />
                Admin Dashboard
              </TransitionLink>
            )}
            
            <TransitionLink 
              href="/orders" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
              direction="right"
            >
              <FaClipboardList className="mr-2 h-4 w-4 text-primary" />
              Orders
            </TransitionLink>
            
            <TransitionLink 
              href="/settings" 
              className="flex items-center px-4 py-2 text-sm hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
              direction="right"
            >
              <FaCog className="mr-2 h-4 w-4 text-primary" />
              Settings
            </TransitionLink>
            
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <FaSignOutAlt className="mr-2 h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 