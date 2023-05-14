import { Button, Card, Carousel } from "flowbite-react";
import React from "react";

const Body = () => {
    const handleCLick =()=>{
        alert("check")
    }
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96" style={{marginTop:"20px",marginBottom:"30px"}}>
      <Carousel>
        <img
          src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-528072248.jpg"
          alt="..."
        />
        <img
          src="https://i.pinimg.com/originals/ff/f8/8d/fff88d4e3a8529706586831159b9d1f8.jpg"
          alt="..."
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.7_bMpnTMYB2WU7Z2u8G_gAHaE7&pid=Api&P=0"
          alt="..."
        />
      </Carousel>
      <div className="max-w-sm">
        <Card>
          <h5
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            style={{ textAlign: "center" }}
          >
            BMI
          </h5>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            BMI stands for Body Mass Index, which is a measure of body fat based
            on a person's weight and height. BMI is a widely used method to
            assess whether a person has a healthy body weight, with a BMI of
            18.5 to 24.9 considered healthy, while a BMI of 25 to 29.9 is
            classified as overweight, and a BMI of 30 or higher is considered
            obese.
          </p>
          <div>
            <Button gradientDuoTone="pinkToOrange" style={{margin:"auto"}} onClick={handleCLick}>Check your BMI</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Body;
