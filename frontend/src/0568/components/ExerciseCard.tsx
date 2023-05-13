import React from "react";

const ExerciseCard = ({
	bodyPart,
	equipment,
	gifUrl,
	id,
	name,
	target
}: any) => {
	let nameString = name.split("").slice(0, 30).join("");
	if(name.length > 30) nameString += "..."
	return (
		<div className='max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
			<div className='px-4 py-2'>
				<h1 className='text-xl font-bold text-gray-800 uppercase dark:text-white'>
					{equipment}
				</h1>
				<p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
					{/* {bodyPart} */}
					{nameString}
				</p>
			</div>

			<img
				className='object-contain w-full h-48 mt-2'
				src={gifUrl}
				alt={name}
			/>

			<div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
				<h1 className='text-lg font-bold text-white'>#{id}</h1>
				<button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
					{target}
				</button>
			</div>
		</div>
	);
};

export default ExerciseCard;
