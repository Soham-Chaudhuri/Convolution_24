import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="about_layer_bg">
          <div className="about_layer_lines"></div>
          <div className="about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">ABOUT JU TALKS</span>
            <span className="para">
              JU Talks is a panel discussion where three panelists discuss about
              a trending topic that concerns the present generations. Join us
              for an engaging and thought-provoking session as our esteemed
              panelists delve deep into the nuances of the trending topic,
              offering diverse perspectives and valuable insights. Don't miss
              out on this opportunity to gain valuable knowledge and participate
              in an enriching discussion!
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
