import { FC } from 'react'

interface Props {
	title?: string
}

export const Footer: FC<Props> = ({ title = '' }) => {
	return (
		<>
			<footer>
				<p>
					{' '}
					{title} <span>{new Date().getFullYear()}</span>
				</p>
			</footer>
		</>
	)
}

export default Footer
