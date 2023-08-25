import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
import Image from "../assets/images/img1.jpg";

const Promotions = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const promotions = [
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

  useEffect(() => {}, [current]);

  const next = () => {
    setCurrent((current + 1) % promotions.length);
  };

  const prev = () => {
    setCurrent((current - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="promociones-wrapper">
      {promotions.map((promo, i) => {
        if (i >= current && i < current + 1) {
          return (
            <div className="promocion" key={promo.id}>
              <img src={Image} alt={promo.title} />
              <h3 className="h3-promotions">{promo.title}</h3>
              <p className="p-promotions">{promo.description}</p>
              <button
                onClick={() => navigate(`/promotions/${promo.id}`)}
                className="contact-button-form"
              >
                Ver promoción
              </button>
            </div>
          );
        }
      })}
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="arrow-container">
            <ArrowLeftCircleFill className="prev-btn" onClick={prev} />
          </div>
          <div className="arrow-container">
            <ArrowRightCircleFill className="next-btn" onClick={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
