import React from "react";
import { IoLogoInstagram } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center m-0 p-0  mb-5 ">
        <div className="flex flex-col md:flex-row w-full gap-0 max-w-7xl">
          {/* Left: Contact Form (Amber background) */}
          <div className="flex-1 bg-amber-400 p-8">
            <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left font-sans">
              Get in Touch
            </h2>
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Instagram Section (Lime background) */}
          <div className="w-full md:w-2/5 bg-lime-500 flex justify-center items-center text-center space-y-5">
            <div className="font-sans text-center">
              <p className="font-bold text-white text-5xl">FOLLOW US <br /> ON INSTAGRAM</p>
              <span className="text-7xl text-white flex justify-center items-center mt-5">
                <IoLogoInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
