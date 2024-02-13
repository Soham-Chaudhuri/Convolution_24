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
        <div className="accordion min-h-[60vh] justify-center">
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
              <span className="faq-icon"></span>What topics will be discussed during the JU Talks panel discussion?
            </label>
            <div className="accordion-item-desc items-center">
            The JU Talks panel discussion will cover a range of trending topics relevant to the present generation, such as sustainability, technology's impact on society, mental health awareness, diversity and inclusion, and more.
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
              <span className="faq-icon"></span>Who are the panelists and what are their areas of expertise?
            </label>
            <div className="accordion-item-desc">
            Our panelists are renowned experts in their respective fields, bringing diverse perspectives and extensive experience to the discussion. From industry leaders to academics , each panelist offers unique insights and expertise that promise to enrich the conversation.
            </div>
          </div>

          

          

        </div>
      </section>
    </>
  );
}

export default Faq;
