import React from "react";
import "./Re_timeline.css";

function Re_timeline() {
  return (
    <>
      <section id="Re_timeline">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6 min-h-min">
          <h1 className="text-center re_events_h1">TIMELINE</h1>
          <span className="re_events_underline"></span>
          
        </div>
        <div className="Re_timeline flex flex-col">
          <div className="Re_timeline_container">
            <div className="Re_timeline_card">
              <div className="Re_timeline_image">
                <div className="Re_timeline_box flex justify-center align-items-center text-center h-[200px] w-[790]">
                  <h1 className="Re_timeline_heading">17<sup>th</sup> Mar</h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">Main Event</h3>
                <p className="Re_timeline_para">
                JU Talks is a panel discussion where three panelists discuss about
              a trending topic that concerns the present generations.
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
