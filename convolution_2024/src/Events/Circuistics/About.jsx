import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="cir_about_layer_bg">
          <div className="cir_about_layer_lines"></div>
          <div className="cir_about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">RULES & REGULATIONS</span>
            <span className="cir_para text-justify">
              &bull;Teams of 2-4 members.
              <br />
              <div className="h-[15px]"></div>
              &bull;The event is divided into two tiers: Tier-1 for UG 1 & 2 and
              Tier-2 for UG 3 & 4
              <br />
              <div className="h-[15px]"></div>
              &bull;The event is divided into two rounds:
              <br />
              &emsp;Round 1: Screening test (pen paper mode).
              <br />
              &emsp;Question pattern: MCQ, MSQ and NAT type.
              <br />
              &emsp;Round 2: Hardware design Circuit must be fully operational
              and time taken &emsp;to design the circuit will be noted in this
              round.
              <br />
              <div className="h-[15px]"></div>
              &bull;Use of any electronic device except for calculators is not allowed.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
