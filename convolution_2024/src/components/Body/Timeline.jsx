import React from "react";
import "./Timeline.css";
import dotted from "../assets/line-1@2x.png";

const peopleData = [
  {
    id: 1,
    name: "John Doe",
    description: "Web Developer",
    imgSrc: "john.jpg",
  },
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
  {
    id: 1,
    name: "John Doe",
    description: "Web Developer",
    imgSrc: "john.jpg",
  },
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

  {
    id: 1,
    name: "John Doe",
    description: "Web Developer",
    imgSrc: "john.jpg",
  },
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

  {
    id: 1,
    name: "John Doe",
    description: "Web Developer",
    imgSrc: "john.jpg",
  },
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
];
function Timeline() {
  return (
    <>
      <div className="timeline_layer_bg">
        <div className="timeline_layer_lines"></div>
        <div className="timeline flex text-center flex-col align-center justify-center gap-10">
          <span className="heading_timeline py-[42px]">TIMELINE</span>

          <div className="whole-timeline-graphics w-[1180px] h-[920px] mx-auto">
            <img
              className="whole-timeline-graphics-child"
              alt=""
              src={dotted}
            />

            <img
              className="whole-timeline-graphics-item"
              alt=""
              src={dotted}
            />

            <img
              className="whole-timeline-graphics-inner"
              alt=""
              src={dotted}
            />

            <img className="line-icon" alt="" src={dotted} />

            <div className="ellipse-div"></div>
            <img
              className="whole-timeline-graphics-child1"
              alt=""
              src={dotted}
            />

            <div className="whole-timeline-graphics-child2"></div>
            <div className="whole-timeline-graphics-child3"></div>
            <div className="whole-timeline-graphics-child4"></div>
            <div className="whole-timeline-graphics-child5"></div>
            <div className="whole-timeline-graphics-child6"></div>
            <div className="whole-timeline-graphics-child7"></div>
            <div className="whole-timeline-graphics-child8"></div>
            <div className="whole-timeline-graphics-child9"></div>
            <div className="whole-timeline-graphics-child10"></div>
            <div className="whole-timeline-graphics-child11"></div>
            <div className="whole-timeline-graphics-child12"></div>
            <div className="whole-timeline-graphics-child13"></div>
            <div className="whole-timeline-graphics-child14"></div>
            <div className="whole-timeline-graphics-child15"></div>
            <div className="whole-timeline-graphics-child16"></div>
            <div className="whole-timeline-graphics-child17"></div>
            <div className="whole-timeline-graphics-child18"></div>
            <div className="whole-timeline-graphics-child19"></div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Timeline;
