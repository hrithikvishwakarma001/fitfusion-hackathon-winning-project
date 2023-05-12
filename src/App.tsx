// import Login from "./0696/pages/Login";
// import SignUp from "./0696/pages/SignUp";
import "./App.css";
import SideBar from "./components/SideBar";
import Router from "./routes/Router";

function App() {
	return (
		<div className='bg-slate-200 max-h-400px'>

			{/* <SideBar /> */}
			<Router/>

			<SideBar />
			{/* <Login/> */}
			{/* <SignUp/> */}

		</div>
	);
}

export default App;
