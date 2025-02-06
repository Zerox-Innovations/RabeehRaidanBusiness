import React from 'react';
import ScrollingText from './utils/ScrollingText';

const Gallery = () => {
  // Assuming filenames are sequentially numbered
  const imageCount = 12; // Number of images in the folder
  const imagePaths = Array.from({ length: imageCount }, (_, index) => (
    `/images/Gallery/${index + 1}.jpg`
  ));

  return (
    <>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white">
        <ScrollingText />
      </div>
      <div className="flex flex-col items-center py-12 mt-48 md:mt-64 px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-softOrange mb-4">OUR GALLERY</h1>
          <p className="text-lg text-gray-600">
            Explore moments we've captured, from stunning landscapes to beautiful memories.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
          {imagePaths.map((path, index) => (
            <div key={index} className="h-full w-full flex">
              <img
                src={path}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative top-0 left-0 w-full z-40 bg-gray-900 text-white">
        <ScrollingText />
      </div>
    </>
  );
};

export default Gallery;
