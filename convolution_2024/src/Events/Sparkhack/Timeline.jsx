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
                  <h1 className="timeline_day text-[34px]">15<sup>th</sup> Feb</h1>
                </div>
                <div className="timeline_content1">
                  <div className="flex flex-col ">
                    <h3>Abstract Submission Starts</h3>
                    <p className="timeline_para">
                      - the participants will have to submit an abstract about the idea they have chosen.
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">29<sup>th</sup> Feb</h1>
                </div>
                <div className="timeline_content1 ">
                  <div>
                    <h3>Abstract Submission Ends</h3>
                    <p className="timeline_para">
                      - participants will have to submit their abstracts by 11:59pm of 29th Feb
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">3<sup>rd</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Online Pitching</h3>
                    <p className="timeline_para">
                      - participants will have to pitch their ideas infront of the panel of judges
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">7<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Result Declaration of 1st Round</h3>
                    <p className="timeline_para">
                      - results of the 1st round will be declared by 7th March and top 10 teams will be shortlisted 
                      <br />
                      
                    </p>
                  </div>
                </div>
              </div>


              <div className="timeline_card">
                <div className="timeline_imgBx">
                  <h1 className="timeline_day text-[34px]">16<sup>th</sup> Mar</h1>
                </div>
                <div className="timeline_content1">
                  <div>
                    <h3>Prototype Submission Round</h3>
                    <p className="timeline_para">
                      - top 10 teams will have to present their prototypes before the judges
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
                    <h3>Result Declaration of Final Round</h3>
                    <p className="timeline_para">
                      - top 3 teams from the 2nd round will be awarded with exciting prizes.
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
