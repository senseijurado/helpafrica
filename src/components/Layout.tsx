import { Footer, Header } from '@/components'
import { NextPage } from 'next'
import Head from 'next/head'

export interface Props {
	children?: React.ReactNode
	description?: string
	title: string
	id?: string
}

export const Layout: NextPage<Props> = ({
	children,
	title = 'Welcome to HelpAfrica',
	description = 'HelpAfrica ONG site made with Next.js',
}) => {
	return (
		<>
			<Head>
				<title>Welcome to HelpAfrica | {title}</title>
				<meta name='description' content={description} />

				<meta name='viewport' content='width=device-width, initial-scale=1' />
				{/* Link Tags */}
				<link rel='author' href='Sergio Jurado | Diego Coianiz | Pedro Garcia' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='' />
			</Head>

			{/* Header Component Here: */}
			<Header siteNameBrand='' />

			<main className='container'>{children}</main>

			<Footer copyTitle='Right Reserved | HelpAfrica®' />
		</>
	)
}
