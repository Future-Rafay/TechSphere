"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { products } from "@/data/products";
import { useCart } from "@/lib/context/CartContext";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useAnimation } from "@/lib/hooks/useAnimation";
import { pulseAnimation } from "@/lib/animations";
import { AnimatedText, AnimatedButton } from "@/components/ui";

// Get a subset of products for the featured section
const featuredProducts = products.slice(0, 8);

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sectionRef = useAnimation({ type: "fadeIn", duration: 0.5 });

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Add pulse animation to the button
    if (e.currentTarget) {
      pulseAnimation(e.currentTarget as HTMLElement, 1.3, 0.3);
    }
    
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };
  
  // Animate products when they come into view
  useEffect(() => {
    if (!buttonRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true
      }
    });
    
    tl.fromTo(
      productRefs.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        stagger: 0.1, 
        duration: 0.5, 
        ease: "back.out(1.2)" 
      },
      "+=0.3"
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="py-16 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedText
            as="h2"
            type="slideUp"
            className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4"
            scrollTrigger={true}
            threshold={0.1}
          >
            Featured Products
          </AnimatedText>
          
          <AnimatedText
            as="p"
            type="fadeIn"
            className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto"
            scrollTrigger={true}
            threshold={0.1}
            delay={0.2}
          >
            Discover our handpicked selection of the latest and most innovative tech products that are trending right now.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              ref={el => { productRefs.current[index] = el; }}
              className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                          size={14} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button 
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      aria-label={`Add ${product.name} to cart`}
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      <FaShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="text-center mt-12">
          <AnimatedButton
            href="/products"
            variant="primary"
            size="lg"
            icon={<FaArrowRight />}
            animationType="scale"
          >
            View All Products
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
} 