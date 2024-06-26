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
              <span className="faq-icon"></span>What topics will be discussed during the JU Talks panel discussion?
            </label>
            <div className="re_accordion-item-desc items-center">
            The JU Talks panel discussion will cover a range of trending topics relevant to the present generation, such as sustainability, technology's impact on society, mental health awareness, diversity and inclusion, and more.
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
              <span className="faq-icon"></span>Who are the panelists and what are their areas of expertise?
            </label>
            <div className="re_accordion-item-desc">
            Our panelists are renowned experts in their respective fields, bringing diverse perspectives and extensive experience to the discussion. From industry leaders to academics , each panelist offers unique insights and expertise that promise to enrich the conversation.
            </div>
          </div>

          

          
          
        </div>
      </section>
    </>
  );
}

export default Faq;
