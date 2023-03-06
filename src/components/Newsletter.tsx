export const Newsletter = () => {
	return (
		<>
			{/* Newsletter Component */}
			<section className='coming_soon_area js-ripples'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='coming_soon_container'>
								<div className='coming_soon_logo text-center'>
									<a href='#'>
										<img
											src='assets/images/logo/white-logo.png'
											alt=''
										/>
									</a>
								</div>

								<div className='coming_soon_title'>
									<h2 className='title'>We are coming soon</h2>
									<p>
										Lorem Ipsum is simply dummy text of the printing
										and typesetting industry. Lorem Ipsum has been the
										industry's standard dummy text.
									</p>
								</div>
								<div className='coming_soon_timing'>
									<div data-countdown='2023/8/15'></div>
								</div>
								<div className='coming_soon_newsletter'>
									<h3>Subscribe for our next update</h3>
									<div id='mc_embed_signup' className='subscribe_form'>
										<form
											id='mc-embedded-subscribe-form'
											className='validate'
											noValidate
											target='_blank'
											name='mc-embedded-subscribe-form'
											method='post'
											action='http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
										>
											<div
												id='mc_embed_signup_scroll'
												className='mc-form'
											>
												<input
													id='mc-email'
													type='email'
													autoComplete='off'
													placeholder='Enter your e-mail...'
												/>
												<button id='mc-embedded-subscribe'>
													Subscribe
												</button>
											</div>
										</form>

										<div className='mailchimp-alerts text-centre'>
											<div className='mailchimp-submitting'></div>
											<div className='mailchimp-success'></div>
											<div className='mailchimp-error'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Newsletter
