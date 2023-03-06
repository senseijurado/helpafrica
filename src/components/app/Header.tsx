import { FC } from 'react'

interface Props {
	siteTitle?: string
	children?: React.ReactNode
}

export const Header: FC<Props> = ({ children, siteTitle }) => {
	return (
		<>
			<header>
				<h1>{siteTitle}</h1>
			</header>
		</>
	)
}

export default Header
