import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='description' content='Generated with Next App' />
				<link rel='icon' href='/favicon.ico' />
				<title> Help Africa </title>
			</Head>
			<body className='bg-indigo-500'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
