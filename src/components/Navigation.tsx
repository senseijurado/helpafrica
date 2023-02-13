// REACT IMPORTS:
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Navigation({ sections }) {
	return (
		<>
			<ul style={{display: "flex", listStyle:"none", }}>
				{sections.map(section =>
					<li key={section}>
						<Link href={`/${section}`} style={{margin:"1px 10px"}} >{section}</Link>
					</li>
				)}
			</ul>
			<button> DONATE </button>
		</>
	);
}

export default Navigation;
