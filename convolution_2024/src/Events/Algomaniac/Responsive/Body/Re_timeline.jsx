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
                <h3 className="Re_timeline_day pt-7">
                  Announcement on CodeForces
                </h3>
                <p className="Re_timeline_para">
                  - the particulars regarding the event to be announced on
                  CodeForces
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
                <h3 className="Re_timeline_day pt-7">
                  End of Registration & Prelims
                </h3>
                <p className="Re_timeline_para">
                  - all registration to be completed by 7:59P.M.
                  <br />- the contest begins at 8:00P.M. as per standard
                  CodeChef contest timing
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
                <h3 className="Re_timeline_day pt-7">
                  Preliminary Selection of Finalists
                </h3>
                <p className="Re_timeline_para">
                  - All selected finalists will be emailed asking to confirm
                  their presence following the merged ranklist published by
                  Codechef
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
                <h3 className="Re_timeline_day pt-7">
                  Confirmation of Finalists
                </h3>
                <p className="Re_timeline_para">
                  - Deadline for selected finalists to confirm their presence
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
                    5<sup>th</sup> Mar
                  </h1>
                </div>
              </div>
              <div className="Re_timeline_content">
                <h3 className="Re_timeline_day pt-7">
                  Publication of List of Finalists
                </h3>
                <p className="Re_timeline_para">
                  - The final list of selected finalists will be published on
                  the announcement blog on Codeforces, and the finalists shall
                  be sent a final email
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
                <h3 className="Re_timeline_day pt-7">Offline Finals</h3>
                <p className="Re_timeline_para">
                  - The offline finals will be held and the winners will be
                  preseneted with their certificates
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
