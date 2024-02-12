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
              <span className="faq-icon"></span>How will the finalists be
              chosen?
            </label>
            <div className="accordion-item-desc items-center">
              Once the contest results are published, we will be using a merged
              ranklist to choose the top 15 users who have registered with us.
              Hence for being eligible for being selected, registering with us
              is as important as giving the contest itself. Please note that the
              merged ranklist will be formed by merging all the individual
              division ranklists together. However, we will be ignoring the
              initial problems of Division 4 (which are not scoreable for the
              higher divisions).
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
              <span className="faq-icon"></span>When and where will the finals
              be held?
            </label>
            <div className="accordion-item-desc">
              The final round is set for March 17, 2024 (Sunday) at the Central
              Computer Laboratory, Department of Electrical Engineering,
              Jadavpur University. Please plan your travel accordingly, and
              on-site parking will be available for your convenience. Looking
              forward to a successful event!
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
              <span className="faq-icon"></span> Will I have to carry a laptop
              for the final round?
            </label>
            <div className="accordion-item-desc">
              Additionally, participants are encouraged to ensure that their
              laptops are equipped with the necessary software and
              configurations for the competition. Please be advised to bring any
              specific peripherals or adapters that may be required for your
              devices. 
            </div>
          </div>

          {/* <div className="accordion-item flex flex-col">
            <input
              type="checkbox"
              id="accordion4"
              checked={checkedState["accordion4"]}
              onChange={() => handleCheckboxChange("accordion4")}
            />
            <label htmlFor="accordion4" className="accordion-item-title">
              <span className="faq-icon"></span>How does mobile optimization
              impact SEO?
            </label>
            <div className="accordion-item-desc">
              Mobile optimization is crucial for SEO because search engines
              prioritize mobile-friendly websites. With the increasing use of
              smartphones, search engines like Google consider mobile
              responsiveness as a ranking factor. Websites that provide a
              seamless experience on mobile devices are more likely to rank
              higher in search results.
            </div>
          </div> */}
          {/* 
          <div className="accordion-item">
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
