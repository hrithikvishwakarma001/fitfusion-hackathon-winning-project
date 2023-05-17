import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Normal from "./Normal";
import Underweight from "./Underweight";
import Overweight from "./Overweight";

interface BMIValues {
  height: number;
  weight: number;
}

const CalculateBmi = () => {
  const [bmiValues, setBMIValues] = useState<BMIValues>({
    height: 0,
    weight: 0,
  });
  const [bmiResult, setBMIResult] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBMIValues({ ...bmiValues, [name]: +value });
  };

  const calculateBMI = () => {
    const { height, weight } = bmiValues;
    if (height > 0 && weight > 0) {
      const bmi = weight / (height / 100) ** 2;
      setBMIResult(bmi);
    //   if (bmiResult < 18.5) {
    //     return alert(`your bmi is ${bmi} (Under Weight)`);
    //   }
    //   if (bmiResult > 18.5 && bmiResult <= 24.9) {
    //     return alert(`your bmi is ${bmi} (Normal)`);
    //   }
    //   if (bmiResult > 24.9 && bmiResult <= 29.9) {
    //     return alert(`yout bmi is ${bmi} (overweight)`);
    //   }
    //   if (bmiResult > 24.9 && bmiResult <= 39.9) {
    //     return alert(`your bmi is ${bmi} (Obese)`);
    //   } else {
    //     alert(`your bmi is ${bmi} (Morbidly obese)`);
    //   }
    }
  };
  return (
		<>
			<div>
				<div
					className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-20 mb-6 first-letter:
           
          '>
					<h2
						className='text-2xl font-bold text-purple-500 dark:text-purple-300 
             mb-2 text-center'>
						BMI Calculator
					</h2>
					<div
            className='w-2/3 mx-auto flex flex-col justify-center items-center'
          >
						<label
							htmlFor='height'
							className='block text-sm text-gray-500 dark:text-gray-300 my-4'>
							Height
						</label>

						<input
							type='text'
							placeholder='0'
							name='height'
							value={bmiValues.height}
							onChange={handleInputChange}
							className=' bg-purple-200 rounded-sm border-none focus-none focus:ring-0 focus:border-transparent'
						/>
						<label
							htmlFor='weight'
							className='block text-sm text-gray-500 dark:text-gray-300 my-4'>
							Weight
						</label>

						<input
							type='text'
							placeholder='0'
							name='weight'
							value={bmiValues.weight}
							onChange={handleInputChange}
							className=' bg-purple-200 rounded-sm border-none focus-none focus:ring-0 focus:border-transparent'
						/>
						<button
							onClick={calculateBMI}
              className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded my-4'
              >
							Calculate
						</button>
					</div>
					<p
            className='text-2xl font-bold text-black dark:text-purple-300 font-mono text-center my-4'
            >
						Your BMI : {bmiResult.toFixed(2)}
					</p>
				</div>
			</div>
			<div className='mt-8 bg-slate-300'>
				{bmiResult > 10 && bmiResult < 18.5 && <Underweight />}
				{bmiResult > 18.5 && bmiResult <= 24.9 && <Normal />}
				{bmiResult > 24.9 && bmiResult <= 39.9 && <Overweight />}
			</div>
		</>
  );
};

export default CalculateBmi;
