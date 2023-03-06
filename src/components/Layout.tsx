import { Footer, Header } from '@/components'
import { NextPage } from 'next'
import Head from 'next/head'

export type Props = {
	children?: React.ReactNode
	description?: string
	title?: string
}

export const Layout: NextPage<Props> = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<title>{title} | HelpAfrica Charity ONG</title>
				<meta name='description' content={description} />
			</Head>
			<Header siteTitle='Logo Brand' />
			<main className='container'>{children}</main>

			<Footer title='Footer copy text© - ' />
		</>
	)
}
