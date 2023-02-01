// REACT IMPORTS:
import React, { useEffect, useState } from "react";

// * NEXT IMPORTS:
import Head from "next/head";

// ? NEXT LIBS IMPORTS:

// COMPONENTS IMPORTS:
import Layout from "@/pages/_layout";

// EXTERNAL LIBS IMPORTS:

// HOOKS IMPORTS:

// STYLES IMPORTS:

export default function HomePage() {
	return (
		<>
			<Layout
				metaTitle='Help Africa Homepage'
				metaDescription='This is a description of my Homepage in HelpAfrica ONG'
			>
				<main className='min-h-screen bg-second-200 text-white'>
					<h1 className='text-white'>Desde Homepage</h1>
				</main>
			</Layout>
		</>
	);
}
