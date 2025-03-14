"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart, FaBolt, FaHeart, FaShare, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { products } from "@/data/products";
import { useCart } from "@/lib/context/CartContext";
import { useWishlist } from "@/lib/context/WishlistContext";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = products.find(p => p.slug === slug);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addItem } = useCart();
  const { addItem: addToWishlist } = useWishlist();


  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Link 
          href="/products" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-colors duration-300"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToWishlist = (product: any) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    addToWishlist(item);
  };
  
  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      color: selectedColor
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };
  
  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout
    window.location.href = "/checkout";
  };
  
  const nextImage = () => {
    if (product.images) {
      setActiveImageIndex((activeImageIndex + 1) % product.images.length);
    }
  };
  
  const prevImage = () => {
    if (product.images) {
      setActiveImageIndex((activeImageIndex - 1 + product.images.length) % product.images.length);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
              Home
            </Link>
          </li>
          <li className="text-text-secondary-light dark:text-text-secondary-dark">/</li>
          <li>
            <Link href="/products" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
              Products
            </Link>
          </li>
          <li className="text-text-secondary-light dark:text-text-secondary-dark">/</li>
          <li>
            <Link 
              href={`/category/${product.category.toLowerCase().replace(/ /g, '-')}`}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary"
            >
              {product.category}
            </Link>
          </li>
          <li className="text-text-secondary-light dark:text-text-secondary-dark">/</li>
          <li className="text-primary font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-96 bg-bg-card-light dark:bg-bg-card-dark rounded-lg overflow-hidden mb-4">
            {product.images && (
              <>
                <Image
                  src={product.images[activeImageIndex]}
                  alt={product.alt}
                  fill
                  className="object-contain"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 rounded-full p-2 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  <FaChevronLeft />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/50 rounded-full p-2 hover:bg-white dark:hover:bg-black transition-colors"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImageIndex === index 
                      ? 'border-primary' 
                      : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                    size={16} 
                  />
                ))}
              </div>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="text-2xl font-bold text-primary mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              {product.description}
            </p>
          </div>
          
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border ${
                      selectedColor === color
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-border-light dark:border-border-dark'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-border-light dark:border-border-dark rounded-l-md hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center py-1 border-y border-border-light dark:border-border-dark bg-bg-input-light dark:bg-bg-input-dark"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-border-light dark:border-border-dark rounded-r-md hover:bg-bg-hover-light dark:hover:bg-bg-hover-dark"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart and Buy Now */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            
            <button
              onClick={handleBuyNow}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-hover transition-colors"
            >
              <FaBolt />
              <span>Buy Now</span>
            </button>
          </div>
          
          {/* Success Message */}
          {addedToCart && (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-3 rounded-md mb-6 animate-fade-in">
              Product added to cart successfully!
            </div>
          )}
          
          {/* Social Actions */}
          <div className="flex space-x-4 mb-8">
            <button
            onClick={() => handleAddToWishlist(product)}  
            className="flex items-center space-x-1 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
              <FaHeart />
              <span>Add to Wishlist</span>
            </button>
            
            <button className="flex items-center space-x-1 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
          
          {/* Features */}
          {product.features && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Specifications */}
          {product.specifications && (
            <div>
              <h3 className="font-medium mb-2">Specifications</h3>
              <div className="border border-border-light dark:border-border-dark rounded-md overflow-hidden">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div 
                    key={key}
                    className={`flex ${
                      index % 2 === 0 
                        ? 'bg-bg-hover-light dark:bg-bg-hover-dark' 
                        : ''
                    }`}
                  >
                    <div className="w-1/3 p-3 font-medium border-r border-border-light dark:border-border-dark">
                      {key}
                    </div>
                    <div className="w-2/3 p-3 text-text-secondary-light dark:text-text-secondary-dark">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 