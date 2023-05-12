import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../0568/components/SideBar";

const Home = () => {
	return (
		<div className='flex flex-row w-full h-screen bg-slate-200'>
			<SideBar />
			<div>
				<Routes>
					<Route path='/users' element={<h1>users</h1>} />
					<Route path='/chart' element={<h1>chart</h1>} />
					<Route path='/dashboard' element={<h1>dashboard</h1>} />
					<Route path='/analytics' element={<h1>analytics</h1>} />
					<Route path='/guides' element={<h1>guides</h1>} />
					<Route path='/checklist' element={<h1>checklist</h1>} />
				</Routes>
			</div>
		</div>
	);
};

export default Home;
