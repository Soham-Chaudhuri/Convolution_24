/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";
import picture1 from "../assets/soham.webp";
// import picture2 from "../assets/uttam.png";

import picture4 from "../assets/Parthib.webp";
import picture5 from "../assets/Ayan_per.webp";
import picture6 from "../assets/dwaipayan.webp";
import picture7 from "../assets/azfar.webp";
import picture8 from "../assets/supratim.webp";
import picture9 from "../assets/obaidulla.webp";
import picture10 from "../assets/avishek.webp";
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
    desc: "Dwaipayan Haldar",
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
    desc: "Parthib Roy",
  },
  {
    id: 3,
    name: "Obaidullah",
    description: "Treasurer",
    imgSrc: picture9,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/obaidullachottu/",
      linkedin: "https://www.linkedin.com/in/md-obaidullah-74b085242/",
      facebook: "https://www.facebook.com/obaidulla.chottu",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Md. Obaidullah",
  },
  {
    id: 4,
    name: "Soham",
    description: "Tech Lead",
    imgSrc: picture1,
    socialMediaLinks: {
      instagram: "link",
      linkedin: "https://www.linkedin.com/in/soham-chaudhuri-8aa0a9226/",
      facebook: "link",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
    desc: "Soham Chaudhuri",
  },
  {
    id: 1,
    name: "Azfar",
    description: "Logistics Lead",
    socialMediaLinks: {
      instagram: "https://www.instagram.com/hasanazfar28/",
      linkedin: "https://www.linkedin.com/in/azfar-hasan-a989b3226/",
      facebook: "https://www.facebook.com/azfar.hasan.161",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Azfar Hasan",

    imgSrc: picture7,
  },
  {
    id: 2,
    name: "Supratim",
    description: "Sponsorship Lead",
    imgSrc: picture8,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/sarkarsupratim2003/",
      linkedin: "https://www.linkedin.com/in/supratim-sarkar-18226821b/",
      facebook: "https://www.facebook.com/supratim.sarkar.543",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Supratim Sarkar",
  },
  {
    id: 3,
    name: "Avishek",
    description: "Public Reach Lead",
    imgSrc: picture10,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/avishek_bandyopadhyay/",
      linkedin: "https://www.linkedin.com/in/avishek-bandyopadhyay-72963b241/",
      facebook: "https://www.facebook.com/avishek.bandyopadhyay.758",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Avishek Bandyopadhyay",
  },
  {
    id: 4,
    name: "Ayan",
    description: "Design Lead",
    imgSrc: picture5,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/_.ay.an._03_/",
      linkedin: "https://www.linkedin.com/in/ayan-bose-982276225/",
      facebook: "https://www.facebook.com/ayan.bose.1213",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
    desc: "Ayan Kumar Bose",
  },
];

const Teams = () => {
  return (
    <>
      <section id="team">
        <div className=" flex flex-col justify-center items-center gap-2 py-5">
          <h1 className="text-center teams_h1">TEAMS</h1>
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
                <div className="algomaniac-teams w-[220px]">{person.description}</div>
                <div className="lorem-ipsum-para-teams text-xl flex flex-col gap-2">
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
