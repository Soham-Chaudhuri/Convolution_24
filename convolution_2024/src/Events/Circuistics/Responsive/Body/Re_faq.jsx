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
            <h1 className="text-center re_teams_h1">
              FREQUENTLY ASKED QUESTIONS
            </h1>
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
              <span className="faq-icon"></span>
              Is there a penalty for damaging components during Round 2 circuit
              building?
            </label>
            <div className="re_accordion-item-desc items-center">
              In competitions where there is no penalty for destroying
              components, it's crucial to note that any team found mishandling
              components will face immediate disqualification. This policy aims
              to maintain a fair and ethical playing field. Participants are
              granted the freedom to explore and push limits, but responsible
              conduct is paramount. Disqualification serves as a deterrent
              against intentional damage, promoting sportsmanship and adherence
              to competition rules. Striking a balance between innovation and
              responsible behavior is essential to uphold the integrity of the
              event.
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
              <span className="faq-icon"></span>Can teams be consisted of
              different year or different college students?
            </label>
            <div className="re_accordion-item-desc">
              Teams must be exclusively comprised of students from the same
              college and of the same academic year. This stipulation ensures a
              level playing field by fostering collaboration among peers who
              share a common educational background. The requirement not only
              promotes a sense of camaraderie within the team but also
              encourages a fair representation of skills and knowledge among
              participants. Restricting team formation to students from the same
              college and year enhances the overall integrity of the
              competition, preventing potential disparities in experience or
              resources. This rule underscores the importance of creating an
              equitable and cohesive environment for all participating teams.
            </div>
          </div>

          {/* <div className="re_accordion-item">
            <input
              type="checkbox"
              id="accordion3"
              checked={checkedState["accordion3"]}
              onChange={() => handleCheckboxChange("accordion3")}
            />
            <label htmlFor="accordion3" className="re_accordion-item-title">
              <span className="faq-icon"></span>What are the key components of a
              successful SEO strategy?
            </label>
            <div className="re_accordion-item-desc">
              A successful SEO strategy involves various components, including
              keyword research, on-page optimization, quality content creation,
              link building, technical SEO, and user experience optimization.
              These elements work together to improve a website's relevance and
              authority in the eyes of search engines.
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
              <span className="faq-icon"></span>How does mobile optimization
              impact SEO?
            </label>
            <div className="re_accordion-item-desc">
              Mobile optimization is crucial for SEO because search engines
              prioritize mobile-friendly websites. With the increasing use of
              smartphones, search engines like Google consider mobile
              responsiveness as a ranking factor. Websites that provide a
              seamless experience on mobile devices are more likely to rank
              higher in search results.
            </div>
          </div> */}

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
