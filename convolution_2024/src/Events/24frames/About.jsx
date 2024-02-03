/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="about_layer_bg">
          <div className="about_layer_lines"></div>
          <div className="about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">ABOUT 24 FRAMES</span>
            <span className="para">
              Embark on a journey through the lens with our innovative
              collection, where four-and-a-half-minute vignettes crafted from 24
              mesmerizing images beckon camera enthusiasts. Roam the forgotten
              streets of the city, lending a kaleidoscopic eye to its myriad
              dimensions. This is your golden opportunity to hone your skills as
              the ultimate "moment-catcher." Challenge yourself to capture not just moments but
              stories, as these carefully curated images weave tales of the
              extraordinary within the ordinary. "24 Frames" invites you to
              transcend the conventional and explore the nuances that make each
              cityscape unique.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
