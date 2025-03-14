import gsap from "gsap";

// Fade in animation
export const fadeIn = (element: HTMLElement, delay: number = 0, duration: number = 0.5) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration, 
      delay, 
      ease: "power2.out" 
    }
  );
};

// Fade out animation
export const fadeOut = (element: HTMLElement, delay: number = 0, duration: number = 0.5) => {
  gsap.to(element, { 
    opacity: 0, 
    y: 20, 
    duration, 
    delay, 
    ease: "power2.in" 
  });
};

// Staggered fade in for multiple elements
export const staggeredFadeIn = (
  elements: HTMLElement[] | NodeListOf<Element>, 
  delay: number = 0, 
  staggerDelay: number = 0.1, 
  duration: number = 0.5
) => {
  gsap.fromTo(
    elements,
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
};

// Scale animation
export const scaleAnimation = (
  element: HTMLElement, 
  fromScale: number = 0, 
  toScale: number = 1, 
  duration: number = 0.5, 
  delay: number = 0
) => {
  gsap.fromTo(
    element,
    { scale: fromScale },
    { 
      scale: toScale, 
      duration, 
      delay, 
      ease: "back.out(1.7)" 
    }
  );
};

// Slide in from left
export const slideInFromLeft = (element: HTMLElement, distance: number = 100, duration: number = 0.5, delay: number = 0) => {
  gsap.fromTo(
    element,
    { x: -distance, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration, 
      delay, 
      ease: "power3.out" 
    }
  );
};

// Slide in from right
export const slideInFromRight = (element: HTMLElement, distance: number = 100, duration: number = 0.5, delay: number = 0) => {
  gsap.fromTo(
    element,
    { x: distance, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration, 
      delay, 
      ease: "power3.out" 
    }
  );
};

// Bounce animation
export const bounceAnimation = (element: HTMLElement, duration: number = 0.5, delay: number = 0) => {
  gsap.fromTo(
    element,
    { y: -20 },
    { 
      y: 0, 
      duration, 
      delay, 
      ease: "bounce.out" 
    }
  );
};

// Pulse animation
export const pulseAnimation = (element: HTMLElement, scale: number = 1.1, duration: number = 0.3) => {
  gsap.to(element, { 
    scale, 
    duration: duration / 2, 
    yoyo: true, 
    repeat: 1, 
    ease: "power2.inOut" 
  });
};

// Reveal text animation (letter by letter)
export const revealText = (element: HTMLElement, duration: number = 1, delay: number = 0) => {
  // Split text into characters
  const text = element.textContent || "";
  element.textContent = "";
  
  // Create spans for each character
  const chars = text.split("").map(char => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });
  
  // Animate each character
  gsap.to(chars, {
    opacity: 1,
    duration: 0.05,
    stagger: duration / text.length,
    delay,
    ease: "none"
  });
};

// Page transition animation
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    transition: { 
      duration: 0.3, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  }
}; 