import React from "react";
import picture6 from "../../../../components/assets/SDC.webp";
import picture4 from "../../../../components/assets/dsd.webp";

import picture7 from "../../../../components/assets/Ram.webp";

import picture8 from "../../../../components/assets/Sounak.webp";

const peopleData = [
  {
    id: 1,
    name: "",
    heading: "Suddhasatwa Chakraborty",
    description:
      "Professor at Jadavpur University Electrical Engineering Department",
    imgSrc: picture6,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://www.researchgate.net/profile/Suddhasatwa-Chakraborty",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },
  {
    id: 2,
    name: "",
    heading: "Debangshu Dey",
    description:
      "Professor at Jadavpur University Electrical Engineering Department",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.com/citations?user=tlzV8CAAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },

  {
    id: 3,
    name: "",
    heading: "Ram Sarkar",
    description:
      "Professor at Department of Computer Science, Jadavpur University",
    imgSrc: picture7,
    socialMediaLinks: {
      instagram: "",
      linkedin:
        "https://scholar.google.co.in/citations?user=bDj0BUEAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },

  {
    id: 4,
    name: "",
    heading: "Sounak Dey",
    description: "Senior Scientist at Tata Consultancy Services",
    imgSrc: picture8,
    socialMediaLinks: {
      instagram: "",
      linkedin:
        "https://scholar.google.co.in/citations?user=s6EyYlUAAAAJ&hl=en",
      facebook: "",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },
];

function Re_judges() {
  return (
    <>
      <section id="Re_judges">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_teams_h1">JUDGES</h1>
          <span className="re_teams_underline"></span>
          <p className="re_teams_paragraph py-4">
            Meet the judges of Sparkhack!
            <br />
          </p>
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            {peopleData.map((people) => (
              <div
                className="flex flex-col items-center mx-2 my-4 justify-evenly gap-4"
                key={people.id}
              >
                <div className="re_team_img">
                  <img src={people.imgSrc} alt={people.name} />
                </div>
                <div className="re_team_desc flex items-center flex-col text-center">
                  <div className="re_team_desc_heading">{people.heading}</div>
                  <div className="re_team_desc_underline mt-2 mb-3"></div>
                  <div className="re_team_desc_para items-center flex flex-col gap-3">
                    {people.description}
                    <div className="flex gap-2">
                      {people.socialMediaavailable.insta ? (
                        <a
                          href={people.socialMediaLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-square-instagram re_events_fabicon"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {people.socialMediaavailable.linke ? (
                        <a
                          href={people.socialMediaLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-circle-info fabicon"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {people.socialMediaavailable.face ? (
                        <a
                          href={people.socialMediaLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-square-facebook re_events_fabicon"></i>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Re_judges;
