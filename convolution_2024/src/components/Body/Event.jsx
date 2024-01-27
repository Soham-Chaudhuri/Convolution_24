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
    href: "/events/circuistics",
    para: "Do you fantasize about creating your own Atlas-like robot one day? Do you enjoy tinkering with Arduino kits? We're here with the perfect platform for you to test your skills! For those who enjoy designing circuits to solve real life problems, this is their stage!",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Sparkhack",
    imgSrc: picture7,
    normalImg: picture7,
    href: "/events/sparkhack",
    para: "Eastern India's BIGGEST hackathon, focused on engineering technological solutions where teams embark on building prototypes of products with notable social impact. The ideas will be judged by academics and industry experts.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    description: "Algomaniac",
    imgSrc: picture9,
    normalImg: picture9,
    href: "/events/algomaniac",
    para: "A competitive programming event exclusively for those who wish to tackle the most mind-boggling challenges with their prowess on a keyboard and creative power of their minds, through lines of code.",
  },
  {
    id: 4,
    name: "Alice Williams",
    description: "Papier",
    imgSrc: picture6,
    normalImg: picture6,
    href: "/events/papier",
    para: "The research paper submission event of Convolution '24, that provides the perfect platform to get your research papers reviewed by experienced academics who are veterans of their field, and also get the chance to win exciting prizes for the best research papers.",
  },
  {
    id: 5,
    name: "John Doe",
    description: "Eureka",
    imgSrc: picture4,
    normalImg: picture4,
    href: "/events/eureka",
    para: "An event where the participants traverse intellectually stimulating routes that lead them to the ultimate “treasure”, and solving each step is nothing short of a “Eureka!” moment, here is an opportunity for a real-time experience of decoding complex situations and their varied solutions. “Eureka!” will serve as an ideal chance for you if you're a never-give-up type of person, and are ready to channel all your wits to reach the final solution.",
  },
  {
    id: 6,
    name: "Jane Smith",
    description: "Decisia",
    imgSrc: picture1,
    normalImg: picture1,
    href: "/events/decisia",

    para: `Our own version of “Shark Tank”, Decisia is your platform to pitch the business idea that you have been dreaming about if you’re to start-up a business. Become the CEO of a company, formulate the product, present your calculated skyrocketing profit margins, and pitch them before the “sharks” to get an investment!"`,
  },
  {
    id: 7,
    name: "Bob Johnson",
    description: "Abol Tabol",
    imgSrc: picture2,
    normalImg: picture2,
    href: "/events/aboltabol",
    para: "Modeled on MIT’s popular BAHFEST, Abol Tabol is the stage to unleash your inner geeky stand-up comedian! Have some absurdist scientific theory about the inevitable evolution of humans to cats or a processor to block out babies crying on airplanes? Present such ideas in front of our judges and spectators!",
  },
  {
    id: 8,
    name: "Alice Williams",
    description: "Inquizzitive",
    imgSrc: picture5,
    normalImg: picture5,
    href: "/events/inquizzitive",
    para: `The annual quiz of Convolution with its unique blend of business, technology, entertainment, sports, and practically “everything under the Sun”. 
    "A quiz competition is a platform where curiosity and intelligence converges.” - Test out your IQ and knowledge base by participating in this quiz!`,
  },
  {
    id: 9,
    name: "Alice Williams",
    description: "24 Frames",
    imgSrc: picture8,
    normalImg: picture8,
    href: "/events/24frames",
    para: `A collection of four and a half minute vignettes of 24 images, to bring before all the camera-wielding enthusiasts, the ones who could meander through the forgotten streets of a city only to lend a kaleidoscopic eye to all its dimensions. Grab this opportunity to be the best “moment-catcher”!`,
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
                <div className="group-child-img" >
                  <img
                    src={person.normalImg}
                    alt={person.name}
                    className="normal-image"
                    // onClick={()=>navigate(person.href)}
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
