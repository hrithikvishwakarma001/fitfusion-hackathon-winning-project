import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<div className='ml-54 w-auto bg-slate-600' >
			<Routes>
				<Route path='/' element={<h1>home</h1>} />
				<Route path='/users' element={<h1>users</h1>} />
				<Route path='/chart' element={<h1>chart</h1>} />
				<Route path='/dashboard' element={<h1>dashboard</h1>} />
				<Route path='/analytics' element={<h1>analytics</h1>} />
				<Route path='/guides' element={<h1>guides</h1>} />
				<Route path='/checklist' element={<h1>checklist</h1>} />
			</Routes>
		</div>
	);
};

export default Router;
