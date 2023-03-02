import { FC } from 'react'

export interface Props {
	siteNameBrand?: string
}

export const Header: FC<Props> = ({ siteNameBrand }) => {
	return (
		<>
			<header>
				<h1>{siteNameBrand}</h1>

				{/*  Navigation Menu Bar Here */}
				{/* <NavigationBar /> */}
			</header>
		</>
	)
}

export default Header
