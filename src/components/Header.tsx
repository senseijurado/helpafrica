import { FC } from 'react'
import LanguageSelector from './LanguageSelector'
import { Navigation } from './Navigation'

export const Header: FC = ({ description, nav }) => {
	return (
		<>
			<header style={{ display: 'flex' }}>
				<p>{description}</p>
				<LanguageSelector />
			</header>

			<nav style={{ display: 'flex' }}>
				<Navigation sections={nav} />
			</nav>
		</>
	)
}

export default Header
