// Next: Next Auth and Next UI Libs:
import { NextPage } from 'next'
import Head from 'next/head'

// Components
import { Footer, Header } from '@/components'

// Libs

// * Set and Define Local Properties:
export interface Props {
	children?: React.ReactNode
	description?: string
	title: string
}

export const Layout: NextPage<Props> = ({
	children,
	title,
	description = 'HelpAfrica ONG site made with Next.js',
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<base href='https://helpafrica.click/' />
				<meta name='google-site-verification' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				{/* Link Tags */}
				<link rel='author' href='Sergio Jurado | Diego Coianiz | Pedro Garcia' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='' />
			</Head>

			{/* HEADER */}
			<Header />

			{/* Body Main Content */}
			<main className='min-h-screen max-w-8xl m-auto | bg-gray-400 dark:bg-gray-100'>
				{children}
			</main>

			{/* Footer of Page */}
			<Footer />
		</>
	)
}
