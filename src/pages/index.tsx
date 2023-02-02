import { NextPage } from 'next';
// Pages
import { Layout } from './Layout';
// Components
import { hashID } from '@/helpers';
import { IndexProps as Props } from '@/interfaces';

export const HomePage: NextPage<Props> = () => {
	return (
		<Layout
			pageTitle='Homepage HelpAfrica ONG'
			pageDescription='Description SEO applied'
			themePWAColor='#ffff'
			key={hashID()}
		>
			<h1>Homepage HelpAfrica</h1>
		</Layout>
	);
};

export default HomePage;
