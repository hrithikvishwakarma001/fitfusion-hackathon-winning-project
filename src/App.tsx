import "./App.css";
import SideBar from "./components/SideBar";
import Router from "./routes/Router";

function App() {
	return (
		<div className='bg-slate-200 max-h-400px'>
			{/* <SideBar /> */}
			<Router/>
		</div>
	);
}

export default App;
