import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BranchSelector from "../Components/BranchSelector";
import menus from "../Data/menuData.jsx";
import ContactUs from "./ContactUs";
import AboutUsPage from "./AboutUsPage";
import ScrollingText from "./utils/ScrollingText";
import videobg from "../assets/video.mp4";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle branch selection
  const handleBranchSelect = (id) => {
    navigate(`/menu/${id}`);
    window.scrollTo(0, 0);
    closeModal();
  };

  return (
    <>
      {/* Scrolling Text at the Top */}
      <ScrollingText />

      <div className="home-page min-h-screen">
        {/* Video Background Section */}
        <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
          <video
            src={videobg}
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover rotate-0 sm:rotate-90 md:rotate-0"
          />

          {/* Welcome Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <p
              className="text-softYellow text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Welcome to Rabeeh Raidan
            </p>
            <p
              className="text-xl text-softYellow mt-3"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Every bite tells a story of love and flavor.
            </p>
          </div>

          {/* Modal for Branch Selection */}
          {isModalOpen && (
            <div
              tabIndex="-1"
              className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md bg-softYellow rounded-lg shadow-md">
                {/* Close Button */}
                <div className="flex justify-between p-4 border-b">
                  <button
                    onClick={closeModal}
                    className="text-black hover:text-red-600 transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Branch Selector */}
                <BranchSelector
                  branches={menus.restaurants}
                  onSelectBranch={handleBranchSelect}
                />

                {/* Close Button */}
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-green-700 p-3 rounded-md text-softYellow hover:bg-green-800 transition"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Content */}
        <ScrollingText />

        <div className="flex flex-col w-full">
          <AboutUsPage />
          <ContactUs />
        </div>

        {/* Menu Button Section */}
        <div className="container py-16 mx-auto flex flex-col md:flex-row justify-around items-center w-full">
          <button
            onClick={openModal}
            className="bg-orange-500 text-white font-sans shadow-xl font-bold text-xl border-4 border-gray px-6 py-5 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            VIEW MENU
          </button>

          {/* Menu Image (shown only on lg screens) */}
          <div className="hidden md:block">
            <img src="images/menu.png" alt="Menu" className="h-32" />
          </div>
        </div>
      </div>

      {/* Scrolling Text at the Bottom */}
      <ScrollingText />
    </>
  );
};

export default HomePage;
