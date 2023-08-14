import React, { useState, useEffect } from "react";
import { MEMBERS_DATA } from "../utils/memberData"; 
import { getData } from "../utils/functions";

const AboutUs = () => {
  const [members, setMembers] = useState([]);

  const fetchData = async () => {
    try {
      // Simplemente asigna los datos del array MEMBERS_DATA
      setMembers(MEMBERS_DATA);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contenedor">
      {members.map((member) => (
        <div className="card" key={member.id}>
          <div className="card-header">
            <img className="card-" src={member.image} alt="Card image cap" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{member.title}</h2>
            <p className="card-description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
