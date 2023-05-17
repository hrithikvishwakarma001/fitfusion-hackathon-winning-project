import React from 'react'
import { Table } from "flowbite-react";

const Overweight = () => {
    const handle1 = () => {
        window.open(
          "https://drive.google.com/file/d/1c_UdQwv6dplQ8xiCRMbYjGVpcYdn3qLa/view?usp=sharing"
        );
      };
      const handle2 = () => {
        window.open(
          "https://drive.google.com/file/d/1PLsLUc2yp12YAOhs7zNBepx2CfOEsLxi/view?usp=sharing"
        );
      };
      const handle3 = () => {
        window.open(
          "https://drive.google.com/file/d/1gwkCM_q1j5VbLzCtdL7kz1mIWqANaiuJ/view?usp=sharing"
        );
      };
      const handle4 = () => {
        window.open(
          "https://drive.google.com/file/d/1Odv0IVGn2Zp-RSXdcc455o5yz4V51qUz/view?usp=sharing"
        );
      };
      const handle5 = () => {
        window.open(
          "https://drive.google.com/file/d/16W2QlRoaEpLN7V1XuJ_8aZ3ZDQX6ozOg/view?usp=sharing"
        );
      };
      return (
			<div className='flex flex-col items-center justify-center w-full h-full p-5 overflow-hidden bg-gray-100 rounded-sm  dark:bg-gray-800 sm:p-10'>
				<h1 className='mb-5 text-3xl font-extrabold text-center text-gray-900 dark:text-white'>
					Overweight
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
								Shredded
							</Table.Cell>
							<Table.Cell>6 Weeks</Table.Cell>
							<Table.Cell>Cutting</Table.Cell>
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
								Git Ripped
							</Table.Cell>
							<Table.Cell>8 weeks</Table.Cell>
							<Table.Cell>Cutting</Table.Cell>
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
								Lean Mode
							</Table.Cell>
							<Table.Cell>8 weeks</Table.Cell>
							<Table.Cell>Cutting</Table.Cell>
							<Table.Cell>
								<button
									className='font-medium text-blue-600 hover:underline dark:text-blue-500'
									onClick={handle3}>
									Download
								</button>
							</Table.Cell>
						</Table.Row>
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								Shredded Next Level
							</Table.Cell>
							<Table.Cell>8 weeks</Table.Cell>
							<Table.Cell>Cutting</Table.Cell>
							<Table.Cell>
								<button
									className='font-medium text-blue-600 hover:underline dark:text-blue-500'
									onClick={handle4}>
									Download
								</button>
							</Table.Cell>
						</Table.Row>
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
								Cardio
							</Table.Cell>
							<Table.Cell>8 weeks</Table.Cell>
							<Table.Cell>Cardio</Table.Cell>
							<Table.Cell>
								<button
									className='font-medium text-blue-600 hover:underline dark:text-blue-500'
									onClick={handle5}>
									Download
								</button>
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
}

export default Overweight