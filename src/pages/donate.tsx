import DonateForm from '@/components/DonateForm'
import { NextPage } from 'next'

interface Props {
	pageTitle?: string
}

export const DonatePage: NextPage<Props> = ({ pageTitle = '' }) => {
	return (
		<>
			<h1>{pageTitle}</h1>
			<section
				className='donate-single-section donation-bg pt-100px pb-100px'
				data-bg-image='assets/images/donation-image/donation-bg.jpg'
			>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<div className='donation-form form-style'>
								<DonateForm title='Make your Donate Contribution' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default DonatePage
