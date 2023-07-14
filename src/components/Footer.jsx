import Logo from "../assets/react.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="col-md-6">
          <img src={Logo} alt="Logo" width="100" height="60" />
        </div>
        <div className="col-md-6">
          <div>Seguinos:</div>
          <div>
            <a href="https://es-la.facebook.com/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/">
              <FaTwitterSquare />
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
