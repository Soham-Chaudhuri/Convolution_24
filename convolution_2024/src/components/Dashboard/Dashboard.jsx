/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "../Dashboard/Dashboard.css";
import pic3 from "../assets/vector@2x.png";
import pic2 from "../assets/inquizzitive-logo-1@2x.png";
import pic1 from "../assets/arrow-logo@2x.png";
import pic4 from "../assets/Decisia_Light.png";
import pic5 from "../assets/Abol Tabol_Light.png";
import pic6 from "../assets/Circuistics_Light.png";
import pic7 from "../assets/Eureka_Light.png";
import pic8 from "../assets/Inquizzitive_Light.png";
import pic9 from "../assets/Papier_Light.png";
import pic10 from "../assets/Sparkhack_Light.png";
import { motion } from "framer-motion";

function Dashboard() {
  const Reference = useRef(null);

  const boxesData = [
    {
      id: 1,

      type: "Register Now",
      image: pic1,
      content: "Lorem ipsum content for box 1",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: false,
    },
    {
      id: 2,

      type: "Register Now",
      image: pic4,
      content: "Lorem ipsum content for box 2",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: false,
    },
    {
      id: 3,

      type: "Registered",
      image: pic5,
      content: "Lorem ipsum content for box 3",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: true,
    },
    {
      id: 4,

      type: "Register Now",
      image: pic6,
      content: "Lorem ipsum content for box 4",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: false,
    },
    {
      id: 5,

      type: "Registered",
      image: pic7,
      content: "Lorem ipsum content for box 5",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: true,
    },
    {
      id: 6,

      type: "Register Now",
      image: pic8,
      content: "Lorem ipsum content for box 6",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: false,
    },
    {
      id: 7,

      type: "Register Now",
      image: pic9,
      content: "Lorem ipsum content for box 7",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: false,
    },
    {
      id: 8,

      type: "Registered",
      image: pic10,
      content: "Lorem ipsum content for box 8",
      lastDate: "XX YY ZZZZ",
      eventDate: "XX YY ZZZZ",
      registered: true,
    },
  ];

  return (
    <>
      <div className="dashboard" ref={Reference}>
        <div>
          <div className="dashboard1">DASHBOARD</div>
          <div className="grid-container">
            {boxesData.map((box) => (
              <motion.div
                drag
                whileDrag={{ scale: 1 }}
                dragConstraints={Reference}
                className={`grid-item first-box${box.id}`}
                key={box.id}
              >
                <div className="first-box-child" />
                <div className="first-box-item" />
                <div className="first-box-inner" />
                {box.registered ? (
                  <img className="tick-logo-icon" src={pic2} />
                ) : (
                  <img
                    className="arrow-logo-icon hover:cursor-pointer"
                    src={pic3}
                  />
                )}

                <b
                  className={
                    box.registered
                      ? "registered"
                      : "register-now transition-all hover:cursor-pointer hover:text-[#e9c462] "
                  }
                >
                  {box.type}
                </b>
                <img className="logo-1" alt="" src={box.image} />
                <div className="line-div" />
                <div className="lorem-dash">
                  <p>{box.content}</p>
                  <br />
                  <p className="know-more">Know More </p>
                </div>
                <div className="last-date">
                  <span>
                    <p>Last Date to Apply: </p>
                    <br />
                    <p className="xx-yy-zzzz">{box.lastDate}</p>
                    <p>&nbsp;</p>
                    <p className="india">
                      <span>Event on: </span>
                      <span className="xx-yy-zzzz">{box.eventDate}</span>
                    </p>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="dashboard-underline" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

// import React from "react";
// import "../Dashboard/Dashboard.css";

// function Dashboard() {
//   const boxesData = [
//     // ... Your box data here ...
//   ];

//   return (
//     <>
//       <div className="dashboard">
//         <div className="dashboard1">DASHBOARD</div>
//         <div className="grid-container">
//           {boxesData.map((box) => (
//             <div className={`grid-item first-box${box.id}`} key={box.id}>
//               <div className="first-box-child" />
//               <div className="first-box-item" />
//               <div className="first-box-inner" />
//               <img className="arrow-logo-icon" alt="" src={box.image} />
//               <b className={box.type}>{box.title}</b>
//               <div className="line-div" />
//               <div className="loremipsumnancinoaeicuecueuceb">
//                 <p className="department-of-electrical">{box.content}</p>
//                 <p className="know-more">Know More</p>
//               </div>
//               <div className="last-date-to-container">
//                 <span className="department-of-electrical-container1">
//                   <p className="department-of-electrical">
//                     Last Date to Apply:{" "}
//                   </p>
//                   <p className="xx-yy-zzzz">{box.lastDate}</p>
//                   <p className="department-of-electrical">&nbsp;</p>
//                   <p className="india">
//                     <span>Event on: </span>
//                     <span className="xx-yy-zzzz1">{box.eventDate}</span>
//                   </p>
//                 </span>
//               </div>
//               {box.registered && (
//                 <>
//                   <b className="registered"></b>
//                   <img
//                     className="tick-logo-icon"
//                     alt=""
//                     src="/tick-logo@2x.png"
//                   />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="dashboard-child" />
//       </div>
//     </>
//   );
// }

// export default Dashboard;
