// REACT IMPORTS:

import { uuid } from '@/utils'
import Link from 'next/link'
import { FC } from 'react'

export const Navigation: FC = () => {
	const menu = [
		{
			title: 'About the project',
			path: '#',
			id: uuid(),
		},
		{
			title: 'Contact us',
			path: '#',
			id: uuid(),
		},
	]

	return (
		<>
			<ul style={{ display: 'flex', listStyle: 'none' }} className='aspect-video'>
				{menu.map(({ title, path, id }) => (
					<li key={id}>
						<Link href={`/${path}`} style={{ margin: '1px 10px' }}>
							{title}
						</Link>
					</li>
				))}
			</ul>
			<button> DONATE </button>
		</>
	)
}

export default Navigation
