import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_aboltabol_about_layer_bg">
          <div className="Re_aboltabol_about_layer_lines"></div>
          <div className="Re_aboltabol_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">RULES & REGULATIONS</span>
            <span className="Re_aboltabol_para text-justify">
            &bull;Event comprises two rounds:
              <br />
              &emsp;a)Online Screening round
              <br />
              &emsp;b)Offline Presentation round. Each team <br />
              &emsp;can have at most 4
              members.
              <br />
              <div className="h-[15px]"></div>
              &bull;The teams have to submit an abstract for their ideas for the
              first round. Top 12 teams will be shortlisted for the
              offline presentation round.
              <br />
              <div className="h-[15px]"></div>
              &bull;Judging criteria are as follows:
              <br />
              &emsp;a)Comic sense of the presentation
              <br />
              &emsp;b)How “logically illogical” the presentation <br />
              &emsp;is
              <br />
              &emsp;c)Relevance of the topic in case of a tie
              <br />
              <div className="h-[15px]"></div>
              &bull;There will be a maximum of 30 slides and a minimum of 6 slides for the presentation. Each team will have to complete their presentation within 15 minutes.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
