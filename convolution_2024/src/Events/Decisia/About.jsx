import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="dec_about_layer_bg">
          <div className="dec_about_layer_lines"></div>
          <div className="dec_about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">RULES & REGULATIONS</span>
            <span className="dec_para text-justify">
              &bull;2-4 members cross-year cross-specialization teams from the
              same institution
              <br />
              <div className="h-[15px]"></div>
              &bull;The rounds are as follows:
              <br />
              &emsp;a)Prelims : Online; 2 minutes elevator pitch and 3-5 slides
              presentation 
              <br/>
              &emsp;about the B-plan
              <br />
              &emsp;b)Finals : Offline
              <br />
              &emsp;&emsp;i) Full pitch deck has no cap on the number of slides
              <br />
              &emsp;&emsp;ii) 7+3 minutes (Pitch+ QnA) in front of the judges
              <br />
              &emsp;&emsp;iii) Open Room Pitching
              <br />
              <div className="h-[15px]"></div>
              &bull;The teams will be evaluated based on
              <br />
              &emsp;a)Problem Statement
              <br />
              &emsp;b)Solution
              <br />
              &emsp;c)Presentation.
              <br />
              <div className="h-[15px]"></div>
              &bull;The teams providing the most meaningful, original and
              sustainable ideas will be awarded prizes
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
