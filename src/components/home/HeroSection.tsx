"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Next-Gen Tech",
    subtitle: "Experience the future today",
    description: "Discover cutting-edge gadgets that transform how you live, work, and play.",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Futuristic gadgets with neon lighting",
    link: "/categories/gadgets"
  },
  {
    id: 2,
    title: "Premium Audio",
    subtitle: "Immersive sound experience",
    description: "Elevate your audio experience with our premium collection of headphones and speakers.",
    cta: "Explore Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    alt: "Premium headphones on a dark background",
    link: "/categories/audio"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
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
            <div className="max-w-xl text-white">
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
              >
                {slide.cta}
                <FaArrowRight className="ml-2" />
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
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 