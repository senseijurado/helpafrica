import { NextPage } from 'next';
// Pages
import { Layout } from './Layout';
// Components
import { hashID } from '@/helpers';
import { IndexProps as Props } from '@/interfaces';

export const HomePage: NextPage<Props> = () => {
	return (
		<Layout
			SITE_TITLE='Homepage HelpAfrica ONG'
			SITE_DESCRIPTION='Description SEO applied'
			THEME_COLOR='#ffff'
			key={hashID()}>
			<h1>Homepage HelpAfrica</h1>
		</Layout>
	);
};

export default HomePage;
