import React from "react";
import "./Judges.css";

import picture4 from "../../components/assets/framehudge1.webp";
import picture5 from "../../components/assets/framesjudge2.webp";

import picture6 from "../../components/assets/STCSir.webp";

const peopleData = [
  {
    id: 1,
    name: "",
    description: "Sayantan Chakraborty",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.com/citations?hl=en&user=IuZ4rFMAAAAJ",
      facebook: "https://www.facebook.com/sayantan.chakraborty1",
    },
    socialMediaavailable: { insta: false, linke: true, face: true },
    desc: "Professor at Jadavpur University Electrical Engineering Department",
  },

  {
    id: 2,
    name: "Soumyajit",
    description: "Soumyajit Saha",
    imgSrc: picture5,
    socialMediaLinks: {
      instagram:
        "https://www.instagram.com/soumyajit_saha_sj?igsh=eWt2bmFqNHRvaHBq",
      linkedin: "",
      facebook: "https://www.facebook.com/soumyajit.saha.1422?mibextid=ZbWKwL",
    },
    socialMediaavailable: { insta: true, linke: false, face: true },
    desc: "Jadavpur University, Department of Architecture, 5th year",
  },
  {
    id: 3,
    name: "Rai",
    description: "Rai Chakraborti",
    imgSrc: picture4,

    socialMediaLinks: {
      instagram: "https://www.instagram.com/rai_chakrabarti",
      linkedin: "https://in.linkedin.com/in/rai-chakrabarti-90a866180",
      facebook: "https://www.facebook.com/rai.chakrabarti.1",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Jadavpur University, Department of Production, 2023 passout",
  },
];

function Judges() {
  return (
    <>
      <section id="judges">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">JUDGES</h1>
          <span className="underline_teams"></span>
          <p className="paragraph_teams py-4">
            Meet the judges of 24 Frames!
            <br />
          </p>
        </div>
        <div className="px-[69px] py-5">
          <div className="grid grid-cols-2 gap-[56px]">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="algomaniac-teams text-[22.1px]">
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
}

export default Judges;
