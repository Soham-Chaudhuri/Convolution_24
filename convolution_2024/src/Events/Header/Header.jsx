import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import convosvg from "../../components/assets/Convolution_Dark2nd.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

function Header() {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="flex flex-wrap justify-around bg-black text-white text-center ">
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="group  m-4 p-4 nav_text_li  transition duration-300 "
                spy={true}
                offset={-110}
                activeClass="active"
              >
                Home
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={600}
                className="group  m-4 p-4 nav_text_li  transition duration-300"
                spy={true}
                offset={-100}
                activeClass="active"
              >
                About
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="timeline"
                smooth={true}
                duration={800}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                Timeline
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="Gallery"
                smooth={true}
                duration={800}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                Gallery
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              
            </ul>
          </div>
          <div className="justify-content-center mt-3 mb-4  p-4 nav_text_logo">
            <Link to="hero" smooth={true} duration={900} offset={-100}>
              <img
                className="w-[147px] h-[51.66px] hover:cursor-pointer"
                src={convosvg}
              />
            </Link>
            {/* CONVOLUTION */}
          </div>
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <Link
                to="judges"
                smooth={true}
                duration={800}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                Judges
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="Prizes"
                smooth={true}
                duration={900}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                Prizes
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="faq"
                smooth={true}
                duration={900}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                FAQ
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
              <Link
                to="contacts"
                smooth={true}
                duration={1000}
                offset={-100}
                className="group m-4 p-4 nav_text_li transition duration-300"
              >
                Contacts
                <span className="mt-1 mr-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-orange-500 rounded-full"></span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
