import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="flex flex-wrap justify-around bg-black text-white text-center">
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <a className="m-4 p-4 nav_text_li">Home</a>
              <a className="m-4 p-4 nav_text_li">About</a>
              <a className="m-4 p-4 nav_text_li">Events</a>
            </ul>
          </div>
          <div className="justify-content-center m-4 p-4 nav_text_logo">CONVOLUTION</div>
          <div className="justify-content-center my-auto">
            <ul className="flex flex-wrap justify-around">
              <a className="m-4 p-4 nav_text_li">Timeline</a>
              <a className="m-4 p-4 nav_text_li">Team</a>
              <a className="m-4 p-4 nav_text_li">Contacts</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
