import React from "react";
import "./Hero.css";
import Hero_vd from "./Hero_vd";
import thunder from "../assets/Thunder.png";
import About from "./About";
function Hero() {
  return (
    <>
      <div className="hero_bg p-4">
        <div className="flex flex-col gap-3">
          <div className="flex">
            <div className="m-4 hero_heading_1_div flex flex-wrap flex-col">
              <span className="hero_heading_1 text-shadow-md">
                JUEE STUDENTS' FORUM
              </span>
              <span className="hero_heading_2 text-shadow-md">
                CONVOLUTION 9.0
              </span>
              <span className="hero_heading_3">
                The Ninth Edition of Annual Technical Meet
              </span>
              <div className="flex hero_btn mt-5">
                <button className="hero_btn_1">SignUp</button>
                <button className="hero_btn_2">Login</button>
              </div>
            </div>
            <div className="hero_thunder flex items-center">
              <img src={thunder} alt="" className="hero_thunder_img" />
            </div>
          </div>
          <Hero_vd />
          <About />
        </div>
      </div>
    </>
  );
}

export default Hero;
