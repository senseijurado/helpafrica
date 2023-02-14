import { FC } from 'react'
// import LanguageSelector from './LanguageSelector'
import { Navigation } from './Navigation'

export const Header: FC = () => {
	return (
		<>
			<header style={{ display: 'flex' }}>
				<p>This is a header</p>
				{/* <LanguageSelector /> */}
				<nav style={{ display: 'flex' }}>
					<Navigation />
				</nav>
			</header>
		</>
	)
}

export default Header
