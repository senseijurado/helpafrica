import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Header } from "@/components";

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

			<Header />

			<main className='d-grid place-items-center'>{children}</main>

			<footer> Footer goes here</footer>
		</>
	);
}
