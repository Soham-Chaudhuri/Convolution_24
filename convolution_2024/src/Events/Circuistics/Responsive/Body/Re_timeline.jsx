import React from "react";
import "./Re_timeline.css";

function Re_timeline() {
  return (
    <>
      <section id="Re_timeline">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_events_h1">TIMELINE</h1>
        </div>
        <div className="Re_timeline flex flex-col py-4">
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">
                    16<sup>th</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Preliminary Round</h3>
                <p className="Re_timeline_para">
                  - The participants will have to solve some questions to
                  qualify for the next round.
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
                  - The qualified participants will have to design circuits in
                  this round
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
