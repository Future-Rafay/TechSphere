import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBolt, FaFilter, FaSort, FaSearch } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Deals & Offers",
  description: "Discover exclusive deals and special offers on the latest electronics and tech gadgets at TechSphere. Limited-time discounts on smartphones, laptops, and more.",
  keywords: ["tech deals", "electronics discounts", "special offers", "sale", "promotions", "tech gadgets"],
  alternates: {
    canonical: "/deals",
  },
  openGraph: {
    title: "Special Deals & Offers | TechSphere",
    description: "Discover exclusive deals and special offers on the latest electronics and tech gadgets at TechSphere.",
    url: "https://techsphere-site.vercel.app/deals",
    images: [
      {
        url: "https://techsphere-site.vercel.app/api/og?title=Special%20Deals%20%26%20Offers&description=Exclusive%20discounts%20on%20the%20latest%20tech&type=product",
        width: 1200,
        height: 630,
        alt: "TechSphere Special Deals and Offers",
      },
    ],
  },
};

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
    
      
      <main>
        {/* Hero Banner */}
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tech deals and discounts"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <div className="inline-flex items-center bg-secondary/10 px-4 py-2 rounded-full text-secondary font-semibold mb-4">
                  <FaBolt className="mr-2" />
                  Limited Time Offers
                </div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
                  Flash Sales & Deals
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  Discover incredible discounts on premium tech products. Hurry, these deals won&#39;t last long!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-bg-card-light dark:bg-bg-card-dark border-b border-border-light dark:border-border-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark hover:border-primary transition-colors">
                  <FaFilter className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark hover:border-primary transition-colors">
                  <FaSort className="mr-2" />
                  Sort
                </button>
              </div>
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-text-muted-light dark:text-text-muted-dark" />
                </div>
                <input
                  type="text"
                  placeholder="Search deals..."
                  className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Deal Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Shop Deals By Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Smartphones", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", link: "/deals/smartphones" },
                { name: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", link: "/deals/laptops" },
                { name: "Audio", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", link: "/deals/audio" },
                { name: "Gaming", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", link: "/deals/gaming" },
              ].map((category, index) => (
                <Link 
                  key={index} 
                  href={category.link}
                  className="group block"
                >
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-lg font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Flash Sales */}
        <section className="py-12 bg-bg-hover-light dark:bg-bg-hover-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark">
                Flash Sales
              </h2>
              <div className="flex items-center text-secondary">
                <span className="text-sm font-medium mr-2">Ends in:</span>
                <div className="flex space-x-1">
                  <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center text-sm">
                    05
                  </div>
                  <span>:</span>
                  <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center text-sm">
                    23
                  </div>
                  <span>:</span>
                  <div className="bg-bg-card-dark p-1 rounded text-white min-w-[28px] text-center text-sm">
                    47
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Premium Wireless Earbuds", originalPrice: 199.99, salePrice: 129.99, discount: 35, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", stock: 12 },
                { name: "Ultra-Slim 4K Monitor", originalPrice: 499.99, salePrice: 349.99, discount: 30, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", stock: 8 },
                { name: "Smart Home Security Camera", originalPrice: 149.99, salePrice: 89.99, discount: 40, image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", stock: 15 },
                { name: "Mechanical Gaming Keyboard", originalPrice: 129.99, salePrice: 79.99, discount: 38, image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", stock: 7 },
              ].map((deal, index) => (
                <div 
                  key={index} 
                  className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-lg overflow-hidden border border-border-light dark:border-border-dark group hover:border-primary transition-colors duration-300"
                >
                  <div className="relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={deal.image}
                        alt={deal.name}
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
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1">
                      {deal.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-primary mr-2">
                        ${deal.salePrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark line-through">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
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
          </div>
        </section>
        
        {/* Weekly Deals */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Weekly Deals
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Wireless Gaming Mouse", originalPrice: 89.99, salePrice: 59.99, discount: 33, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Portable SSD 1TB", originalPrice: 159.99, salePrice: 119.99, discount: 25, image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Smart LED Light Strip", originalPrice: 49.99, salePrice: 29.99, discount: 40, image: "https://images.unsplash.com/photo-1610191245000-68f6f09aa60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Bluetooth Speaker", originalPrice: 79.99, salePrice: 49.99, discount: 38, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Fitness Tracker", originalPrice: 129.99, salePrice: 89.99, discount: 31, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Wireless Charger", originalPrice: 39.99, salePrice: 24.99, discount: 38, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Noise Cancelling Earbuds", originalPrice: 149.99, salePrice: 99.99, discount: 33, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                { name: "Smart Doorbell", originalPrice: 119.99, salePrice: 79.99, discount: 33, image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              ].map((deal, index) => (
                <div 
                  key={index} 
                  className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md">
                      {deal.discount}% OFF
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1">
                      {deal.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-primary mr-2">
                        ${deal.salePrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark line-through">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
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
          </div>
        </section>
      </main>
    </div>
  );
} 