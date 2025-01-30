import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import './index.css';
import ContactUs from "./Pages/ContactUs";
import DeliveryPage from "./Pages/DeliveryPage";
import AboutUsPage from "./Pages/AboutUsPage";
import Locations from "./Pages/Locations";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar based on current route */}
      {location.pathname !== "/menu/:id" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/find-us" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
