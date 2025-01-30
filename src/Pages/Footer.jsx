import React from 'react';
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-softBlue flex flex-col items-center text-center py-8 sm:py-12 lg:py-16">
      {/* Logo */}
      <img src="images/raidanLogo.png" className="h-16 mb-4" alt="Raidan Logo" />

      {/* Copyright */}
      <p className="text-white text-sm sm:text-base">
        © 2025 Rabeeh Raidan. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;








// <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 m-0">
//   <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-12">
//       {/* Logo and About Section */}
//       <div className="col-span-2 lg:col-span-2">
//         <div className="flex items-center space-x-4">
//           <img className="w-auto h-16 sm:h-20" src="/images/raidanLogo.png" alt="MountingHutt Logo" />
//           <p className="text-2xl sm:text-3xl font-bold text-red-600">Rabeeh Raidan</p>
//         </div>
//         <p className="mt-4 text-gray-600">
//           Mounting Hutt is a serene retreat that celebrates the tranquility and breathtaking beauty of Himachal's majestic landscapes.
//         </p>
//       </div>

//       {/* Company Links */}
//       <div className="flex flex-col items-center sm:items-start">
//         <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
//         <ul className="mt-6 space-y-4 sm:space-y-2">
//           {['Aboutus', 'Contact'].map((link) => (
//             <li key={link}>
//               <a
//                 href="#"
//                 className="text-base text-gray-800 transition-all duration-200 hover:text-blue-600 no-underline"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Help Links */}
//       <div className="flex flex-col items-center sm:items-start">
//         <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Branches</p>
//         <ul className="mt-6 space-y-4 sm:space-y-2">
//           {['Valanchery', 'Parambil Peedika', 'Areekkode Puthalam', 'Kizhisseri', 'Therattammal', 'Edavanna', 'Karakunnu 34', 'Thrippanachi'].map((branch) => (
//             <li key={branch} className="text-base text-gray-800">
//               {branch}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Newsletter Subscription */}
//       <div className="col-span-2 lg:col-span-2">
//         <p className="font-semibold text-center sm:text-left">Social Media</p>
//         <div className="flex items-center justify-center sm:justify-start space-x-4 mt-2 mb-3">
//           <a
//             href="https://www.instagram.com/mountinghutt?igsh=MWdtdzNzdjNnZ3o5Zg=="
//             title="Instagram"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-500 transition-all duration-200 hover:scale-110"
//           >
//             <FaInstagramSquare style={{ fontSize: '28px' }} />
//           </a>
//           <a
//             href="https://facebook.com"
//             title="Facebook"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 transition-all duration-200 hover:scale-110"
//           >
//             <FaFacebook style={{ fontSize: '28px' }} />
//           </a>
//         </div>
//         <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
//           Subscribe to Newsletter
//         </p>
//         <form action="#" method="POST" className="mt-3">
//           <p className="font-semibold text-center sm:text-left">Stay updated with Rabeeh Raidan</p>
//           <div className="relative w-full max-w-sm mt-2 mx-auto sm:mx-0">
//             <input
//               type="text"
//               placeholder="Email Address"
//               className="w-full py-2 px-4 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="absolute top-0 right-0 h-full px-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
//               Subscribe
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>