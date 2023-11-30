import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="flex flex-wrap justify-around bg-black text-white text-center">
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <a className="group  m-4 p-4 nav_text_li  transition duration-300 ">
                Home
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
              <a className="group  m-4 p-4 nav_text_li  transition duration-300">
                About
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
              <a className="group m-4 p-4 nav_text_li transition duration-300">
                Events
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
            </ul>
          </div>
          <div className="justify-content-center mt-3 mb-4  p-4 nav_text_logo">
            CONVOLUTION
          </div>
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <a className="group m-4 p-4 nav_text_li transition duration-300">
                Timeline
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
              <a className="group m-4 p-4 nav_text_li transition duration-300">
                Team
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
              <a className="group m-4 p-4 nav_text_li transition duration-300">
                Contacts
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
