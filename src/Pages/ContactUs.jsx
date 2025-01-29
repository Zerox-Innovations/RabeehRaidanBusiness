import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center p-4 ">
        <div className="flex flex-col md:flex-row max-w-7xl w-full gap-8">
          {/* Left: Contact Form */}
          <div className="flex-1 ">
            <h2 className="text-4xl font-bold text-black mb-6 text-center md:text-left">
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

          {/* Right: Image */}
          <div className="w-full md:w-2/5">
            <img
              src="/images/abmandi.jpg"
              alt="Contact Us"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
