import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPractice } from "./components/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { ProductListContainer } from "./components/ProductListContainer";
import Promotions from "./components/Promotions";
import Promotion from "./components/Promotion";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext";
import  Contact  from "./components/Contact"

function App() {
  return (
    <AuthProvider>
      <NavbarPractice />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/promotions/:id" element={<Promotion />} />
        <Route path="/products" element={<ProductListContainer />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>tasks page</h1>} />
        <Route path="/add-task" element={<h1>new task</h1>} />
        <Route path="/tasks/:id" element={<h1>update task</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
