import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Navbar />
      {/* <div className="mt-20"> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu/:id" element={<MenuPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/find-us" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      {/* </div> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
