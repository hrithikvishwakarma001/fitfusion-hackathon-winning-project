import "./App.css";
import Banner1 from "./components/Banner1";

import Body from "./components/Body";
import CalculateBmi from "./components/CalculateBmi";
import FooterBar from "./components/FooterBar";
import Normal from "./components/Normal";
import Overweight from "./components/Overweight";
import Quote from "./components/Quote";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Underweight from "./components/Underweight";

function App() {
	return (
		<div className='bg-slate-200 max-h-400px'>
			{/* <SideBar /> */}
			{/* <Slider /> */}
			{/* <Slider />
			<Quote />
			<Banner1 />
			<Body />
			<FooterBar /> }
			{/* <Underweight /> */}
			{/* <BMICalculator /> */}
			{/* <Body /> */}
			<CalculateBmi />

		</div>
	);
}

export default App;
