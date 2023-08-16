import Logo from "../assets/images/logo-developets.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="row m-0 text-light">
      <div className="col-sm-6 col-md-12 footer-info">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center footer-info-module-container">
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center text-center footer-info-module">
              <span className="fw-bold fs-2">Nosotros</span>
              <ul className="list-unstyled">
                <li>Nuestras Sucursales</li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/aboutus">Quienes somos</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center text-center footer-info-module">
              <span className="fw-bold fs-2">Informacion</span>
              <ul className="list-unstyled">
                <li>Formas de Pago</li>
                <li>Delivery</li>
                <li>Servicios</li>
                <li>Chapitas</li>
                <li>Terminos y Condiciones</li>
                <li>Club Developets+</li>
              </ul>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center text-center footer-info-module">
              <span className="fw-bold fs-2">Clientes</span>
              <ul className="list-unstyled">
                <li>
                  <Link to="/login">Ingresar</Link>
                </li>
                <li>
                  <Link to="/register">Registrarme</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-12 footer-brand">
        <div className="m-2">
          <Link to="/">
            <img src={Logo} alt="Logo" width="150" height="150" />
          </Link>
        </div>
        <div className="m-2">
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
        <div className="m-2">
          <span>
            Copyright © 2023 / Rolling Code. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};
