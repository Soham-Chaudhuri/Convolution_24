/* eslint-disable react/jsx-key */
import React from "react";
import "./Re_event.css";
import picture1 from "../../assets/Decisia_Dark.png";
// import picture2 from "../assets/Abol Tabol_Dark.png";
import picture2 from "../../assets/abol2nd.png";
import picture3 from "../../assets/Circuistics_Dark.png";
import picture4 from "../../assets/Eureka_Dark.png";
import picture5 from "../../assets/Inquizzitive_Dark.png";
import picture6 from "../../assets/JU Talks Dark.png";
import picture7 from "../../assets/Sparkhack_Dark.png";
import picture8 from "../../assets/24 Frames Dark.png";
import picture9 from "../../assets/Algomaniac Dark.png";
import { Link, useNavigate } from "react-router-dom";

const eventData = [
  {
    id: 1,
    heading: "Circuistics",
    imgSrc: picture3,
    href: "/events/circuistics",
    description:
      "Do you fantasize about creating your own Atlas-like robot one day? Do you enjoy tinkering with Arduino kits? We're here with the perfect platform for you to test your skills! For those who enjoy designing circuits to solve real life problems, this is their stage!",
  },
  {
    id: 2,
    heading: "Sparkhack",
    imgSrc: picture7,
    href: "/events/sparkhack",
    description:
      "Eastern India's BIGGEST hackathon, focused on engineering technological solutions where teams embark on building prototypes of products with notable social impact. The ideas will be judged by academics and industry experts.",
  },
  {
    id: 3,
    heading: "Algomaniac",
    imgSrc: picture9,
    href: "/events/algomaniac",
    description:
      "A competitive programming event exclusively for those who wish to tackle the most mind-boggling challenges with their prowess on a keyboard and creative power of their minds, through lines of code.",
  },
  {
    id: 4,
    heading: "JU Talks",
    imgSrc: picture6,
    href: "/events/JU_Talks",
    description:
      "The research paper submission event of Convolution '24, that provides the perfect platform to get your research papers reviewed by experienced academics who are veterans of their field, and also get the chance to win exciting prizes for the best research papers.",
  },
  {
    id: 1,
    heading: "Eureka",
    imgSrc: picture4,
    href: "/events/eureka",
    description:
      "An event where the participants traverse intellectually stimulating routes that lead them to the ultimate “treasure”, and solving each step is nothing short of a “Eureka!” moment, here is an opportunity for a real-time experience of decoding complex situations and their varied solutions. “Eureka!” will serve as an ideal chance for you if you're a never-give-up type of person, and are ready to channel all your wits to reach the final solution.",
  },
  {
    id: 2,
    heading: "Decisia",
    imgSrc: picture1,
    href: "/events/decisia",
    description: `Our own version of “Shark Tank”, Decisia is your platform to pitch the business idea that you have been dreaming about if you’re to start-up a business. Become the CEO of a company, formulate the product, present your calculated skyrocketing profit margins, and pitch them before the “sharks” to get an investment!"`,
  },
  {
    id: 3,
    heading: "Abol Tabol",
    imgSrc: picture2,
    href: "/events/aboltabol",
    description:
      "Modeled on MIT’s popular BAHFEST, Abol Tabol is the stage to unleash your inner geeky stand-up comedian! Have some absurdist scientific theory about the inevitable evolution of humans to cats or a processor to block out babies crying on airplanes? Present such ideas in front of our judges and spectators!",
  },
  {
    id: 4,
    heading: "Inquizzitive",
    imgSrc: picture5,
    href: "/events/inquizzitive",
    description: `The annual quiz of Convolution with its unique blend of business, technology, entertainment, sports, and practically “everything under the Sun”. 
    "A quiz competition is a platform where curiosity and intelligence converges.” - Test out your IQ and knowledge base by participating in this quiz!`,
  },
  {
    id: 4,
    heading: "24 Frames",
    imgSrc: picture8,
    href: "/events/24frames",
    description: `A collection of four and a half minute vignettes of 24 images, to bring before all the camera-wielding enthusiasts, the ones who could meander through the forgotten streets of a city only to lend a kaleidoscopic eye to all its dimensions. Grab this opportunity to be the best “moment-catcher”!`,
  },
];

function Re_event() {
  const navigate = useNavigate();
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
                  <img
                    src={data.imgSrc}
                    onClick={() => {
                      navigate(data.href);
                    }}
                    alt={data.name}
                  />
                </div>
                <div className="re_event_desc flex items-center flex-col text-center">
                  <Link to={data.href}>
                    {" "}
                    <div className="re_event_desc_heading">{data.heading}</div>
                  </Link>
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
