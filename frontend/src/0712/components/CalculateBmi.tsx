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
          style={{
            width: "50%",
            margin: "auto",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "10px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              margin: "auto",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            BMI Calculator
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="height"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Height
            </label>

            <input
              type="number"
              placeholder="0"
              name="height"
              value={bmiValues.height}
              onChange={handleInputChange}
              className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
            <label
              htmlFor="weight"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              Weight
            </label>

            <input
              type="number"
              placeholder="0"
              name="weight"
              value={bmiValues.weight}
              onChange={handleInputChange}
              className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
            <button
              onClick={calculateBMI}
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                width: "25%",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "10px",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Calculate
            </button>
          </div>
          <p
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              width: "30%",
              margin: "auto",
              padding: "13px",
              borderRadius: "10px",
              fontSize: "16px",
              fontFamily: "initial",
            }}
          >
            Your BMI : {bmiResult.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="mt-8 bg-slate-300">
        {bmiResult > 10 && bmiResult < 18.5 && <Underweight />}
        {bmiResult > 18.5 && bmiResult <= 24.9 && <Normal />}
        {bmiResult > 24.9 && bmiResult <= 29.9 && <Overweight />}
        {bmiResult > 24.9 && bmiResult <= 39.9 && <Overweight />}
      </div>
    </>
  );
};

export default CalculateBmi;
