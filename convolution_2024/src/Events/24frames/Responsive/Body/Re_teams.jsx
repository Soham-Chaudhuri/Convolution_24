import React from "react";
import "./Re_teams.css";

import picture4 from "../../../../components/assets/debashish.webp";

import picture6 from "../../../../components/assets/abhinaba.webp";

const peopleData = [
  {
    id: 1,
    name: "",
    heading: "Abhinaba Biswas",
    description: "",
    imgSrc: picture6,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/abhinaba.biswas.1232/",
      linkedin: "#",
      facebook: "https://www.facebook.com/abhinaba.biswas.773",
    },
    socialMediaavailable: { insta: true, linke: false, face: true },
  },
  {
    id: 2,
    name: "",
    heading: "Debashis Mondal",
    description: "",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/debashis_711/",
      linkedin: "#",
      facebook: "https://www.facebook.com/profile.php?id=100011148109062",
    },
    socialMediaavailable: { insta: true, linke: false, face: true },
  },
];

function Re_teams() {
  return (
    <>
      <section id="Re_team">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_teams_h1">EVENT LEADS</h1>
          <span className="re_teams_underline"></span>
          <p className="re_teams_paragraph py-4">
            Meet the event leads of 24 Frames! <br />We are ready to address all your
            queries!
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

export default Re_teams;
