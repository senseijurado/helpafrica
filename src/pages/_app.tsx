import '@/styles/globals.css';
import { darkTheme } from '@/themes';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider resetCSS={true} theme={darkTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
