import { uuid } from '@/utils/generator'
import Link from 'next/link'
import { FC } from 'react'

export type Routes = {
	to?: string
	name: string
	id?: string
}

export const NAVLINKS: Routes[] = [
	{
		to: '/contact',
		name: 'Contact',
		id: uuid(2, 3),
	},
	{
		to: '/about',
		name: 'About',
		id: uuid(2, 3),
	},
]

export const Navigation: FC = () => {
	console.log(NAVLINKS)

	return (
		<>
			<p>
				{NAVLINKS.map(({ to, name, id }) => (
					<li>
						<Link key={id} passHref href={`${to}`}>
							{name}
						</Link>
					</li>
				))}
			</p>
		</>
	)
}

export default Navigation
