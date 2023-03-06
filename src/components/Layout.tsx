import { NextPage } from 'next'
import Head from 'next/head'

export type Props = {
	children?: React.ReactNode
	description?: string
	title?: string
}

export const Layout: NextPage<Props> = ({ children, title, description, id }) => {
	return (
		<>
			<Head>
				<title>{title} | HELP AFRICA</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='author' href={`Sergio Jurado`} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container'>{children}</main>
		</>
	)
}
