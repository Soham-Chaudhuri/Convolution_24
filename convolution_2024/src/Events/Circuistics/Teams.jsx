/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";

import picture4 from "../../components/assets/arpan.png";

import picture6 from "../../components/assets/pradhan.png";

const peopleData = [
  {
    id: 1,
    name: "Sayandeep",
    description: "Sayandeep Pradhan",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "",
      linkedin:
        "https://www.linkedin.com/in/sayandeep-pradhan-a6b0b6230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook:
        "https://www.facebook.com/sayandeep.pradhan.77?mibextid=ngobeXctTp5pD3Zm",
    },
    socialMediaavailable: { insta: false, linke: true, face: true },
    desc: "",
  },
  {
    id: 2,
    name: "Arpan",
    description: "Arpan Roy",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram:
        "https://www.instagram.com/_spartan_26?igsh=MWYzdnI5bWNnejIwMw==",
      linkedin:
        "https://www.linkedin.com/in/arpan-roy-17296b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.facebook.com/shirsho.roy.58?mibextid=ZbWKwL",
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
            Meet the event leads of Circuistics! We are ready to address all
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
                <div className="algomaniac-teams text-[23.9px]">
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
