import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en' className='dark dark:bg-gray-500' data-theme='darktheme'>
				<Head>
					{/* GOOGLE FONTS: Inter Sans Serif |  */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700;900&family=Inter:wght@100;300;500;700;900&display=swap'
						rel='stylesheet'
					/>

					{/* LOAD PICOCSS */}
					<link
						rel='stylesheet'
						href='https://unpkg.com/@picocss/pico@1.*/css/pico.min.css'
					/>
				</Head>
				<body className='bg-primary-400  min-h-screen'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
