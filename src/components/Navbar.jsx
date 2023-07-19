import Logo from "../assets/images/logo-developets.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#"><img src={Logo} alt="Logo"/></a>
      <div className="nav_items">
        <a href="#"> Inicio</a>
        <a href="#"> Sobre Nosotros</a>
        <a href="#"> Servicios</a>
        <a href="#"> Contacto</a>
      </div>
    </nav>
  );
};
