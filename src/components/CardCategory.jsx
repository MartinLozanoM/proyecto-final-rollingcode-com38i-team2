import React, { useState } from "react";
import Gato from "../assets/images/gato.jpg"; 
import Pajaro from "../assets/images/pajaro.jpg";  
import Perro from "../assets/images/perro.jpg";
import Card from "./Card";

function CardCategory() { 

  const cards = [
    {
      img: Gato  
    },
    {
      img: Perro    
    },   
    {
      img: Pajaro 
    }   
  ];

  return (
    <div className="card-container d-flex justify-content-center">     
       {cards.map((card, i) => (
         <Card key={i} img={card.img} />      
       ))}      
    </div>     
  );
}

export default CardCategory;