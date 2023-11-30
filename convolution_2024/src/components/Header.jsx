import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center mb-4 md:mb-0 md:mr-4 space-x-4">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Events
          </a>
        </div>

        {/* Center (Hamburger Menu for Mobile) */}
        <div className="block relative text-white text-2xl font-bold mb-4 md:mb-0 md:mx-auto cursor-pointer">
          <span onClick={toggleMenu}>CONVOLUTION</span>
          {/* Dropdown Menu for Mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 bg-blue-500 p-4 space-y-2">
              <a href="#" className="text-white block hover:underline">
                Home
              </a>
              <a href="#" className="text-white block hover:underline">
                About
              </a>
              <a href="#" className="text-white block hover:underline">
                Timeline
              </a>
              <a href="#" className="text-white block hover:underline">
                Teams
              </a>
              <a href="#" className="text-white block hover:underline">
                Contacts
              </a>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className={`hidden md:flex items-center space-x-4`}>
            <a href="#" className="text-white hover:underline">
              Timeline
            </a>
            <a href="#" className="text-white hover:underline">
              Teams
            </a>
            <a href="#" className="text-white hover:underline">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
