import Link from 'next/link'
import { FC } from 'react'

interface Props {
	titleBody: string
	subtitleBody?: string
	descriptionBody?: string
	backText?: string
}

export const NotFoundPage: FC<Props> = ({
	titleBody = '',
	subtitleBody = '',
	descriptionBody = '',
	backText = '',
}) => {
	return (
		<>
			<section>
				<div className='mx-auto max-w-1/2'>
					<h2 className=''>{titleBody}</h2>

					<h3 className=''>
						Oops! <span>{subtitleBody}</span>
					</h3>

					<p className='text-md'>{descriptionBody}</p>
					<Link href={'/'} className='' about='Back to homepage'>
						{backText}
					</Link>
				</div>
			</section>
		</>
	)
}

export default NotFoundPage
