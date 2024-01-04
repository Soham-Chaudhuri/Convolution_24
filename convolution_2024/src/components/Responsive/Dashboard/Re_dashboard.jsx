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
function Re_dashboard() {
  // const boxesData = [
  //   {
  //     id: 1,
  //     type: "Register Now",
  //     image: pic1,
  //     content: "Lorem ipsum content for box 1",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: false,
  //   },
  //   {
  //     id: 2,
  //     type: "Register Now",
  //     image: pic4,
  //     content: "Lorem ipsum content for box 2",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: false,
  //   },
  //   {
  //     id: 3,
  //     type: "Registered",
  //     image: pic5,
  //     content: "Lorem ipsum content for box 3",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: true,
  //   },
  //   {
  //     id: 4,
  //     type: "Register Now",
  //     image: pic6,
  //     content: "Lorem ipsum content for box 4",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: false,
  //   },
  //   {
  //     id: 5,
  //     type: "Registered",
  //     image: pic7,
  //     content: "Lorem ipsum content for box 5",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: true,
  //   },
  //   {
  //     id: 6,
  //     type: "Register Now",
  //     image: pic8,
  //     content: "Lorem ipsum content for box 6",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: false,
  //   },
  //   {
  //     id: 7,
  //     type: "Register Now",
  //     image: pic9,
  //     content: "Lorem ipsum content for box 7",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: false,
  //   },
  //   {
  //     id: 8,
  //     type: "Registered",
  //     image: pic10,
  //     content: "Lorem ipsum content for box 8",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: true,
  //   },
  //   {
  //     id: 9,
  //     type: "Registered",
  //     image: pic11,
  //     content: "Lorem ipsum content for box 8",
  //     lastDate: "XX YY ZZZZ",
  //     eventDate: "XX YY ZZZZ",
  //     registered: true,
  //   },
  // ];
  const [eventsToUpdate, setEventsToUpdate] = useState([]);
  const [user, setUser] = useState(null);
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
                        setEventsToUpdate((prevEvents) => [
                          ...prevEvents,
                          dat.event,
                        ]);
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
