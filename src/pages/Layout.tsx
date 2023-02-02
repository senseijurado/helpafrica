import Head from 'next/head';
import { FC } from 'react';

import { Header } from '@/components';
import { hashID } from '@/helpers';
import { iHeadProps as Props } from '@/interfaces';

export const Layout: FC<Props> = ({
	children,
	SITE_TITLE,
	SITE_DESCRIPTION,
	THEME_COLOR,
	key = hashID(),
	GG_VERIFICATION,
	MANIFEST,
}) => {
	console.log(key);

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				<title>{SITE_TITLE} | Help Africa ONG</title>
				<meta
					name='description'
					content={` ${SITE_DESCRIPTION} - Help Africa ONG `}
				/>
				<meta name='theme-color' content={THEME_COLOR} />
				<meta
					name='google-site-verification'
					content={GG_VERIFICATION}
				/>
				<link rel='manifest' href={MANIFEST} />
				<link
					rel='author'
					href='Sergio Jurado Casado | Pedro Garcia Roman'
				/>
			</Head>

			<Header />

			<main className='min-h-screen max-w-8xl m-auto | bg-gray-400 dark:bg-gray-100'>
				{children}
			</main>

			<footer> Footer goes here</footer>
		</>
	);
};
