import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="in_about_layer_bg">
          <div className="in_about_layer_lines"></div>
          <div className="in_about flex text-center flex-col align-center justify-center gap-10">
          <span className="heading">RULES & REGULATIONS</span>
            <span className="in_para text-justify">
              &bull;There will be two rounds of this event- 
              <br />
              &emsp;a)1st round: On campus qualifying round. 10 teams will be shortlisted.
              <br />
              &emsp;b)2nd round: On campus final round. Top 3 teams will be rewarded.
              <br />
              <div className="h-[15px]"></div>
              &bull;Team of 2- 4 people will be allowed.
              <br />
              <div className="h-[15px]"></div>
              &bull;Cross department/college teams allowed. Cross year teams are also allowed.
              <br />
              <div className="h-[15px]"></div>
              &bull;Anyone not part of a college, but under 25 years are also eligible to register.
              <br />
              <div className="h-[15px]"></div>
              &bull;On spot registration will be allowed.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
