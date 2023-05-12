import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../0568/components/SideBar";
import Login from "../0696/pages/Login";
import SignUp from "../0696/pages/SignUp";

const Router = () => {
	return (
		<div className='ml-54 w-auto bg-slate-600'>
			<Routes>
				<Route path='/' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<SideBar />} />
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
