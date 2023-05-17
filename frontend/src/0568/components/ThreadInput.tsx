import React from "react";
import { createPost } from "../api/post.api";
import { useSelector } from "react-redux";
const ThreadInput = ({
	fetchPosts,
}: {
	fetchPosts: () => Promise<void>;
}): JSX.Element => {
	const { user } = useSelector((state: any) => state.authReducer);

	const [data, setData] = React.useState({ title: "", description: ""});

	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		console.log("👻 -> file: ThreadInput.tsx:12 -> handleSubmit -> data", {
			...data,
			userId: user._id,
		});
		console.log(user)
		const res = await createPost({ ...data, userId: user._id });
		console.log(
			"👻 -> file: ThreadInput.tsx:14 -> handleSubmit -> res",
			res.data.message
		);

		fetchPosts();
	};
	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
				<div className='w-full md:w-2/3 flex flex-col items-center text-center'>
					<div className='flex w-full justify-center items-end'>
						<div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left'>
							<label className='leading-7 text-sm text-gray-600'>
								Title
							</label>
							<input
								type='text'
								id='hero-field'
								name='title'
								className='w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={handleChange}
							/>
							<label className='leading-7 text-sm mt-2 text-gray-600'>
								Description
							</label>
							<textarea
								id='hero-field'
								name='description'
								className='w-full  bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={handleChange}
							/>
						</div>
						<button
							type='submit'
							className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
							onClick={handleSubmit}>
							Create
						</button>
					</div>
					<p className='text-sm mt-2 text-gray-500 w-full'>
						create thread and make your discussion with other people
					</p>
				</div>
			</div>
		</section>
	);
};

export default ThreadInput;
