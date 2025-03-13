"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  {
    name: "Computers",
    subcategories: [
      { name: "Laptops", slug: "laptops" },
      { name: "Monitors", slug: "monitors" },
      { name: "Computer Accessories", slug: "computer-accessories" },
      { name: "Storage", slug: "storage" }
    ]
  },
  {
    name: "Mobile Devices",
    subcategories: [
      { name: "Smartphones", slug: "smartphones" },
      { name: "Tablets", slug: "tablets" },
      { name: "Wearables", slug: "wearables" }
    ]
  },
  {
    name: "Entertainment",
    subcategories: [
      { name: "Gaming", slug: "gaming" },
      { name: "Audio", slug: "audio" },
      { name: "Cameras", slug: "cameras" }
    ]
  },
  {
    name: "Home",
    subcategories: [
      { name: "Smart Home", slug: "smart-home" },
      { name: "Networking", slug: "networking" }
    ]
  }
];

export default function CategoryMenu() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  
  return (
    <div className="relative group">
      <button
        onMouseEnter={() => setShowCategoryMenu(true)}
        onMouseLeave={() => setShowCategoryMenu(false)}
        className="p-2 hover:text-primary transition-colors flex items-center gap-1 font-medium"
      >
        Categories
        <FaChevronDown className={`h-4 w-4 transition-transform duration-300 ${
          showCategoryMenu ? 'rotate-180' : ''
        }`} />
      </button>
      
      {showCategoryMenu && (
        <div
          onMouseEnter={() => setShowCategoryMenu(true)}
          onMouseLeave={() => setShowCategoryMenu(false)}
          className="absolute top-full left-0 w-[600px] bg-bg-card-light dark:bg-bg-card-dark shadow-xl rounded-lg border border-border-light dark:border-border-dark p-4 grid grid-cols-4 gap-4 z-50 transition-opacity duration-200"
        >
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="font-medium text-primary">{category.name}</h3>
              <ul className="space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub.slug}>
                    <Link 
                      href={`/categories/${sub.slug}`}
                      className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-4 mt-2 pt-2 border-t border-border-light dark:border-border-dark">
            <Link 
              href="/categories"
              className="text-sm text-primary hover:underline"
            >
              View All Categories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 