import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="about_layer_bg">
          <div className="about_layer_lines"></div>
          <div className="about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">ABOUT DECISIA</span>
            <span className="para">
              Convolution 9.0 is the ninth edition of the annual
              techno-management fest organized by the Students' Forum of the
              Department of Electrical Engineering, Jadavpur University. It
              provides a dynamic hotspot to students pursuing STEM-related
              programs, where they can apply their creativity and skills, and
              test their mettle against the best. Convolution acts as an
              umbrella event comprising of several student interaction events,
              technical events, workshops, and has also hosted, in the past,
              lectures by some of the most illustrious names in academia and
              industry alike.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
