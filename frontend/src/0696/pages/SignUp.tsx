import { useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../utils";

const initialState = {
	username: "",
	email: "",
	password: "",
};

export default function SignUp() {
	const [userData, setUserData] = useState(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let name = e.target.name;
		let value = e.target.value;
		setUserData({ ...userData, [name]: value });
	};

	const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(userData);
		setUserData(initialState);
	};

	const handleGoogleLogin = () => {
		window.open(`${BASEURL}/auth/google`, "_self");
	};
	return (
		<section className='h-screen  bg-slate-200 flex-1 align-center'>
			<div className='items-center px-5 py-12 lg:px-20'>
				<div className='flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0'>
					<h1 className='text-2xl text-center font-medium'>
						Register
					</h1>
					<div className='mt-8'>
						<div className='mt-6'>
							<form className='space-y-6' onSubmit={handelSubmit}>
								<div>
									<label className='block text-sm font-medium text-neutral-600'>
										{" "}
										Username{" "}
									</label>
									<div className='mt-1'>
										<input
											id='username'
											name='username'
											value={userData.username}
											type='text'
											required={true}
											placeholder='Your Username'
											className='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
											onChange={handleChange}
										/>
									</div>
								</div>
								<div>
									<label className='block text-sm font-medium text-neutral-600'>
										{" "}
										Email address{" "}
									</label>
									<div className='mt-1'>
										<input
											id='email'
											name='email'
											value={userData.email}
											type='email'
											required={true}
											placeholder='Your Email'
											className='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className='space-y-1'>
									<label className='block text-sm font-medium text-neutral-600'>
										{" "}
										Password{" "}
									</label>
									<div className='mt-1'>
										<input
											id='password'
											name='password'
											value={userData.password}
											type='password'
											required={true}
											placeholder='Your Password'
											onChange={handleChange}
											className='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
										/>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										<input
											id='remember-me'
											name='remember-me'
											type='checkbox'
											placeholder='Your password'
											className='w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500'
										/>
										<label className='block ml-2 text-sm text-neutral-600'>
											{" "}
											Remember me{" "}
										</label>
									</div>

									<div className='text-sm'>
										<a
											href='/'
											className='font-medium text-blue-600 hover:text-blue-500'>
											{" "}
											Forgot your password?{" "}
										</a>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										<label className='block ml-2 text-sm text-neutral-600'>
											already have an account?
											<Link
												to='/login'
												className='font-medium text-blue-600 hover:text-blue-500'>
												{" "}
												Login
											</Link>
										</label>
									</div>
								</div>

								<div>
									<button
										type='submit'
										className='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
										Sign in
									</button>
								</div>
							</form>
							<div className='relative my-4'>
								<div className='absolute inset-0 flex items-center'>
									<div className='w-full border-t border-gray-300'></div>
								</div>
								<div className='relative flex justify-center text-sm'>
									<span className='px-2 text-neutral-600 bg-white'>
										{" "}
										Or continue with{" "}
									</span>
								</div>
							</div>
							<div>
								<button
									onClick={handleGoogleLogin}
									className='w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
									<div className='flex items-center justify-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											xmlnsXlink='http://www.w3.org/1999/xlink'
											className='w-6 h-6'
											viewBox='0 0 48 48'>
											<defs>
												<path
													id='a'
													d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'></path>
											</defs>
											<clipPath id='b'>
												<use
													xlinkHref='#a'
													overflow='visible'></use>
											</clipPath>
											<path
												clipPath='url(#b)'
												fill='#FBBC05'
												d='M0 37V11l17 13z'></path>
											<path
												clipPath='url(#b)'
												fill='#EA4335'
												d='M0 11l17 13 7-6.1L48 14V0H0z'></path>
											<path
												clipPath='url(#b)'
												fill='#34A853'
												d='M0 37l30-23 7.9 1L48 0v48H0z'></path>
											<path
												clipPath='url(#b)'
												fill='#4285F4'
												d='M48 48L17 24l-4-3 35-10z'></path>
										</svg>
										<span className='ml-4'>
											{" "}
											Log in with Google
										</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
