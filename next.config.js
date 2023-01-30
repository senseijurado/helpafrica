/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  cleanDistDir: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['./src/**/*.{tsx,ts,jsx,js}',]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['']
  },
  outputFileTracing: true,
  compiler: {
    removeConsole: true
  },
  amp: {
    canonicalBase: 'https://helpafrica.netlify.app/'
  }
}

module.exports = nextConfig
