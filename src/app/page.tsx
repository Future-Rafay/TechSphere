import { 
  HeroSection, 
  FeaturedProducts, 
  CategoryShowcase, 
  DealsSection, 
  TechBlogPreview, 
  Newsletter 
} from "@/components/home";
import SmartPopup from "@/components/SmartPopup";
// import AuthPopup from "@/components/AuthPopup";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover the latest tech gadgets and electronics at TechSphere. Shop smartphones, laptops, gaming gear, and more with exclusive deals and fast shipping.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechSphere | Modern Electronics E-commerce",
    description: "Discover the latest tech gadgets and electronics at TechSphere. Shop smartphones, laptops, gaming gear, and more with exclusive deals and fast shipping.",
    url: "https://techsphere-site.vercel.app",
    images: [
      {
        url: "https://techsphere-site.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechSphere - Modern Electronics E-commerce",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
   
      <main>
        <SmartPopup />
        {/* <AuthPopup /> */}
        <HeroSection />
        <FeaturedProducts />
        <CategoryShowcase />
        <DealsSection />
        <TechBlogPreview />
        <Newsletter />
      </main>
    </div>
  );
}
