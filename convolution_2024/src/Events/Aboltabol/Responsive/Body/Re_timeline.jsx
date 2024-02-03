import React from "react";
import "./Re_timeline.css";

function Re_timeline() {
  return (
    <>
      <section id="Re_timeline">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_events_h1">TIMELINE</h1>
          <span className="re_events_underline"></span>
          <p className="re_events_paragraph py-4">
            A plethora of events covering all your skills. So gear up for the
            showdown!
            <br />
            Browse over the links to register
          </p>
        </div>
        <div className="Re_timeline flex flex-col py-4">
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    12<sup>th</sup> Feb
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Abstract Submission Starts</h3>
                <p className="Re_timeline_para">
                  - The fray begins! All registered participants will be
                  submitting a presentation.
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    26<sup>th</sup> Feb
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Abstract Submission Ends</h3>
                <p className="Re_timeline_para">
                  - all abstracts to be submitted by 11:59pm on 26th Feb
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    17<sup>th</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">
                  Final Round & Prize Distribution
                </h3>
                <p className="Re_timeline_para">
                  - the shortlisted teams will have to pitch their concepts
                  before the judges and chief guest.
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
