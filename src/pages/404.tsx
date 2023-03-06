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
					<h2 className=''>{titleBody ? titleBody : '404'}</h2>

					<h3 className=''>
						Oops!{' '}
						<span>
							{subtitleBody
								? subtitleBody
								: 'This page not found, please go back homepage'}
						</span>
					</h3>

					<p className='text-md'>
						{descriptionBody
							? descriptionBody
							: 'The page you try to view does not exist'}
					</p>
					<Link href={'/'} className='' about='Back to homepage'>
						{backText ? backText : 'Back to Homepage'}
					</Link>
				</div>
			</section>
		</>
	)
}

export default NotFoundPage
