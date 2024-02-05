/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="frames_about_layer_bg">
          <div className="frames_about_layer_lines"></div>
          <div className="frames_about  flex flex-col gap-10">
            <span className="heading">RULES & REGULATIONS</span>
            <span className="frames_para text-justify">
              &bull;The photos will have to be submitted via online mode.
              <br />
              <div className="h-[15px]"></div>
              &bull;Judgement has two stages :-
              <br />
              &emsp;a)Top 24 photos will be selected by our judges.
              <br />
              &emsp;b)These 24 photos will be exhibited in our Electrical Engineering
              <br/>
              &emsp;Department, and people can vote for their favourite photo there.
              <br />
              <div className="h-[15px]"></div>
              
              &bull;There will be two categories of winners:-
              <br />
              &emsp;a)Peoples’ choice winner & Peoples’ choice runner up (which will
              <br/>
              &emsp;be decided on the basis of votes in the exhibition as mentioned
              <br/>
              &emsp;above).
              <br />
              &emsp;b)Judges’ choice winner & Judges’ choice runner-up (which will
              already be 
              <br/>
              &emsp;decided by the judges during the selection of the top
              24 photos).
              <br />
              <div className="h-[15px]"></div>
              
              &bull;There must be a caption (only in English) for the photo.
              The caption should be as short as possible (within 25 words), and
              it will hold 25% weightage during judgement.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
