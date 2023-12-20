/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Responsive/Re_header.css";
import Hamburger from "hamburger-react";

function Re_header() {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="bg-black flex justify-around p-4">
        <div className="justify-content-center mt-3 mb-4  p-4 nav_text_logo">
          CONVOLUTION
        </div>

        <div className="flex items-center relative">
          <Hamburger
            toggled={isOpen}
            toggle={handleToggle}
            size={30}
            color="#ffffff"
          />
          {isOpen && (
            <div className="absolute top-12 right-0 mt-2">
              <div className="bg-white-200/50 dropdown p-4 ">
                <div className="dropdown-content" id="myDropdown">
                  <a href="#">Home </a>
                  <a href="#">About </a>
                  <a href="#">Events</a>
                  <a href="#">Timeline</a>
                  <a href="#">Team</a>
                  <a href="#">Contacts</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Re_header;
