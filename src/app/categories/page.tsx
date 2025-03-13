import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import type { Metadata } from "next";

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Smartphones",
    description: "Latest models with cutting-edge features",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Modern smartphone on a colorful background",
    slug: "smartphones",
    count: 128,
    featured: true
  },
  {
    id: 2,
    name: "Laptops",
    description: "Powerful machines for work and play",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Laptop on a wooden desk",
    slug: "laptops",
    count: 94,
    featured: true
  },
  {
    id: 3,
    name: "Audio",
    description: "Immersive sound experiences",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Headphones on a colorful background",
    slug: "audio",
    count: 76,
    featured: true
  },
  {
    id: 4,
    name: "Gaming",
    description: "Level up your gaming experience",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Gaming controller with RGB lighting",
    slug: "gaming",
    count: 112,
    featured: true
  },
  {
    id: 5,
    name: "Smart Home",
    description: "Make your home smarter",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart home devices on a table",
    slug: "smart-home",
    count: 68,
    featured: true
  },
  {
    id: 6,
    name: "Wearables",
    description: "Tech that goes where you go",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch on a wrist",
    slug: "wearables",
    count: 53,
    featured: true
  },
  {
    id: 7,
    name: "Cameras",
    description: "Capture moments in stunning detail",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Professional camera on a dark background",
    slug: "cameras",
    count: 47,
    featured: false
  },
  {
    id: 8,
    name: "Tablets",
    description: "Portable computing power",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tablet displaying colorful graphics",
    slug: "tablets",
    count: 39,
    featured: false
  },
  {
    id: 9,
    name: "Computer Accessories",
    description: "Enhance your computing experience",
    image: "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Computer keyboard and mouse",
    slug: "computer-accessories",
    count: 85,
    featured: false
  },
  {
    id: 10,
    name: "Networking",
    description: "Stay connected with reliable equipment",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Networking equipment with cables",
    slug: "networking",
    count: 32,
    featured: false
  },
  {
    id: 11,
    name: "Storage",
    description: "Keep your data safe and accessible",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "External hard drives and SSDs",
    slug: "storage",
    count: 41,
    featured: false
  },
  {
    id: 12,
    name: "Monitors",
    description: "Crystal clear displays for work and play",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Ultra-wide monitor on desk",
    slug: "monitors",
    count: 36,
    featured: false
  }
];

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Browse our wide range of electronics categories including smartphones, laptops, gaming, audio, wearables, and smart home devices at TechSphere.",
  keywords: ["electronics categories", "smartphones", "laptops", "gaming", "audio", "wearables", "smart home"],
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "Product Categories | TechSphere",
    description: "Browse our wide range of electronics categories at TechSphere.",
    url: "https://techsphere-site.vercel.app/categories",
    images: [
      {
        url: "https://techsphere-site.vercel.app/api/og?title=Product%20Categories&description=Browse%20our%20wide%20range%20of%20electronics",
        width: 1200,
        height: 630,
        alt: "TechSphere Product Categories",
      },
    ],
  },
};

export default function CategoriesPage() {
  // Featured categories (for the top section)
  const featuredCategories = categories.filter(category => category.featured);
  
  // All categories (for the grid section)
  const allCategories = categories;
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      
      <main>
        {/* Hero Banner */}
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tech categories banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
                  Product Categories
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  Browse our extensive collection of tech products organized by category to find exactly what you need.
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((category) => (
                <Link 
                  key={category.id} 
                  href={`/categories/${category.slug}`}
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
          </div>
        </section>
        
        {/* All Categories */}
        <section className="py-12 bg-bg-hover-light dark:bg-bg-hover-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              All Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {allCategories.map((category) => (
                <Link 
                  key={category.id} 
                  href={`/categories/${category.slug}`}
                  className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <span className="text-xs text-gray-300">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Category Benefits */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Why Shop by Category?
              </h2>
              <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
                Discover the benefits of our carefully organized product categories designed to enhance your shopping experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy Navigation",
                  description: "Find exactly what you're looking for with our intuitive category organization.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                },
                {
                  title: "Curated Selection",
                  description: "Each category features hand-picked products that meet our quality standards.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Expert Recommendations",
                  description: "Get product suggestions from tech experts within each specialized category.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 