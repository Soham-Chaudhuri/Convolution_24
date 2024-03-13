/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import emailjs from "emailjs-com";
import pic3 from "../assets/vector@2x.png";
import pic21 from "../assets/vector@2x@yellow.png";
import pic2 from "../assets/inquizzitive-logo-1@2x.png";
import pic1 from "../assets/arrow-logo@2x.png";
import pic4 from "../assets/Decisia_Light.webp";
import pic5 from "../assets/Abol Tabol_Light.webp";
import pic6 from "../assets/Circuistics_Light.webp";
import pic7 from "../assets/Eureka_Light.webp";
import pic8 from "../assets/AlgomaniacLight.webp";
import pic9 from "../assets/Papier_Light.png";
import pic10 from "../assets/Sparkhack_Light.webp";
import pic11 from "../assets/24 Frames Light.webp";
import pic12 from "../assets/JU-Talks-Light.webp";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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

  // const framesMail = () => {
  //   const templateParams = {
  //     mail: user.email,
  //   };

  //   emailjs.send(
  //     "service_tpy2avm",
  //     "template_q8f1qrp",
  //     templateParams,
  //     "PUkw79pWv5_JpHXX-"
  //   );
  // };

  const [events, setEvents] = useState([
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

  const userID = useParams();
  // console.log(userID);

  useEffect(() => {
    // Create a reference to the specific user's data in the database
    const userRef = ref(db, `users/${user.email.replace(/\./g, "_")}`);

    // Listen for changes in the user's data
    const unsubscribeUser = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
      const newEvents = [
        data.inquizzitive,
        data.decisia,
        data.abol_tabol,
        data.circuistics,
        data.eureka,
        data.algomaniac,
        data.papier,
        data.spark_hack,
        data._frames,
      ];
      if (!events.every((value, index) => value === newEvents[index])) {
        setEvents(newEvents);
      }
      setBoxesData([
        {
          id: 1,

          type: data.spark_hack ? "Registered" : "Register Now",
          image: pic10,
          content: "Hack your brilliance. Code, Create, Conquer!",
          lastDate: "03-03-2024",
          eventDate: "16-03-2024",
          registered: data.spark_hack,
          event: "spark_hack",
          href: "/events/sparkhack",
        },
        {
          id: 2,
          type: data.decisia ? "Registered" : "Register Now",
          image: pic4,
          content: "Impactful decisions, endless possibilities",
          lastDate: "10-03-2024",
          eventDate: "16-03-2024",
          registered: data.decisia,
          event: "decisia",
          href: "/events/decisia",
        },
        {
          id: 3,
          type: data.abol_tabol ? "Registered" : "Register Now",
          image: pic5,
          content: "The Curious Case of Quirky Nonscience",
          lastDate: "10-03-2024",
          eventDate: "16-03-2024",
          registered: data.abol_tabol,
          event: "abol_tabol",
          href: "/events/aboltabol",
        },
        {
          id: 4,
          type: data.circuistics ? "Registered" : "Register Now",
          image: pic6,
          content: "Let the wires determine it...",
          lastDate: "13-03-2024",
          eventDate: "16-03-2024",
          registered: data.circuistics,
          event: "circuistics",
          href: "/events/circuistics",
        },
        {
          id: 5,
          type: data.eureka ? "Registered" : "Register Now",
          image: pic7,
          content: "Crack the Code, Claim the Crown!",
          lastDate: "13-03-2024",
          eventDate: "16-03-2024",
          registered: data.eureka,
          event: "eureka",
          href: "/events/eureka",
        },
        {
          id: 6,
          type: data.algomaniac ? "Registered" : "Register Now",
          image: pic8,
          content: "Let your code speak",
          lastDate: "27-02-2024",
          eventDate: "17-03-2024",
          registered: data.algomaniac,
          event: "algomaniac",
          href: "/events/algomaniac",
        },
        {
          id: 7,
          type: data.papier ? "Registered" : "Register Now",
          image: pic12,
          content: "Conversations, coffee, and free-flowing words!",
          lastDate: "On Day Event",
          eventDate: "17-03-2024",
          registered: data.papier,
          event: "JU Talks",
          href: "/events/JU_Talks",
        },
        {
          id: 8,
          type: "Register Now",
          image: pic1,
          content: "Anything and Everything Under the Sun",
          lastDate: "15-03-2024",
          eventDate: "15-03-2024",
          registered: data.inquizzitive,
          event: "inquizzitive",
          href: "/events/inquizzitive",
        },
        {
          id: 9,
          type: data._frames ? "Registered" : "Register Now",
          image: pic11,
          content: `Photographers' Delight
          `,
          lastDate: "10-03-2024",
          eventDate: "17-03-2024",
          registered: data._frames,
          event: "_frames",
          href: "/events/24frames",
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

  // useEffect(() => {
  //   window.location.reload();
  // }, []);

  // const algoupdate = () => {
  //   update(ref(db, `users/${user.email.replace(/\./g, "_")}`), {
  //     algomaniac: true,
  //   });
  // };

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
                      // await setEvents((prevarray) => {
                      //   const newarray = [...prevarray];
                      //   if (!newarray[box.id - 1] && box.id === 9) {
                      //     newarray[box.id - 1] = true;
                      //     window.location.reload();
                      //   }
                      //   return newarray;
                      // });

                      // fun. for single registration

                      if (
                        !events[box.id - 1] &&
                        box.id !== 6 &&
                        box.id !== 7 &&
                        box.id !== 9 &&
                        box.id !== 1 &&
                        box.id !== 2 &&
                        box.id !== 3 &&
                        box.id !== 4 &&
                        box.id !== 5 
                      ) {
                        navigate(`/reg/${box.event}`);
                      }

                      if (box.id === 7) {
                        toast.info(
                          "No registration required. You are all invited to attend JU Talks on Sunday 17th March in dept of Electrical Engineering Jadavpur University",
                          {
                            theme: "dark",
                          }
                        );
                      }

                      if (box.id === 1) {
                        toast.info("Registrations closed for Sparkhack!", {
                          theme: "dark",
                        });
                      }


                      if (box.id === 4) {
                        toast.info("Registrations closed for Circuistics!", {
                          theme: "dark",
                        });
                      }

                      if (box.id === 5) {
                        toast.info("Registrations closed for Eureka!", {
                          theme: "dark",
                        });
                      }

                      if (box.id === 2) {
                        toast.info("Registrations closed for Decisia!", {
                          theme: "dark",
                        });
                      }

                      if (box.id === 3) {
                        toast.info("Registrations closed for AbolTabol!", {
                          theme: "dark",
                        });
                      }

                      if (box.id === 9) {
                        toast.info("Registrations closed for 24 Frames!", {
                          theme: "dark",
                        });
                      }

                      if (box.id === 6) {
                        toast.info("Registrations closed for Algomaniac", {
                          theme: "dark",
                          autoClose: 4200,
                        });
                      }
                    }}
                  >
                    {box.type} {!box.registered ? "\u2192" : "\u2714"}
                  </b>
                  <Link to={box.href}>
                    <img className="logo-1" alt="" src={box.image} />
                  </Link>
                  <div className="line-div" />
                  <div className="lorem-dash">
                    <p>{box.content}</p>
                    <br />
                    <Link to={box.href}>
                      <p className="know-more hover:cursor-pointer">
                        Know More{" "}
                      </p>
                    </Link>
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
      <ToastContainer theme="dark" />
    </>
  );
}

export default Dashboard;
