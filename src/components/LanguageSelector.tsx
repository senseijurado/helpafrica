import { useRouter } from 'next/router'

const LanguageSelector = () => {
	const router = useRouter()
	const changeLanguage = (e) => {
		router.push(router.pathname, router.pathname, {
			locale: e.target.value,
		})
	}
	return (
		<select style={selector_styles} onChange={changeLanguage}>
			<option value='es'>Español</option>
			<option value='en'>English</option>
		</select>
	)
}

export default LanguageSelector

const selector_styles = {
	marginLeft: '15px',
	borderRadius: '5px',
}
