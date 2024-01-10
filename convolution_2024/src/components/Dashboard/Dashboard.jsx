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
import { useNavigate } from "react-router-dom";
import {
  onValue,
  ref,
  getDatabase,
  get,
  child,
  update,
} from "firebase/database";
import { app } from "../firebase";
const db = getDatabase(app);
function Dashboard({ user }) {
  const Reference = useRef(null);
  const [_frames, set_frames] = useState(false);
  const [userData, setUserData] = useState(null);
  const [boxesData, setBoxesData] = useState([]);
  const [events, useEvents] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // Create a reference to the specific user's data in the database
    const userRef = ref(db, `users/${user.email.replace(/\./g, "_")}`);

    // Listen for changes in the user's data
    const unsubscribeUser = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
      useEvents([
        data.inquizzitive,
        data.decisia,
        data.abol_tabol,
        data.circuistics,
        data.eureka,
        data.algomaniac,
        data.papier,
        data.spark_hack,
        data._frames,
      ]);
      setBoxesData([
        {
          id: 1,
          type: "On Day Registration",
          image: pic1,
          content: "Lorem ipsum content for box 1",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: true,
          event: "inquizzitive",
        },
        {
          id: 2,
          type: data.decisia ? "Registered" : "Register Now",
          image: pic4,
          content: "Lorem ipsum content for box 2",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.decisia,
          event: "decisia",
        },
        {
          id: 3,
          type: data.abol_tabol ? "Registered" : "Register Now",
          image: pic5,
          content: "Lorem ipsum content for box 3",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.abol_tabol,
          event: "abol_tabol",
        },
        {
          id: 4,
          type: data.circuistics ? "Registered" : "Register Now",
          image: pic6,
          content: "Lorem ipsum content for box 4",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.circuistics,
          event: "circuistics",
        },
        {
          id: 5,
          type: data.eureka ? "Registered" : "Register Now",
          image: pic7,
          content: "Lorem ipsum content for box 5",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.eureka,
          event: "eureka",
        },
        {
          id: 6,
          type: data.algomaniac ? "Registered" : "Register Now",
          image: pic8,
          content: "Lorem ipsum content for box 6",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.algomaniac,
          event: "algomaniac",
        },
        {
          id: 7,
          type: data.papier ? "Registered" : "Register Now",
          image: pic9,
          content: "Lorem ipsum content for box 7",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.papier,
          event: "papier",
        },
        {
          id: 8,
          type: data.spark_hack ? "Registered" : "Register Now",
          image: pic10,
          content: "Lorem ipsum content for box 8",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.spark_hack,
          event: "spark_hack",
        },
        {
          id: 9,
          type: data._frames ? "Registered" : "Register Now",
          image: pic11,
          content: "Lorem ipsum content for box 8",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data._frames,
          event: "_frames",
        },
      ]);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribeUser();
    };
  }, [user, events]);
  useEffect(() => {
    // Check if userData is available and then update the database
    if (userData) {
      // Update user data in the database
      update(ref(db, `users/${user.email.replace(/\./g, "_")}`), {
        name: userData.name,
        college: userData.college,
        branch: userData.branch,
        year: userData.year,
        papier: events[6],
        eureka: events[4],
        abol_tabol: events[2],
        decisia: events[1],
        circuistics: events[3],
        inquizzitive: events[0],
        spark_hack: events[7],
        algomaniac: events[5],
        _frames: events[8],
      });
    }
  }, [events]);
  const navigate = useNavigate();
  return (
    <>
      {/* {console.log(userData, "lol")} */}
      {userData && (
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

                  <b
                    className={
                      box.registered
                        ? "registered"
                        : "register-now transition-all hover:cursor-pointer hover:text-[#e9c462] "
                    }
                    onClick={async () => {
                      await useEvents((prevarray) => {
                        const newarray = [...prevarray];
                        if (!newarray[box.id - 1] && (box.id === 6) ) {
                          newarray[box.id - 1] = !newarray[box.id - 1];
                        }
                        return newarray;
                      });
                      if (!events[box.id - 1] && (box.id !== 6 && box.id!==1)) {
                        navigate(`/reg/${box.event}`);
                      }
                    }}
                  >
                    {box.type} {!box.registered ? "\u2192" : "\u2714"}
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
