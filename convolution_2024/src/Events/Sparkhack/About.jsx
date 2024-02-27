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
              &bull;Sparkhack will have multiple tracks covering a wide range of
              domains. The teams have to choose one track and develop a feasible
              real-world solution to the presented problem. The tracks include:
              <br />
              &emsp;i)Hardware - Arduino, IoT, etc.
              <br />
              &emsp;ii)Software - Machine Learning, Blockchain development, etc.
              <br />

              <div className="h-[15px]"></div>
              &bull;Upon event registration, participants will receive the problem statements via their email.
              <br />
              <div className="h-[15px]"></div>
              &bull;<strong>Preliminary round:</strong> The teams have to
              present their ideas to the judges on a Google Meet. The judges
              will shortlist 8 teams for the next rounds.The teams then have to pitch their ideas and present their prototype to the judges in-person.
              <br />
              <div className="h-[10px]"></div>
              <strong>Prototype creating round:</strong> The shortlisted teams
              will have to implement a prototype based on their ideation which
              will be held via offline mode in Jadavpur University Electrical
              Engineering Department.
              <br/>
              No PowerPoint presentations will be accepted in this round; each team must present their solution through a prototype or simulation.
              <br />
              <div className="h-[10px]"></div>
              <strong>Pitching round:</strong>Pitching round: The teams will
              have to pitch their ideas in offline mode to the panel of judges.
              <br />
              <div className="h-[15px]"></div>
              &bull;Necessary hardware kits must be brought by the teams. For
              software implementations, teams have to bring their own laptop.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
