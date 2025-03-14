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
  },
  {
    id: 9,
    slug: "macbook-pro-m2",
    name: "MacBook Pro M2 Max",
    category: "Laptops",
    price: 2499.99,
    rating: 4.9,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "MacBook Pro with M2 Max chip",
    description: "Experience unprecedented power with the new MacBook Pro featuring M2 Max chip. Perfect for professionals, creators, and developers who demand the ultimate in performance and efficiency.",
    features: [
      "M2 Max chip with 12-core CPU",
      "32-core Neural Engine",
      "32GB unified memory",
      "1TB SSD storage",
      "16-inch Liquid Retina XDR display",
      "Up to 22 hours battery life"
    ],
    colors: ["Space Gray", "Silver"],
    inStock: true,
    specifications: {
      "Processor": "Apple M2 Max",
      "Memory": "32GB unified RAM",
      "Storage": "1TB SSD",
      "Display": "16-inch Liquid Retina XDR",
      "Battery": "100Wh lithium-polymer",
      "Weight": "4.7 lbs (2.1 kg)"
    }
  },
  {
    id: 10,
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 399.99,
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation meets premium sound quality. The WH-1000XM5 features advanced AI noise cancellation, crystal clear audio, and exceptional comfort for all-day listening.",
    features: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "Multipoint connection",
      "Adaptive Sound Control",
      "Touch control panel",
      "Speak-to-chat technology"
    ],
    colors: ["Black", "Silver", "Midnight Blue"],
    inStock: true,
    specifications: {
      "Driver Unit": "30mm",
      "Frequency Response": "4Hz-40,000Hz",
      "Battery Life": "30 hours (NC ON)",
      "Charging Time": "3.5 hours",
      "Weight": "250g",
      "Bluetooth Version": "5.2"
    }
  },
  {
    id: 11,
    slug: "lg-oled-c2-65",
    name: "LG OLED C2 65\" TV",
    category: "Televisions",
    price: 2296.99,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "LG OLED C2 65-inch 4K Smart TV",
    description: "Experience infinite contrast and perfect blacks with LG's OLED evo technology. The C2 delivers exceptional picture quality, gaming features, and smart capabilities in a sleek design.",
    features: [
      "OLED evo technology",
      "α9 Gen5 AI Processor",
      "Dolby Vision IQ & Dolby Atmos",
      "NVIDIA G-SYNC & FreeSync Premium",
      "WebOS 22",
      "Magic Remote included"
    ],
    colors: ["Dark Silver"],
    inStock: true,
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "4K (3840 x 2160)",
      "HDR": "Dolby Vision, HDR10, HLG",
      "Refresh Rate": "120Hz",
      "HDMI Ports": "4 (HDMI 2.1)",
      "Smart Platform": "webOS 22"
    }
  },
  {
    id: 12,
    slug: "dyson-v15-detect",
    name: "Dyson V15 Detect",
    category: "Home Appliances",
    price: 749.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584947897558-4e6dd2c43ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Dyson V15 Detect Cordless Vacuum",
    description: "Revolutionary cleaning technology with laser dust detection. The V15 Detect reveals microscopic dust and automatically optimizes suction power for deep cleaning on all surfaces.",
    features: [
      "Laser Dust Detection",
      "Piezo sensor",
      "Up to 60 minutes runtime",
      "HEPA filtration",
      "LCD screen",
      "Acoustic dust sensing"
    ],
    colors: ["Nickel/Yellow", "Blue/Gold"],
    inStock: true,
    specifications: {
      "Suction Power": "230 AW",
      "Battery Life": "Up to 60 minutes",
      "Bin Volume": "0.76L",
      "Filter Type": "HEPA",
      "Weight": "6.8 lbs",
      "Charging Time": "4.5 hours"
    }
  },
  {
    id: 13,
    slug: "samsung-galaxy-s23-ultra",
    name: "Samsung Galaxy S23 Ultra",
    category: "Smartphones",
    price: 1199.99,
    rating: 4.8,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617997455403-41f36e9a9306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1615375834706-f6e4f0f7b3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Samsung Galaxy S23 Ultra Smartphone",
    description: "The ultimate smartphone experience with the most advanced camera system. Features S Pen integration, powerful Snapdragon processor, and a stunning 6.8-inch Dynamic AMOLED display.",
    features: [
      "200MP main camera",
      "S Pen included",
      "Snapdragon 8 Gen 2",
      "5000mAh battery",
      "45W fast charging",
      "8K video recording"
    ],
    colors: ["Phantom Black", "Cream", "Green", "Lavender"],
    inStock: true,
    specifications: {
      "Display": "6.8\" Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB/512GB/1TB",
      "Battery": "5000mAh",
      "OS": "Android 13 (One UI 5.1)"
    }
  },
  {
    id: 14,
    slug: "playstation-5-digital",
    name: "PlayStation 5 Digital Edition",
    category: "Gaming",
    price: 399.99,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff1b87b0da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "PlayStation 5 Digital Edition Console",
    description: "Experience lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games with the PS5 Digital Edition featuring 3D audio and the DualSense controller.",
    features: [
      "Ultra-high speed SSD",
      "Ray tracing support",
      "4K-TV gaming up to 120fps",
      "HDR technology",
      "Tempest 3D AudioTech",
      "DualSense wireless controller"
    ],
    colors: ["White"],
    inStock: true,
    specifications: {
      "CPU": "AMD Zen 2 (8-core)",
      "GPU": "10.28 TFLOPS RDNA 2",
      "Storage": "825GB SSD",
      "RAM": "16GB GDDR6",
      "Resolution": "4K (up to 8K)",
      "Frame Rate": "Up to 120fps"
    }
  },
  {
    id: 15,
    slug: "sony-a7iv-camera",
    name: "Sony A7 IV Mirrorless Camera",
    category: "Cameras",
    price: 2498.00,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542124292-70791af5d1b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Sony A7 IV Full-frame Mirrorless Camera",
    description: "The Sony A7 IV sets a new standard for full-frame mirrorless cameras with exceptional image quality, advanced AF, and professional video capabilities in a compact body.",
    features: [
      "33MP full-frame sensor",
      "Real-time Eye AF",
      "4K 60p video recording",
      "5-axis image stabilization",
      "Advanced color science",
      "Dual card slots"
    ],
    colors: ["Black"],
    inStock: true,
    specifications: {
      "Sensor": "33MP Full-frame CMOS",
      "ISO Range": "100-51200",
      "AF Points": "759 phase-detection",
      "Screen": "3\" vari-angle LCD",
      "Battery Life": "610 shots",
      "Weight": "699g"
    }
  },
  {
    id: 16,
    slug: "amazon-echo-show-10",
    name: "Amazon Echo Show 10",
    category: "Smart Home",
    price: 249.99,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1544428571-c89926d6b89f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544428571-c89926d6b89f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Amazon Echo Show 10 Smart Display",
    description: "The Echo Show 10 features a 10.1\" HD screen that automatically moves to face you, making it perfect for video calls, following recipes, or watching shows while moving around your space.",
    features: [
      "Motion tracking display",
      "13MP camera",
      "Built-in Zigbee hub",
      "Premium speakers",
      "Video calling",
      "Smart home control"
    ],
    colors: ["Charcoal", "Glacier White"],
    inStock: true,
    specifications: {
      "Display": "10.1\" HD",
      "Speaker": "2 x 1\" tweeters, 3\" woofer",
      "Camera": "13MP wide-angle",
      "Rotation": "350°",
      "Connectivity": "Dual-band Wi-Fi, Bluetooth",
      "Privacy": "Built-in camera shutter"
    }
  },
  {
    id: 17,
    slug: "apple-watch-ultra",
    name: "Apple Watch Ultra",
    category: "Wearables",
    price: 799.00,
    rating: 4.8,
    reviews: 467,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Apple Watch Ultra with Titanium Case",
    description: "The most rugged and capable Apple Watch ever, featuring a 49mm titanium case, precision dual-frequency GPS, up to 36 hours of battery life, and three specialized bands for athletes and adventurers.",
    features: [
      "49mm titanium case",
      "Always-on Retina display",
      "Action button",
      "Dual-frequency GPS",
      "Depth gauge",
      "86-decibel siren"
    ],
    colors: ["Titanium"],
    inStock: true,
    specifications: {
      "Display": "49mm Always-On Retina",
      "Water Resistance": "100m",
      "Battery Life": "36 hours",
      "GPS": "Precision dual-frequency",
      "Case Material": "Titanium",
      "Health Sensors": "Temperature, Blood Oxygen"
    }
  },
  {
    id: 18,
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S Mouse",
    category: "Computer Accessories",
    price: 99.99,
    rating: 4.9,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592434134753-a70f1536e912?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586349906319-43f4572309b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Logitech MX Master 3S Wireless Mouse",
    description: "The MX Master 3S features an 8,000 DPI track-anywhere sensor, Quiet Clicks, and MagSpeed electromagnetic scrolling. Perfect for creators, programmers, and anyone who wants to be more productive.",
    features: [
      "8K DPI sensor",
      "Quiet clicks",
      "MagSpeed scrolling",
      "USB-C quick charging",
      "Multi-device support",
      "App-specific customization"
    ],
    colors: ["Graphite", "Pale Gray"],
    inStock: true,
    specifications: {
      "Sensor": "8000 DPI Darkfield",
      "Battery Life": "Up to 70 days",
      "Buttons": "7 programmable",
      "Scroll Wheel": "MagSpeed Electromagnetic",
      "Connectivity": "Bluetooth, USB receiver",
      "Weight": "141g"
    }
  },
  {
    id: 19,
    slug: "philips-hue-starter-kit",
    name: "Philips Hue Starter Kit",
    category: "Smart Home",
    price: 199.99,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558002038-76fdec2d7e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Philips Hue Smart Lighting Starter Kit",
    description: "Transform your home lighting with the Philips Hue Starter Kit. Includes a Bridge and four color-changing smart bulbs for complete wireless control of your home lighting through the Hue app or voice commands.",
    features: [
      "16 million colors",
      "Voice control support",
      "Wireless dimming",
      "Schedule settings",
      "Entertainment areas",
      "Power-cut recovery"
    ],
    colors: ["White", "Color"],
    inStock: true,
    specifications: {
      "Bulb Type": "A19 E26 LED",
      "Wattage": "9W",
      "Brightness": "800 lumens",
      "Lifetime": "25,000 hours",
      "Connection": "Zigbee & Bluetooth",
      "Compatibility": "Alexa, Google Assistant, HomeKit"
    }
  },
  {
    id: 20,
    slug: "dell-ultrasharp-monitor",
    name: "Dell UltraSharp 32\" 4K Monitor",
    category: "Computer Accessories",
    price: 899.99,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Dell UltraSharp 32-inch 4K USB-C Hub Monitor",
    description: "Professional-grade monitor featuring 4K resolution, 98% DCI-P3 color coverage, and USB-C connectivity with 90W power delivery. Perfect for content creators, designers, and professionals.",
    features: [
      "4K resolution",
      "98% DCI-P3 coverage",
      "USB-C hub with 90W PD",
      "HDR400 certified",
      "KVM switch",
      "Picture-by-Picture"
    ],
    colors: ["Platinum Silver"],
    inStock: true,
    specifications: {
      "Resolution": "3840 x 2160",
      "Panel Type": "IPS Black",
      "Response Time": "5ms",
      "Refresh Rate": "60Hz",
      "Ports": "HDMI, DP, USB-C",
      "Color Depth": "1.07 billion colors"
    }
  },
  {
    id: 21,
    slug: "razer-blackwidow-v3",
    name: "Razer BlackWidow V3 Pro",
    category: "Gaming Peripherals",
    price: 229.99,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595225353638-c7b5d18a6447?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Razer BlackWidow V3 Pro Mechanical Gaming Keyboard",
    description: "Professional-grade wireless mechanical gaming keyboard featuring Razer's Green switches, multi-device connectivity, and customizable RGB lighting for the ultimate gaming experience.",
    features: [
      "Razer Green Mechanical Switches",
      "HyperSpeed Wireless",
      "Bluetooth connectivity",
      "Chroma RGB lighting",
      "Multi-function digital dial",
      "Detachable wrist rest"
    ],
    colors: ["Black", "White"],
    inStock: true,
    specifications: {
      "Switch Type": "Razer Green Mechanical",
      "Battery Life": "Up to 192 hours",
      "Connectivity": "Wireless, Bluetooth, USB-C",
      "Polling Rate": "1000Hz",
      "Keycaps": "Doubleshot ABS",
      "Weight": "1.423kg"
    }
  },
  {
    id: 22,
    slug: "ninja-foodi-xl-grill",
    name: "Ninja Foodi XL Pro Grill",
    category: "Kitchen Appliances",
    price: 299.99,
    rating: 4.8,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585515320310-261e0a9bc557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Ninja Foodi XL Pro Smart Indoor Grill",
    description: "The ultimate indoor grill that brings outdoor cooking inside. Features smart cooking system, multiple cooking functions, and a large capacity perfect for family meals.",
    features: [
      "Smart Cook System",
      "6-in-1 functionality",
      "XL capacity (6 steaks at once)",
      "Smoke control system",
      "Digital display",
      "Dishwasher-safe parts"
    ],
    colors: ["Stainless Steel/Black"],
    inStock: true,
    specifications: {
      "Cooking Functions": "Grill, Air Crisp, Roast, Bake, Broil, Dehydrate",
      "Power": "1760 Watts",
      "Capacity": "12\" x 12\" cooking surface",
      "Temperature Range": "105°F-500°F",
      "Material": "Stainless Steel",
      "Warranty": "1 year limited"
    }
  },
  {
    id: 23,
    slug: "ipad-pro-m2",
    name: "iPad Pro M2 12.9\"",
    category: "Tablets",
    price: 1099.99,
    rating: 4.9,
    reviews: 543,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "iPad Pro 12.9-inch with M2 chip",
    description: "The most powerful iPad ever with the M2 chip, Liquid Retina XDR display, and advanced cameras. Perfect for creative professionals, designers, and power users.",
    features: [
      "M2 chip",
      "12.9\" Liquid Retina XDR display",
      "ProMotion technology",
      "Face ID",
      "Apple Pencil 2 support",
      "Thunderbolt port"
    ],
    colors: ["Space Gray", "Silver"],
    inStock: true,
    specifications: {
      "Processor": "Apple M2",
      "Display": "12.9\" Liquid Retina XDR",
      "Storage": "128GB-2TB",
      "RAM": "8GB/16GB",
      "Camera": "12MP Wide + 10MP Ultra Wide",
      "Battery": "Up to 10 hours"
    }
  },
  {
    id: 24,
    slug: "ubiquiti-dream-router",
    name: "Ubiquiti Dream Router",
    category: "Networking",
    price: 199.99,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Ubiquiti UniFi Dream Router",
    description: "Enterprise-grade networking made simple. The Dream Router combines a security gateway, network controller, and high-performance WiFi 6 access point in one elegant device.",
    features: [
      "WiFi 6 support",
      "Built-in UniFi OS",
      "Network security features",
      "4-port switch",
      "Dual-band radio",
      "IPS/IDS capability"
    ],
    colors: ["White"],
    inStock: true,
    specifications: {
      "WiFi Standard": "WiFi 6 (802.11ax)",
      "Ports": "4x Gigabit LAN, 1x WAN",
      "Processor": "Quad-Core ARM",
      "Memory": "2GB RAM",
      "Storage": "16GB eMMC",
      "Power": "PoE or DC input"
    }
  },
  {
    id: 25,
    slug: "samsung-odyssey-g9",
    name: "Samsung Odyssey G9 Gaming Monitor",
    category: "Gaming",
    price: 1299.99,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Samsung Odyssey G9 49-inch Curved Gaming Monitor",
    description: "Immerse yourself in the ultimate gaming experience with this 49-inch super ultra-wide curved gaming monitor featuring QLED technology, 240Hz refresh rate, and 1ms response time.",
    features: [
      "49\" super ultra-wide screen",
      "240Hz refresh rate",
      "1ms response time",
      "QLED technology",
      "G-Sync & FreeSync Premium Pro",
      "1000R curvature"
    ],
    colors: ["White"],
    inStock: true,
    specifications: {
      "Resolution": "5120 x 1440",
      "Panel Type": "VA QLED",
      "HDR": "HDR1000",
      "Refresh Rate": "240Hz",
      "Response Time": "1ms (GtG)",
      "Aspect Ratio": "32:9"
    }
  },
  {
    id: 26,
    slug: "lenovo-thinkpad-x1-carbon",
    name: "Lenovo ThinkPad X1 Carbon Gen 10",
    category: "Laptops",
    price: 1799.99,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Lenovo ThinkPad X1 Carbon Business Laptop",
    description: "The ultimate business ultrabook featuring Intel's latest 12th Gen processors, a stunning 14-inch display, and legendary ThinkPad reliability in an ultra-lightweight carbon fiber chassis.",
    features: [
      "Intel Core i7-1260P processor",
      "14\" 2.2K IPS anti-glare display",
      "16GB LPDDR5 RAM",
      "1TB PCIe NVMe SSD",
      "Fingerprint reader",
      "Spill-resistant keyboard"
    ],
    colors: ["Black"],
    inStock: true,
    specifications: {
      "Processor": "12th Gen Intel Core i7",
      "Memory": "16GB LPDDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "14\" 2.2K (2240x1400)",
      "Battery": "57Wh (Up to 15 hours)",
      "Weight": "2.48 lbs (1.12 kg)"
    }
  },
  {
    id: 27,
    slug: "razer-blade-15",
    name: "Razer Blade 15 Advanced",
    category: "Laptops",
    price: 2499.99,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590750798825-2f77070d8f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561347981-969c80cf4463?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Razer Blade 15 Advanced Gaming Laptop",
    description: "The ultimate gaming laptop combining power and portability, featuring NVIDIA RTX graphics, high refresh rate display, and premium CNC aluminum construction.",
    features: [
      "NVIDIA GeForce RTX 4070",
      "Intel Core i9-13900H",
      "15.6\" QHD 240Hz display",
      "32GB DDR5 RAM",
      "Per-key RGB keyboard",
      "Vapor chamber cooling"
    ],
    colors: ["Black"],
    inStock: true,
    specifications: {
      "Processor": "Intel Core i9-13900H",
      "Graphics": "RTX 4070 8GB GDDR6",
      "Memory": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" QHD 240Hz",
      "Battery": "80Wh"
    }
  },
  {
    id: 28,
    slug: "dell-xps-13-plus",
    name: "Dell XPS 13 Plus",
    category: "Laptops",
    price: 1699.99,
    rating: 4.6,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Dell XPS 13 Plus Premium Laptop",
    description: "A revolutionary design meets powerful performance in the XPS 13 Plus, featuring a seamless glass touchpad, capacitive function row, and edge-to-edge keyboard.",
    features: [
      "12th Gen Intel Core i7",
      "13.4\" 3.5K OLED touch display",
      "16GB LPDDR5 RAM",
      "512GB NVMe SSD",
      "Edge-to-edge keyboard",
      "Capacitive touch function row"
    ],
    colors: ["Platinum", "Graphite"],
    inStock: true,
    specifications: {
      "Processor": "Intel Core i7-1260P",
      "Memory": "16GB LPDDR5",
      "Storage": "512GB NVMe SSD",
      "Display": "13.4\" 3.5K (3456x2160) OLED",
      "Battery": "55Wh",
      "Weight": "2.77 lbs (1.26 kg)"
    }
  },
  {
    id: 29,
    slug: "asus-rog-zephyrus-g14",
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1649.99,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1595810223015-aa45ad9a0335?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595810223015-aa45ad9a0335?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595810220073-8a294c585d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595810220617-4c7f634bb917?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "ASUS ROG Zephyrus G14 Gaming Laptop",
    description: "The perfect balance of power and portability, featuring AMD Ryzen 9 processor, NVIDIA graphics, and AniMe Matrix LED display lid in a compact 14-inch form factor.",
    features: [
      "AMD Ryzen 9 7940HS",
      "NVIDIA RTX 4060",
      "14\" QHD+ 165Hz display",
      "16GB DDR5 RAM",
      "AniMe Matrix display",
      "Dolby Atmos speakers"
    ],
    colors: ["Moonlight White", "Eclipse Gray"],
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 9 7940HS",
      "Graphics": "RTX 4060 8GB GDDR6",
      "Memory": "16GB DDR5",
      "Storage": "1TB PCIe 4.0 SSD",
      "Display": "14\" QHD+ 165Hz",
      "Battery": "76Wh"
    }
  },
  {
    id: 30,
    slug: "microsoft-surface-laptop-5",
    name: "Microsoft Surface Laptop 5",
    category: "Laptops",
    price: 1299.99,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587614382352-d31225bf6f8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587614382364-4c2089571d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    alt: "Microsoft Surface Laptop 5",
    description: "Sleek, stylish, and powerful, the Surface Laptop 5 combines premium design with all-day battery life and a stunning PixelSense touchscreen for the ultimate productivity experience.",
    features: [
      "12th Gen Intel Core i7",
      "13.5\" PixelSense touch display",
      "16GB LPDDR5x RAM",
      "512GB removable SSD",
      "Windows Hello face auth",
      "Dolby Vision IQ"
    ],
    colors: ["Platinum", "Sage", "Black", "Sandstone"],
    inStock: true,
    specifications: {
      "Processor": "Intel Core i7-1255U",
      "Memory": "16GB LPDDR5x",
      "Storage": "512GB removable SSD",
      "Display": "13.5\" 2256x1504 touch",
      "Battery": "Up to 18 hours",
      "Weight": "2.86 lbs (1.3 kg)"
    }
  }
]; 