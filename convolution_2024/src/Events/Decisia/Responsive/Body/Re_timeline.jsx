import React from "react";
import "./Re_timeline.css";

function Re_timeline() {
  return (
    <>
      <section id="Re_timeline">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_events_h1">TIMELINE</h1>
          <span className="re_events_underline"></span>
          
        </div>
        <div className="Re_timeline flex flex-col py-4">
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">19<sup>th</sup> Feb</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Abstract Submission Starts</h3>
                <p className="Re_timeline_para">
                - the participants will have to submit an abstract of their business ideas
                      <br />
                </p>

                
              </div>
            </div>
          </div>

        

          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">2<sup>nd</sup> Mar</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Abstract Submission Ends</h3>
                <p className="Re_timeline_para">
                - Participants will have to submit their abstracts by 11:59pm on 2nd March.
                      <br />
                </p>

                
              </div>
            </div>
          </div>
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">8<sup>th</sup> Mar</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Result Announcement of Prelims</h3>
                <p className="Re_timeline_para">
                - Top 8 teams will be shortlisted for the 2nd round
                      <br />
                </p>

                
              </div>
            </div>
          </div>
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">16<sup>th</sup> Mar</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Finals</h3>
                <p className="Re_timeline_para">
                - The shortlisted participants will have to pitch their ideas infront of the judges.
                      <br />
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Re_timeline;
