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
                    <h3>Announcement on CodeForces</h3>
                    <p className="timeline_para">
                      - the particulars regarding the event to be announced on CodeForces
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
                    <h3>End of Registration & Prelims</h3>
                    <p className="timeline_para">
                      - all registration to be completed by 7:59P.M.
                      <br />
                      - the contest begins at 8:00P.M. as per standard CodeChef contest timing
                      
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
                    <h3>Preliminary Selection of Finalists</h3>
                    <p className="timeline_para">
                      - All selected finalists will be emailed asking to confirm their presence following the merged ranklist published by Codechef
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
                    <h3>Confirmation of Finalists</h3>
                    <p className="timeline_para">
                      - Deadline for selected finalists to confirm their presence
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>


              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">5<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Publication of List of Finalists</h3>
                    <p className="timeline_para">
                      - The final list of selected finalists will be published on the announcement blog on Codeforces, and the finalists shall be sent a final email
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
                    <h3>Offline Finals</h3>
                    <p className="timeline_para">
                      - The offline finals will be held and the winners will be preseneted with their certificates
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
