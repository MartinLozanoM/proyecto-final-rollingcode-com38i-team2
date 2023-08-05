import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPractice } from "./components/Navbar.jsx";
import {CartContent} from "./components/CartContent.jsx";
import { Home } from "./components/Home.jsx";  
import { Footer } from "./components/Footer.jsx";
import { ProductListContainer } from "./components/ProductListContainer.jsx";
import Promotions from "./components/Promotions.jsx";  
import Promotion from "./components/Promotion.jsx";

function App() {
  return (
    
      <>    
        <NavbarPractice />
        <Routes>     
          <Route path="/" element={<Home />} />       
          <Route path="/promotions" element={<Promotions />}/>      
          <Route path="/promotions/:id" element={<Promotion />} />
          <Route path="/products" element={<ProductListContainer />}/>
          <Route path="/cart" element={<CartContent />}/>
        </Routes>
        <Footer />      
      </>

  );
}

export default App;