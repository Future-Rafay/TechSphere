import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaSearch, FaComment, FaEye } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Stay updated with the latest tech news, reviews, and insights on TechSphere's blog. Discover articles about AI, 5G, smart devices, and more.",
  keywords: ["tech blog", "technology news", "gadget reviews", "AI", "5G", "smart devices"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Tech Blog | TechSphere",
    description: "Stay updated with the latest tech news, reviews, and insights on TechSphere's blog.",
    url: "https://techsphere-site.vercel.app/blog",
    images: [
      {
        url: "https://techsphere-site.vercel.app/api/og?title=Tech%20Blog&description=Latest%20tech%20news%20and%20reviews",
        width: 1200,
        height: 630,
        alt: "TechSphere Blog - Latest Tech News and Reviews",
      },
    ],
    type: "article",
  },
};

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Consumer Electronics",
    excerpt: "How artificial intelligence is revolutionizing the way we interact with our everyday devices.",
    content: "Artificial intelligence is rapidly transforming the consumer electronics landscape. From smart speakers that understand natural language to refrigerators that can suggest recipes based on their contents, AI is making our devices more intuitive and personalized than ever before. This article explores the current state of AI in consumer electronics and what we can expect in the coming years.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Futuristic AI concept with glowing circuits",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "May 15, 2023",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Smart Devices"],
    views: 1245,
    comments: 32,
    featured: true,
    link: "/blog/future-of-ai-in-consumer-electronics"
  },
  {
    id: 2,
    title: "5G Technology: What You Need to Know",
    excerpt: "A comprehensive guide to understanding 5G technology and how it will impact your digital life.",
    content: "5G is the fifth generation of cellular network technology, promising faster speeds, lower latency, and more reliable connections. This article breaks down what 5G actually means for consumers, from faster download speeds to new possibilities for IoT devices and smart cities.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "5G network tower at sunset",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 28, 2023",
    category: "Networking",
    tags: ["5G", "Wireless", "Mobile"],
    views: 982,
    comments: 17,
    featured: true,
    link: "/blog/5g-technology-what-you-need-to-know"
  },
  {
    id: 3,
    title: "Top Gaming Setups of 2023",
    excerpt: "Explore the most impressive gaming setups that are taking the gaming experience to the next level.",
    content: "Gaming setups have evolved dramatically in recent years, with enthusiasts creating immersive environments that enhance gameplay and aesthetics. This article showcases some of the most impressive gaming setups of 2023, featuring cutting-edge hardware, innovative lighting solutions, and ergonomic designs.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "High-end gaming setup with RGB lighting",
    author: "Mike Rivera",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "April 10, 2023",
    category: "Gaming",
    tags: ["Gaming", "PC Build", "Setup"],
    views: 1567,
    comments: 45,
    featured: true,
    link: "/blog/top-gaming-setups-of-2023"
  },
  {
    id: 4,
    title: "How to Choose the Perfect Smartphone in 2023",
    excerpt: "A detailed guide to help you navigate the complex world of smartphone features and specifications.",
    content: "With hundreds of smartphone models available, choosing the right one can be overwhelming. This guide breaks down the key factors to consider, from processor performance and camera quality to battery life and software experience, helping you make an informed decision based on your specific needs and budget.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Various smartphones displayed on a table",
    author: "Jessica Wong",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "March 22, 2023",
    category: "Smartphones",
    tags: ["Smartphones", "Buying Guide", "Mobile"],
    views: 2103,
    comments: 28,
    featured: false,
    link: "/blog/how-to-choose-the-perfect-smartphone-in-2023"
  },
  {
    id: 5,
    title: "The Rise of Mechanical Keyboards",
    excerpt: "Why mechanical keyboards are making a comeback and becoming essential for professionals and gamers alike.",
    content: "Mechanical keyboards have seen a resurgence in popularity, moving beyond gaming enthusiasts to professionals seeking a more satisfying typing experience. This article explores the different types of mechanical switches, the benefits of mechanical keyboards, and recommendations for various use cases and budgets.",
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of a colorful mechanical keyboard",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "March 15, 2023",
    category: "Peripherals",
    tags: ["Keyboards", "Mechanical", "Peripherals"],
    views: 876,
    comments: 19,
    featured: false,
    link: "/blog/the-rise-of-mechanical-keyboards"
  },
  {
    id: 6,
    title: "Smart Home Security: Protecting Your Digital Fortress",
    excerpt: "Essential tips and products to secure your smart home devices from cyber threats.",
    content: "As our homes become increasingly connected, they also become more vulnerable to cyber attacks. This article provides practical advice for securing your smart home ecosystem, from router settings and firmware updates to choosing secure devices and implementing network segmentation.",
    image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Smart home security devices",
    author: "Emma Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "February 28, 2023",
    category: "Smart Home",
    tags: ["Security", "Smart Home", "IoT"],
    views: 1432,
    comments: 37,
    featured: false,
    link: "/blog/smart-home-security-protecting-your-digital-fortress"
  },
  {
    id: 7,
    title: "The Evolution of Laptop Design",
    excerpt: "Tracing the journey of laptop design from bulky machines to sleek ultrabooks and innovative form factors.",
    content: "Laptop design has undergone a remarkable transformation over the decades, from the 10-pound 'luggables' of the 1980s to today's ultra-thin, convertible devices. This article examines the key milestones in laptop design evolution and the technological advances that made them possible.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern laptop on a wooden desk",
    author: "Thomas Lee",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "February 15, 2023",
    category: "Laptops",
    tags: ["Laptops", "Design", "Technology History"],
    views: 945,
    comments: 12,
    featured: false,
    link: "/blog/the-evolution-of-laptop-design"
  },
  {
    id: 8,
    title: "Wireless Earbuds Showdown: Top Models Compared",
    excerpt: "A detailed comparison of the latest wireless earbuds, helping you find the perfect match for your needs.",
    content: "Wireless earbuds have become essential accessories for many, but choosing between the numerous options can be challenging. This comprehensive comparison evaluates the top wireless earbuds of 2023 across categories like sound quality, battery life, comfort, and special features.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Various wireless earbuds displayed",
    author: "Olivia Kim",
    authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "January 30, 2023",
    category: "Audio",
    tags: ["Earbuds", "Wireless", "Audio"],
    views: 1876,
    comments: 42,
    featured: false,
    link: "/blog/wireless-earbuds-showdown-top-models-compared"
  }
];

