import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="about_layer_bg">
          <div className="about_layer_lines"></div>
          <div className="about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">ABOUT 24 Frames</span>
            <span className="para">
            A collection of four and a half minute vignettes of 24 images, to bring before all the camera-wielding enthusiasts, the ones who could meander through the forgotten streets of a city only to lend a kaleidoscopic eye to all its dimensions. Grab this opportunity to be the best “moment-catcher”!
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
