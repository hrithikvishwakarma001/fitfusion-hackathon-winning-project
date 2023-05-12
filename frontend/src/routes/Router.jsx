import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../0696/pages/Login";
import SignUp from "../0696/pages/SignUp";

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
