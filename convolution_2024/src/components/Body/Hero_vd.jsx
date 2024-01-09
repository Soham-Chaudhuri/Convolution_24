import React from "react";
import "../Body/Hero_vd.css";
import video from "../assets/Coming Soon.mp4";
function Hero_vd() {
  return (
    <>
      <div className="hero_video">
        <video className="video" loop autoPlay muted playsInline >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Hero_vd;
