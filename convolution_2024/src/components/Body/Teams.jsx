/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Teams.css";
import picture1 from "../assets/soham.png";
import picture2 from "../assets/uttam.png";
// import picture3 from "../assets/bodda.png";
// import picture4 from "../assets/ayan.png";

const peopleData = [
  { id: 1, name: "Soham C", description: "Developer", imgSrc: picture1 },
  {
    id: 2,
    name: "Uttam C",
    description: "Designer",
    imgSrc: picture2 ,
  },
  {
    id: 3,
    name: "Bodda",
    description: "TOP G",
    // imgSrc: picture3,
  },
  {
    id: 4,
    name: "Seyana",
    description: "Production",
    // imgSrc: picture4,
  },
  { id: 1, name: "John Doe", description: "Developer", imgSrc: "john.jpg" },
  {
    id: 2,
    name: "Jane Smith",
    description: "Designer",
    imgSrc: "jane.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Scientist",
    imgSrc: "bob.jpg",
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "Designer",
    imgSrc: "alice.jpg",
  },
];

const Teams = () => {
  return (
    <>
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
            // <div key={person.id} className="p-4 rounded-md flex border  ">
            //   <div className="left flex items-center">
            //     <img
            //       src={picture}
            //       alt={person.name}
            //       className="w-14 h-14 rounded-full mx-auto"
            //     />
            //   </div>
            //   <div className="right flex justify-content-center flex-col">
            //     <h3 className="text-lg font-semibold">{person.name}</h3>
            //     <p className="text-gray-600">{person.description}</p>
            //   </div>
            // </div>

            <div key={person.id} className="boro-goal-teams flex flex-wrap">
              <div className="group-child-img-teams"><img src={person.imgSrc} alt={person.name} /></div>
              <div className="algomaniac-teams">{person.description}</div>
              <div className="lorem-ipsum-para-teams flex flex-col gap-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <div className="flex gap-2">
                  <i className="fa-brands fa-square-instagram fabicon"></i>
                  <i className="fa-brands fa-linkedin fabicon"></i>
                  <i className="fa-brands fa-square-facebook fabicon"></i>
                </div>
              </div>

              <div className="group-item-teams" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;