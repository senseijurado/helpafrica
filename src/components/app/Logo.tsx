import { FC } from 'react'

interface Props {
	brandTitle?: string
	logoURI?: string
}

export const BrandLogo: FC<Props> = ({ brandTitle = '', logoURI = '' }) => {
	return (
		<h1>
			<a
				style={{
					backgroundImage: `${logoURI}`,
					textIndent: -99999,
					backgroundRepeat: 'no-repeat',
				}}
				className='brandLogoUrl'
				href='/'
			>
				{brandTitle}
			</a>
		</h1>
	)
}

export default BrandLogo
