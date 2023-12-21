import React from "react";
import "./Event.css";
import picture from "../assets/event1.png";

const peopleData = [
  { id: 1, name: "John Doe", description: "Web Developer", imgSrc: "john.jpg" },
  {
    id: 2,
    name: "Jane Smith",
    description: "Graphic Designer",
    imgSrc: "jane.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Data Scientist",
    imgSrc: "bob.jpg",
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "UX/UI Designer",
    imgSrc: "alice.jpg",
  },
  { id: 1, name: "John Doe", description: "Web Developer", imgSrc: "john.jpg" },
  {
    id: 2,
    name: "Jane Smith",
    description: "Graphic Designer",
    imgSrc: "jane.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Data Scientist",
    imgSrc: "bob.jpg",
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "UX/UI Designer",
    imgSrc: "alice.jpg",
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
      <div className="grid grid-cols-2 gap-4">
        {peopleData.map((person) => (
          <div key={person.id} className="p-4 rounded-md flex border ">
            <div className="left flex items-center w-30">
              <img
                src={picture}
                alt={person.name}
                className="w-14 h-14 rounded-full mx-auto"
              />
            </div>
            <div className="right flex justify-content-center flex-col w-70">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;