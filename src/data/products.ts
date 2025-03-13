export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  alt: string;
  description?: string;
  features?: string[];
  colors?: string[];
  inStock?: boolean;
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "ultra-hd-smart-tv",
    name: "Ultra HD Smart TV",
    category: "Televisions",
    price: 1299.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Ultra HD Smart TV with thin bezels",
    description: "Experience stunning 4K resolution and smart features with this Ultra HD Smart TV. Perfect for movie nights and gaming sessions with its vibrant colors and crisp details.",
    features: [
      "4K Ultra HD Resolution",
      "Smart TV with built-in streaming apps",
      "Voice control compatibility",
      "Multiple HDMI and USB ports",
      "Dolby Vision and HDR10 support"
    ],
    colors: ["Black", "Silver"],
    inStock: true,
    specifications: {
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160 (4K)",
      "Refresh Rate": "120Hz",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI, USB",
      "Audio": "20W Dolby Atmos"
    }
  },
  {
    id: 2,
    slug: "wireless-noise-cancelling-headphones",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    price: 349.99,
    rating: 4.9,
    reviews: 208,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Premium wireless headphones",
    description: "Immerse yourself in your favorite music with these premium wireless noise-cancelling headphones. Featuring advanced noise cancellation technology and exceptional sound quality.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Comfortable over-ear design"
    ],
    colors: ["Black", "Silver", "Blue"],
    inStock: true,
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "Up to 40 hours",
      "Charging Time": "2 hours",
      "Weight": "250g"
    }
  },
  {
    id: 3,
    slug: "professional-gaming-laptop",
    name: "Professional Gaming Laptop",
    category: "Computers",
    price: 1899.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Gaming laptop with RGB keyboard",
    description: "Dominate your games with this powerful gaming laptop featuring the latest graphics and processing technology. The RGB keyboard and sleek design make it as stylish as it is powerful.",
    features: [
      "Latest generation processor",
      "High-performance graphics card",
      "16GB DDR4 RAM",
      "1TB SSD storage",
      "RGB backlit keyboard",
      "Advanced cooling system"
    ],
    colors: ["Black", "Gray"],
    inStock: true,
    specifications: {
      "Processor": "Intel Core i9 12th Gen",
      "Graphics": "NVIDIA RTX 3080",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" 144Hz IPS",
      "Operating System": "Windows 11"
    }
  },
  {
    id: 4,
    slug: "smart-watch-series-7",
    name: "Smart Watch Series 7",
    category: "Wearables",
    price: 399.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Smart watch with fitness tracking",
    description: "Stay connected and track your fitness goals with this advanced smartwatch. With health monitoring features and a sleek design, it's the perfect companion for your active lifestyle.",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "GPS tracking",
      "Water resistant to 50m",
      "7-day battery life",
      "Customizable watch faces"
    ],
    colors: ["Black", "Silver", "Rose Gold", "Blue"],
    inStock: true,
    specifications: {
      "Display": "1.4\" AMOLED",
      "Battery Life": "Up to 7 days",
      "Water Resistance": "50m",
      "Sensors": "Heart rate, Accelerometer, Gyroscope",
      "Connectivity": "Bluetooth 5.0, Wi-Fi",
      "Compatibility": "iOS, Android"
    }
  },
  {
    "id": 5,
    "slug": "smart-led-desk-lamp",
    "name": "Smart LED Desk Lamp",
    "category": "Accessories",
    "price": 59.99,
    "rating": 4.7,
    "reviews": 89,
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582719478204-14a5fb87a3d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    "alt": "Smart LED desk lamp with adjustable brightness and color temperature",
    "description": "Enhance your workspace with this smart LED desk lamp. Featuring adjustable brightness, color temperature control, and a sleek modern design, it's perfect for reading, working, and relaxing.",
    "features": [
      "Adjustable brightness and color temperature",
      "Touch control panel",
      "Wireless charging base",
      "Energy-efficient LED technology",
      "Foldable and space-saving design"
    ],
    "colors": ["Black", "Silver"],
    "inStock": true,
    "specifications": {
      "Power": "10W LED",
      "Brightness": "Up to 800 lumens",
      "Color Temperature": "2700K - 6500K",
      "Input": "USB-C, 18W",
      "Dimensions": "14\" x 5\" x 1.5\"",
      "Material": "Aluminum and ABS plastic"
    }
  },
  {
    id: 6,
    slug: "4k-drone-with-camera",
    name: "4K Drone with Camera",
    category: "Cameras",
    price: 799.99,
    rating: 4.7,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Drone with 4K camera",
    description: "Capture stunning aerial footage with this high-performance 4K drone. With advanced stabilization and intelligent flight modes, it's perfect for both beginners and experienced pilots.",
    features: [
      "4K UHD camera with 3-axis gimbal",
      "30 minutes flight time",
      "5km transmission range",
      "Obstacle avoidance sensors",
      "Intelligent flight modes",
      "Compact, foldable design"
    ],
    colors: ["Gray"],
    inStock: true,
    specifications: {
      "Camera": "4K @ 60fps",
      "Flight Time": "30 minutes",
      "Range": "5km",
      "Max Speed": "45mph",
      "Weight": "570g",
      "Battery": "3850mAh LiPo"
    }
  },
  {
    id: 7,
    slug: "smart-fitness-tracker",
    name: "Smart Fitness Tracker",
    category: "Wearable Tech",
    price: 69.99,
    rating: 4.8,
    reviews: 150,
    "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519861153335-d6cbf9e2e7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    "alt": "Smart fitness tracker with heart rate and activity monitoring",
    "description": "Stay on top of your health and fitness goals with this advanced smart fitness tracker. Featuring heart rate monitoring, step tracking, sleep analysis, and smartphone notifications, it's the perfect companion for an active lifestyle.",
    "features": [
      "Real-time heart rate and step tracking",
      "Sleep and activity monitoring",
      "Water-resistant design (IP67 rating)",
      "Long battery life (up to 10 days)",
      "Smartphone notifications and Bluetooth connectivity"
    ],
    "colors": ["Black", "Gray", "Pink"],
    "inStock": true,
    "specifications": {
      "Display": "1.3-inch OLED",
      "Battery Life": "10 days",
      "Charging Method": "Magnetic USB",
      "Compatibility": "iOS & Android",
      "Weight": "0.9 oz",
      "Material": "Silicone and aluminum"
    }
  },
  {
    id: 8,
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 149.99,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Portable waterproof bluetooth speaker",
    description: "Take your music anywhere with this rugged, waterproof Bluetooth speaker. With powerful sound and long battery life, it's perfect for outdoor adventures or poolside parties.",
    features: [
      "360° immersive sound",
      "Waterproof and dustproof (IP67 rated)",
      "20-hour battery life",
      "Built-in microphone for calls",
      "Connects to multiple devices",
      "Floating design for pool use"
    ],
    colors: ["Black", "Blue", "Red", "Teal"],
    inStock: true,
    specifications: {
      "Speaker Output": "30W",
      "Battery Life": "Up to 20 hours",
      "Waterproof Rating": "IP67",
      "Bluetooth Range": "100 feet",
      "Dimensions": "7\" x 3\" x 3\"",
      "Weight": "1.5 lbs"
    }
  }
]; 