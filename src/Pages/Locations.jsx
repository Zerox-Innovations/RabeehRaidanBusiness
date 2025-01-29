import React from 'react';
import Navbar from './Navbar';

// Sample branch data
const branches = [
  {
    name: "Rabeeh Raidan",
    address: "123 Main St, City A 987 Birch St, City F",
    contact: "+1 234 567 890",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "456 Elm St, City B 987 Birch St, City F",
    contact: "+1 234 567 891",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "789 Oak St, City C 987 Birch St, City F",
    contact: "+1 234 567 892",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "321 Pine St, City D 987 Birch St, City F",
    contact: "+1 234 567 893",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "654 Maple St, City E 987 Birch St, City F",
    contact: "+1234567894",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "987 Birch St, City F 987 Birch St, City F",
    contact: "+1 234 567 895",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "987 Birch St, City F 987 Birch St, City F",
    contact: "+1 234 567 895",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
  {
    name: "Rabeeh Raidan",
    address: "987 Birch St, City F 987 Birch St, City F",
    contact: "+1 234 567 895",
    image: "https://justloaf.in/wp-content/uploads/2023/09/GFgg.jpg",
  },
];

const Locations = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-8 flex justify-center mt-20 min-h-screen">

        <div className='flex flex-col'>
          <div>
            <h1 className="text-3xl font-bold text-center mb-12">FIND US</h1>
          </div>
          <div className="space-y-8 grid md:grid-cols-1 lg:grid-cols-2 gap-16">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0"
              >
                {/* Image */}
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="max-w-full sm:max-w-lg md:max-w-5xl sm:h-48 md:h-64 object-cover rounded-lg"
                />
                {/* Branch Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{branch.name}</h2>
                  <p className="text-gray-600 mt-2">{branch.address}</p>
                  <p className="text-gray-600 mt-2">Contact: {branch.contact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Locations;
