import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export const NavbarPractice = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className='nav_items'>
        <Navbar.Brand><Link to="/">LOGO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="/">Inicio</Link>
           <Link to="/products ">Productos</Link>
           <Link to="/">Sobre Nosotros</Link>
           <Link to="/products">Mi cuenta</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
