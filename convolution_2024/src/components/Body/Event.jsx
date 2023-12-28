/* eslint-disable react/jsx-key */
import React from "react";
import "./Event.css";
import picture1 from "../assets/Decisia_Dark.png";
// import picture2 from "../assets/Abol Tabol_Dark.png";
import picture2 from "../assets/abol2nd.png";
import picture3 from "../assets/Circuistics_Dark.png";
import picture4 from "../assets/Eureka_Dark.png";
import picture5 from "../assets/Inquizzitive_Dark.png";
import picture6 from "../assets/Papier_Dark.png";
import picture7 from "../assets/Sparkhack_Dark.png";
import picture8 from "../assets/24 Frames Dark.png";
import picture9 from "../assets/Algomaniac Dark.png";

const peopleData = [
  { id: 1, name: "John Doe", description: "Decisia", imgSrc: picture1 },
  {
    id: 2,
    name: "Jane Smith",
    description: "Abol Tabol",
    imgSrc: picture2,
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Circuistics",
    imgSrc: picture3,
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "Papier",
    imgSrc: picture6,
  },
  { id: 1, name: "John Doe", description: "Eureka", imgSrc: picture4 },
  {
    id: 2,
    name: "Jane Smith",
    description: "Inquizzitive",
    imgSrc: picture5,
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Sparkhack",
    imgSrc: picture7,
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "24 Frames",
    imgSrc: picture8,
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "Algomaniac",
    imgSrc: picture9,
  },
];

const Event = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 py-5">
        <h1 className="text-center event_h1">EVENTS</h1>
        <span className="underline"></span>
        <p className="paragraph py-4">
          A plethora of events covering all your skills. So gear up for the
          showdown!
          <br />
          Browse over the links to register
        </p>
      </div>
      <div className="px-[69px] py-5">
        <div className="grid grid-cols-2 gap-[56px]">
          {peopleData.map((person) => (
            <div key={person.id} className="boro-goal flex flex-wrap">
              <div className="group-child-img">
                <img src={person.imgSrc} alt={person.name} />
              </div>
              <div className="algomaniac">{person.description}</div>
              <div className="lorem-ipsum-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="group-item" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
