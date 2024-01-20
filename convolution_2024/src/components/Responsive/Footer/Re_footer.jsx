import React from "react";
import "../Footer/Re_footer.css";

function Re_footer() {
  return (
    <>
      <div className="re_footer flex flex-col items-center gap-8 py-16">
        <span className="re_footer_heading text-center">CONVOLUTION 9.0</span>
        <div className="re_footer_para text-center">
          <div className="re_footer_address flex flex-col">
            <span className="re_footer_l">
              Department of Electrical Engineering
            </span>
            <span className="re_footer_l">Jadavpur University</span>
            <span className="re_footer_l">
              188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West
              Bengal 700032
            </span>
            <span className="re_footer_l">India</span>
          </div>
          <div className="re_footer_contact py-6">
            <span className="re_footer_l">
              Phone: +91 967 427 3275/+91 907 342 1224
            </span>
            <br />
            <span className="re_footer_l">
              Email: convolution2024@gmail.com
            </span>
          </div>
        </div>
        <div className="re_footer_social">
          <span className="text-center text-white">Our Social Networks:</span>
          <div className="flex flex-col items-center pt-2">
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

export default Re_footer;
