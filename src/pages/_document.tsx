import { Head, Html, Main, NextScript } from 'next/document';

export const Document = () => {
	return (
		<>
			<Html lang='en' className='dark dark:bg-gray-500' data-theme='darktheme'>
				<Head>
					{/* GOOGLE FONTS IMPORT */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Inter:wght@300;500;700&display=swap' rel='stylesheet' />
				</Head>
				<body className='bg-primary-400  min-h-screen'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	);
};

export default Document;
