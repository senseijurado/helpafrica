import { useRouter } from 'next/router'

const LanguageSelector = () => {
	const router = useRouter()

	console.log(router)

	const changeLanguage = ({ target }) => {
		router.push(router.pathname, router.pathname, { locale: target.value })
	}

	return (
		<select
			style={{
				marginLeft: '15px',
				borderRadius: '5px',
			}}
			onChange={changeLanguage}
		>
			<option value='es'>
				<i>flagIcon</i> Español
			</option>
			<option value='en'>English</option>
		</select>
	)
}

export default LanguageSelector
