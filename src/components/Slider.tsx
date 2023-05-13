import React from 'react'
import {Carousel} from "flowbite-react"
import img1 from "../components/Image/home-bg-1.jpg"
import img4 from "../components/Image/banner-bg.jpg"
const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" style={{height:"85vh"}}>
    <Carousel slideInterval={3000}>
      <img
        src={img1}
        alt="..."
        style={{height:"100%"}}
      />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
        alt="..."
        style={{height:"100%"}}
      />
      <img
        src="https://xbr-fitness.com/wp-content/uploads/2020/11/Nutrition-information-and-knowledge.jpg"
        alt="..."
        style={{height:"100%"}}
      />
      <img
        src={img4}
        alt="..."
        style={{height:"100%"}}
      />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
        alt="..."
      />
      {/* <video autoPlay>
        <source src='https://uploads-ssl.webflow.com/6374d130aeb3b3a67943d20c/637df29c9f3c7940431d0863_LikeAPro%20loop%20v2%20(16-9)%20(2)-transcode.mp4'></source>
      </video> */}
    </Carousel>
  </div>
  )
}

export default Slider