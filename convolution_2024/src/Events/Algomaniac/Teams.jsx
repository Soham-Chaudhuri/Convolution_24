/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";

import picture4 from "../../components/assets/srayan.webp";

import picture6 from "../../components/assets/mainak.webp";

const peopleData = [
  {
    id: 1,
    name: "Mainak",
    description: "Mainak Seal",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "https://www.instagram.com/__mainak._seal?igsh=MXAyd3gwMHg1MTJkbg==",
      linkedin: "https://www.linkedin.com/in/mainak-seal-5b4b06223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // facebook: "https://www.facebook.com/profile.php?id=100011133515951",
    },
    socialMediaavailable: { insta: true, linke: true, face: false },
    desc: "",
  },
  {
    id: 2,
    name: "Srayan",
    description: "Srayan Bhattachryya",
    imgSrc: picture4,
    socialMediaLinks: {
      // instagram: "https://www.instagram.com/parthib_not_parthiv/",
      linkedin: " https://www.linkedin.com/in/srayanbhattacharyya/",
      facebook: "https://www.facebook.com/BhattacharyyaSrayan",
    },
    socialMediaavailable: { insta: false, linke: true, face: true },
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
            Meet the event leads of Algomaniac!
            
            We are ready to address all your queries!
          </p>
        </div>
        <div className="px-[69px] py-5">
          <div className="grid grid-cols-2 gap-[56px]">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="algomaniac-teams text-[23.8px]">{person.description}</div>
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
