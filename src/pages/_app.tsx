import '@/styles/globals.css'
import 'https://unpkg.com/open-props'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
	return <Component {...pageProps} />
}
