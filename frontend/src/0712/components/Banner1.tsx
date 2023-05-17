import React from "react";

const Banner1 = () => {
	return (
		<div
			//  style={{display:"flex",flexDirection:"column",marginTop:"30px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",width:'95%'} }
			className='flex flex-col mt-8 shadow-md w-[97%] p-5 mx-auto border-2 bg-slate-50'>
			<div
				//  style={{ display: "flex", gap: "20px", marginLeft: "20px" }}
				className='flex gap-4 ml-4 justify-center items-center'>
				{/* <img
					src='https://healthifyme.imgix.net/static/images/home_website/landing/generic/Lifestyle1.png?auto=format'
					alt=''
					style={{ height: "250px", marginTop: "20px" }}
				/>
				<img
					src='https://healthifyme.imgix.net/static/images/home_website/landing/assets/Lifestyle2_update.png?auto=format'
					alt=''
					style={{ height: "280px" }}
				/> */}
				<div
					style={{
						width: "40%",
						borderRadius: "10px",
						padding: "10px",
						marginTop: "30px",
						marginLeft: "30px",
					}}>
					<h1 style={{ fontSize: "28px", fontWeight: "bolder" }}>
						Diet Flexibility and Fitness Freedom
					</h1>
					<p style={{ marginTop: "10px" }}>
						With the right data, reach your fitness goals faster,
						get personalized coaching and work with greater
						efficiency.
					</p>
				</div>
			</div>
			<div
				className="w-full h-[400px] object-cover mt-5"
        >

				<img
					src='https://img.freepik.com/free-photo/top-view-healthy-life-inscription-spiral-notebook-white-pot-collection-fresh-vegetables-vegetarian-dinner-cooking-white-background_140725-143139.jpg?w=1380&t=st=1684131890~exp=1684132490~hmac=2b9a882b650bbd28a6d4fb117166bff9655ab3433a72abfc142af5296362b022'
					alt=''
					className="w-full h-[400px] object-cover"
				/>
			</div>
		</div>
	);
};

export default Banner1;
