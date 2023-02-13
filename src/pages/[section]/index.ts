import Link from 'next/link'
import { useRouter } from 'next/router'

const SectionIndex = ({ sectionText }) => {
	const router = useRouter()

	return (
		<>
			<div> section Index</div>
			<Link href={'/'}>
				<button>{router.locale === 'en' ? 'return' : 'volver'}</button>
			</Link>
		</>
	)
}

export const getStaticProps = async ({ locale }) => {
	console.log(locale)
	// const res = await import(`../../lang/${locale}.json`)
	// console.log(res.navigation)
	return {
		props: {
			sectionText: 'hola',
		},
	}
}

export function greet(text: string) {
	return 'hola mundo'
}

export const getStaticPaths = async () => {
	let paths = []
	const englishJson = await import(`../../lang/en.json`)
	const englishPaths = englishJson.navigation.map((path: string) => `/en/${path}`)
	for (let index in englishPaths) {
		paths.push(englishPaths[index])
	}
	const espanishJson = await import(`../../lang/es.json`)
	const spanishPaths = espanishJson.navigation.map((path: string) => `/es/${path}`)
	for (let index in spanishPaths) {
		paths.push(spanishPaths[index])
	}
	console.log(paths)

	return {
		paths: paths,
		fallback: false,
	}
}

export default SectionIndex
