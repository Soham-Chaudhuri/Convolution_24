import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_frames_about_layer_bg">
          <div className="Re_frames_about_layer_lines"></div>
          <div className="Re_frames_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">RULES & REGULATIONS</span>
            <span className="Re_frames_para text-justify">
            &bull;The photos will have to be submitted via online mode.
              <br />
              <div className="h-[15px]"></div>
              &bull;Judgement has two stages :-
              <br />
              &emsp;a)Top 24 photos will be selected by <br/>
              &emsp;our judges.
              <br />
              &emsp;b)These 24 photos will be exhibited <br/>
              &emsp;in our Electrical Engineering
              <br/>
              &emsp;Department, and people can vote for <br/>
              &emsp;their favourite photo there.
              <br />
              <div className="h-[15px]"></div>
              
              &bull;There will be two categories of winners:-
              <br />
              &emsp;a)Peoples’ choice winner & Peoples’ <br />&emsp;choice runner up (which will be 
              <br/>
              &emsp;decided on the basis of votes in the <br />&emsp; exhibition as mentioned
              <br/>
              &emsp;above).
              <br />
              &emsp;b)Judges’ choice winner & Judges’ <br />&emsp;choice runner-up (which will
              already <br />&emsp;be 
              decided by the judges during the <br/>
              &emsp;selection of the top
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
