import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPractice } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { ProductListContainer } from "./components/ProductListContainer";

function App() {
  return (
    <>
      <NavbarPractice />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
