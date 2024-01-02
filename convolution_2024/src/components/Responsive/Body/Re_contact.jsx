import React from "react";
import "./Re_contact.css";
function Re_contact() {
  return (
    <>
      <div className="contact flex flex-col gap-2 my-6 py-6 items-center justify-center">
        <span className="re_contact_heading ">CONTACT US</span>
        <span className="re_contact_underline"></span>
        <span className="re_contact_subheading py-4">
          Contact for any kind of queries.
        </span>
        <div className="contact_info flex flex-col justify-evenly gap-[3rem] py-2">
          <div className="contact_details flex flex-col gap-[1.5rem] items-start justify-center p-4 text-center">
            <span className="re_address mx-auto">
              <i className="fa-solid fa-location-dot pr-2 scale-150 trans "></i>
              Electrical Engineering Department
              <br />
              <span className="block px-[22px]">
                Jadavpur University, Kolkata
              </span>
            </span>
            <span className="re_email mx-auto">
              <i className="fa-solid fa-envelope pr-3 scale-150"></i>
              convolution2023@gmail.com
            </span>
            <span className="re_number mx-auto">
              <i className="fa-solid fa-phone pr-3 scale-150"></i>+91 8017 388
              918/+91 7866 827 719
            </span>
          </div>
          <div className="contact_map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1412719630603!2d88.36883201087721!3d22.49888217945905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1703262564390!5m2!1sen!2sin"
              className="re_contact_map"
              style={{ border: 0, borderRadius: 30 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Re_contact;
