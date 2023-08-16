import React from 'react'
import { useParams } from "react-router-dom";

function Promotion() {
  let { id } = useParams();  
  const promotion = promociones.find(p => p.id === id);

  return (
    <div className='promotion'>
      <h2>{promotion.title}</h2>
      <img src={promotion.image} alt={promotion.title} />  
      <p>{promotion.description}</p>
    </div>   
  )
}

export default Promotion