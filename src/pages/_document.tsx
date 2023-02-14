import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en'>
				<Head></Head>
				<body className='bg-white text-neutral-7'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
