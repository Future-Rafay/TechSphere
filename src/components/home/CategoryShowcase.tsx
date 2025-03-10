"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Smartphones",
    description: "Latest models with cutting-edge features",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Modern smartphone on a colorful background",
    link: "/categories/smartphones",
    count: 128
  },
  {
    id: 2,
    name: "Laptops",
    description: "Powerful machines for work and play",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Laptop on a wooden desk",
    link: "/categories/laptops",
    count: 94
  },
  {
    id: 3,
    name: "Audio",
    description: "Immersive sound experiences",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Headphones on a colorful background",
    link: "/categories/audio",
    count: 76
  },
  {
    id: 4,
    name: "Gaming",
    description: "Level up your gaming experience",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Gaming controller with RGB lighting",
    link: "/categories/gaming",
    count: 112
  },
  {
    id: 5,
    name: "Smart Home",
    description: "Make your home smarter",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart home devices on a table",
    link: "/categories/smart-home",
    count: 68
  },
  {
    id: 6,
    name: "Wearables",
    description: "Tech that goes where you go",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch on a wrist",
    link: "/categories/wearables",
    count: 53
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-bg-hover-light dark:bg-bg-hover-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Shop by Category
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
            Browse our extensive collection of tech products organized by category to find exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.link}
              className="group block"
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                    <span className="bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {category.count} items
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 mt-1">
                    {category.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-lg pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/categories" 
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
} 