import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en'>
				<Head></Head>
				<body className='bg-slate-50 text-gray-6'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
