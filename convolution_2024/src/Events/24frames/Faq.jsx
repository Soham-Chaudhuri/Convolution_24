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
              <span className="faq-icon"></span>Can I submit photos taken with a
              smartphone for the event?
            </label>
            <div className="accordion-item-desc items-center">
            Yes, absolutely! Our photography competition is open to entries captured with any type of camera, including smartphones. We believe that creativity knows no bounds, and stunning images can be produced with a variety of devices.
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
              <span className="faq-icon"></span>Is there a specific theme for the photography competition?
            </label>
            <div className="accordion-item-desc">
            We encourage diversity and creativity in submissions. There is no specific theme for this competition, allowing photographers to showcase their skills and perspectives across a broad range of subjects. Whether it's portraits, landscapes, abstracts, or street photography, we welcome your unique vision.
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
              <span className="faq-icon"></span>How will the winners be determined in the photography competition?
            </label>
            <div className="accordion-item-desc">
            Our judging panel consists of experienced photographers and industry experts who will evaluate entries based on various criteria such as composition, creativity, technical skill, and overall impact. The selection process is designed to ensure a fair and impartial evaluation of all submissions, ultimately recognizing and rewarding the most outstanding photographs.
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
          </div>

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



// Q: Can I submit photos taken with a smartphone for the photography competition?

// A: Yes, absolutely! Our photography competition is open to entries captured with any type of camera, including smartphones. We believe that creativity knows no bounds, and stunning images can be produced with a variety of devices.

// Q: Is there a specific theme for the photography competition, or can I submit photos of any subject?

// A: We encourage diversity and creativity in submissions. There is no specific theme for this competition, allowing photographers to showcase their skills and perspectives across a broad range of subjects. Whether it's portraits, landscapes, abstracts, or street photography, we welcome your unique vision.

// Q: How will the winners be determined in the photography competition?

// A: Our judging panel consists of experienced photographers and industry experts who will evaluate entries based on various criteria such as composition, creativity, technical skill, and overall impact. The selection process is designed to ensure a fair and impartial evaluation of all submissions, ultimately recognizing and rewarding the most outstanding photographs.