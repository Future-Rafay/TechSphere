import Image from "next/image";
import Link from "next/link";
import { FaFilter,FaShoppingCart } from "react-icons/fa";
import { Metadata } from "next";
import { WishlistButton } from "@/components/common";

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Smartphones",
    slug: "smartphones",
    description: "Latest models with cutting-edge features",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Modern smartphone on a colorful background",
    count: 128,
    featured: true
  },
  {
    id: 2,
    name: "Laptops",
    slug: "laptops",
    description: "Powerful machines for work and play",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Laptop on a wooden desk",
    count: 94,
    featured: true
  },
  {
    id: 3,
    name: "Audio",
    slug: "audio",
    description: "Immersive sound experiences",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Headphones on a colorful background",
    count: 76,
    featured: true
  },
  {
    id: 4,
    name: "Gaming",
    slug: "gaming",
    description: "Level up your gaming experience",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Gaming controller with RGB lighting",
    count: 112,
    featured: true
  },
  {
    id: 5,
    name: "Smart Home",
    slug: "smart-home",
    description: "Make your home smarter",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart home devices on a table",
    count: 68,
    featured: true
  },
  {
    id: 6,
    name: "Wearables",
    slug: "wearables",
    description: "Tech that goes where you go",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Smart watch on a wrist",
    count: 53,
    featured: true
  }
];

// Sample products data
const products = [
  {
    id: "p1",
    name: "iPhone 14 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 256,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p2",
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
    brand: "Samsung",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p3",
    name: "Google Pixel 7 Pro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "smartphones",
    brand: "Google",
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "p4",
    name: "MacBook Pro 16\"",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "laptops",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 218,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p5",
    name: "Dell XPS 15",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "laptops",
    brand: "Dell",
    rating: 4.7,
    reviewCount: 176,
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "p6",
    name: "Sony WH-1000XM5",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "audio",
    brand: "Sony",
    rating: 4.8,
    reviewCount: 203,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p7",
    name: "PlayStation 5",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "gaming",
    brand: "Sony",
    rating: 4.9,
    reviewCount: 312,
    inStock: false,
    isNew: false,
    isFeatured: true
  },
  {
    id: "p8",
    name: "Amazon Echo Show 10",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "smart-home",
    brand: "Amazon",
    rating: 4.6,
    reviewCount: 167,
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "p9",
    name: "Apple Watch Series 8",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "wearables",
    brand: "Apple",
    rating: 4.7,
    reviewCount: 184,
    inStock: true,
    isNew: true,
    isFeatured: true
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found."
    };
  }
  
  return {
    title: category.name,
    description: `Browse our collection of ${category.name.toLowerCase()}. ${category.description}`,
    keywords: [category.name, "electronics", "tech", "gadgets", "e-commerce"],
    alternates: {
      canonical: `/categories/${params.slug}`,
    },
    openGraph: {
      title: `${category.name} | TechSphere`,
      description: category.description,
      url: `https://techsphere-site.vercel.app/categories/${params.slug}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.alt,
        },
      ],
    },
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map(category => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  // If category not found, show 404-like message
  if (!category) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Category Not Found
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
            The category you&#39;re looking for doesn&#39;t exist or has been removed.
          </p>
          <Link 
            href="/categories" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }
  
  // Filter products for this category
  const categoryProducts = products.filter(product => product.category === params.slug);
  
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* Category Hero Banner */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-lg text-gray-200 mb-4">
                {category.description}
              </p>
              <div className="flex items-center">
                <span className="bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {categoryProducts.length} products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-bg-card-light dark:bg-bg-card-dark rounded-lg border border-border-light dark:border-border-dark hover:border-primary transition-colors">
              <FaFilter className="text-text-secondary-light dark:text-text-secondary-dark" />
              <span>Filters</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                Brand:
              </span>
              <select className="bg-bg-card-light dark:bg-bg-card-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">All Brands</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="google">Google</option>
                <option value="sony">Sony</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
              Sort by:
            </span>
            <select className="bg-bg-card-light dark:bg-bg-card-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-bg-card-light dark:bg-bg-card-dark rounded-lg shadow-md overflow-hidden border border-border-light dark:border-border-dark group hover:border-primary transition-colors duration-300"
              >
                <div className="relative">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  
                  <div className="absolute top-3 right-3">
                    <WishlistButton 
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                        brand: product.brand
                      }}
                      className="h-8 w-8 rounded-full bg-bg-card-light dark:bg-bg-card-dark shadow-md"
                    />
                  </div>
                  
                  {product.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                      {product.brand}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark ml-1">
                        ({product.reviewCount})
                      </span>
                    </div>
                    
                    <button 
                      className={`flex items-center justify-center py-2 px-3 rounded-md text-xs font-medium ${
                        product.inStock 
                          ? "bg-primary text-white hover:bg-primary-hover" 
                          : "bg-bg-hover-light dark:bg-bg-hover-dark text-text-muted-light dark:text-text-muted-dark cursor-not-allowed"
                      } transition-colors`}
                      disabled={!product.inStock}
                    >
                      <FaShoppingCart className="mr-1" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-bg-card-light dark:bg-bg-card-dark rounded-lg">
            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
              No products found
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              We couldn&#39;t find any products in this category.
            </p>
            <Link 
              href="/categories" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              Browse Other Categories
            </Link>
          </div>
        )}
      </main>
    </div>
  );
} 