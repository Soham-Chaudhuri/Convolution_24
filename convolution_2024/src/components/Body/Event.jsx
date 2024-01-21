import React, { useState } from "react";
import "./Event.css";
import picture1 from "../assets/Decisia_Dark.png";
import picture2 from "../assets/abol2nd.png";
import picture3 from "../assets/Circuistics_Dark.png";
import picture4 from "../assets/Eureka_Dark.png";
import picture5 from "../assets/Inquizzitive_Dark.png";
import picture6 from "../assets/Papier_Dark.png";
import picture7 from "../assets/Sparkhack_Dark.png";
import picture8 from "../assets/24 Frames Dark.png";
import picture9 from "../assets/Algomaniac Dark.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

const peopleData = [
  {
    id: 1,
    name: "John Doe",
    description: "Circuistics",
    imgSrc: picture3,
    normalImg: picture3,
    href: "/events/algomaniac"
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Sparkhack",
    imgSrc: picture7,
    normalImg: picture7,
    href: "/events/algomaniac"
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Algomaniac",
    imgSrc: picture9,
    normalImg: picture9,
    href: "/events/algomaniac"
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "Papier",
    imgSrc: picture6,
    normalImg: picture6,
  },
  {
    id: 5,
    name: "John Doe",
    description: "Eureka",
    imgSrc: picture4,
    normalImg: picture4,
    href: "/events/algomaniac"
  },
  {
    id: 6,
    name: "Jane Smith",
    description: "Decisia",
    imgSrc: picture1,
    normalImg: picture1,
    href: "/events/algomaniac"
  },
  {
    id: 7,
    name: "Bob Johnson",
    description: "Abol Tabol",
    imgSrc: picture2,
    normalImg: picture2,
    href: "/events/algomaniac"
  },
  {
    id: 8,
    name: "Alice Williams",
    description: "Inquizzitive",
    imgSrc: picture5,
    normalImg: picture5,
    href: "/events/algomaniac"
  },
  {
    id: 9,
    name: "Alice Williams",
    description: "24 Frames",
    imgSrc: picture8,
    normalImg: picture8,
    href: "/events/algomaniac"
  },
];

const Event = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <section id="events">
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
              <div key={person.id} className="boro-goal flex flex-wrap hovered">
                <div className="group-child-img">
                  <img
                    src={person.normalImg}
                    alt={person.name}
                    className="normal-image"
                  />

                  <img
                    src={person.imgSrc}
                    alt={person.name}
                    className="hover-image"
                  />
                </div>
                <Link to={person.href}>
                  <div className="algomaniac">{person.description}</div>
                </Link>
                <div className="lorem-ipsum-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem laboriosam numquam facere. Omnis esse sed cupiditate
                  iusto rerum neque atque qui quo dicta itaque?
                </div>
                <div className="group-item" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
