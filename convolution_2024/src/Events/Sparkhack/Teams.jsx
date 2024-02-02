/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";

import picture4 from "../../components/assets/leads/Sayandeep.jpeg";

import picture6 from "../../components/assets/uttam.png";

const peopleData = [
  {
    id: 1,
    name: "",
    description: "Uttam Dutta",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "https://www.instagram.com/call_back_cats/",
      // instagram: "https://www.instagram.com/madhushree262?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/uttam-dutta-002110801216ukd/",
      facebook: "https://www.facebook.com/profile.php?id=100073997356268",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "",
  },
  {
    id: 2,
    name: "",
    description: "Sayandeep Dey",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/s_a_y_a_n_d_e_e_p/",
      linkedin: "https://www.linkedin.com/in/sayandeep-dey-8317b8223/",
      facebook: "https://www.facebook.com/sayandeep.dey.2/",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "",
  },
];

const Teams = () => {
  return (
    <>
      <section id="team">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">EVENT LEADS</h1>
          <span className="underline_teams"></span>
          <p className="paragraph_teams py-4">
            Meet the event leads of SparkHack!
            We are ready to address all your queries.
          </p>
        </div>
        <div className="px-[69px] py-5">
          <div className="grid grid-cols-2 gap-[56px]">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="algomaniac-teams">{person.description}</div>
                <div className="lorem-ipsum-para-teams flex flex-col gap-2">
                  {person.desc}
                  <div className="flex gap-2">
                    {person.socialMediaavailable.insta ? (
                      <a
                        href={person.socialMediaLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-square-instagram fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}

                    {person.socialMediaavailable.linke ? (
                      <a
                        href={person.socialMediaLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}

                    {person.socialMediaavailable.face ? (
                      <a
                        href={person.socialMediaLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-square-facebook fabicon"></i>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="group-item-teams" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
