// REACT IMPORTS:

import Link from 'next/link'
import { FC } from 'react'

export interface Routes {
	href?: string
	name?: string
	Component?: string
	PageToShow?: string
	current?: boolean
}

export const NavigationBar: FC<Routes[]> = () => {
	const navigation = [
		{
			href: '/',
			name: 'Home',
			Component: '',
			PageToShow: '',
			current: true,
		},
	]

	return (
		<>
			<nav aria-label='Site Nav'>
				<ul className='flex items-center gap-6 text-sm'>
					{navigation.map((item, idx) => (
						<Link
							key={item.href}
							href={item.href}
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

export default NavigationBar
