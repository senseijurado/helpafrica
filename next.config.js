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
	swcMinify: false,
	distDir: 'dist',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'fr', 'ja'],
	},
}

module.exports = nextConfig
