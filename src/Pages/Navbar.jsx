import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine background color based on the current route
  const getNavbarBgColor = () => {
    if (location.pathname !== "/") {
      return "bg-blue-600"; 
    }
    return "bg-transparent"; 
  };

  return (
    <div>
      {/* Navbar Container */}
      <nav className={`absolute left-0 w-full flex justify-center items-center py-16 px-4 ${getNavbarBgColor()} transition-all duration-300 z-40`}>
        <div className="flex md:flex-col justify-between items-center w-full max-w-5xl space-y-4 md:space-y-0 mt-12">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 md:mb-8 ">
            <img
              src="/images/raidanLogo.webp"
              alt="Raiden Logo"
              className="h-16"
            />
          </a>

          {/* Links */}
          <div className="hidden md:flex space-x-6 font-sans">
            <a href="/" className="text-softYellow text-lg font-bold hover:text-yellow-300">
              HOME
            </a>
            <a href="aboutus" className="text-softYellow text-lg font-bold hover:text-yellow-300">
              ABOUT
            </a>
            <a href="/find-us" className="text-softYellow text-lg font-bold hover:text-yellow-300">
              FIND US
            </a>
            <a href="gallery" className="text-softYellow text-lg font-bold hover:text-yellow-300">
              GALLERY
            </a>
            <a href="/contact" className="text-softYellow text-lg font-bold hover:text-yellow-300">
              CONTACT
            </a>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sliding from Left */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-softYellow text-white transition-transform duration-300 ease-in-out p-8 py-10 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsMenuOpen(false)} // Close the menu when clicked
          className="absolute top-4 right-4 text-white focus:outline-none bg-gray-700 p-2 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-8 text-xl py-4 px-4 font-bold font sans">
          <a href="/" className="block text-softOrange">
            HOME
          </a>
          <a href="/aboutus" className="block text-softOrange">
            ABOUT US
          </a>
          <a href="/find-us" className="block text-softOrange">
            FIND US
          </a>
          <a href="gallery" className="block text-softOrange">
            GALLERY
          </a>
          <a href="contact" className="block text-softOrange">
            CONTACT
          </a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
