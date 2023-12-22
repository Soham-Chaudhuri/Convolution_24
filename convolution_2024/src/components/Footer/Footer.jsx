import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_bg">
        <div className="footer_lines"></div>
        <div className="flex py-5 justify-around w-full h-[351px] text-white footer_hi bg-black">
          <div className="px-[19px] pt-[52px] ">
            <h1 className="footer_h1">CONVOLUTION 9.0</h1>
            <br />
            <p className="footer_paragraph flex flex-col gap-[0px]">
              <span>Department of Electrical Engineering</span>
              <br />
              <span>Jadavpur University</span>
              <br />
              <span>
                188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West
                Bengal 700032
              </span>
              <br />
              <span>India</span>
              <br />
            </p>

            <p className="footer_paragraph py-[28px]">
              <span className="block">
                Phone: +91 8017388918/+91 7866827719
              </span>
              <br />
              <span className="block">Email: convolution2023@gmail.com</span>
            </p>
          </div>
          <div className="flex items-center flex-col my-auto">
            <p className="footer_icons ">Our Social Networks:</p>
            <br />
            <div className="flex gap-2">
              <i className="fa-brands fa-square-instagram fabicon"></i>
              <i className="fa-brands fa-linkedin fabicon"></i>
              <i className="fa-brands fa-square-facebook fabicon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
