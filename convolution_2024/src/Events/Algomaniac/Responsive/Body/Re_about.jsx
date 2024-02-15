import React from "react";
import "../Body/Re_about.css";
function About() {
  return (
    <>
      <section id="Re_about">
        <div className="Re_algo_about_layer_bg">
          <div className="Re_algo_about_layer_lines"></div>
          <div className="Re_algo_about flex text-center flex-col align-center justify-center gap-6 py-10 px-6">
            <span className="Re_heading">RULES & REGULATIONS</span>
            <span className="Re_algo_para text-justify">
              &bull;The online round will be hosted on Codechef as an External
              Rated Contest on February 28, 2024. Aside from registering on
              Codechef and giving the contest, participants will have to
              register separately through Google Forms if they are willing to
              participate in the onsite finals.
              <br />
              <div className="h-[15px]"></div>
              &bull;Only participants who registered to be available for the
              onsite finals separately through the Google Form will be
              considered for the onsite final round. Participants will have to
              bear their traveling costs.
              <br />
              <div className="h-[15px]"></div>
              &bull;Once Codechef finalizes the results for the contest,
              separately registered participants will be evaluated for
              plagiarism manually by our team. The Top 15 registered candidates
              will be chosen.
              <br />
              Refer to our FAQ section to know more about the selection process.
              <div className="h-[15px]"></div>
              &bull;If some chosen participant fails to confirm their presence
              for the finals post selection, the next person from the
              leaderboard of registered participants will be chosen.
              <br />
              The final round will be held at the Department of Electrical
              Engineering, Jadavpur University.
              <br />
              <div className="h-[15px]"></div>
              &bull;Plagiarism of any sort is strictly prohibited. Any
              registered candidate found to have plagiarized will not be
              considered for the final round. Decisions of the organizing
              committee are final and binding with regards to qualification.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
