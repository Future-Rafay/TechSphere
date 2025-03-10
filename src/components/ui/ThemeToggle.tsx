"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="h-5 w-5 text-secondary" />
      ) : (
        <FaMoon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
} 