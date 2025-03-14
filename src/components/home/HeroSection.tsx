"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useAnimation } from "@/lib/hooks/useAnimation";

const slides = [
  {
    id: 1,
    title: "Premium Audio",
    subtitle: "Immersive sound experience",
    description: "Elevate your audio experience with our premium collection of headphones and speakers.",
    cta: "Explore Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Premium headphones on a dark background",
    link: "/categories/audio"
  },
  {
    id: 2,
    title: "Next-Gen Tech",
    subtitle: "Experience the future today",
    description: "Discover cutting-edge gadgets that transform how you live, work, and play.",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Futuristic gadgets with neon lighting",
    link: "/categories/gadgets"
  },
  {
    id: 3,
    title: "Gaming Paradise",
    subtitle: "Level up your gaming setup",
    description: "From high-performance PCs to immersive VR, find everything for your ultimate gaming experience.",
    cta: "Game On",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Gaming setup with RGB lighting",
    link: "/categories/gaming"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useAnimation({ type: "fadeIn", duration: 1 });
  
  const changeSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      changeSlide(nextSlide);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, sectionRef]);
  
  // Animation for slide transition
  useEffect(() => {
    if (prevSlide === currentSlide) return;
    
    const currentContent = contentRefs.current[currentSlide];
    const prevContent = contentRefs.current[prevSlide];
    
    if (!currentContent || !prevContent) return;
    
    // Animate out previous slide content
    gsap.to(prevContent, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "power2.in",
    });
    
    // Animate in current slide content
    gsap.fromTo(
      currentContent,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay: 0.3, 
        ease: "power3.out",
        onComplete: () => setIsAnimating(false)
      }
    );
    
    // Animate slide elements
    const currentElements = currentContent.querySelectorAll('h1, h2, p, a');
    gsap.fromTo(
      currentElements,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.5, 
        delay: 0.5, 
        ease: "power2.out" 
      }
    );
  }, [currentSlide, prevSlide]);

  return (
    <section ref={sectionRef} className="relative h-[800px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={el => { slideRefs.current[index] = el; }}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div 
              ref={el => { contentRefs.current[index] = el; }}
              className="max-w-xl text-white"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <h2 className="text-secondary font-orbitron uppercase tracking-wider mb-2">
                {slide.subtitle}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 group"
              >
                <span>{slide.cta}</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </section>
  );
} 