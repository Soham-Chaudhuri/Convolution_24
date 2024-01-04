/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import pic3 from "../assets/vector@2x.png";
import pic21 from "../assets/vector@2x@yellow.png";
import pic2 from "../assets/inquizzitive-logo-1@2x.png";
import pic1 from "../assets/arrow-logo@2x.png";
import pic4 from "../assets/Decisia_Light.png";
import pic5 from "../assets/Abol Tabol_Light.png";
import pic6 from "../assets/Circuistics_Light.png";
import pic7 from "../assets/Eureka_Light.png";
import pic8 from "../assets/Algomaniac Light.png";
import pic9 from "../assets/Papier_Light.png";
import pic10 from "../assets/Sparkhack_Light.png";
import pic11 from "../assets/24 Frames Light.png";
import { motion } from "framer-motion";

function Dashboard() {
  const [isHovered, setIsHovered] = useState(false);
  const Reference = useRef(null);
  const [eventsToUpdate, setEventsToUpdate] = useState([]);
  const [user, setUser] = useState(null);
  // console.log(`${mail}`);
  const [boxesData, setBoxesData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get-user`);
        const data = await response.json();
        console.log("Response data:", data);

        if (data) {
          setUser(data);
          console.log("Current user data:", data.email);
          setBoxesData([
            {
              id: 1,
              type: "Register Now",
              image: pic1,
              content: "Lorem ipsum content for box 1",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.inquizzitive,
              event: "inquizzitive",
            },
            {
              id: 2,
              type: "Register Now",
              image: pic4,
              content: "Lorem ipsum content for box 2",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.decisia,
              event: "decisia",
            },
            {
              id: 3,
              type: "Registered",
              image: pic5,
              content: "Lorem ipsum content for box 3",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.abol_tabol,
              event: "abol_tabol",
            },
            {
              id: 4,
              type: "Register Now",
              image: pic6,
              content: "Lorem ipsum content for box 4",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.circuistics,
              event: "circuistics",
            },
            {
              id: 5,
              type: "Registered",
              image: pic7,
              content: "Lorem ipsum content for box 5",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.eureka,
              event: "eureka",
            },
            {
              id: 6,
              type: "Register Now",
              image: pic8,
              content: "Lorem ipsum content for box 6",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.algomaniac,
              event: "algomaniac",
            },
            {
              id: 7,
              type: "Register Now",
              image: pic9,
              content: "Lorem ipsum content for box 7",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.papier,
              event: "papier",
            },
            {
              id: 8,
              type: "Registered",
              image: pic10,
              content: "Lorem ipsum content for box 8",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data.spark_hack,
              event: "spark_hack",
            },
            {
              id: 9,
              type: "Registered",
              image: pic11,
              content: "Lorem ipsum content for box 8",
              lastDate: "XX YY ZZZZ",
              eventDate: "XX YY ZZZZ",
              registered: data._frames,
              event: "_frames",
            },
          ]);
        } else {
          console.log("User not found useeffect");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [eventsToUpdate]);

  const handleUpdateEvents = async () => {
    try {
      const response = await fetch(`http://localhost:5000/update-events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventsToUpdate }),
      });

      const data = await response.json();

      if (data.user) {
        setUser(data.user);
        console.log("User data after update:", data.user);
      } else {
        console.log("User not found handle");
      }
    } catch (error) {
      console.error("Error updating events:", error);
    }
  };

  useEffect(() => {
    console.log("Updated events:", eventsToUpdate);
    if (eventsToUpdate.length > 0) {
      handleUpdateEvents();
      setEventsToUpdate([]);
    }
  }, [eventsToUpdate]);

  return (
    <>
      {user && (
        <div className="dashboard" ref={Reference}>
          <div>
            <div className="dashboard1">DASHBOARD</div>
            <div className="grid-container">
              {boxesData.map((box) => (
                <motion.div
                  drag
                  whileDrag={{ scale: 1 }}
                  dragElastic={1.3}
                  dragTransition={{ bounceStiffness: 30, bounceDamping: 4 }}
                  dragConstraints={Reference}
                  className={`grid-item z-10 first-box${box.id}`}
                  key={box.id}
                >
                  <div className="first-box-child" />
                  <div className="first-box-item" />
                  <div className="first-box-inner" />
                  {box.registered ? (
                    <img className="tick-logo-icon" src={pic2} />
                  ) : (
                    // <img
                    //   className="arrow-logo-icon hover:cursor-pointer  "
                    //   src={pic21}
                    // />

                    <img
                      src={isHovered ? pic21 : pic3}
                      className="arrow-logo-icon hover:cursor-pointer  "
                      alt="Image"
                    />
                  )}

                  <b
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={
                      box.registered
                        ? "registered"
                        : "register-now transition-all hover:cursor-pointer hover:text-[#e9c462] "
                    }
                    onClick={() => {
                      setEventsToUpdate((prevEvents) => [
                        ...prevEvents,
                        box.event,
                      ]);
                    }}
                  >
                    {box.type}
                  </b>
                  <img className="logo-1" alt="" src={box.image} />
                  <div className="line-div" />
                  <div className="lorem-dash">
                    <p>{box.content}</p>
                    <br />
                    <p className="know-more hover:cursor-pointer">Know More </p>
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
      )}
    </>
  );
}

export default Dashboard;


