import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components';
import { hashID } from '@/helpers';
import { IndexProps as Props } from '@/interfaces';

export const HomePage: NextPage<Props> = ({ indexText }) => {

	return (
		<Layout SITE_TITLE='Homepage HelpAfrica ONG' SITE_DESCRIPTION='Description SEO applied' THEME_COLOR='#ffff' myKey={hashID()} HEADER_DESCRIPTION={indexText.header.info} NAVIGATION_DESCRIPTION={indexText.navigation}>

			<h1>{indexText.index.title}</h1>
		</Layout>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const res = await import(`../lang/${locale}.json`)
	return {
		props: {
			indexText: res.default
		}
	}
}