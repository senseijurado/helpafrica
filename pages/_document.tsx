// REACT IMPORTS:
import React, { useEffect, useState } from "react";

// * NEXT IMPORTS:
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html
			lang='en'
			className='dark dark:bg-gray-500'
			data-theme='darktheme'
		>
			<Head>
				<title>Help Africa</title>
				<meta name='description' content='Generated with Next App' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />{" "}
				{/* GOOGLE FONTS IMPORT */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;500;700&family=Inter:wght@300;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='min-h-screen'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
