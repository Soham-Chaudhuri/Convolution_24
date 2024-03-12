import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="frames_about_layer_bg">
          <div className="frames_about_layer_lines"></div>
          <div className="frames_about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">RULES & REGULATIONS</span>
            <span className="frames_para text-justify">
              &bull;This event is based on 'Bahfest', for more clarification{" "}
              <a
                href="https://bahfest.com/submit-hypothesis/"
                target="_blank"
                rel="noopener noreferrer"
                className="frames_para text-[#fb7d4c]  transition-all cursor-pointer hover:text-[#ed6630]"
              >
                click here.
              </a>
              <br />
              <div className="h-[15px]"></div>
              &bull;Event comprises two rounds:
              <br />
              &emsp;a)Online Screening round
              <br />
              &emsp;b)Offline Presentation round. Each team can have 2-4
              members.
              <br />
              <div className="h-[15px]"></div>
              &bull;The teams have to submit an abstract for their ideas for the
              first round. Top 8-12 teams will be shortlisted for the offline
              presentation round.
              <br />
              <div className="h-[15px]"></div>
              &bull;Judging criteria are as follows:
              <br />
              &emsp;a)Comic sense of the presentation
              <br />
              &emsp;b)How “logically illogical” the presentation is
              <br />
              &emsp;c)Relevance of the topic in case of a tie
              <br />
              <div className="h-[15px]"></div>
              &bull;There will be a maximum of 30 slides and a minimum of 6
              slides for the presentation. Each team will have to complete their
              presentation within 15 minutes.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
