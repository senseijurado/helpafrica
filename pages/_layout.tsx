// REACT IMPORTS:
import React, { useEffect, useState } from "react";

// * NEXT IMPORTS:
import Head from "next/head";

export interface Props {
	metaTitle: string;
	metaDescription?: string;
	children?: React.ReactNode;
}

export default function Layout({
	children,
	metaTitle,
	metaDescription,
}: Props) {
	return (
		<>
			<Head>
				<meta
					name='description'
					content={metaDescription || "Layout Principal base"}
				/>
				<title>{metaTitle} | Layout Title </title>
			</Head>

			<header>Header goes here</header>

			{children}

			<footer> Footer goes here</footer>
		</>
	);
}
