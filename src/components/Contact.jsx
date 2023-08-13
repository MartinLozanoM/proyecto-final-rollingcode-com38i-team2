import React from "react";
import { PhoneFill, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className="contact-form">
      <h2>Contactenos</h2>
    <div className="contact-info">
        <div className="info-item">
            <GeoAltFill /> <p>Dirección: Av. Rolling</p>    
        </div> 
        <div className="info-item">        
            <PhoneFill /> <p>Telefono: (0381) 12345678</p>        
        </div>    
        <div className="info-item">        
            <EnvelopeFill /> <p>Email: info@pet.com</p>        
    </div>      
    </div>
      <h2>Realiza tu consulta</h2>
      <p>
        Completa el siguiente formulario con tus datos, dudas y/o sugerencias y
        nosotros nos pondremos en contacto
      </p>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <input type="tel" pattern="[0-9]*" placeholder="Telefono" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
      </form>
      
    </div>
    
  );
};

export default Contact;
