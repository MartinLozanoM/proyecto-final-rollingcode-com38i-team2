import React, { useState, useEffect } from "react";
import Slider1 from "../assets/images/sld1.png";  
import Slider2 from "../assets/images/sld2.png"; 
import Slider3 from "../assets/images/sld3.jpg";

const images = [Slider1, Slider2, Slider3];

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === images.length - 1) {
          return 0;
        } else {  
          return prevActiveSlide + 1;
        }
      });  
    }, 2000);
    return () => clearInterval(interval);    
  }, [activeSlide]);

  return (    
    <div className="slider">      
      <img 
        src={images[activeSlide]} 
        alt="Slider images" 
      />      
    </div>
  );
}

export default Slider;