/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
		dirs: [
			'./pages/**/*.{tsx,ts,jsx,js}',
			'./components/**/*.{tsx,ts,jsx,js}',
			'./helpers/**/*.{tsx,ts,jsx,js}',
			'./hooks/**/*.{tsx,ts,jsx,js}',
			'./theme/**/*.{tsx,ts,jsx,js}',
			'./data/**/*.{tsx,ts,jsx,js}',
		],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: [''],
	},
	swcMinify: false,
	distDir: 'build',

	i18n: {
		defaultLocale: 'es',
		locales: ['en', 'es']
	}
};

module.exports = nextConfig;
