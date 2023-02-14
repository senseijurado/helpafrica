import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en'>
				<Head></Head>
				<body className='bg-white text-neutral-7'>
					<main className='w-screen min-h-screen'>
						<Main />
					</main>
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
