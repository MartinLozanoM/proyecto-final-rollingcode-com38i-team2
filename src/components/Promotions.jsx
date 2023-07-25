import React, { useState } from "react";
import "./promotions.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

function Promotions() {
  const [current, setCurrent] = useState(0);
  const promociones = [
    {
      id: 1,
      title: "Promoción 1",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
    {
      id: 2,
      title: "Promoción 2",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
    {
      id: 3,
      title: "Promoción 3",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
    {
      id: 4,
      title: "Promoción 4",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
    {
      id: 5,
      title: "Promoción 5",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
    {
      id: 6,
      title: "Promoción 6",
      image: "/img1.jpg",
      description: "Descripción de la promoción 1.",
    },
  ];

  function next() {
    setCurrent(current === promociones.length - 3 ? 0 : current + 3);
  }

  function prev() {
    setCurrent(current === 0 ? promociones.length - 3 : current - 3);
  }

  return (
    <div className="promociones-wrapper">
      {promociones.map((promo, i) => {
        if (i >= current && i < current + 3) {
          return (
            <div className="promocion" key={promo.id}>
              <img src={promo.image} alt={promo.title} />
              <div className="info">
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
              </div>
              {i === current && (
                <ArrowLeftCircleFill className="prev-btn" onClick={prev} />
              )}
              {i === current + 2 && (
                <ArrowRightCircleFill className="next-btn" onClick={next} />
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Promotions;
