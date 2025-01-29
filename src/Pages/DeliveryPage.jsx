import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";

const DeliveryPage = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-5 lg:ml-12">
        <div className="flex flex-col md:flex-row items-center justify-center  mb-5 sm:mt-5">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col space-y-12 text-center md:text-left ">
            {/* Heading */}
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug ">
                Delicious Food and Quick <br /> Delivery Together
              </h1>
            </div>

            {/* Points */}
            <div className="space-y-10 text-lg">
              {/* Point 1 */}
              <div className="flex items-start space-x-4 sm:flex-row">
                <span className="bg-black text-white rounded-full p-4 text-3xl flex">
                  <FaLocationDot />
                </span>
                <div>
                  <h4 className="font-bold text-2xl">Set Your Location</h4>
                  <p className="text-gray-600">
                    Enter your location to find nearby options.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start space-x-4 sm:flex-row">
                <span className="bg-black text-white rounded-full p-4 text-3xl flex items-center justify-center">
                  <BiSolidDish />
                </span>
                <div>
                  <h4 className="font-bold text-2xl">Select Your Food</h4>
                  <p className="text-gray-600">
                    Explore our menu and choose your favorite dishes.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start space-x-4 sm:flex-row">
                <span className="bg-black text-white rounded-full p-4 text-3xl flex items-center justify-center">
                  <GiWallet />
                </span>
                <div>
                  <h4 className="font-bold text-2xl">Choose Your Payment</h4>
                  <p className="text-gray-600">
                    Select a convenient payment method for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="images/delivery.png"
              alt="Delivery Boy"
              className="max-w-3xl md:h-[600px] sm:h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;