// Categories for filter
const categories = [
  "All",
  "Artificial Intelligence",
  "Networking",
  "Gaming",
  "Smartphones",
  "Peripherals",
  "Smart Home",
  "Laptops",
  "Audio"
];

export default function BlogPage() {
  // Featured posts (for the top section)
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Recent posts (for the main section)
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <main>
        {/* Hero Banner */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tech blog banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
                  TechSphere Blog
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  Stay updated with the latest trends, news, and insights from the world of technology.
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Post */}
              <div className="lg:col-span-2">
                <article className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group">
                  <Link href={featuredPosts[0].link} className="block">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={featuredPosts[0].image}
                        alt={featuredPosts[0].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md">
                        {featuredPosts[0].category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">
                        <div className="flex items-center mr-4">
                          <FaCalendarAlt className="mr-1" />
                          {featuredPosts[0].date}
                        </div>
                        <div className="flex items-center mr-4">
                          <FaUser className="mr-1" />
                          {featuredPosts[0].author}
                        </div>
                        <div className="flex items-center">
                          <FaComment className="mr-1" />
                          {featuredPosts[0].comments} Comments
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3 group-hover:text-primary transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      
                      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                        {featuredPosts[0].excerpt}
                      </p>
                      
                      <span className="text-primary font-medium">
                        Read More
                      </span>
                    </div>
                  </Link>
                </article>
              </div>
              
              {/* Secondary Featured Posts */}
              <div className="space-y-6">
                {featuredPosts.slice(1, 3).map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group"
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
                      
                      <div className="p-4">
                        <div className="flex items-center text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2">
                          <div className="flex items-center mr-3">
                            <FaCalendarAlt className="mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <FaComment className="mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <span className="text-primary text-sm font-medium">
                          Read More
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-6 bg-bg-hover-light dark:bg-bg-hover-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
              Recent Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={post.link} className="block">
                    <div className="relative h-56 overflow-hidden">
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
                      <div className="flex items-center mb-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                            {post.author}
                          </span>
                          <span className="block text-xs text-text-secondary-light dark:text-text-secondary-dark">
                            {post.date}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-text-muted-light dark:text-text-muted-dark">
                          <div className="flex items-center mr-3">
                            <FaEye className="mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <FaComment className="mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        
                        <span className="text-primary text-sm font-medium">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-4 py-2 rounded-l-md border border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-border-light dark:border-border-dark bg-primary text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-r-md border border-border-light dark:border-border-dark bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 bg-bg-hover-light dark:bg-bg-hover-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-orbitron font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 max-w-2xl mx-auto">
              Get the latest tech news, reviews, and insights delivered directly to your inbox. Stay ahead of the curve with TechSphere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-border-light dark:border-border-dark rounded-lg bg-bg-input-light dark:bg-bg-input-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 