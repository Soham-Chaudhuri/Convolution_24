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
              <span className="faq-icon"></span>What makes Abol Tabol suitable
              for students from different fields?
            </label>
            <div className="accordion-item-desc items-center">
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

          <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion2"
              checked={checkedState["accordion2"]}
              onChange={() => handleCheckboxChange("accordion2")}
            />
            <label htmlFor="accordion2" className="accordion-item-title">
              <span className="faq-icon"></span> What types of hypotheses are
              accepted at Abol Tabol?
            </label>
            <div className="accordion-item-desc">
              We welcome hypotheses from all fields of science, ranging from
              physics and biology to psychology and beyond. The only requirement
              is that your hypothesis is both scientifically plausible and
              hilariously absurd!
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
              <span className="faq-icon"></span>Do I need to be a science major
              to participate in Abol Tabol?
            </label>
            <div className="accordion-item-desc">
              Not at all! Abol Tabol thrives on the rich tapestry of ideas that
              students from various majors bring to the table. Whether you're
              majoring in a scientific discipline or pursuing studies in the
              arts, humanities, or social sciences, your unique perspective is
              valued. The show is a fantastic opportunity to explore the
              humorous side of your field or even playfully venture into the
              realms of other disciplines.
            </div>
          </div>

          <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion4"
              checked={checkedState["accordion4"]}
              onChange={() => handleCheckboxChange("accordion4")}
            />
            <label htmlFor="accordion4" className="accordion-item-title">
              <span className="faq-icon"></span>How can student participants
              contribute their ideas to the show?
            </label>
            <div className="accordion-item-desc">
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

          <div className="accordion-item">
            <input
              type="checkbox"
              id="accordion5"
              checked={checkedState["accordion5"]}
              onChange={() => handleCheckboxChange("accordion5")}
            />
            <label htmlFor="accordion5" className="accordion-item-title">
              <span className="faq-icon"></span>Can I attend Abol Tabol as an
              audience member?
            </label>
            <div className="accordion-item-desc">
              Absolutely! Abol Tabol is a public event, and we encourage science
              enthusiasts and comedy lovers alike to join us for an evening of
              laughter and scientific absurdity. There are no tickets or
              monetary system and you can join us on 16th of March for
              absolutely free.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
