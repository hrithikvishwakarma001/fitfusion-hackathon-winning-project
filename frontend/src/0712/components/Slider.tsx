import React from "react";
import { Carousel } from "flowbite-react";
const Slider = () => {
	return (
		<div
			className='container-fluid
       w-[98%]
       h-2/3
       m-5 
      '>
			<Carousel slideInterval={3000}>
				<img
					src='/img-1.jpg'
					alt='...'
					style={{ width: "100%" }}
				/>
				<img
					src={"/img-2.jpg"}
					alt='...'
					style={{ width: "100%" }}
				/>
				{/* <img
					src='https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5007.jpg?w=1380&t=st=1684131502~exp=1684132102~hmac=c1b66c127c771e4e10a853fd63f20d61baea14d9f456127e7562e593141e21d7'
					alt='...'
					style={{ width: "100%" }}
				/>
				<img
					src={
						"https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg?w=1380&t=st=1684131048~exp=1684131648~hmac=5af4a284355f1311b03fa5e25fc416886a24074340d06c35de53952c16b3e3cb"
					}
					alt='...'
					style={{ width: "100%" }}
				/>
				<img
					src='https://img.freepik.com/free-photo/portrait-muscled-woman-training-with-barbell-isolated-purple-background-neon-light_155003-45819.jpg?w=1060&t=st=1684130907~exp=1684131507~hmac=ae03b5302752dc840505248988686b7dbbffbf5c69e4e2d28c6b5ff88294f046'
					alt='...'
				/> */}
			</Carousel>
		</div>
	);
};

export default Slider;
