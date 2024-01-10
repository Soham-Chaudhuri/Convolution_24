import React from "react";
import "./Re_teams.css";
import picture1 from "../../assets/soham.png";
import picture2 from "../../assets/uttam.png";
import picture4 from "../../assets/Parthib.png";
import picture5 from "../../assets/Ayan_per.png";
import picture6 from "../../assets/dwaipayan.png";
import picture7 from "../../assets/azfar.png";
import picture8 from "../../assets/supratim.png";
import picture9 from "../../assets/obaidulla.png";
import picture10 from "../../assets/avishek.png";
const peopleData = [
  {
    id: 1,
    name: "Dwaipayan",
    heading: "Secretary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture6,
  },
  {
    id: 2,
    name: "Parthib",
    heading: "Joint-Secretary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture4,
  },
  {
    id: 3,
    name: "Obaidullah",
    heading: "Treasurer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture9,
  },
  {
    id: 4,
    name: "Soham",
    heading: "Tech Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture1,
  },
  {
    id: 5,
    name: "Azfar",
    heading: "Logistics Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // imgSrc: picture7,
  },
  {
    id: 6,
    name: "Supratim",
    heading: "Sponsorship Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture8,
  },
  {
    id: 7,
    name: "Avishek",
    heading: "Public Reach",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture10,
  },
  {
    id: 8,
    name: "Ayan",
    heading: "Design Lead",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc: picture5,
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
                  <div className="re_team_desc_para items-center flex flex-col gap-3">
                    {people.description}
                    <div className="flex gap-2">
                      <i className="fa-brands fa-square-instagram re_events_fabicon"></i>
                      <i className="fa-brands fa-linkedin re_events_fabicon"></i>
                      <i className="fa-brands fa-square-facebook re_events_fabicon"></i>
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
