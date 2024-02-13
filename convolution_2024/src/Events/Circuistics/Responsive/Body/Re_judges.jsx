import React from "react";
import picture4 from "../../../../components/assets/nojudge.webp";

import picture6 from "../../../../components/assets/Palash Kundu.webp";

const peopleData = [
  {
    id: 1,
    name: "Palash Kundu",
    heading: "Palash Kundu",
    description: "Professor at Jadavpur University Electrical Engineering Department",
    imgSrc: picture6,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.co.in/citations?user=GjQQ9BIAAAAJ&hl=en",
      facebook: "h",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },
  {
    id: 2,
    name: "Dipten Maity",
    heading: "Dipten Maity",
    description: "Professor at Jadavpur University Electrical Engineering Department",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "",
      linkedin: "https://scholar.google.co.in/citations?user=34JBou8AAAAJ&hl=en",
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
          Meet the judges of Circuistics!
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
                          <i className="fa-solid fa-circle-info re_events_fabicon"></i>
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
