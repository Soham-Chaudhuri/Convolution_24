import React, { useState } from "react";
import "./faq.css";

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
      <section id="faq">
        <div className="accordion">
          <div className=" flex flex-col justify-center items-center gap-3 py-5">
            <h1 className="text-center teams_h1">FREQUENTLY ASKED QUESTIONS</h1>
            <span className="underline_teams"></span>
          </div>

          <div className="accordion-item flex flex-col items-center">
            <input
              type="checkbox"
              id="accordion1"
              checked={checkedState["accordion1"]}
              onChange={() => handleCheckboxChange("accordion1")}
            />
            <label htmlFor="accordion1" className="accordion-item-title ">
              <span className="faq-icon"></span>
              Is there a penalty for damaging components during Round 2 circuit
              building?
            </label>
            <div className="accordion-item-desc items-center">
              It's crucial to note that any team found mishandling components
              will face immediate disqualification. This rule aims to maintain a
              fair and ethical playing field. Disqualification is a deterrent
              against intentional damage, promoting sportsmanship and adherence
              to competition rules. This balance between innovation and
              responsible behavior is essential to uphold the event's integrity.
            </div>
          </div>

          <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion2"
              checked={checkedState["accordion2"]}
              onChange={() => handleCheckboxChange("accordion2")}
            />
            <label htmlFor="accordion2" className="accordion-item-title">
              <span className="faq-icon"></span>Can teams be consisted of
              different year or different college students?
            </label>
            <div className="accordion-item-desc">
            Teams must comprise students from the same college and academic year to ensure a fair competition for all teams participating in the particular tier of competition. This rule also ensures that team members can contribute their best to their teams.
            </div>
          </div>

          <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion3"
              checked={checkedState["accordion3"]}
              onChange={() => handleCheckboxChange("accordion3")}
            />
            <label htmlFor="accordion3" className="accordion-item-title">
              <span className="faq-icon"></span> What will be registration fees
              per team for participation?
            </label>
            <div className="accordion-item-desc">
            There is no registration fee for this or any other event of Convolution 2024. Your enthusiasm to build and learn something new is the only ticket you will need to participate in our events. 

            </div>
          </div>

          {/* <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion5"
              checked={checkedState["accordion5"]}
              onChange={() => handleCheckboxChange("accordion5")}
            />
            <label htmlFor="accordion5" className="accordion-item-title">
              <span className="faq-icon"></span>What is the role of backlinks in
              SEO, and how can they be acquired?
            </label>
            <div className="accordion-item-desc">
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
