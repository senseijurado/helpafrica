import Layout from "./_layout";

export interface HomeProps {
	metaTitle: string;
	metaDescription?: string;
}

export function HomePage({ metaTitle, metaDescription }: HomeProps) {
	return (
		<>
			<Layout metaTitle='Homepage' metaDescription='Description Homepage'>
				<h1>Homepage Content</h1>
			</Layout>
		</>
	);
}

export default HomePage;
