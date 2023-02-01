import { Header } from "@/components";
import Head from "next/head";
import React from "react";

export interface Props {
	metaTitle: string;
	metaDescription?: string;
	children?: React.ReactNode;
}

export default function Layout({
	children,
	metaTitle = "Help Africa ONG",
	metaDescription = "ONG para ayuda a otras organizations con estructura enfocada en el hambre y los mas desfavorecidos",
}: Props) {
	return (
		<>
			<Head>
				<meta name='description' content={metaDescription} />
				<title>{metaTitle}</title>
			</Head>

			<Header />

			<main className='d-grid place-items-center'>{children}</main>

			<footer> Footer goes here</footer>
		</>
	);
}
