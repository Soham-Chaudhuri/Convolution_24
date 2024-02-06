import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="eu_about_layer_bg">
          <div className="eu_about_layer_lines"></div>
          <div className="eu_about flex text-center flex-col align-center justify-center gap-10">
          <span className="heading">RULES & REGULATIONS</span>
          <span className="eu_para text-justify">
              &bull;Teams can consist of the same or different colleges and/or same or different streams. Teams must comprise 3-4 members.
              <br />
              <div className="h-[15px]"></div>
              &bull;Round 1 will be a screening round based on mathematical,analytical and aptitude skills. It will consist of 60 questions which are to be done in 40 mins. Top 10 highest scoring teams qualify to the 2nd Round. 
              <br />
              <div className="h-[15px]"></div>
              &bull;Round 2 will be the final round consisting of puzzle solving, Riddles, deciphering codes and many more. In the 2nd round there will be 6 stages. Each of 5 stages has 3 Questions and the 6 th one has a final question. Solving each stage will lead to the next one.
              <br />
              <div className="h-[15px]"></div>
              &bull;Contestants will be allowed to browse the internet or use any software or program however they want to solve the puzzles. Contestants are required to carry at least one laptop, charger and as well mobile phones per team.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
