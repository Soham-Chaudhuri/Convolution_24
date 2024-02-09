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
              <span className="faq-icon"></span>Can we use any AI tools for the
              event?
            </label>
            <div className="accordion-item-desc items-center">
              Feel free to utilize any AI tools of your choice for the event. We
              encourage participants to explore a diverse range of AI tools to
              enhance their experience and contribute to the innovative
              atmosphere at the Electrical Engineering Department, Jadavpur
              University.
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
              <span className="faq-icon"></span>Will there be any charging
              points and internet available?
            </label>
            <div className="accordion-item-desc">
              Charging points and internet access will be available for
              participants at the event. Please remember to bring your own
              laptops and chargers to ensure a seamless and productive
              experience.
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
              <span className="faq-icon"></span>Is it mandatory to form a team
              with students of the same department?
            </label>
            <div className="accordion-item-desc">
              Participation is entirely voluntary, and forming a team is open to
              students from any department or college. Embrace the flexibility
              to collaborate across disciplines and create diverse teams at your
              convenience. Join us in this non-mandatory opportunity to foster
              interdisciplinary connections and showcase your collective talents
              at the Electrical Engineering Department, Jadavpur University.
            </div>
          </div>

          <div className="accordion-item flex flex-col">
            <input
              type="checkbox"
              id="accordion4"
              checked={checkedState["accordion4"]}
              onChange={() => handleCheckboxChange("accordion4")}
            />
            <label htmlFor="accordion4" className="accordion-item-title">
              <span className="faq-icon"></span>Who can participate in this
              event?
            </label>
            <div className="accordion-item-desc">
              All students, irrespective of their department or college, are
              invited to participate in this inclusive event at the Electrical
              Engineering Department, Jadavpur University. Join us for a
              cross-disciplinary experience, fostering collaboration and
              knowledge-sharing among students from diverse academic
              backgrounds. Don't miss this opportunity to broaden your horizons
              and connect with peers across the university.
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
              <span className="faq-icon"></span>Where will the event be held?
            </label>
            <div className="accordion-item-desc">
              Join us for an exciting on-campus event at the Electrical
              Engineering Department, Jadavpur University. Discover the latest
              in electrical engineering and engage in enriching discussions with
              fellow attendees. Save the date for an insightful gathering right
              at the heart of academic innovation.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
