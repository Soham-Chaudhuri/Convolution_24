import React from "react";
import "./Judges.css";

import picture4 from "../../components/assets/SDC.webp";

import picture6 from "../../components/assets/dsd.webp";

import picture7 from "../../components/assets/Ram.webp";

import picture8 from "../../components/assets/Sounak.webp";

const peopleData = [
  {
    id: 1,
    name: "",
    description: "Debangshu Dey",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.com/citations?user=tlzV8CAAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Professor at Jadavpur University Electrical Engineering Department",
  },
  {
    id: 2,
    name: "",
    description: "Suddhasatwa Chakraborty",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://www.researchgate.net/profile/Suddhasatwa-Chakraborty",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Professor at Jadavpur University Electrical Engineering Department",
  },
  {
    id: 3,
    name: "",
    description: "Ram Sarkar",
    imgSrc: picture7,

    socialMediaLinks: {
      instagram: "",
      linkedin:
        "https://scholar.google.co.in/citations?user=bDj0BUEAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Professor at Department of Computer Science, Jadavpur University",
  },
  {
    id: 4,
    name: "",
    description: "Sounak Dey",
    imgSrc: picture8,

    socialMediaLinks: {
      instagram: "",
      linkedin:
        "https://scholar.google.co.in/citations?user=s6EyYlUAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Senior Scientist at Tata Consultancy Services",
  },
];

function Judges() {
  return (
    <>
      <section id="judges">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">JUDGES</h1>
          <span className="underline_teams"></span>
          <p className="paragraph_teams py-4">Meet the judges of Sparkhack!</p>
        </div>
        <div className="px-[69px] py-5">
          <div className="grid grid-cols-2 gap-[56px]">
            {peopleData.map((person) => (
              <div key={person.id} className="boro-goal-teams flex flex-wrap">
                <div className="group-child-img-teams">
                  <img src={person.imgSrc} alt={person.name} />
                </div>
                <div className="sparkhack-teams">{person.description}</div>
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
