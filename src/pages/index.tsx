import { Layout } from '@/components'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout title='Home welcome to Africa' description='Welcome to HelpAfrica ONG our house...'>
			<h1>Hello Africa, welcome World!</h1>
		</Layout>
	)
}

export default HomePage
