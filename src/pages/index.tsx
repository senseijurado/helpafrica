import { Layout } from '@/components'
import { uuid } from '@/utils'
import { NextPage } from 'next'

export const HomePage: NextPage = () => {
	return (
		<Layout
			title='Welcome to HelpAfrica'
			description='HelpAfrica es una ONG que pretende ayudar y aportar su granito de arena solidaria'
		>
			<h1>This is a title of Index, id: {uuid()}</h1>
		</Layout>
	)
}

export default HomePage

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
// 	const res = await import(`../locales/${locale.json}`)
// 	return {
// 		props: {
// 			indexText: res.default,
// 		},
// 	}
// }
