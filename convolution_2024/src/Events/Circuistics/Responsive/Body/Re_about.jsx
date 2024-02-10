import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_cir_about_layer_bg">
          <div className="Re_cir_about_layer_lines"></div>
          <div className="Re_cir_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">RULES & REGULATIONS</span>
            <span className="Re_cir_para text-justify">
            &bull;Teams of 2-3 members.
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
              &emsp;Round 2: Hardware design Circuit must be <br />
              &emsp;fully operational
              and time taken &emsp;to <br />
              &emsp;design the circuit will be noted in this
              <br />
              &emsp;round.
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
