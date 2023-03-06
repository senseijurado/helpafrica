import { FC } from 'react'

interface Props {
	title?: string
}

export const DonateForm: FC<Props> = ({ title = '' }) => {
	return (
		<form action='#' method='get'>
			<div className='row'>
				<div className='col-lg-12' data-aos='fade-up' data-aos-delay='200'>
					<h3 className='donate-heading'>{title}</h3>
				</div>
				<div className='col-lg-12' data-aos='fade-up' data-aos-delay='200'>
					<div className='amount-price'>
						<div className='form_group'>
							<input
								type='text'
								className='form_control amount_input'
								name='amount'
								placeholder='Enter Amount'
							/>
							<span>$</span>
						</div>
						<ul>
							<li>
								<a className='active' href='#'>
									$100
								</a>
							</li>
							<li>
								<a href='#'>$200</a>
							</li>
							<li>
								<a href='#'>$300</a>
							</li>
							<li>
								<a href='#'>$400</a>
							</li>
						</ul>
						<button className='btn btn-primary btn-hover-light mt-md-30px mt-lm-30px w-auto'>
							Custom Amount
						</button>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-6'>
					<div className='row'>
						<div
							className='col-lg-12'
							data-aos='fade-up'
							data-aos-delay='200'
						>
							<h3 className='title'>Personal Info</h3>
						</div>
						<div className='col-lg-12'>
							<div
								className='form_group'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<input
									type='text'
									className='form_control'
									placeholder='Full Name'
									name='name'
									required
								/>
							</div>
							<div
								className='form_group'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<input
									type='text'
									className='form_control'
									placeholder='Phone'
									name='phone'
								/>
							</div>
							<div
								className='form_group'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<input
									type='email'
									className='form_control'
									placeholder='Email'
									name='name'
									required
								/>
							</div>
							<div
								className='form_group'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<textarea
									className='form_control'
									name='comment'
									placeholder='Comment'
								></textarea>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6'>
					<div className='payment-area'>
						<div className='row'>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<h3 className='title'>Payment Method</h3>
							</div>
							<div className='col-lg-12'>
								<div
									className='single_radio'
									data-aos='fade-up'
									data-aos-delay='200'
								>
									<input
										type='radio'
										className='single_input'
										id='check1'
										name='radio'
									/>
									<label
										htmlFor='check1'
										className='single_input_label sigle_input_check'
									>
										<span>one time payment</span>
									</label>
								</div>
								<div
									className='single_radio'
									data-aos='fade-up'
									data-aos-delay='200'
								>
									<input
										type='radio'
										className='single_input'
										id='check2'
										name='radio'
									/>
									<label
										htmlFor='check2'
										className='single_input_label sigle_input_check'
									>
										<span>monthly payment</span>
									</label>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='Name on card'
										name='name'
										required
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='Card number'
										name='name'
										required
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='billing address'
										name='name'
										required
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='expire date'
										name='name'
										required
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='security code'
										name='name'
										required
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								data-aos='fade-up'
								data-aos-delay='200'
							>
								<div className='form_group'>
									<input
										type='text'
										className='form_control'
										placeholder='zip/postal code'
										name='name'
										required
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-12' data-aos='fade-up' data-aos-delay='200'>
					<div className='form_btn'>
						<button className='btn btn-primary btn-hover-light w-auto'>
							Donate now
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default DonateForm
