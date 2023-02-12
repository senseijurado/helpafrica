import '@/styles/globals.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
	return <Component {...pageProps} />
}
