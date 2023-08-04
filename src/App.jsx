import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPractice } from "./components/Navbar";
import { Home } from "./components/Home";  
import { Footer } from "./components/Footer";
import { ProductListContainer } from "./components/ProductListContainer";
import Promotions from "./components/Promotions";  
import Promotion from "./components/Promotion";

function App() {
  return (
    <>    
      <NavbarPractice />
      <Routes>     
        <Route path="/" element={<Home />} />       
        <Route path="/promotions" element={<Promotions />}/>      
        <Route path="/promotions/:id" element={<Promotion />} />
        <Route path="/products" element={<ProductListContainer />}/>
      </Routes>
      <Footer />      
    </>
  );
}

export default App;