import React from "react";
import "./Re_teams.css";
import picture1 from "../../assets/soham.webp";
// import picture2 from "../../assets/uttam.png";
import picture4 from "../../assets/Parthib.webp";
import picture5 from "../../assets/Ayan_per.webp";
import picture6 from "../../assets/dwaipayan.webp";
import picture7 from "../../assets/azfar.webp";
import picture8 from "../../assets/supratim.webp";
import picture9 from "../../assets/obaidulla.webp";
import picture10 from "../../assets/avishek.webp";
const peopleData = [
  {
    id: 1,
    name: "Dwaipayan",
    heading: "Secretary",
    description: "Dwaipayan Haldar",
    imgSrc: picture6,

    socialMediaLinks: {
      instagram: "https://www.instagram.com/dwaipayanhaldar15/",
      linkedin: "https://www.linkedin.com/in/dwaipayan-haldar/",
      facebook: "https://www.facebook.com/profile.php?id=100011133515951",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 2,
    name: "Parthib",
    heading: "Joint-Secretary",
    description: "Parthib Roy",
    imgSrc: picture4,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/parthib_not_parthiv/",
      linkedin: "https://www.linkedin.com/in/parthib-roy-3a78b3224/",
      facebook: "https://www.facebook.com/profile.php?id=100074521635711",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 3,
    name: "Obaidullah",
    heading: "Treasurer",
    description: "Md. Obaidullah",
    imgSrc: picture9,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/obaidullachottu/",
      linkedin: "https://www.linkedin.com/in/md-obaidullah-74b085242/",
      facebook: "https://www.facebook.com/obaidulla.chottu",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 4,
    name: "Soham",
    heading: "Tech Lead",
    description: "Soham Chaudhuri",
    imgSrc: picture1,
    socialMediaLinks: {
      instagram: "link",
      linkedin: "https://www.linkedin.com/in/soham-chaudhuri-8aa0a9226/",
      facebook: "link",
    },
    socialMediaavailable: { insta: false, linke: true, face: false },
  },
  {
    id: 5,
    name: "Azfar",
    heading: "Logistics Lead",
    description: "Azfar Hasan",
    imgSrc: picture7,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/hasanazfar28/",
      linkedin: "https://www.linkedin.com/in/azfar-hasan-a989b3226/",
      facebook: "https://www.facebook.com/azfar.hasan.161",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 6,
    name: "Supratim",
    heading: "Sponsorship Lead",
    description: "Supratim Sarkar",
    imgSrc: picture8,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/sarkarsupratim2003/",
      linkedin: "https://www.linkedin.com/in/supratim-sarkar-18226821b/",
      facebook: "https://www.facebook.com/supratim.sarkar.543",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 7,
    name: "Avishek",
    heading: "Public Reach Lead",
    description: "Avishek Bandyopadhyay",
    imgSrc: picture10,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/avishek_bandyopadhyay/",
      linkedin: "https://www.linkedin.com/in/avishek-bandyopadhyay-72963b241/",
      facebook: "https://www.facebook.com/avishek.bandyopadhyay.758",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
  {
    id: 8,
    name: "Ayan",
    heading: "Design Lead",
    description: "Ayan Kumar Bose",
    imgSrc: picture5,
    socialMediaLinks: {
      instagram: "https://www.instagram.com/_.ay.an._03_/",
      linkedin: "https://www.linkedin.com/in/ayan-bose-982276225/",
      facebook: "https://www.facebook.com/ayan.bose.1213",
    },
    socialMediaavailable: { insta: true, linke: true, face: true },
  },
];

function Re_teams() {
  return (
    <>
      <section id="Re_team">
        <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
          <h1 className="text-center re_teams_h1">TEAMS</h1>
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
                  <div className="re_team_desc_para items-center flex flex-col gap-3 text-[15px]">
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
