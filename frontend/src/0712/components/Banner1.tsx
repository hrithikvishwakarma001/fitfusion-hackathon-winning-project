import React from "react";

const Banner1 = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"30px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",width:'95%'} }>
      <div style={{display:"flex",gap:"20px",marginLeft:"20px"}}>
        <img src="https://healthifyme.imgix.net/static/images/home_website/landing/generic/Lifestyle1.png?auto=format" alt="" style={{height:"250px",marginTop:"20px"}}/>
        <img src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Lifestyle2_update.png?auto=format" alt=""style={{height:"280px"}}/>
        <div style={{width:"40%", borderRadius:"10px", padding:"10px", marginTop:"30px",marginLeft:"30px"}}>
          <h1 style={{fontSize:"28px",fontWeight:"bolder"}}>Diet Flexibility and Fitness Freedom</h1>
          <p style={{marginTop:"10px"}}>With the right data, reach your fitness goals faster, get personalized coaching and work with greater efficiency.</p>
        </div>
      </div>
      <div style={{display:"flex",gap:"20px", marginTop:"20px",marginLeft:"20px"}}>
        <img src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Lifestyle_gray.png?auto=format" alt="" style={{height:"280px", marginTop:"20px"}} />
        <img src="https://healthifyme.imgix.net/static/images/home_website/landing/generic/Lifestyle4.png?auto=format" alt=""  style={{height:"320px"}}/>
      </div>
    </div>
  );
};

export default Banner1;
