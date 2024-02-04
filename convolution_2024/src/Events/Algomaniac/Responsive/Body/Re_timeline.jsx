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
                    24<sup>th</sup> Feb
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Announcement on CodeChef</h3>
                <p className="Re_timeline_para">
                  - the particulars regarding the event to be announced on
                  CodeChef
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
                    28<sup>th</sup> Feb
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">End of Registration</h3>
                <p className="Re_timeline_para">
                  - all registration to be completed by 11:59pm of 28th February
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
                  2<sup>nd</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Online Prelims</h3>
                <p className="Re_timeline_para">
                - the preliminary round to be held on CodeChef
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
                  4<sup>th</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Result of Prelims</h3>
                <p className="Re_timeline_para">
                - the results will be communicated to the participants
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
                <h3 className="Re_timeline_day pt-7">Finals</h3>
                <p className="Re_timeline_para">
                - the final round of the event will be held at Jadavpur University dept of Electrical Engineering
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
                - top 3 from the 2nd round will be awarded with exicting prizes
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
