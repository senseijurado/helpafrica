import { FC } from "react";

import Head from "next/head";

export interface Props {
	children: React.ReactNode;
	pageDescription?: string;
	pageTitle: string;
}

export const Layout: FC<Props> = ({ pageTitle, pageDescription, children }) => {
	return (
		<>
			<Head>
				<meta name='description' content={` ${pageDescription} `} />
				<title>{pageTitle}</title>
			</Head>

			{children}
		</>
	);
};
