import React, { useState } from "react";
import "./Re_faq.css";

function Faq() {
  const [checkedState, setCheckedState] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedState({
      ...checkedState,
      [id]: !checkedState[id],
    });
  };
  return (
    <>
      <section id="Re_faq">
        <div className="re_accordion">
          <div className=" flex flex-col justify-center items-center gap-3 py-5">
            <h1 className="text-center re_teams_h1">FREQUENTLY ASKED QUESTIONS</h1>
            <span className="underline_teams"></span>
          </div>

          <div className="re_accordion-item flex flex-col items-center">
            <input
              type="checkbox"
              id="accordion1"
              checked={checkedState["accordion1"]}
              onChange={() => handleCheckboxChange("accordion1")}
            />
            <label htmlFor="accordion1" className="re_accordion-item-title ">
              <span className="faq-icon"></span>Will on-spot registration be
              available?
            </label>
            <div className="re_accordion-item-desc items-center">
            On-the-spot registration is welcome! Feel free to join us without
              prior registration at the Electrical Engineering Department,
              Jadavpur University. We look forward to your spontaneous
              participation in this exciting event.   
            </div>
          </div>

          <div className="re_accordion-item">
            <input
              type="checkbox"
              id="accordion2"
              checked={checkedState["accordion2"]}
              onChange={() => handleCheckboxChange("accordion2")}
            />
            <label htmlFor="accordion2" className="re_accordion-item-title">
              <span className="faq-icon"></span> When and where will the event
              be held?
            </label>
            <div className="re_accordion-item-desc">
            Join us for an engaging event on March 15, 2024, at KCR Hall,
              Electrical Engineering Department. Save the date for a day filled
              with insightful discussions and valuable experiences in the heart
              of Jadavpur University.
            </div>
          </div>

          <div className="re_accordion-item">
            <input
              type="checkbox"
              id="accordion3"
              checked={checkedState["accordion3"]}
              onChange={() => handleCheckboxChange("accordion3")}
            />
            <label htmlFor="accordion3" className="re_accordion-item-title">
              <span className="faq-icon"></span>How will the selection of
              winners take place?
            </label>
            <div className="re_accordion-item-desc">
            Advance to the final round by securing a spot in the top 10 teams
              with the highest scores in the first round. The ultimate challenge
              awaits as the top 3 teams with the highest scores in the final
              round will be crowned the winners. May the competition bring out
              the best in your team at the Electrical Engineering Department,
              Jadavpur University.
            </div>
          </div>

          <div className="re_accordion-item flex flex-col">
            <input
              type="checkbox"
              id="accordion4"
              checked={checkedState["accordion4"]}
              onChange={() => handleCheckboxChange("accordion4")}
            />
            <label htmlFor="accordion4" className="re_accordion-item-title">
              <span className="faq-icon"></span>Are cross college teams
              allowed?
            </label>
            <div className="re_accordion-item-desc">
            Encourage collaboration across colleges and departments as teams
              are welcome to comprise members from different academic
              backgrounds. However, kindly note that cross-year teams are
              discouraged. Join forces with peers from diverse disciplines to
              make the most of this enriching experience at the Electrical
              Engineering Department, Jadavpur University.
            </div>
          </div>

          {/* <div className="re_accordion-item">
            <input
              type="checkbox"
              id="accordion5"
              checked={checkedState["accordion5"]}
              onChange={() => handleCheckboxChange("accordion5")}
            />
            <label htmlFor="accordion5" className="re_accordion-item-title">
              <span className="faq-icon"></span>What is the role of backlinks in
              SEO, and how can they be acquired?
            </label>
            <div className="re_accordion-item-desc">
              Backlinks, or inbound links from other websites to yours, play a
              significant role in SEO. They are considered a vote of confidence
              and can improve a site's authority. Quality over quantity is
              crucial when acquiring backlinks. Strategies for obtaining
              backlinks include creating high-quality content, guest posting,
              reaching out to industry influencers, and participating in
              community activities. It's important to focus on natural and
              ethical link-building practices.
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Faq;
