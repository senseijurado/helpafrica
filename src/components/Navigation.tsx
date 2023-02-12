import { uuid } from '@/utils/generator'
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
	return (
		<>
			<nav>Navigation</nav>
		</>
	)
}

export default Navigation
