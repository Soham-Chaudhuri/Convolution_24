/* eslint-disable react/jsx-key */
import React from "react";
import "./Re_event.css";
import picture1 from "../../assets/Decisia_Dark.png";
// import picture2 from "../assets/Abol Tabol_Dark.png";
import picture2 from "../../assets/abol2nd.png";
import picture3 from "../../assets/Circuistics_Dark.png";
import picture4 from "../../assets/Eureka_Dark.png";
import picture5 from "../../assets/Inquizzitive_Dark.png";
import picture6 from "../../assets/Papier_Dark.png";
import picture7 from "../../assets/Sparkhack_Dark.png";
import picture8 from "../../assets/24 Frames Dark.png";
import picture9 from "../../assets/Algomaniac Dark.png";
import { Link } from "react-router-dom";

const eventData = [
  {
    id: 1,
    heading: "Circuistics",
    imgSrc: picture3,
    href: "/events/circuistics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",

  },
  {
    id: 2,
    heading: "Sparkhack",
    imgSrc: picture7,
    href: "/events/sparkhack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    heading: "Algomaniac",
    imgSrc: picture9,
    href: "/events/algomaniac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "Papier",
    imgSrc: picture6,
    href: "/events/papier",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 1,
    heading: "Eureka",
    imgSrc: picture4,
    href: "/events/eureka",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    heading: "Decisia",
    imgSrc: picture1,
    href: "/events/decisia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    heading: "Abol Tabol",
    imgSrc: picture2,
    href: "/events/aboltabol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "Inquizzitive",
    imgSrc: picture5,
    href: "/events/inquizzitive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "24 Frames",
    imgSrc: picture8,
    href: "/events/24frames",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

function Re_event() {
  return (
    <>
    <section id="Re_events">
      <div className=" flex flex-col justify-center items-center gap-2 pb-5  pt-6 mt-6">
        <h1 className="text-center re_events_h1">EVENTS</h1>
        <span className="re_events_underline"></span>
        <p className="re_events_paragraph py-4">
          A plethora of events covering all your skills. So gear up for the
          showdown!
          <br />
          Browse over the links to register
        </p>
      </div>
      <div className="">
        <div className="flex flex-col gap-5">
          {eventData.map((data) => (
            <div
              className="flex flex-col items-center mx-2 my-4 justify-evenly gap-4"
              key={data.id}
            >
              <div className="re_event_img">
                <img src={data.imgSrc} alt={data.name} />
              </div>
              <div className="re_event_desc flex items-center flex-col text-center">
               <Link to={data.href}> <div className="re_event_desc_heading">{data.heading}</div></Link>
                <div className="re_event_desc_underline mt-2 mb-3"></div>
                <div className="re_event_desc_para">{data.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}

export default Re_event;
