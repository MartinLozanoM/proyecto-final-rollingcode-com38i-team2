import React, { useState, useEffect } from "react";
import Gato from "../assets/images/gato.jpg";
import Pajaro from "../assets/images/pajaro.jpg";
import Perro from "../assets/images/perro.jpg";

const images = [Gato, Pajaro, Perro];

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
      <img src={images[activeSlide]} alt="" />
    </div>
  );
}

export default Slider;
