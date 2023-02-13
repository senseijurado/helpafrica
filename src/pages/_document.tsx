import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en'>
				<Head>
					{/* Google Fonts */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700;900&family=Inter:wght@100;300;500;700;900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='bg-gray-100 text-slate-900'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
