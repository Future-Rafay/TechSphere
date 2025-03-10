"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const deals = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    originalPrice: 199.99,
    salePrice: 129.99,
    discount: 35,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Premium wireless earbuds in charging case",
    link: "/products/premium-wireless-earbuds",
    stock: 12,
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000) // 12 hours from now
  },
  {
    id: 2,
    name: "Ultra-Slim 4K Monitor",
    originalPrice: 499.99,
    salePrice: 349.99,
    discount: 30,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Ultra-slim 4K monitor on desk",
    link: "/products/ultra-slim-4k-monitor",
    stock: 8,
    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours from now
  },
  {
    id: 3,
    name: "Smart Home Security Camera",
    originalPrice: 149.99,
    salePrice: 89.99,
    discount: 40,
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart home security camera",
    link: "/products/smart-home-security-camera",
    stock: 15,
    endTime: new Date(Date.now() + 16 * 60 * 60 * 1000) // 16 hours from now
  }
];

function CountdownTimer({ endTime }: { endTime: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex space-x-2 text-sm">
      <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center">
        {String(timeLeft.hours).padStart(2, '0')}
      </div>
      <span className="text-text-primary-light dark:text-text-primary-dark">:</span>
      <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center">
        {String(timeLeft.minutes).padStart(2, '0')}
      </div>
      <span className="text-text-primary-light dark:text-text-primary-dark">:</span>
      <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center">
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
}

export default function DealsSection() {
  return (
    <section className="py-16 bg-bg-light dark:bg-bg-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-secondary/10 px-4 py-2 rounded-full text-secondary font-semibold mb-4">
            <FaBolt className="mr-2" />
            Flash Sales
          </div>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Deals of the Day
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
            Grab these limited-time offers before they&#39;re gone. Huge discounts on premium tech products!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div 
              key={deal.id} 
              className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-lg overflow-hidden border border-border-light dark:border-border-dark group hover:border-primary transition-colors duration-300"
            >
              <div className="relative">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-md">
                  {deal.discount}% OFF
                </div>
                
                <div className="absolute bottom-3 right-3 bg-bg-card-dark/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                  Only {deal.stock} left
                </div>
              </div>
              
              <div className="p-4">
                <Link href={deal.link} className="block">
                  <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1">
                    {deal.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-primary mr-2">
                    ${deal.salePrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark line-through">
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark mr-2">
                      Ends in:
                    </span>
                    <CountdownTimer endTime={deal.endTime} />
                  </div>
                </div>
                
                <button 
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/deals" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary-dark transition-colors duration-300"
          >
            View All Deals
          </Link>
        </div>
      </div>
    </section>
  );
} 