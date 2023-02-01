import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// import locals
import { darkTheme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			defaultTheme={darkTheme}
			enableSystem={true}
			attribute='class'
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
