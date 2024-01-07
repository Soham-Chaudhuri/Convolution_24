import React, { useState, useEffect } from "react";
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
  const [papier, setPapier] = useState(false);
  const [eureka, setEureka] = useState(false);
  const [abol_tabol, setAbol_tabol] = useState(false);
  const [decisia, setDecisia] = useState(false);
  const [circuistics, setCircuistics] = useState(false);
  const [inquizzitive, setInquizzitive] = useState(false);
  const [spark_hack, setSpark_hack] = useState(false);
  const [algomaniac, setAlgomaniac] = useState(false);
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
          type: data.inquizzitive ? "Registered" : "Register Now",
          image: pic1,
          content: "Lorem ipsum content for box 1",
          lastDate: "XX YY ZZZZ",
          eventDate: "XX YY ZZZZ",
          registered: data.inquizzitive,
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

  return (
    <>
      <div className="body_main">
        <div className="flex flex-col items-center my-10 gap-2">
          <p className="re_dashboard_heading">Dashboard</p>
          <div className="re_dashboard_underline"></div>
        </div>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            {boxesData.map((dat) => (
              <div key={dat.id} class="swiper-slide">
                <div class="card">
                  <div class="card_top">
                    <div class="card_img">
                      <img src={dat.image} alt="Card Image" />
                    </div>
                    <div class="card_top_para">
                      <p class="card_top_span"> Last Date to Apply: </p>

                      <p class="card_top_date"> {dat.lastDate} </p>
                      <br />
                      <p class="card_top_event">
                        Event on:
                        <p class="card_top_date">{dat.eventDate}</p>
                      </p>
                    </div>
                  </div>
                  <div class="card_mid_bar"></div>
                  <div class="card-content">
                    <p class="card-text">{dat.content}</p>
                    <a href="#" class="card_top_date">
                      Know more
                    </a>
                    <div
                      className={
                        dat.registered
                          ? "card-title text-[#3cb043]"
                          : "card-title"
                      }
                      onClick={() => {
                        useEvents((prevarray) => {
                          const newarray = [...prevarray];
                          newarray[dat.id - 1] = !newarray[dat.id - 1];
                          return newarray;
                        });
                      }}
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
    </>
  );
}

export default Re_dashboard;
