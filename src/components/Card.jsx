import React from "react"; 

function Card({ img }) {
  return (    
    <div className="card">       
      <img className="card-img-top rounded-circle" src={img} alt="Card image cap" />      
    </div>  
  );
}

export default Card;