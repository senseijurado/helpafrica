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
	cleanDistDir: true,
	compress: true,
	distDir: 'dist',
	i18n: {
		localeDetection: false,
		defaultLocale: 'en',
		locales: ['en', 'es', 'fr', 'ja'],
	},
}

module.exports = nextConfig
