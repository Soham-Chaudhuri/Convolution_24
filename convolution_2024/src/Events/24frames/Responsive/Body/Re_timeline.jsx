import React from "react";
import "./Re_timeline.css";

function Re_timeline() {
  return (
    <>
      <section id="Re_timeline">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_events_h1">TIMELINE</h1>
          <span className="re_events_underline"></span>
          {/* <p className="re_events_paragraph py-4">
            A plethora of events covering all your skills. So gear up for the
            showdown!
            <br />
            Browse over the links to register
          </p> */}
        </div>
        <div className="Re_timeline flex flex-col py-4">
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    28<sup>th</sup> Feb
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Photo Submission Starts</h3>
                <p className="Re_timeline_para">
                  - send us the photos at "convolution2024@gmail.com" along with
                  screenshot of the meta data and the caption
                </p>
              </div>
            </div>
          </div>

          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    3<sup>rd</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Final Date of Submission</h3>
                <p className="Re_timeline_para">
                  - all photos to be submitted by 11:59pm on 3rd March.
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
                    8<sup>th</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">
                  1st Round Result Declaration
                </h3>
                <p className="Re_timeline_para">
                  - the top 24 photos will be shortlisted for exhibition on the
                  day of the event.
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
                <h3 className="Re_timeline_day pt-7">Prize Distribution</h3>
                <p className="Re_timeline_para">
                  - the top 3 photos of the 2nd round along with popular choice
                  photo to be declared
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
