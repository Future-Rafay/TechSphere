"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = 
  | "fadeIn" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "scale" 
  | "bounce";

interface AnimatedElementProps {
  children: ReactNode;
  type: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  fromScale?: number;
  toScale?: number;
  scrollTrigger?: boolean;
  className?: string;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  id?: string;
}

export default function AnimatedElement({
  children,
  type = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  distance = 50,
  fromScale = 0.8,
  toScale = 1,
  scrollTrigger = true,
  className = "",
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
  id,
}: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let animation: gsap.core.Tween | gsap.core.Timeline;
    let childrenElements: NodeListOf<Element> | null = null;
    
    if (staggerChildren) {
      childrenElements = element.querySelectorAll(':scope > *');
    }
    
    const createAnimation = () => {
      switch (type) {
        case "fadeIn":
          animation = gsap.fromTo(
            element,
            { opacity: 0 },
            { opacity: 1, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "fadeInUp":
          animation = gsap.fromTo(
            element,
            { opacity: 0, y: distance },
            { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "fadeInDown":
          animation = gsap.fromTo(
            element,
            { opacity: 0, y: -distance },
            { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "fadeInLeft":
          animation = gsap.fromTo(
            element,
            { opacity: 0, x: -distance },
            { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "fadeInRight":
          animation = gsap.fromTo(
            element,
            { opacity: 0, x: distance },
            { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "scale":
          animation = gsap.fromTo(
            element,
            { opacity: 0, scale: fromScale },
            { opacity: 1, scale: toScale, duration, delay, ease: "back.out(1.7)" }
          );
          break;
          
        case "bounce":
          animation = gsap.fromTo(
            element,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration, delay, ease: "bounce.out" }
          );
          break;
      }
      
      // If staggering children, animate them after the parent
      if (staggerChildren && childrenElements && childrenElements.length > 0) {
        gsap.fromTo(
          childrenElements,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            stagger: staggerDelay, 
            duration: duration * 0.8, 
            delay: delay + duration * 0.5, 
            ease: "power2.out" 
          }
        );
      }
    };
    
    // Set initial state
    if (type.includes("fadeIn")) {
      gsap.set(element, { opacity: 0 });
      
      if (type === "fadeInUp") {
        gsap.set(element, { y: distance });
      } else if (type === "fadeInDown") {
        gsap.set(element, { y: -distance });
      } else if (type === "fadeInLeft") {
        gsap.set(element, { x: -distance });
      } else if (type === "fadeInRight") {
        gsap.set(element, { x: distance });
      }
    } else if (type === "scale") {
      gsap.set(element, { opacity: 0, scale: fromScale });
    } else if (type === "bounce") {
      gsap.set(element, { opacity: 0, y: -20 });
    }
    
    if (staggerChildren && childrenElements && childrenElements.length > 0) {
      gsap.set(childrenElements, { opacity: 0, y: 20 });
    }
    
    if (scrollTrigger && typeof window !== "undefined") {
      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        onEnter: () => {
          createAnimation();
        },
        once
      });
    } else {
      // Create immediate animation
      createAnimation();
    }
    
    return () => {
      if (animation) {
        animation.kill();
      }
      
      if (scrollTrigger && typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === element) {
            trigger.kill();
          }
        });
      }
    };
  }, [
    type, 
    delay, 
    duration, 
    threshold, 
    distance, 
    fromScale, 
    toScale, 
    scrollTrigger,
    once,
    staggerChildren,
    staggerDelay
  ]);
  
  return (
    <div ref={elementRef} className={className} id={id}>
      {children}
    </div>
  );
} 