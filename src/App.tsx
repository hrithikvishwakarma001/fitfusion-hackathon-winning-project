import "./App.css";

function App() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl sm:text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Simple no-tricks pricing
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Distinctio et nulla eum soluta et neque labore
						quibusdam. Saepe et quasi iusto modi velit ut non
						voluptas in. Explicabo id ut laborum.
					</p>
				</div>
				<div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
					<div className='p-8 sm:p-10 lg:flex-auto'>
						<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
							Lifetime membership
						</h3>
						<p className='mt-6 text-base leading-7 text-gray-600'>
							Lorem ipsum dolor sit amet consect etur adipisicing
							elit. Itaque amet indis perferendis blanditiis
							repellendus etur quidem assumenda.
						</p>
						<div className='mt-10 flex items-center gap-x-4'>
							<h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
								What’s included
							</h4>
							<div className='h-px flex-auto bg-gray-100'></div>
						</div>
						<ul
							role='list'
							className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
							<li className='flex gap-x-3'>
								<svg
									className='h-6 w-5 flex-none text-indigo-600'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'>
									<path
										fill-rule='evenodd'
										d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
										clip-rule='evenodd'
									/>
								</svg>
								Private forum access
							</li>
							<li className='flex gap-x-3'>
								<svg
									className='h-6 w-5 flex-none text-indigo-600'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'>
									<path
										fill-rule='evenodd'
										d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
										clip-rule='evenodd'
									/>
								</svg>
								Member resources
							</li>
							<li className='flex gap-x-3'>
								<svg
									className='h-6 w-5 flex-none text-indigo-600'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'>
									<path
										fill-rule='evenodd'
										d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
										clip-rule='evenodd'
									/>
								</svg>
								Entry to annual conference
							</li>
							<li className='flex gap-x-3'>
								<svg
									className='h-6 w-5 flex-none text-indigo-600'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'>
									<path
										fill-rule='evenodd'
										d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
										clip-rule='evenodd'
									/>
								</svg>
								Official member t-shirt
							</li>
						</ul>
					</div>
					<div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
						<div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
							<div className='mx-auto max-w-xs px-8'>
								<p className='text-base font-semibold text-gray-600'>
									Pay once, own it forever
								</p>
								<p className='mt-6 flex items-baseline justify-center gap-x-2'>
									<span className='text-5xl font-bold tracking-tight text-gray-900'>
										$349
									</span>
									<span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
										USD
									</span>
								</p>
								<a
									href='#'
									className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Get access
								</a>
								<p className='mt-6 text-xs leading-5 text-gray-600'>
									Invoices and receipts available for easy
									company reimbursement
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe className="absolute inset-0" title="map" m-h="0" m-w="0"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" height="100%" frame-border="0"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed" >example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
		</div>
	);
}

export default App;
