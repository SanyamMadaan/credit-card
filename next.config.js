/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'credit-card-kashish-credit.vercel.app', 'res.cloudinary.com'],
  },
  transpilePackages: ['framer-motion'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 