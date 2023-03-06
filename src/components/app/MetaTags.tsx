import { FC } from 'react'

interface Props {
	ogTags?: {
		description?: string
		image?: string
		locale?: string
		siteName?: string
		title?: string
		type?: string
		url?: string
	}
	canonicalURL?: string

	// TODO: Terminaré cambiando a hard coded value.
	favicon?: {
		href?: string
		sizes?: string
		rel?: string
	}

	googleFonts?: string
}

export const MetaTags: FC<Props> = ({
	ogTags,
	googleFonts = '',
	favicon,
	canonicalURL = 'https://helpafrica.click',
}) => {
	return (
		<>
			<link rel='author' href={`Sergio Jurado`} />
			<link rel='canonical' href={canonicalURL} />

			{/* <!-- Add site Favicon --> */}
			<link rel={favicon?.rel} href={favicon?.href} sizes={favicon?.sizes} />

			<meta name='viewport' content='width=device-width, initial-scale=1' />
			{/*  <!-- Open Graph (OG)   --> */}
			<meta property='og:locale' content={ogTags?.locale} />
			<meta property='og:type' content={ogTags?.type} />
			<meta property='og:title' content={ogTags?.title} />
			<meta property='og:url' content={ogTags?.url} />
			<meta property='og:site_name' content={ogTags?.siteName} />
			<meta property='og:image' content={ogTags?.image} />
			<meta property='og:description' content={ogTags?.description} />

			{/* Google Fonts */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='anonymous'
			/>
			<link href={googleFonts} rel='stylesheet' />
		</>
	)
}

export default MetaTags
