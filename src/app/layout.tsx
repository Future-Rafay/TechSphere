import type { Metadata } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, ThemeProvider } from "@/components/layout";
import SessionWrapper from "@/components/auth/SessionWrapper";
import { CartProvider } from "@/lib/context/CartContext";
import { WishlistProvider } from "@/lib/context/WishlistContext";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AuthProvider from "@/lib/auth-provider";

export const metadata: Metadata = {
  title: {
    template: ' %s | TechSphere',
    default: 'TechSphere | Modern Electronics E-commerce',
  },
  description: "A futuristic and sleek shopping experience for gadgets and electronics with the latest tech products and exclusive deals",
  keywords: ["electronics", "tech", "gadgets", "e-commerce", "online shopping", "technology"],
  authors: [{ name: "TechSphere Team" }],
  creator: "TechSphere",
  publisher: "TechSphere Inc.",
  metadataBase: new URL("https://techsphere-site.vercel.app"),
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechSphere | Modern Electronics E-commerce",
    description: "A futuristic and sleek shopping experience for gadgets and electronics",
    url: "https://techsphere-site.vercel.app",
    siteName: "TechSphere",
    images: [
      {
        url: "https://techsphere-site.vercel.app/api/og?title=TechSphere&description=Modern%20Electronics%20E-commerce",
        width: 1200,
        height: 630,
        alt: "TechSphere - Modern Electronics E-commerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSphere | Modern Electronics E-commerce",
    description: "A futuristic and sleek shopping experience for gadgets and electronics",
    images: ["https://techsphere-site.vercel.app/api/og?title=TechSphere&description=Modern%20Electronics%20E-commerce"],
    creator: "@techsphere",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

// Use next/font to import fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <SessionWrapper>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${inter.variable} ${orbitron.variable} ${poppins.variable} font-sans`}
        >
          <AuthProvider session={session}>
            <CartProvider>
              <WishlistProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <Navbar />
                  {children}
                  <Footer />
                </ThemeProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
