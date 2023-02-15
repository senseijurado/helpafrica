/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [''],
	},
	swcMinify: true,
	distDir: 'dist',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
}

module.exports = nextConfig
