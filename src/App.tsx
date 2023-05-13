import "./App.css";
import Banner1 from "./components/Banner1";
import Body from "./components/Body";
import FooterBar from "./components/FooterBar";
import Quote from "./components/Quote";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";

function App() {
	return (
		<div className='bg-slate-200 max-h-400px'style={{marginLeft:"300px"}}>
			{/* <SideBar /> */}
			<Slider />
			{/* <Slider /> */}
			<Quote />
			<Banner1 />
			<Body />
			<FooterBar />
		</div>
	);
}

export default App;
