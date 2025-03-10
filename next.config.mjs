/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https",
            },
            {
                hostname: "lh3.googleusercontent.com",
                protocol: "https",
            },
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https",
            }
        ]
    },
    // Production optimizations
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    // Enable static compression for improved performance
    compress: true,
    // Output standalone build for better deployment compatibility
    output: 'standalone'
};

export default nextConfig;
