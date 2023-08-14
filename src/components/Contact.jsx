import React from "react";
import { PhoneFill, EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";

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
        <button className="contact-button-form">Enviar</button>
      </form>
      <br />
      <h2>Donde Encontrarnos</h2>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709809247!2d-65.20977672520273!3d-26.836696090030664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1691971487042!5m2!1ses-419!2sar"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
