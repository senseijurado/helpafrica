import { Layout } from '@/components'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout title='Home welcome to Africa' description='Welcome to HelpAfrica ONG our house...'>
			<h1 className=''>Hello Africa, our save house!</h1>
		</Layout>
	)
}

export default HomePage
