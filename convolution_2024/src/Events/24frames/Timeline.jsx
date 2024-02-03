import React from "react";
import "./Timeline.css";
import dotted from "../../components/assets/line-1@2x.png";

function Timeline() {
  return (
    <>
      <section id="timeline">
        <section className="timeline_body" id="timeline">
          <div className="reveal">
            <div className=" flex flex-col justify-center items-center gap-2 py-5">
              <h1 className="text-center event_h1">TIMELINE</h1>
              <span className="underline"></span>
              {/* <p className="paragraph py-4">
                A plethora of events covering all your skills. So gear up for
                the showdown!
                <br />
                Browse over the links to register
              </p> */}
            </div>

            <div className="timeline_container1">
              <div className="timeline_card">
                <div className="timeline_imgBx flex flex-col ">
                  <h1 className="timeline_day text-[34px]">
                    28<sup>th</sup> Feb
                  </h1>
                </div>
                <div className="timeline_content1">
                  <div className="flex flex-col ">
                    <h3>Photo Submission Starts</h3>
                    <p className="timeline_para">
                      - send us the photos at "convolution2024@gmail.com" along
                      with screenshot of the meta data and the caption
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">
                    3<sup>rd</sup> Mar
                  </h1>
                </div>
                <div className="timeline_content1 ">
                  <div>
                    <h3>Final Date of Submission</h3>
                    <p className="timeline_para">
                      - all photos to be submitted by 11:59pm on 3rd March.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">
                    8<sup>th</sup> Mar
                  </h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>1st Round Result Declaration</h3>
                    <p className="timeline_para">
                      - the top 24 photos will be shortlisted for exhibition on
                      the day of the event.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">
                    17<sup>th</sup> Mar
                  </h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Prize Distribution</h3>
                    <p className="timeline_para">
                      - the top 3 photos of the 2nd round along with popular
                      choice photo to be declared
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Timeline;
