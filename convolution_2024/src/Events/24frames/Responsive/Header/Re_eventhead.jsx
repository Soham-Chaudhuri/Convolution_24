import React, { useState } from "react";
import "../Header/Re_eventhead.css";
import convosvg from "../../../../components/assets/Convolution_Dark2nd.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

function Re_eventhead() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar flex flex-wrap justify-around bg-black text-white text-center sticky top-0 z-50">
        <div className="justify-content-center mt-3 mb-4  p-4 nav_text_logo">
          {/* <Link to="Re_hero" smooth={true} duration={900}>
            <img className="w-[109px] h-[35px]" src={convosvg} />
          </Link> */}
          <img className="w-[109px] h-[35px]" src={convosvg} />
        </div>
        <div className="toggle_btn mt-3 mb-4 p-3" onClick={handleToggle}>
          <i
            className={`toggle_btn_icon fa-solid ${
              isOpen ? "fa-xmark" : "fa-bars"
            }`}
          />
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <li className="nav_link">
          <Link to="Re_hero" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Re_about" smooth={true} duration={600} offset={-100}>
            About
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Re_timeline" smooth={true} duration={800} offset={-100}>
            Timeline
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Gallery" smooth={true} duration={800} offset={-100}>
            Gallery
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Re_judges" smooth={true} duration={700} offset={-100}>
            Judges
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Prizes" smooth={true} duration={900} offset={-100}>
            Prizes
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Re_faq" smooth={true} duration={1000} offset={-100}>
            FAQ
          </Link>
        </li>
        <li className="nav_link">
          <Link to="Re_contacts" smooth={true} duration={1000} offset={-100}>
            Contacts
          </Link>
        </li>
      </div>
    </>
  );
}

export default Re_eventhead;
