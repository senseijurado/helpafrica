// REACT IMPORTS:

import { FC } from 'react'

interface Routes {
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
			<nav>Navigation here</nav>
		</>
	)
}

export default NavigationBar
