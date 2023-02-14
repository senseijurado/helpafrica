import { FC } from 'react'

// export const getStaticProps = async ({ locale }) => {
// 	console.log(locale)
// 	// const res = await import(`../../lang/${locale}.json`)
// 	// console.log(res.navigation)
// 	return {
// 		props: {
// 			sectionText: 'hola',
// 		},
// 	}
// }

// export const getStaticPaths = async () => {
// 	let paths = []
// 	const englishJson = await import(`../../locales/en.json`)
// 	const englishPaths = englishJson.navigation.map((path: string) => `/en/${path}`)
// 	for (let index in englishPaths) {
// 		paths.push(englishPaths[index])
// 	}
// 	const espanishJson = await import(`../../locales/es.json`)
// 	const spanishPaths = espanishJson.navigation.map((path: string) => `/es/${path}`)
// 	for (let index in spanishPaths) {
// 		paths.push(spanishPaths[index])
// 	}
// 	console.log(paths)

// 	return {
// 		paths: paths,
// 		fallback: false,
// 	}
// }

export const LanguageSelector: FC = () => {
	return (
		<>
			<h1>Aqui se renderiza el componente de Selector Idiomas</h1>
			{/* <div> section Index</div>{' '}
			<Link href={'/'}>
				<button>{router.locale === 'en' ? 'return' : 'volver'}</button>{' '}
			</Link> */}
		</>
	)
}

export default LanguageSelector
