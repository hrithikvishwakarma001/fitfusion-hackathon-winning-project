import Chart from "react-apexcharts";

export default function LineChatu({ state }: { state: any }) {
	return (
		<>
			<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='grid gap-10 lg:grid-cols-2'>
					<div>
						<Chart
							options={state.options}
							series={state.series}
							type='line'
							width='550'
						/>
					</div>
					<div className='lg:pr-10'>
						<a
							href='/'
							aria-label='Go Home'
							title='Logo'
							className='inline-block mb-5'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
								<svg
									className='w-10 h-10 text-purple-400'
									stroke='currentColor'
									viewBox='0 0 52 52'>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</a>
						<h5 className='mb-4 text-4xl  text-gray-900 font-extrabold leading-none'>
							Weekly Progress
							<br className='hidden md:block  text-gray-900' />
							and Improve by practicing
							<span className='inline-block text-deep-purple-accent-400  text-gray-900'>
								on this chart
							</span>
						</h5>
						<p className='mb-6 text-gray-900'>
							You can see your progress in this chart and you can
							also see your progress in the last 7 days
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
