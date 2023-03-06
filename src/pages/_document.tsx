import { MetaTags } from '@/components'
import { Head, Html, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<>
			<Html lang='en'>
				<Head>
					<MetaTags
						canonicalURL='https://helpafrica.click'
						ogTags={{
							description: 'OG Description',
							title: 'OG Added Title',
							type: 'website',
						}}
						favicon={{ href: '', rel: 'icon', sizes: '32x32' }}
						googleFonts={
							'https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700;900&family=Inter:wght@100;300;500;700;900&display=swap'
						}
					/>
				</Head>
				<body className='bg-slate-50 text-gray-6'>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	)
}

export default Document
