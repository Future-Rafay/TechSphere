"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationOptions = {
  type: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scale" | "stagger";
  delay?: number;
  duration?: number;
  threshold?: number; // Visibility threshold for scroll trigger (0-1)
  staggerDelay?: number; // For stagger animations
  distance?: number; // For slide animations
  fromScale?: number; // For scale animations
  toScale?: number; // For scale animations
  scrollTrigger?: boolean; // Whether to use scroll trigger
};

export function useAnimation<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = { type: "fadeIn" }
) {
  const elementRef = useRef<T>(null);
  const childrenRef = useRef<NodeListOf<Element> | null>(null);
  
  const {
    type = "fadeIn",
    delay = 0,
    duration = 0.5,
    threshold = 0.2,
    staggerDelay = 0.1,
    distance = 50,
    fromScale = 0.8,
    toScale = 1,
    scrollTrigger = false
  } = options;
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Get children for stagger animations
    if (type === "stagger") {
      childrenRef.current = element.querySelectorAll(":scope > *");
    }
    
    let animation: gsap.core.Tween | gsap.core.Timeline;
    
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
          
        case "stagger":
          if (childrenRef.current && childrenRef.current.length > 0) {
            animation = gsap.fromTo(
              childrenRef.current,
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration, 
                delay, 
                stagger: staggerDelay, 
                ease: "power2.out" 
              }
            );
          }
          break;
      }
    };
    
    if (scrollTrigger && typeof window !== "undefined") {
      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        onEnter: () => {
          createAnimation();
        },
        once: true
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
    staggerDelay, 
    distance, 
    fromScale, 
    toScale, 
    scrollTrigger
  ]);
  
  return elementRef;
} 