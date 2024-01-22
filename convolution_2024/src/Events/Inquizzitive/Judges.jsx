import React from "react";
import "./Judges.css";

import picture4 from "../../components/assets/Parthib.png";

import picture6 from "../../components/assets/dwaipayan.png";

const peopleData = [
  {
    id: 1,
    name: "Dwaipayan",
    description: "Secretary",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "https://www.instagram.com/dwaipayanhaldar15/",
      linkedin: "https://www.linkedin.com/in/dwaipayan-haldar/",
      facebook: "https://www.facebook.com/profile.php?id=100011133515951",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Bodda supremacy only",
  },
  {
    id: 2,
    name: "Parthib",
    description: "Joint-Secretary",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/parthib_not_parthiv/",
      linkedin: "https://www.linkedin.com/in/parthib-roy-3a78b3224/",
      facebook: "https://www.facebook.com/profile.php?id=100074521635711",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            Meet the representatives of JU EE Students' Forum making Convolution
            9.0 possible!
            <br />
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
}

export default Judges;
