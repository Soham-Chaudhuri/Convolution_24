import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="about_layer_bg">
          <div className="about_layer_lines"></div>
          <div className="about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">ABOUT ALGOMANIAC</span>
            <span className="para">
            Embark on a coding odyssey like never before! Join our exclusive competitive programming event, where brilliant minds converge to unravel mind-boggling challenges using the language of code. Unleash your keyboard prowess and ignite the creative power of your mind as you navigate through lines of code in this epic battle of algorithms and innovation. It's not just a competition; it's a journey into the limitless realms of problem-solving and coding excellence. Seize the opportunity to showcase your coding wizardry and make history in the ultimate test of intellect and skill!
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
