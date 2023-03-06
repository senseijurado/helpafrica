import { FC } from 'react'

interface Props {
	title?: string
	entryText?: string
	faqs?: [
		{
			question?: string
			answer?: string
			numberIndex?: number | string
		}
	]
}

export const FAQ: FC<Props> = ({ title = '', entryText = '', faqs = [] }) => {
	return (
		<>
			<h4 className=''>
				{' '}
				{title
					? title
					: 'Below are frequently asked questions, you may find the answer for yourself'}
			</h4>
			<p>
				{entryText
					? entryText
					: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
				sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue
				id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget
				enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet.
				Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus,
				vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.`}
			</p>
			<section>
				<div id='faq' className='panel-group'>
					<div
						className='panel panel-default single-my-account'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						{faqs.map((item) => (
							<details className='panel-heading my-account-title'>
								<summary title='Make a questions' className=''>
									<span>{item.numberIndex}</span>{' '}
									<a
										data-bs-toggle='collapse'
										href='#my-account-1'
										className='collapsed'
										aria-expanded='true'
									>
										{item?.question}
									</a>
								</summary>
								<div className='panel-body'>{item.answer}</div>
							</details>
						))}
					</div>
					<div
						className='panel panel-default single-my-account'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<div className='panel-heading my-account-title'>
							<h3 className='panel-title'>
								<span>2 .</span>{' '}
								<a
									data-bs-toggle='collapse'
									href='#my-account-2'
									aria-expanded='false'
									className='collapsed'
								>
									Donec mattis finibus elit ut tristique?
								</a>
							</h3>
						</div>
						<div
							id='my-account-2'
							className='panel-collapse collapse'
							data-bs-parent='#faq'
						>
							<div className='panel-body'>
								Donec mattis finibus elit ut tristique. Nullam tempus nunc
								eget arcu vulputate, eu porttitor tellus commodo. Aliquam
								erat volutpat. Aliquam consectetur lorem eu viverra
								lobortis. Morbi gravida, nisi id fringilla ultricies, elit
								lorem eleifend lorem
							</div>
						</div>
					</div>
					<div
						className='panel panel-default single-my-account'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<div className='panel-heading my-account-title'>
							<h3 className='panel-title'>
								<span>3 .</span>{' '}
								<a data-bs-toggle='collapse' href='#my-account-3'>
									Aenean elit orci, efficitur quis nisl at, accumsan?
								</a>
							</h3>
						</div>
						<div
							id='my-account-3'
							className='panel-collapse collapse'
							data-bs-parent='#faq'
						>
							<div className='panel-body'>
								Donec mattis finibus elit ut tristique. Nullam tempus nunc
								eget arcu vulputate, eu porttitor tellus commodo. Aliquam
								erat volutpat. Aliquam consectetur lorem eu viverra
								lobortis. Morbi gravida, nisi id fringilla ultricies, elit
								lorem eleifend lorem
							</div>
						</div>
					</div>
					<div
						className='panel panel-default single-my-account'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<div className='panel-heading my-account-title'>
							<h3 className='panel-title'>
								<span>4 .</span>{' '}
								<a data-bs-toggle='collapse' href='#my-account-4'>
									Pellentesque habitant morbi tristique senectus et
									netus?
								</a>
							</h3>
						</div>
						<div
							id='my-account-4'
							className='panel-collapse collapse'
							data-bs-parent='#faq'
						>
							<div className='panel-body'>
								Donec mattis finibus elit ut tristique. Nullam tempus nunc
								eget arcu vulputate, eu porttitor tellus commodo. Aliquam
								erat volutpat. Aliquam consectetur lorem eu viverra
								lobortis. Morbi gravida, nisi id fringilla ultricies, elit
								lorem eleifend lorem
							</div>
						</div>
					</div>
					<div
						className='panel panel-default single-my-account'
						data-aos='fade-up'
						data-aos-delay='200'
					>
						<div className='panel-heading my-account-title'>
							<h3 className='panel-title'>
								<span>5 .</span>{' '}
								<a data-bs-toggle='collapse' href='#my-account-5'>
									Nam pellentesque aliquam metus?
								</a>
							</h3>
						</div>
						<div
							id='my-account-5'
							className='panel-collapse collapse'
							data-bs-parent='#faq'
						>
							<div className='panel-body'>
								Donec mattis finibus elit ut tristique. Nullam tempus nunc
								eget arcu vulputate, eu porttitor tellus commodo. Aliquam
								erat volutpat. Aliquam consectetur lorem eu viverra
								lobortis. Morbi gravida, nisi id fringilla ultricies, elit
								lorem eleifend lorem
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default FAQ
