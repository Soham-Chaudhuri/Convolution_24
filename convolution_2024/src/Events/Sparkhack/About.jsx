import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section id="about">
        <div className="sp_about_layer_bg">
          <div className="sp_about_layer_lines"></div>
          <div className="sp_about flex text-center flex-col align-center justify-center gap-10">
            <span className="heading">RULES & REGULATIONS</span>
            <span className="sp_para text-justify">
              &bull;There will be multiple tracks and problem statements in
              SparkHack, based on which, teams are expected to come up with a
              real-world and feasible solution. Tracks will comprise of :
              <br />
              &emsp;i)Hardware - Arduino, IoT, etc.
              <br />
              &emsp;ii)Software - Machine Learning, Blockchain development, etc.
              <br />
              <div className="h-[15px]"></div>
              &bull;<strong>Preliminary round:</strong> Teams will be shortlisted based on their
              idea which they have to pitch in front of the judges via online
              mode.
              <br />
              <div className="h-[10px]"></div>
              <strong>Prototype creating round:</strong> The shortlisted teams will have to
              implement a prototype based on their ideation which will be held
              via offline mode in Jadavpur University Electrical Engineering
              Department.
              <br />
              <div className="h-[10px]"></div>
              <strong>Pitching round:</strong>Pitching round: The teams will have to pitch their ideas in
              offline mode to the panel of judges.
              <br />
              <div className="h-[15px]"></div>
              &bull;Necessary hardware kits must be brought by the teams. For software implementations, teams have to bring their own laptop.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
