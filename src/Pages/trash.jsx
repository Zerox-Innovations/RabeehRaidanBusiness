// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if the user has scrolled down 50px
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
//         ? "bg-gradient-to-b from-white to-gray-50 shadow-lg"
//         : "bg-transparent"
//         }`}
//     >
//       {/* Navbar Container */}
//       <nav className="w-full flex justify-center items-center py-4 px-4">
//         <div className="flex justify-between items-center w-full max-w-4xl">
//           {/* Logo and Text (Center aligned) */}
//           <div className="flex justify-center items-center space-x-4">
//             <a href="/">
//               <img src="/images/raidanLogo.png" alt="Raiden Logo" className="h-16" />
//             </a>
//             <p className="text-2xl sm:text-3xl font-bold text-red-600">Rabeeh Raidan</p>
//           </div>

//           {/* Links (Hidden on small screens) */}
//           <div className="hidden md:flex space-x-6 ml-auto">
//             <a href="/" className="text-black hover:text-gray-300">
//               Home
//             </a>
//             <a href="#" className="text-black hover:text-gray-300">
//               About
//             </a>
//             <a href="/find-us" className="text-black hover:text-gray-300">
//               Find us
//             </a>
//             <a href="#" className="text-black hover:text-gray-300">
//               Gallery
//             </a>
//             <a href="/contact" className="text-black hover:text-gray-300">
//               Contact
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-blue-700 text-white space-y-4 py-4 px-4">
//           <a href="#" className="block hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="block hover:text-gray-300">
//             About
//           </a>
//           <a href="#" className="block hover:text-gray-300">
//             Services
//           </a>
//           <a href="#" className="block hover:text-gray-300">
//             Contact
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
