import Logo from "../assets/images/logo-developets.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="container">
          <div className="row footer-info-module-container">
            <div className="col-sm-3 footer-info-module">
              <span>Nosotros</span>
              <ul className="list-unstyled">
                <li>Nuestras Sucursales</li>
                <li>Contacto</li>
                <li>Quienes Somos</li>
              </ul>
            </div>
            <div className="col-sm-3 footer-info-module">
              <span>Informacion</span>
              <ul className="list-unstyled">
                <li>Formas de Pago</li>
                <li>Delivery</li>
                <li>Servicios</li>
                <li>Chapitas</li>
                <li>Terminos y Condiciones</li>
                <li>Club Developets+</li>
              </ul>
            </div>
            <div className="col-sm-3 footer-info-module">
              <span>Clientes</span>
              <ul className="list-unstyled">
                <li>Ingresar</li>
                <li>Registrarme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-brand">
        <div className="col-md-6">
          <img src={Logo} alt="Logo" width="150" height="150" />
        </div>
        <div className="col-md-6">
          <div>Seguinos:</div>
          <div>
            <a href="https://es-la.facebook.com/">
              <FaFacebookSquare className="logo-brand" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="logo-brand" />
            </a>
            <a href="https://www.linkedin.com/">
              <FaTwitterSquare className="logo-brand" />
            </a>
          </div>
        </div>
        <div className="col-md-12">
          <span>
            Copyright © 2023 / Rolling Code. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};
