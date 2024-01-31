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
                  <h1 className="timeline_day text-[34px]">24<sup>th</sup> Feb</h1>
                </div>
                <div className="timeline_content1">
                  <div className="flex flex-col ">
                    <h3>Announcement on CodeChef</h3>
                    <p className="timeline_para">
                      - the particulars regarding the event to be announced on CodeChef
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">28<sup>th</sup> Feb</h1>
                </div>
                <div className="timeline_content1 ">
                  <div>
                    <h3>End of Registration</h3>
                    <p className="timeline_para">
                      - all registration to be completed by 11:59pm of 28th February
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">2<sup>nd</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Online Prelims</h3>
                    <p className="timeline_para">
                      - the preliminary round to be held on CodeChef
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">4<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Result of Prelims</h3>
                    <p className="timeline_para">
                      - the results will be communicated to the participants
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>


              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">17<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Finals</h3>
                    <p className="timeline_para">
                      - the final round of the event will be held at Jadavpur University dept of Electrical Engineering
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">17<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Prize Distribution</h3>
                    <p className="timeline_para">
                      - top 3 from the 2nd round will be awarded with exicting prizes
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
