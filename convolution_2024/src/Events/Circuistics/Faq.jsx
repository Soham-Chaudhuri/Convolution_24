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
              In competitions where there is no penalty for destroying
              components, it's crucial to note that any team found mishandling
              components will face immediate disqualification. This policy aims
              to maintain a fair and ethical playing field. Disqualification
              serves as a deterrent against intentional damage, promoting
              sportsmanship and adherence to competition rules. Striking a
              balance between innovation and responsible behavior is essential
              to uphold the integrity of the event.
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
              Teams must be exclusively comprised of students from the same
              college and of the same academic year. The requirement not only
              promotes a sense of camaraderie within the team but also
              encourages a fair representation of skills and knowledge among
              participants. Restricting team formation to students from the same
              college and year enhances the overall integrity of the
              competition, preventing potential disparities in experience or
              resources.
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
              This event does not require any Registration Fees! Embrace the
              opportunity to learn and grow without any financial burden. Join
              us in fostering a community of knowledge enthusiasts. Your passion
              for learning is the only ticket you need. No fees, no restrictions
              just pure knowledge sharing.
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
