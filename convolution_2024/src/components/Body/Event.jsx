import React, { useState } from "react";
import "./Event.css";
import picture1 from "../assets/Decisia_Dark.png";
import picture2 from "../assets/abol2nd.png";
import picture3 from "../assets/Circuistics_Dark.png";
import picture4 from "../assets/Eureka_Dark.png";
import picture5 from "../assets/Inquizzitive_Dark.png";
import picture6 from "../assets/JU Talks Dark.png";
import picture7 from "../assets/Sparkhack_Dark.png";
import picture8 from "../assets/24 Frames Dark.png";
import picture9 from "../assets/AlgomaniacDark.webp";
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
    href: "/events/circuistics",
    para: " Do you fantasize about creating your own Atlas-like robot one day? Do you enjoy tinkering with Arduino kits? We're here with the perfect platform for you to test your skills! For those who enjoy designing circuits to solve real-life problems, this is their stage!",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Sparkhack",
    imgSrc: picture7,
    normalImg: picture7,
    href: "/events/sparkhack",
    para: "Eastern India's BIGGEST hackathon, focused on engineering technological solutions where teams build prototypes of products with notable social impact. The ideas will be judged by academics and industry experts.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Algomaniac",
    imgSrc: picture9,
    normalImg: picture9,
    href: "/events/algomaniac",
    para: "A competitive programming event exclusively for those who wish to tackle the most mind-boggling challenges with their prowess on a keyboard and the creative power of their minds through lines of code",
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "JU Talks",
    imgSrc: picture6,
    normalImg: picture6,
    href: "/events/JU_Talks",
    para: "JU Talks is a panel discussion where three panelists discuss about a trending topic that concerns the present generations. Join us for an amazing and insightful session comprising people who are stalwarts in their fields!",
  },
  {
    id: 5,
    name: "John Doe",
    description: "Eureka",
    imgSrc: picture4,
    normalImg: picture4,
    href: "/events/eureka",
    para: `"Eureka!" is an event where participants navigate intellectually stimulating routes to discover the ultimate "treasure." Each step offers a "Eureka!" moment, providing a real-time experience in decoding complex situations and finding varied solutions. This opportunity is perfect for those who never give up, as it allows you to channel all your wits toward reaching the final solution. Join us for a chance to engage in this exciting challenge!`,
  },
  {
    id: 6,
    name: "Jane Smith",
    description: "Decisia",
    imgSrc: picture1,
    normalImg: picture1,
    href: "/events/decisia",

    para: `Decisia is like our version of "Shark Tank." It's your platform to pitch that dream business idea. You can be the CEO, create the product, showcase your profit margins, and pitch it to the "sharks'' for potential investment. Dive into the opportunity to turn your business dreams into reality!
    `,
  },
  {
    id: 7,
    name: "Bob Johnson",
    description: "Abol Tabol",
    imgSrc: picture2,
    normalImg: picture2,
    href: "/events/aboltabol",
    para: ` Inspired by MIT's BAHFEST, Abol Tabol is your chance to be a geeky stand-up comedian! Share absurd scientific theories like humans evolving into cats or creating a processor to block out babies crying on airplanes. Present your ideas in front of judges and spectators!
    `,
  },
  {
    id: 8,
    name: "Alice Williams",
    description: "Inquizzitive",
    imgSrc: picture5,
    normalImg: picture5,
    href: "/events/inquizzitive",
    para: `Convolution's annual quiz is a unique blend of business, technology, entertainment, sports, and more. It's a platform where curiosity and intelligence converge. Test your IQ and knowledge by participating in this quiz! `,
  },
  {
    id: 9,
    name: "Alice Williams",
    description: "24 Frames",
    imgSrc: picture8,
    normalImg: picture8,
    href: "/events/24frames",
    para: ` Experience a collection of four-and-a-half-minute vignettes featuring 24 images each. It's for camera enthusiasts who explore forgotten city streets, lending a kaleidoscopic view to all dimensions. Seize the opportunity to become the best "moment-catcher"!
    `,
  },
];

const Event = () => {
  const navigate = useNavigate();
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
                    className="hover-image cursor-pointer"
                    onClick={() => navigate(person.href)}
                  />
                </div>
                <Link to={person.href}>
                  <div className="algomaniac">{person.description}</div>
                </Link>
                <div className="lorem-ipsum-para">{person.para}</div>
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
