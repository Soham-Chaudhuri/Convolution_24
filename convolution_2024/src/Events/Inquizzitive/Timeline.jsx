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
                    15<sup>th</sup> Mar
                  </h1>
                </div>
                <div className="timeline_content1">
                  <div className="flex flex-col ">
                    <h3>Prelims</h3>
                    <p className="timeline_para">
                      - Shortlisting of the top 8 teams
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">
                    15<sup>th</sup> Mar
                  </h1>
                </div>
                <div className="timeline_content1 ">
                  <div>
                    <h3>Finals</h3>
                    <p className="timeline_para">
                      - the final 'showdown'
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
