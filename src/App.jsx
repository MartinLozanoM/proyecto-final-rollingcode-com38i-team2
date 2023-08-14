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
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import  Contact  from "./components/Contact"
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <main className="app-main-container">
          <NavbarPractice />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/promotions/:id" element={<Promotion />} />
            <Route path="/products" element={<ProductListContainer />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
          <Footer />
        </main>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
