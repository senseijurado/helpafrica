// REACT IMPORTS:

import Link from 'next/link'
import { FC } from 'react'

export const Navigation: FC = () => {
	const navigation = [
		{
			name: 'Home',
			href: '/',
			current: true,
		},
		{
			name: 'Company',
			href: '/about',
			current: false,
		},
		{
			name: 'Our Team',
			href: '/team',
			current: false,
		},
		{
			name: 'Causes',
			href: '/causes',
			current: false,
		},
	]

	return (
		<>
			<nav aria-label='Site Nav'>
				<ul className='flex items-center gap-6 text-sm'>
					{navigation.map(({ name, href, current }) => (
						<Link
							key={href}
							href={href}
							className='text-gray-500 transition hover:text-gray-500/75'
						>
							{name}
						</Link>
					))}
				</ul>
			</nav>

			<div className='block md:hidden'>
				<button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
					Donate and Help
				</button>
			</div>
		</>
	)
}

export default Navigation
