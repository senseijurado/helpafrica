import { FC } from 'react';

import { Header } from '@/components';
import { LayoutProps as Props } from '@/interfaces/meta_tags';

import Head from 'next/head';

export const Layout: FC<Props> = ({
	pageTitle,
	pageDescription,
	children,
	facebook,
	twitter,
	googleVerification,
	manifestUrl,
	themePWAColor,
}) => {
	console.log(facebook);

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				<title>{pageTitle}</title>
				<meta name='description' content={` ${pageDescription} `} />
				<meta name='theme-color' content={themePWAColor} />
				<meta
					name='google-site-verification'
					content={googleVerification}
				/>
				<link rel='manifest' href={manifestUrl} />
				<link
					rel='author'
					href='Sergio Jurado Casado | Pedro Garcia Roman'
				/>

				{/* <!-- Twitter Card Meta tags --> */}
				<meta name='twitter:card' content={twitter?.twCard} />
				<meta name='twitter:site' content={twitter?.twSite} />
				<meta
					name='twitter:creator'
					content={
						twitter?.twCreator +
						'Sergio Jurado Casado | Pedro Garcia Roman'
					}
				/>
				<meta name='twitter:url' content={twitter?.twURL} />
				<meta name='twitter:title' content={twitter?.twTitle} />
				<meta
					name='twitter:description'
					content={twitter?.twDescription}
				/>
				<meta name='twitter:image' content={twitter?.twImage} />
				<meta name='twitter:image:alt' content={twitter?.twTitle} />

				{/* <!-- Facebook Open Graph --> */}
				<meta property='fb:app_id' content={facebook?.appID} />
				<meta property='og:url' content={facebook?.ogURL} />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={facebook?.ogTitle} />
				<meta property='og:image' content={facebook?.ogImage} />
				<meta property='og:image:alt' content={facebook?.ogTitle} />
				<meta
					property='og:description'
					content={facebook?.ogDescription}
				/>
				<meta property='og:site_name' content={facebook?.ogSitename} />
				<meta property='og:locale' content={facebook?.ogLocale} />
				<meta
					property='article:author'
					content={
						facebook?.ogAuthor +
						'Sergio Jurado Casado | Pedro Garcia Roman'
					}
				/>
			</Head>

			{/* TODO: crear e importar HeaderComponent */}
			<Header />

			<main className='d-grid place-items-center'>{children}</main>

			{/* !TODO: Crear Footer */}
			<footer> Footer goes here</footer>
		</>
	);
};
