import { Header, Layout } from '@/components'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout
			title='Homepage Welcome'
			// id={UUID(2, 2)}
			description='Welcome to HelpAfrica ONG site'
		>
			<Header siteNameBrand='Brand Name Logotype'>
				<h1>Logotype</h1>
			</Header>
			<h1>Help Africa is development runtime!</h1>
		</Layout>
	)
}

export default HomePage
