import React from "react";
import "./Re_teams.css";

import picture4 from "../../../../components/assets/srayan.png";

import picture6 from "../../../../components/assets/mainak.jpg";

const peopleData = [
  {
    id: 1,
    name: "",
    heading: "Mainak Seal",
    description: "",
    imgSrc: picture6,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/__mainak._seal?igsh=MXAyd3gwMHg1MTJkbg==",
      linkedin: "https://www.linkedin.com/in/mainak-seal-5b4b06223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // facebook: "https://www.facebook.com/profile.php?id=100011133515951",
    },
    socialMediaavailable: { insta: true, linke: true, face: false },
  },
  {
    id: 2,
    name: "",
    heading: "Srayan Bhattachryya",
    description: "",
    imgSrc: picture4,
    socialMediaLinks: {
      // instagram: "https://www.instagram.com/parthib_not_parthiv/",
      linkedin: " https://www.linkedin.com/in/srayanbhattacharyya/",
      facebook: "https://www.facebook.com/BhattacharyyaSrayan",
    },
    socialMediaavailable: { insta: false, linke: true, face: true },
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
            Meet the representatives of JU EE Students' Forum making Convolution
            9.0 possible!
            <br />
            We are ready to address all your queries!
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
