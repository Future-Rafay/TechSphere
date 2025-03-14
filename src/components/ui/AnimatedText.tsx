"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revealText } from "@/lib/animations";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "reveal" | "fadeIn" | "slideUp" | "slideDown" | "typewriter" | "highlight";
type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: TextTag;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  scrollTrigger?: boolean;
  threshold?: number;
  highlightColor?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export default function AnimatedText({
  children,
  as: Tag = "h2",
  type = "fadeIn",
  delay = 0,
  duration = 0.8,
  className = "",
  scrollTrigger = true,
  threshold = 0.2,
  highlightColor = "rgba(var(--primary-rgb), 0.2)",
  staggerChildren = false,
  staggerDelay = 0.05
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    let animation: gsap.core.Tween | gsap.core.Timeline;
    
    const createAnimation = () => {
      switch (type) {
        case "reveal":
          // Use the revealText utility function
          revealText(element, duration, delay);
          break;
          
        case "fadeIn":
          animation = gsap.fromTo(
            element,
            { opacity: 0 },
            { opacity: 1, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "slideUp":
          animation = gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "slideDown":
          animation = gsap.fromTo(
            element,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
          );
          break;
          
        case "typewriter":
          // Create typewriter effect
          const text = element.textContent || "";
          element.textContent = "";
          
          const tl = gsap.timeline({ delay });
          
          for (let i = 0; i < text.length; i++) {
            tl.add(() => {
              element.textContent = text.substring(0, i + 1);
            }, i * (duration / text.length));
          }
          
          animation = tl;
          break;
          
        case "highlight":
          // Create highlight effect
          animation = gsap.timeline({ delay })
            .fromTo(
              element,
              { backgroundSize: "0% 100%" },
              { 
                backgroundSize: "100% 100%", 
                duration: duration * 0.6, 
                ease: "power2.out" 
              }
            )
            .fromTo(
              element,
              { color: "inherit" },
              { 
                color: "currentColor", 
                duration: duration * 0.4, 
                ease: "power2.out" 
              },
              "-=0.2"
            );
          
          // Set initial styles
          gsap.set(element, {
            backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 100%",
            backgroundSize: "0% 100%",
            display: "inline"
          });
          break;
      }
      
      // If staggering children, animate them after the parent
      if (staggerChildren) {
        const childElements = element.querySelectorAll('*');
        if (childElements.length > 0) {
          gsap.fromTo(
            childElements,
            { opacity: 0, y: 10 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: staggerDelay, 
              duration: duration * 0.6, 
              delay: delay + duration * 0.4, 
              ease: "power2.out" 
            }
          );
        }
      }
    };
    
    // Set initial state
    if (type === "fadeIn" || type === "slideUp" || type === "slideDown") {
      gsap.set(element, { opacity: 0 });
      
      if (type === "slideUp") {
        gsap.set(element, { y: 30 });
      } else if (type === "slideDown") {
        gsap.set(element, { y: -30 });
      }
    }
    
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
    scrollTrigger, 
    threshold, 
    highlightColor, 
    staggerChildren, 
    staggerDelay
  ]);
  
  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  );
} 