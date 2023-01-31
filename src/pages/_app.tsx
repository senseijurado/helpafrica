import "@/styles/globals.css";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

// import locals
import { darkTheme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
		// <NextUIProvider disableBaseline={true} theme={darkTheme}>
		// </NextUIProvider>
	);
}
