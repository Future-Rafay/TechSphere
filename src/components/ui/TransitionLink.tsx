"use client";

import React from "react";
import Link from "next/link";
import { usePageTransition } from "@/lib/hooks";

interface TransitionLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({
  href,
  className = "",
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  onClick,
  ...props
}: TransitionLinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const { navigateTo } = usePageTransition({
    direction,
    duration,
    delay,
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick(e);
    }
    
    // Only use the transition for internal links
    if (href.startsWith("/") || href.startsWith("#")) {
      navigateTo(href);
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
} 