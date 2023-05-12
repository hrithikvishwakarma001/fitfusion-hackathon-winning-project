import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../0568/components/SideBar";
import Login from "../0696/pages/Login";
import SignUp from "../0696/pages/SignUp";
import Home from "../pages/Home";

const Router = () => {
	return (
		<div className='ml-54 w-auto bg-slate-200'>
			<Routes>
				<Route path='/' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
};

export default Router;
