import { Button, Card, Carousel } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router";

const Body = () => {
	const navigate = useNavigate();
	const handleCLick = () => {
		navigate("/home/bmi");
	};
	return (
		<div
			className='flex flex-row mt-8 shadow-md w-[97%] p-5 mx-auto border-2 bg-slate-50
		 justify-evenly items-center mb-10
		'>
			<div className='max-w-sm hover:translate-y-2 duration-500'>
				<Card>
					<h5
						className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'
						style={{ textAlign: "center" }}>
						BMI
					</h5>
					<p className='font-normal text-gray-500 dark:text-gray-400 mr-2'>
						BMI stands for Body Mass Index, which is a measure of
						body fat based on a person's weight and height. BMI is a
						widely used method to assess whether a person has a
						healthy body weight, with a BMI of 18.5 to 24.9
						considered healthy, while a BMI of 25 to 29.9 is
						classified as overweight, and a BMI of 30 or higher is
						considered obese.
					</p>
					<div>
						<Button
							gradientDuoTone='pinkToOrange'
							style={{ margin: "auto" }}
							onClick={handleCLick}>
							Check your BMI
						</Button>
					</div>
				</Card>
			</div>
			<div
				className='flex flex-col w-2/3 h-[350px] p-5 bg-gray-100 dark:bg-gray-800
			 object-contain
			'>
				<Carousel>
					<img
						src='https://img.freepik.com/free-vector/flat-infographic-metabolism-level-scale-with-arrow-measurement-value_88138-934.jpg?w=1380&t=st=1684132992~exp=1684133592~hmac=c667c44a73490a27a6e5730ee1eb1fa5577e83e224e804a213d371eccc332f15'
						alt='...'
						className='w-full h-[350px] object-cover'
					/>
					<img
						src='https://img.freepik.com/free-vector/tiny-women-near-obese-chart-scales-isolated-flat-vector-illustration-cartoon-female-characters-diet-using-weight-control-with-bmi-body-mass-index-medical-fitness-exercise-concept_74855-10177.jpg?w=1380&t=st=1684132888~exp=1684133488~hmac=dba6462298a0c8813027439b1c5c60a1a80d03660db635fb24b75a985969c45e'
						alt='...'
						className='w-full h-[350px] object-cover'
					/>
					<img
						src='https://img.freepik.com/free-vector/flat-woman-diet-control-normal-weight-with-bmi-scale_88138-933.jpg?w=1380&t=st=1684132966~exp=1684133566~hmac=54eacb3a02d2a943244f1dabeb73ee1e04f41f151d462c4c6c1ef0401ffbaf91'
						alt='...'
						className='w-full h-[350px] object-cover'
					/>
				</Carousel>
			</div>
		</div>
	);
};

export default Body;
