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
                  <h1 className="Re_timeline_heading">DAY 1</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Morning Session:</h3>
                <p className="Re_timeline_para">
                  Event 1
                  <br />
                  Event 2
                  <br />
                  Event 3
                </p>

                <h3 className="Re_timeline_day">Afternoon Session:</h3>
                <p className="Re_timeline_para">
                  Event 1
                  <br />
                  Event 2
                  <br />
                  Event 3
                </p>
              </div>
            </div>
          </div>

        

          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">DAY 3</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day">Morning Session:</h3>
                <p className="Re_timeline_para">
                  Event 1
                  <br />
                  Event 2
                  <br />
                  Event 3
                </p>

                <h3 className="Re_timeline_day">Afternoon Session:</h3>
                <p className="Re_timeline_para">
                  Event 1
                  <br />
                  Event 2
                  <br />
                  Event 3
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
