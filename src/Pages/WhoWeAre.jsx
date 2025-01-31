import React from 'react';
import ScrollingText from './utils/ScrollingText';

const WhoWeAre = () => {
  return (
    <>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white mb-5">
        <ScrollingText />
      </div>
      <div className="max-w-7xl mx-auto mt-52 md:mt-36 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-softOrange text-5xl font-bold mb-6">WHO WE ARE</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Rabeeh Raidan's establishment offers quality Arabian-flavored mandis, grilled items, and a variety of alfams.
              As the days passed, they saw a large number of guests pouring in from different parts of Malabar, which led them to expand further.
              <br /><br />
              By the second year, they had perfected their simple system. Despite having many competitors in the market, their business grew.
              <br /><br />
              Rabeeh Raidan is not selling franchises right now, as they believe the brand is still growing. Instead, they are focusing on expanding directly into more cities in Kerala.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img
              src="/images/looo.jpg"
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full md:w-[550px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white">
        <ScrollingText />
      </div>
    </>
  );
};

export default WhoWeAre;
