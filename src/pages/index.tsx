import { Layout } from '@/components'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout
			title='Welcome to HelpAfrica'
			description='HelpAfrica es una ONG que pretende ayudar y aportar su granito de arena solidaria'
		>
			{/* <Header /> */}
		</Layout>
	)
}

export default HomePage
