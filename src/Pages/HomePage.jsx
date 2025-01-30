import React, { useState } from 'react';
import BranchSelector from "../Components/BranchSelector";
import menus from '../Data/menus.json';
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';
import DeliveryPage from './DeliveryPage';
import AboutUsPage from './AboutUsPage';
import Gallery from './Gallery';
import videobg from '../assets/video.mp4'
import ScrollingText from './utils/ScrollingText';


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Open modal handler
  const openModal = () => setIsModalOpen(true);

  // Close modal handler
  const closeModal = () => setIsModalOpen(false);

  const handleBranchSelect = (id) => {
    // Navigate to the menu page for the selected branch
    navigate(`/menu/${id}`);
    closeModal(); // Close modal after selecting the branch
  };

  return (
    <>
      <div>
        <ScrollingText /> {/* Add the scrolling text here */}
        {/* Your other content goes here */}
      </div>
      <div className="home-page min-h-screen">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

          <video
            src={videobg}
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover rotate-0 sm:rotate-90 md:rotate-0"  // Rotate 90 degrees on small screens
          />



          {isModalOpen && (
            <div
              tabIndex="-1"
              aria-hidden="true"
              className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full bg-yellow-400 rounded-lg shadow-md">
                {/* Modal content */}
                <div className="flex justify-between p-4 border-b">
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <BranchSelector
                  branches={menus.restaurants}
                  onSelectBranch={handleBranchSelect}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full">
          <AboutUsPage />
          <ContactUs />
        </div>

        <div className="container py-16 mx-auto flex flex-col md:flex-row justify-around items-center w-full pb-0">
          <button
            onClick={openModal}
            className="bg-orange-500 text-white font-sans font-bold text-xl border-4 border-gray px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 md:self-center"
          >
            VIEW MENU
          </button>

          <div className='block md:hidden lg:block'>
            <img
              src="images/menu.png"
              alt="Menu"
              className="h-32 "  // Hidden on md and below, shown on lg and above
            />
          </div>
        </div>
      </div>
       <div>
        <ScrollingText /> {/* Add the scrolling text here */}
        {/* Your other content goes here */}
      </div>
    </>
  );
};

export default HomePage;
