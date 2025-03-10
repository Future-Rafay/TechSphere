"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Consumer Electronics",
    excerpt: "How artificial intelligence is revolutionizing the way we interact with our everyday devices.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Futuristic AI concept with glowing circuits",
    author: "Alex Johnson",
    date: "May 15, 2023",
    category: "Artificial Intelligence",
    link: "/blog/future-of-ai-in-consumer-electronics"
  },
  {
    id: 2,
    title: "5G Technology: What You Need to Know",
    excerpt: "A comprehensive guide to understanding 5G technology and how it will impact your digital life.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "5G network tower at sunset",
    author: "Sarah Chen",
    date: "April 28, 2023",
    category: "Networking",
    link: "/blog/5g-technology-what-you-need-to-know"
  },
  {
    id: 3,
    title: "Top Gaming Setups of 2023",
    excerpt: "Explore the most impressive gaming setups that are taking the gaming experience to the next level.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "High-end gaming setup with RGB lighting",
    author: "Mike Rivera",
    date: "April 10, 2023",
    category: "Gaming",
    link: "/blog/top-gaming-setups-of-2023"
  }
];

export default function TechBlogPreview() {
  return (
    <section className="py-16 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Tech Blog
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
            Stay updated with the latest trends, news, and insights from the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={post.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">
                    <div className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium">
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
} 