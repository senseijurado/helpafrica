import { createTheme } from '@nextui-org/react';

export const darkTheme = createTheme({
	type: 'dark',
	className: 'dark-theme',

	theme: {
		colors: {
			'primary-100': '#e88b89',
			'primary-200': '#cb2a27',
			'primary-300': '#751817',
			'second-100': '#445fdf',
			'second-200': '#182c8b',
			'second-300': '#091034',
			'lime-100': '#e4f87c',
			'lime-200': '#c4e90c',
			'lime-300': '#728807',
			'purple-100': '#cfc6ec',
			'purple-200': '#7f66cc',
			'purple-300': '#4c3399',
			'gray-100': 'hsl(0, 0, 96%)',
			'gray-200': 'lightgray',
			'gray-300': '#737d8c',
			'gray-400': '#444444',
			'gray-500': '#26282c',
			'gray-600': '#1a1a1a',
		},
	},
});
