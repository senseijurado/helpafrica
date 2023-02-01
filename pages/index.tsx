import { NextPage } from 'next';
// Pages
import { Layout } from './_layout';
// Components
import { Header } from '@/components';

export interface Props {
	pageTitle: string;
	pageDescription?: string;
	children?: React.ReactNode;
}

export const HomePage: NextPage<Props> = () => {
	return (
		<Layout
			pageTitle='Homepage HelpAfrica ONG'
			pageDescription='Description SEO applied'>
			<Header />

			<main className='d-grid place-items-center'>
				<h1>Homepage HelpAfrica</h1>
			</main>

			<footer> Footer goes here</footer>
		</Layout>
	);
};

export default HomePage;
