import { Logo } from '@/components'
import { FC } from 'react'

export interface Props {
	ariaLabel?: string
	classes?: string
}

export const Header: FC = () => {
	return (
		<>
			<header
				aria-label='Homepage'
				className='mx-auto px-2 sm:px-6 lg:px-8 bg-primary-400 h-2'
			>
				<div className='h-4 d-flex flex-center-between'>
					<div className='md:flex md:items-center md:gap-12'>
						<a className='block text-lime-5' href='/'>
							<Logo
								className={'bg-primary-4'}
								fill='currentColor'
								height={48}
								width={48}
								cursor='pointer'
							/>
						</a>
					</div>

					<div className='hidden md:block'></div>

					<div className='flex items-center gap-4'>
						<div className='sm:flex sm:gap-4'>
							<a
								className='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'
								href='/'
							>
								Login
							</a>

							<div className='hidden sm:flex'>
								<a
									className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600'
									href='/'
								>
									Register
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
