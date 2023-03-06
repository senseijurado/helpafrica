export const AboutPage = () => {
	return (
		<section className='bg-primary-4 text-white'>
			{/* About Us Section */}
			<div className=''>
				<div className=''>
					<div className=''>
						<div className=''>
							<img
								src='assets/images/about-image/about-image.jpg'
								alt=''
								className='img-responsive w-100'
							/>
						</div>
						<div className='col-lg-6'>
							<div
								className='section-title section-title-left mb-20px '
								data-aos='fade-up'
							>
								<h2 className='title'>About Us</h2>
							</div>
							<div className='about-content'>
								<p className='mb-30px' data-aos='fade-up'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
									aperiam fugit consequuntur voluptatibus ex sint iure in,
									distinctio sed dolorem aspernatur veritatis repellendus dolorum
									voluptate, animi libero officiis eveniet accusamus recusandae.
									Temporibus amet ducimus sapiente voluptatibus autem dolorem
									magnam quas, porro suscipit. Quibusdam culpa asperiores
									exercitationem architecto quo distinctio sed dolorem!
								</p>
								<a
									href='#'
									className='btn btn-primary btn-hover-dark'
									data-aos='fade-up'
								>
									Become a Volunteer
								</a>
							</div>
						</div>
					</div>
					<div className='row pt-100px'>
						<div className='col-md-12 text-center'>
							<div className='section-title' data-aos='fade-up'>
								<h2 className='title'>
									What We <span>Do</span>
								</h2>
								<p>
									We create events aiming to pear to the voice for children and
									gather for support. Please update with our events and confirm
									you presence.
								</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div
							className='col-md-6 col-lg-4 mb-md-30px mb-lm-30px  '
							data-aos='fade-up'
							data-aos-delay='200'
						>
							<div className='single-about'>
								<img
									src='assets/images/about-image/we-do-one.jpg'
									className='img-responsive w-100'
									alt=''
								/>
								<h5 className='title-text'>Donate For Education</h5>
							</div>
						</div>

						<div
							className='col-md-6 col-lg-4 mb-lm-30px'
							data-aos='fade-up'
							data-aos-delay='400'
						>
							<div className='single-about'>
								<img
									src='assets/images/about-image/we-do-two.jpg'
									className='img-responsive w-100'
									alt=''
								/>
								<h5 className='title-text'>Donate For Food</h5>
							</div>
						</div>

						<div className='col-md-6 col-lg-4' data-aos='fade-up' data-aos-delay='600'>
							<div className='single-about'>
								<img
									src='assets/images/about-image/we-do-three.jpg'
									className='img-responsive w-100'
									alt=''
								/>
								<h5 className='title-text'>Donate For Water</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Brand Our Clients */}
			<div className='brand-area pb-100px'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12' data-aos='fade-up'>
							<div className='section-title text-center'>
								<h2 className='title'>
									Our <span>Clinets</span>
								</h2>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='brand-slider' data-aos='fade-up' data-aos-delay='200'>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/1.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/2.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/3.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/1.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/4.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/5.png'
										alt=''
									/>
								</a>
							</div>
							<div className='brand-slider-item'>
								<a href='#'>
									<img
										className=' img-responsive'
										src='assets/images/brand-logo/6.png'
										alt=''
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutPage
