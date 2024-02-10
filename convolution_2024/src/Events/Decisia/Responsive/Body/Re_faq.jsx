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
              <span className="faq-icon"></span>Will there be any opportunities
              to showcase interdisciplinary projects?
            </label>
            <div className="re_accordion-item-desc items-center">
            Indeed, inter-college events often highlight interdisciplinary
              collaboration and innovation. It's worth inquiring about platforms
              to showcase projects spanning multiple disciplines, which can be
              advantageous for students seeking to explore cross-cutting themes
              and tackle complex challenges. Organizers typically provide
              details on participation in interdisciplinary showcases within the
              event program or through designated communication channels.   
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
              <span className="faq-icon"></span>Can we bring prototypes, samples
              to enhance our pitch presentations?
            </label>
            <div className="re_accordion-item-desc">
            Participants are encouraged to use prototypes or visual aids to
              enhance pitch presentations, providing clarity and engagement.
              However, it's crucial to ensure relevance, seamless integration,
              and confirmation of logistical requirements for a successful
              presentation.
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
              <span className="faq-icon"></span>Are there intellectual property
              or confidentiality issues to be considered?
            </label>
            <div className="re_accordion-item-desc">
            Consider IP and confidentiality when sharing plans. Check event
              organizer agreements for information treatment. Mark materials as
              confidential and limit information dissemination. Seek legal
              counsel for IP protection if needed.
            </div>
          </div>

          {/* <div className="re_accordion-item flex flex-col">
            <input
              type="checkbox"
              id="accordion4"
              checked={checkedState["accordion4"]}
              onChange={() => handleCheckboxChange("accordion4")}
            />
            <label htmlFor="accordion4" className="re_accordion-item-title">
              <span className="faq-icon"></span>How does mobile optimization impact
              SEO?
            </label>
            <div className="re_accordion-item-desc">
              Mobile optimization is crucial for SEO because search engines
              prioritize mobile-friendly websites. With the increasing use of
              smartphones, search engines like Google consider mobile
              responsiveness as a ranking factor. Websites that provide a
              seamless experience on mobile devices are more likely to rank
              higher in search results.
            </div>
          </div>

          <div className="re_accordion-item">
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
