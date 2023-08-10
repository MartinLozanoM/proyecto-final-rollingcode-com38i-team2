import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-developets.png";

export const NavbarPractice = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="nav_items">
        <Navbar className="navbar-container-logo">
          <Link to="/">
            <img className="navbar-logo" src={Logo} alt="Logo" />
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-container" id="basic-navbar-nav">
          <Nav>
            <Link to="/">Inicio</Link>
            <Link to="/products ">Productos</Link>
            <Link to="/">Sobre Nosotros</Link>
            <Link to="/login">Mi cuenta</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
