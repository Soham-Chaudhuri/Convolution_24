import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_about_layer_bg">
          <div className="Re_about_layer_lines"></div>
          <div className="Re_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">ABOUT JU TALKS</span>
            <span className="Re_para text-justify">
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
