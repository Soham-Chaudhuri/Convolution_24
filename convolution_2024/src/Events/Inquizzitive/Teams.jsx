/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";

import picture4 from "../../components/assets/leads/Swarnava_pix-fotor-20240130203426.webp";

import picture6 from "../../components/assets/leads/Srijita.webp";

const peopleData = [
  {
    id: 1,
    name: "Srijita",
    description: "Srijita Pal",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram:
        "https://www.instagram.com/_srijita03_?utm_source=qr&igsh=MXdyMHR6Y3ZlbXJyYg==",
      linkedin:
        "https://www.linkedin.com/in/srijita-pal-19a478257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook:
        "https://www.facebook.com/profile.php?id=100077025027065&mibextid=ZbWKwL",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "",
  },
  {
    id: 2,
    name: "Swarnabha",
    description: "Swarnabha Pramanik",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/s_ontohin?igsh=eTFqeHlmeXpsZmk4",
      linkedin:
        "https://www.linkedin.com/in/swarnabha-pramanik-ba1354224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/swarnabha.pramanik.1",
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
            Meet the event leads of Inquizzitive! We are ready to address all
            your queries!
          </p>
        </div>
        <div className="px-[69px] py-5">
          <div className="grid grid-cols-2 gap-[56px]">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="algomaniac-teams text-[23.2px]">
                  {person.description}
                </div>
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
