import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact flex flex-col gap-2 m-5 p-5 items-center justify-center">
        <span className="contact_heading ">CONTACT US</span>
        <span className="underline"></span>
        <span className="contact_subheading py-4">
          Contact for any kind of queries.
        </span>
        <div className="contact_info flex justify-evenly gap-[10rem] py-9">
          <div className="contact_details flex flex-col gap-[3rem] items-start justify-center p-4">
            <span className="address">
              <i className="fa-solid fa-location-dot pr-3 scale-150"></i>
              Electrical Engineering Department 
              <br /> 
              <span className="block px-[22px]">Jadavpur University, Kolkata</span>
              
            </span>
            <span className="email">
              <i className="fa-solid fa-envelope pr-3 scale-150"></i>
              convolution2023@gmail.com
            </span>
            <span className="number">
              <i className="fa-solid fa-phone pr-3 scale-150"></i>+91 8017 388
              918/+91 7866 827 719
            </span>
          </div>
          <div className="contact_map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1412719630603!2d88.36883201087721!3d22.49888217945905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1703262564390!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: 50 }}
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

export default Contact;
