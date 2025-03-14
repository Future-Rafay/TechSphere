"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface PageTransitionOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  onStart?: () => void;
  onComplete?: () => void;
}

export function usePageTransition(options: PageTransitionOptions = {}) {
  const {
    duration = 0.6,
    ease = "power2.out",
    delay = 0,
    direction = "up",
    onStart,
    onComplete,
  } = options;
  
  const pathname = usePathname();
  const router = useRouter();
  const elementRef = useRef<HTMLElement | null>(null);
  
  // Set the ref to be used in the component
  const setRef = (element: HTMLElement | null) => {
    elementRef.current = element;
  };
  
  // Handle initial animation on mount
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Define direction-based properties
    const directionProps = {
      up: { y: 20, opacity: 0 },
      down: { y: -20, opacity: 0 },
      left: { x: 20, opacity: 0 },
      right: { x: -20, opacity: 0 },
    };
    
    // Initial animation
    gsap.fromTo(
      element,
      directionProps[direction],
      {
        y: direction === "up" ? 0 : direction === "down" ? 0 : undefined,
        x: direction === "left" ? 0 : direction === "right" ? 0 : undefined,
        opacity: 1,
        duration,
        ease,
        delay,
        onStart: onStart,
        onComplete: onComplete,
        clearProps: "all",
      }
    );
    
  }, [pathname, duration, ease, delay, direction, onStart, onComplete]);
  
  // Navigate to a new page with transition
  const navigateTo = (path: string) => {
    const element = elementRef.current;
    if (!element) {
      router.push(path);
      return;
    }
    
    // Define direction-based properties
    const directionProps = {
      up: { y: -20, opacity: 0 },
      down: { y: 20, opacity: 0 },
      left: { x: -20, opacity: 0 },
      right: { x: 20, opacity: 0 },
    };
    
    // Exit animation
    gsap.to(element, {
      ...directionProps[direction],
      duration: duration / 2,
      ease,
      onComplete: () => {
        router.push(path);
      },
    });
  };
  
  return { setRef, navigateTo };
} 