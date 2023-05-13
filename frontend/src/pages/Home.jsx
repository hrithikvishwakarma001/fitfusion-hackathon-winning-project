import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../0568/components/SideBar";
import Content from "../0568/components/Content";
import Exercise from "../0568/components/Exercise";
import Chart from "../0568/pages/Charts";
import Forum from "../0568/pages/Forum";

const Home = () => {
	return (
		<div className='flex flex-row w-full h-screen bg-slate-100 '>
			<SideBar />
			<div className='flex flex-col w-full h-full overflow-y-auto align-center'>
				<Routes>
					<Route path='/dashboard' element={<Content />} />
					<Route
						path='/dashboard/exercise/:query'
						element={<Exercise />}
					/>
					<Route path='/discussion' element={<Forum/>} />
					<Route
						path='/notification'
						element={<h1>notification</h1>}
					/>
					<Route path='/chart' element={<Chart />} />
					<Route path='performance' element={<Chart />} />
					<Route path='/guides' element={<h1>guides</h1>} />
					<Route path='/checklist' element={<h1>checklist</h1>} />
				</Routes>
			</div>
		</div>
	);
};

export default Home;
