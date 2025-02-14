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
import WhoWeAre from "./Pages/WhoWeAre";
import QRCodes from "./Components/QRcodes";

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
      {/* Hide Navbar on MenuPage */}
      {!location.pathname.startsWith("/menu") && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/menu/:id" element={<MenuPage />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<WhoWeAre />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/find-us" element={<Locations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/qrcodes" element={<QRCodes />} />

        {/* <Route path="/menu2/" element={<MenuPage />} /> */}

        <Route path="/menu1" element={<MenuPage branchId={1} />} />
        <Route path="/menu2" element={<MenuPage branchId={2} />} />
        <Route path="/menu3" element={<MenuPage branchId={3} />} />
        <Route path="/menu4" element={<MenuPage branchId={4} />} />
        <Route path="/menu5" element={<MenuPage branchId={5} />} />
        <Route path="/menu6" element={<MenuPage branchId={6} />} />
        <Route path="/menu7" element={<MenuPage branchId={7} />} />
        <Route path="/menu8" element={<MenuPage branchId={8} />} />

      </Routes>

      {!location.pathname.startsWith("/menu") && <Footer />}
    </>
  );
}

export default App;
