import React, { useState, useEffect, useRef } from "react";
import "./Re_dashboard.css";
import picture1 from "../../assets/Inquizzitive_Light.png";
import pic3 from "../../assets/vector@2x.png";
import pic21 from "../../assets/vector@2x@yellow.png";
import pic2 from "../../assets/inquizzitive-logo-1@2x.png";
import pic1 from "../../assets/arrow-logo@2x.png";
import pic4 from "../../assets/Decisia_Light.png";
import pic5 from "../../assets/Abol Tabol_Light.png";
import pic6 from "../../assets/Circuistics_Light.png";
import pic7 from "../../assets/Eureka_Light.png";
import pic8 from "../../assets/Algomaniac Light.png";
import pic9 from "../../assets/Papier_Light.png";
import pic10 from "../../assets/Sparkhack_Light.png";
import pic11 from "../../assets/24 Frames Light.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import {
  onValue,
  ref,
  getDatabase,
  get,
  child,
  update,
} from "firebase/database";
import { app } from "../../firebase";
const db = getDatabase(app);
function Re_dashboard({ user }) {
  // const Reference = useRef(null);
  const userID = useParams();
  const Reference = useRef(null);
  const navigate = useNavigate();
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
  // const ok=;
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
          type: "Register Now",
          image: pic1,
          content: "Anything and Everything Under the Sun",
          lastDate: "15-03-2024",
          eventDate: "15-03-2024",
          registered: false,
          event: "inquizzitive",
          href: "/events/inquizzitive",
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
          content: "Lorem ipsum content for box 7",
          lastDate: "On Day Event",
          eventDate: "17-03-2024",
          registered: data.papier,
          event: "JU Talks",
          href: "/events/papier",
        },
        {
          id: 8,
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

  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      loop: true,
    });

    // Destroy Swiper when the component unmounts to prevent memory leaks
    return () => {
      swiper.destroy();
    };
  }, []);


  // const algoupdate = () => {
  //   update(ref(db, `users/${user.email.replace(/\./g, "_")}`), {
  //     algomaniac: true,
  //   });
  // };

  return (
    <>
    
      <div className="body_main pt-8">
        <div className="flex flex-col items-center my-10 gap-2">
          <p className="re_dashboard_heading">DASHBOARD</p>
          <div className="re_dashboard_underline"></div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {boxesData.map((dat) => (
              <div key={dat.id} className="swiper-slide">
                <div className="card">
                  <div className="card_top">
                    <div className="card_img">
                      <img src={dat.image} alt="Card Image" />
                    </div>
                    <div className="card_top_para">
                      <p className="card_top_span"> Last Date to Apply: </p>

                      <p className="card_top_date"> {dat.lastDate} </p>
                      <br />
                      <p className="card_top_event">
                        Event on:
                        <p className="card_top_date">{dat.eventDate}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card_mid_bar"></div>
                  <div className="card-content">
                    <p className="card-text">{dat.content}</p>
                    <Link to={dat.href}>
                      <a className="card_top_date">Know more</a>
                    </Link>
                    <div
                      className={
                        dat.registered
                          ? "card-title text-[#3cb043]"
                          : "card-title"
                      }
                      onClick={async () => {
                        await useEvents((prevarray) => {
                          const newarray = [...prevarray];
                          if (!newarray[dat.id - 1] && dat.id === 6) {
                            newarray[dat.id - 1] = true;
                            window.location.reload();
                          }
                          return newarray;
                        });

                        // if(dat.id === 6) {
                        //   algoupdate();
                        //   window.location.reload();
                        // }

                        // if (
                        //   !events[box.id - 1] &&
                        // box.id !== 6 &&
                        // box.id !== 1 &&
                        // box.id !== 7
                        // ) {
                        //   navigate(`/reg/${dat.event}`);
                        // }
                        

                        if (dat.id === 1) {
                          toast.info(
                            "On Day Registration at Jadavpur University Electrical Engineering building",
                            {
                              theme: "dark",
                            }
                          );
                        }
                        if (box.id === 7) {
                          toast.info(
                            "No registration required. You are all invited to attend JU Talks on Sunday 17th March in dept of Electrical Engineering Jadavpur University",
                            {
                              theme: "dark",
                            
                            }
                          );
                        }
                        if (
                          !events[dat.id - 1] &&
                          dat.id !== 6 &&
                          dat.id !== 1
                        ) {
                          navigate(`/reg/${dat.event}`);
                        }
                        if (box.id === 6) {
                          toast.info(
                            " Please proceed with registration on the following Google Form. Redirecting now.",
                            {
                              theme: "dark",
                              autoClose: 4200,
                            }
                          );
  
                          setTimeout(() => {
                            // window.location.href = "https://forms.gle/y5p9jAkzhbQskSYd9";
                            window.open(
                              "https://forms.gle/LwcPTZmtETVUNy2DA ",
                              "_blank"
                            );
                          }, 3000);
                        }
                      }
                    }
                    >
                      {dat.type} {!dat.registered ? "\u2192" : "\u2714"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Re_dashboard;
