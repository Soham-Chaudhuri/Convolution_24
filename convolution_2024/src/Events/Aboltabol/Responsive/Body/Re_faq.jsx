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
              <span className="faq-icon"></span>What makes Abol Tabol suitable
              for students from different fields?
            </label>
            <div className="re_accordion-item-desc items-center">
            Abol Tabol is designed as a multidisciplinary platform that
              celebrates the diversity of student interests. The show's content
              is carefully curated to include a broad spectrum of topics,
              ensuring that whether you're studying sciences, humanities, arts,
              engineering, or any other field, there's something intriguing and
              entertaining for everyone. Abol Tabol creates a space where the
              intersections of different disciplines lead to unexpected and
              delightful intellectual hilarity.   
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
              <span className="faq-icon"></span>Do I need to be a science major
              to participate in Abol Tabol?
            </label>
            <div className="re_accordion-item-desc">
            Not at all! Abol Tabol thrives on the rich tapestry of ideas that
              students from various majors bring to the table. Whether you're
              majoring in a scientific discipline or pursuing studies in the
              arts, humanities, or social sciences, your unique perspective is
              valued. The show is a fantastic opportunity to explore the
              humorous side of your field or even playfully venture into the
              realms of other disciplines.
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
              <span className="faq-icon"></span>How can student participants
              contribute their ideas to the show?
            </label>
            <div className="re_accordion-item-desc">
            Students can actively engage with Abol Tabol by submitting their
              whimsical and imaginative ideas related to their respective
              fields. This can take various forms, such as crafting stand-up
              comedy routines, creating humorous sketches, or exploring comedic
              perspectives on specific topics within their majors. The emphasis
              is on embracing creativity and showcasing the lighter side of
              intellectual pursuits, fostering a sense of community and
              shared laughter.
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
