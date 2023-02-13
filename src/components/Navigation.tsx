// REACT IMPORTS:
import Link from 'next/link'

export function Navigation({ sections }) {
	// Navigation Menu Options
	const menu = [
		{
			title: 'About the project',
			path: '#',
		},
		{
			title: 'Contact us',
			path: '#',
		},
	]

	return (
		<>
			<ul style={{ display: 'flex', listStyle: 'none' }}>
				{sections.map((section) => (
					<li key={section}>
						<Link href={`/${section}`} style={{ margin: '1px 10px' }}>
							{section}
						</Link>
					</li>
				))}
			</ul>
			<button> DONATE </button>
		</>
	)
}

export default Navigation
