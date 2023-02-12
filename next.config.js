/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [''],
	},
	swcMinify: false,
	distDir: 'dist',
}

module.exports = nextConfig;
