import React from "react";

const Pagination = ({ setPage, totalPage, page }:any) => {
	const totalPageArray = Array.from(Array(totalPage).keys()).map(
		(i) => i + 1
	);

	return (
		<div className='w-full bg-slate-200 dark:bg-gray-800 mt-6 shadow-lg'>
			<div className='container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 '>
				<div className='-mx-2'>
					{totalPageArray.map((item, index) => (
						<button
							key={index}
              onClick={() => setPage(item)}
							className='inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700'>
							{item}
						</button>
					))}
				</div>

				<div className='text-gray-500 dark:text-gray-400'>
					<span className='font-medium text-gray-700 dark:text-gray-100'>
						{page}
					</span>
					of {totalPage} records
				</div>
			</div>
		</div>
	);
};

export default Pagination;
