import React from "react";
import { Table } from "flowbite-react";

const Normal = () => {
  const handle1 = () => {
    window.open(
      "https://drive.google.com/file/d/1gwkCM_q1j5VbLzCtdL7kz1mIWqANaiuJ/view?usp=sharing"
    );
  };
  const handle2 = () => {
    window.open(
      "https://drive.google.com/file/d/14TrlpfJ4tUhPtzK-C10lhTNHZi02iCl7/view?usp=sharing"
    );
  };
  const handle3 = () => {
    window.open(
      "https://drive.google.com/file/d/1l3Jhkh1Vw6cc9iXZJGtZzhbHjDJ7sJhA/view?usp=sharing"
    );
  };
  return (
		<div className='flex flex-col items-center justify-center w-full h-full p-5 overflow-hidden bg-gray-100 rounded-sm  dark:bg-gray-800 sm:p-10'>
			<h1 className='mb-5 text-3xl font-extrabold text-center text-gray-900 dark:text-white'>
				Normal
			</h1>
			<Table hoverable={true}>
				<Table.Head>
					<Table.HeadCell>Package name</Table.HeadCell>
					<Table.HeadCell>Duration</Table.HeadCell>
					<Table.HeadCell>Category</Table.HeadCell>

					<Table.HeadCell>
						<span className='sr-only'>Edit</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							Lean Mode
						</Table.Cell>
						<Table.Cell>5 Weeks</Table.Cell>
						<Table.Cell>Muscle Gain</Table.Cell>
						<Table.Cell>
							<button
								className='font-medium text-blue-600 hover:underline dark:text-blue-500'
								onClick={handle1}>
								Download
							</button>
						</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							Muscular 8
						</Table.Cell>
						<Table.Cell>8 weeks</Table.Cell>
						<Table.Cell>Lean Gain</Table.Cell>
						<Table.Cell>
							<button
								className='font-medium text-blue-600 hover:underline dark:text-blue-500'
								onClick={handle2}>
								Download
							</button>
						</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							Ultimate Arms
						</Table.Cell>
						<Table.Cell>8 weeks</Table.Cell>
						<Table.Cell>Gain</Table.Cell>
						<Table.Cell>
							<button
								className='font-medium text-blue-600 hover:underline dark:text-blue-500'
								onClick={handle3}>
								Download
							</button>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
  );
};

export default Normal;
