export const ForumHeader = () => {
	return (
		<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<div className='p-8 rounded shadow-xl sm:p-16'>
				<div className='flex flex-col lg:flex-row'>
					<div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
							Let's make your{" "}
							<br className='hidden md:block' />
							 discussion with{" "}
							<span className='relative px-1'>
								<div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-200' />
								<span className='relative inline-block text-purple-600'>
									Forum
								</span>
							</span>
						</h2>
					</div>
					<div className='lg:w-1/2'>
						<p className='mb-4 text-base text-gray-700'>
							Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem accusantium doloremque rem aperiam, eaque
							ipsa quae. Sed ut perspiciatis unde omnis iste. Sed
							ut perspiciatis unde omnis iste error sit voluptatem
							accusantium doloremque rem aperiam.
						</p>
						<a
							href='/'
							aria-label=''
							className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
