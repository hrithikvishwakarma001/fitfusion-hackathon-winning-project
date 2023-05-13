import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Router from "./routes/Router";
import { Education } from "./0612/pages/Education";
function App() {
	const location = useLocation();
	const pathName = location.pathname;
	return (
		<div className='bg-slate-200 max-h-screen'>
			{/* {(pathName === "/" || pathName === "/login") && <Router />}
			{pathName !== "/" && pathName !== "/login" && <Home />} */}
			<Education/>
		</div>
	);
}

export default App;
