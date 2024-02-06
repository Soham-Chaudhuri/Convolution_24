import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_decisia_about_layer_bg">
          <div className="Re_decisia_about_layer_lines"></div>
          <div className="Re_decisia_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">RULES & REGULATIONS</span>
            <span className="Re_decisia_para text-justify">
            &bull;1-4 members cross-year cross-specialization teams from the
              same institution
              <br />
              <div className="h-[15px]"></div>
              &bull;The rounds are as follows:
              <br />
              &emsp;a)Prelims : Online; 2 minutes elevator pitch <br/>
              &emsp;and 3-5 slides
              presentation 
              <br/>
              &emsp;about the B-plan
              <br />
              &emsp;b)Finals : Offline
              <br />
              &emsp;&emsp;i) Full pitch deck has no cap on the <br />
              &emsp;&emsp;number of slides
              <br />
              &emsp;&emsp;ii) 7+3 minutes (Pitch+ QnA) in front of <br />
              &emsp;&emsp;the judges
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
