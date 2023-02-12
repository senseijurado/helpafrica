/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [''],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	swcMinify: false,
	distDir: 'dist',
	cleanDistDir: true,
}

module.exports = nextConfig;
