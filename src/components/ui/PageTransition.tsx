"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Handle page transitions
  useEffect(() => {
    const page = pageRef.current;
    const overlay = overlayRef.current;
    
    if (!page || !overlay) return;
    
    // Create timeline for page transition
    const tl = gsap.timeline();
    
    // Initial page load animation
    tl.fromTo(
      page,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out",
        clearProps: "all"
      }
    );
    
    // Set up overlay for future page transitions
    gsap.set(overlay, { 
      y: "100%",
      opacity: 1
    });
    
    // Clean up
    return () => {
      tl.kill();
    };
  }, []);
  
  // Handle route changes
  useEffect(() => {
    const page = pageRef.current;
    const overlay = overlayRef.current;
    
    if (!page || !overlay) return;
    
    // Create timeline for page transition
    const tl = gsap.timeline();
    
    // Animate page in
    tl.fromTo(
      page,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out",
        clearProps: "all"
      }
    );
    
  }, [pathname]);
  
  return (
    <>
      {/* Page content */}
      <div ref={pageRef} className="page-content">
        {children}
      </div>
      
      {/* Transition overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-primary z-50 pointer-events-none"
        style={{ transform: "translateY(100%)" }}
      />
    </>
  );
} 