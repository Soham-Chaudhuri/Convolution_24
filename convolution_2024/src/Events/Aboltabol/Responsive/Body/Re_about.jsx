import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_about_layer_bg">
          <div className="Re_about_layer_lines"></div>
          <div className="Re_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">ABOUT ABOLTABOL</span>
            <span className="Re_para">
            Welcome to Abol Tabol, where laughter meets logic and geekiness
              takes center stage!  From envisioning humans evolving
              into cats to creating processors designed to block out babies
              crying on airplanes, the stage is set for a comedic exploration of
              the bizarre and the brilliant. Unleash your inner geeky stand-up
              comedian and share your most outrageous ideas with our panel of
              judges and an enthusiastic audience. Abol Tabol is not just a
              comedy show; it's a platform for the wittiest and most imaginative
              minds to showcase their unique perspectives on the world of
              science and technology.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
