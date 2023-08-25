import React from "react";
import Gato from "../assets/images/gato-img.png";
import Pajaro from "../assets/images/pajaro-img.png";
import Perro from "../assets/images/perro-img.png";
import Pez from "../assets/images/pez--img.png";
import { Link } from "react-router-dom";

function CardCategory() {
  // const cards = [
  //   {
  //     img: Gato,
  //   },
  //   {
  //     img: Perro,
  //   },
  //   {
  //     img: Pajaro,
  //   },
  // ];

  return (
    // <div className="card-container d-flex justify-content-center">
    //   {cards.map((card, i) => (
    //     <Card key={i} img={card.img} />
    //   ))}
    // </div>
    <div className="container d-flex flex-wrap justify-content-evenly align-items-center gap-3">
      <div className="animal-icon-container">
        <div className="animal-icon">
          <Link>
            <img src={Perro} alt="Perro" />
          </Link>
        </div>
      </div>
      <div className="animal-icon-container">
        <div className="animal-icon">
          <Link>
            <img src={Gato} alt="Gato" />
          </Link>
        </div>
      </div>
      <div className="animal-icon-container">
        <div className="animal-icon">
          <Link>
            <img src={Pez} alt="Pez" />
          </Link>
        </div>
      </div>
      <div className="animal-icon-container">
        <div className="animal-icon">
          <Link>
            <img src={Pajaro} alt="Pajaro" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategory;
