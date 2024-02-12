import React from "react";
import "./Judges.css";

import picture4 from "../../components/assets/SGM.webp";

import picture6 from "../../components/assets/Arabinda Das.webp";

const peopleData = [
  {
    id: 1,
    name: "Arabinda",
    description: "Arabinda Das",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.com/citations?user=Oxu-8WcAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Professor at Jadavpur University Electrical Engineering Department",
  },
  {
    id: 2,
    name: "",
    description: "Sugata Munshi",
    imgSrc: picture4,
    socialMediaLinks: {
      // instagram: "https://www.instagram.com/parthib_not_parthiv/",
      linkedin: "https://scholar.google.com/citations?user=4QDUROsAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Professor at Jadavpur University Electrical Engineering Department",
  },
];

function Judges() {
  return (
    <>
      <section id="judges">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">JUDGES</h1>
          <span className="underline_teams"></span>
          <p className="paragraph_teams py-4">Meet the judges of Abol Tabol!</p>
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
                        <i className="fa-solid fa-circle-info fabicon"></i>
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
}

export default Judges;
