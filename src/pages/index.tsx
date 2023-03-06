import { Layout } from '@/components'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout title='Homepage Welcome' description='Welcome to HelpAfrica ONG site'>
			<h1>Help Africa is development runtime!</h1>
		</Layout>
	)
}

export default HomePage
