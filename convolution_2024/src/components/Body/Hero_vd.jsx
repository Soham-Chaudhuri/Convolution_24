import React from "react";
import "../Body/Hero_vd.css";
import video from "../assets/Dwai.mp4";
function Hero_vd() {
  return (
    <>
      <div className="hero_video">
        <video className="video" controls loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Hero_vd;
