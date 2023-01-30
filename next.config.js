/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '.',
  compress: true,
  cleanDistDir: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['./src/**/*.{tsx,ts,jsx,js}',]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['']
  }
}

module.exports = nextConfig
