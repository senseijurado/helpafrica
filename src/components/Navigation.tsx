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
		id: uuid(),
	},
	{
		to: '/about',
		name: 'About',
		id: uuid(),
	},
]

export const Navigation: FC = () => {
	return (
		<>
			<h2>Navbar goes here</h2>
		</>
	)
}

export default Navigation
