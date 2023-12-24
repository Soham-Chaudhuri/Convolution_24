/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Header/Re_header.css";
import convosvg from "../../assets/Convolution_Dark2nd.png"

function Re_header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar flex flex-wrap justify-around bg-black text-white text-center">
        <div className="justify-content-center mt-3 mb-4  p-4 nav_text_logo">
        <img className="w-[109px] h-[35px]" src={convosvg}/>
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
        <li className="nav_link active">
          <a href="">Home</a>
        </li>
        <li className="nav_link">
          <a href="">About</a>
        </li>
        <li className="nav_link">
          <a href="">Events</a>
        </li>
        <li className="nav_link">
          <a href="">Timeline</a>
        </li>
        <li className="nav_link">
          <a href="">Team</a>
        </li>
        <li className="nav_link">
          <a href="">Contacts</a>
        </li>
      </div>
    </>
  );
}

export default Re_header;
