import React from "react";
import picture4 from "../../../../components/assets/framehudge1.webp";
import picture5 from "../../../../components/assets/framesjudge2.webp";
import picture6 from "../../../../components/assets/STCSir.webp";

const peopleData = [


  {
    id: 1,
    name: "",
    heading: "Sayantan Chakraborty",
    description: "Professor at Jadavpur University Electrical Engineering Department",
    imgSrc: picture6,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.com/citations?hl=en&user=IuZ4rFMAAAAJ",
      facebook: "https://www.facebook.com/sayantan.chakraborty1",
    },
    socialMediaavailable: { insta: false, linke: true, face: true },
  },


  {
    id: 2,
    name: "",
    heading: "Soumyajit Saha",
    description: "Jadavpur University, Department of Production, 2023 passout",
    imgSrc: picture5,
    socialMediaLinks: {
      instagram:
      "https://www.instagram.com/soumyajit_saha_sj?igsh=eWt2bmFqNHRvaHBq",
      linkedin: "",
      facebook: "https://www.facebook.com/soumyajit.saha.1422?mibextid=ZbWKwL",
    },
    socialMediaavailable: { insta: true, linke: false, face: true },
  },
  {
    id: 3,
    name: "",
    heading: "Rai Chakraborti",
    description: "Jadavpur University, Department of Architecture, 5th year",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/rai_chakrabarti",
      linkedin: "https://in.linkedin.com/in/rai-chakrabarti-90a866180",
      facebook: "https://www.facebook.com/rai.chakrabarti.1",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
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
            Meet the judges of 24 Frames!
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
                          <i className="fa-brands fa-linkedin re_events_fabicon"></i>
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
