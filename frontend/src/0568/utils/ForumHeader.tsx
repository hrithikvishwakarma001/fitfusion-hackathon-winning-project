export const ForumHeader = () => {
	return (
		<div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8'>
			<div className='p-8 rounded shadow-xl sm:p-16 bg-slate-50'>
				<div className='flex flex-col lg:flex-row  '>
					<div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
							Let's make your <br className='hidden md:block' />
							discussion with{" "}
							<span className='relative px-1'>
								<div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-200' />
								<span className='relative inline-block text-purple-600'>
									Thread
								</span>
							</span>
						</h2>
					</div>
					<div className='lg:w-1/2'>
						<p className='mb-4 text-base text-gray-700'>
							create thread and make your discussion with other
							people and get the answer from them.
						</p>
						<p className='mb-4 text-base text-purple-600'>
							You can also make your own thread and make your own
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
