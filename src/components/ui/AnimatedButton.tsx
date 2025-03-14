"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  animationType?: "pulse" | "bounce" | "scale" | "shine";
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "right",
  animationType = "pulse"
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300";
  
  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-secondary-hover",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10"
  };
  
  // Width classes
  const widthClasses = fullWidth ? "w-full" : "";
  
  // Disabled classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  // Combined classes
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className}`;
  
  // Handle hover animations
  useEffect(() => {
    if (!buttonRef.current || disabled) return;
    
    if (isHovered) {
      switch (animationType) {
        case "pulse":
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
          break;
        case "bounce":
          gsap.to(buttonRef.current, {
            y: -4,
            duration: 0.3,
            ease: "power2.out"
          });
          break;
        case "scale":
          gsap.to(buttonRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
          break;
        case "shine":
          // Add a shine effect
          const shine = document.createElement("div");
          shine.className = "absolute inset-0 overflow-hidden rounded-md";
          
          const shineInner = document.createElement("div");
          shineInner.className = "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full";
          
          shine.appendChild(shineInner);
          buttonRef.current.appendChild(shine);
          
          gsap.to(shineInner, {
            x: "200%",
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              if (buttonRef.current?.contains(shine)) {
                buttonRef.current.removeChild(shine);
              }
            }
          });
          break;
      }
    } else {
      // Reset to original state
      gsap.to(buttonRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isHovered, animationType, disabled]);
  
  // Handle click animation
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    
    if (buttonRef.current) {
      gsap.timeline()
        .to(buttonRef.current, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out"
        })
        .to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "back.out(1.7)"
        });
    }
    
    if (onClick) onClick(e);
  };
  
  // Render as link or button
  if (href) {
    return (
      <Link 
        href={href}
        className={combinedClasses}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
        {children}
        {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }
  
  return (
    <button
      ref={buttonRef}
      type={type}
      className={`relative ${combinedClasses}`}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      {children}
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
} 