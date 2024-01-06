import React, { useEffect, useState } from "react";
import "../Body/Re_hero.css";
import Re_hero_vd from "./Re_hero_vd";
import Re_about from "./Re_about";
import Re_event from "./Re_event";
import Re_teams from "./Re_teams";
import Re_contact from "./Re_contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// import thunder from "../../assets/Thunder.png";

function Re_hero() {
  const [logStatus, setLogStatus] = useState(false);
  const [logOut, setLogOut] = useState(false);
  useEffect(() => {
    const statusdb = async () => {
      try {
        const response = await fetch(`http://localhost:4000/get-user`);
        const data = await response.json();
        setLogStatus(data.isLoggedIn);
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    };

    statusdb();
  }, [logOut]);
  const loggingout = async () => {
    try {
      await fetch(`http://localhost:4000/logout`);
      console.log("logged out");
      setLogStatus(false);
      // navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  useEffect(() => {
    if (logOut) {
      loggingout();
      setLogOut(false);
    }
  }, [logOut]);
  const navigate = useNavigate();
  return (
    <>
      <div className="Re_hero_bg p-3">
        <div className="flex flex-col">
          <div className="flex flex-col-reverse Re_gapping gap-[0.8rem]">
            <div className="m-4 Re_hero_heading_1_div">
              <span className="Re_hero_heading_1 text-shadow-md">
                JUEE STUDENTS' FORUM
              </span>
              <br />
              <span className="Re_hero_heading_2 text-shadow-md block">
                CONVOLUTION 9.0
              </span>
              <br />
              <span className="Re_hero_heading_3">
                The Ninth Edition of Annual Technical Meet
              </span>
              <div className="flex Re_hero_btn">
                    <button
                      className="Re_hero_btn_1"
                      onClick={() => {
                        navigate("/Re_dashboard");
                      }}
                    >
                      Dashboard
                    </button>
                    <button
                      className="Re_hero_btn_2"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Logout
                    </button>

              </div>
            </div>
            <div className="Re_hero_thunder">
              {/* <img src={thunder} alt="" className="Re_hero_thunder_img" /> */}
            </div>
          </div>

          <Re_hero_vd />
          <Re_about />
          <Re_event />
          <Re_teams />
          <Re_contact />
        </div>
      </div>
    </>
  );
}

export default Re_hero;
