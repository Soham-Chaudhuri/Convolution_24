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
import Re_timeline from "./Re_timeline";
import Re_header from "../Header/Re_header";
import Re_footer from "../Footer/Re_footer";
import Sponsor from "../../Body/Sponsor";

// import thunder from "../../assets/Thunder.png";

function Re_hero() {
  const navigate = useNavigate();
  return (
    <>
      <Re_header />
      <div className="Re_hero_bg p-3">
        <div className="flex flex-col">
          <section id="Re_hero">
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
                The Ninth Edition of Annual Techno Management Meet
                </span>
                <div className="flex Re_hero_btn">
                  <button
                    className="Re_hero_btn_1"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    SignUp
                  </button>
                  <button
                    className="Re_hero_btn_2"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="Re_hero_thunder">
                {/* <img src={thunder} alt="" className="Re_hero_thunder_img" /> */}
              </div>
            </div>
          </section>

          <Re_hero_vd />
          <Re_about />
          <Re_event />
          <Re_timeline />
          <Re_teams />
          <Sponsor/>
          <Re_contact />
        </div>
      </div>
      <Re_footer />
    </>
  );
}

export default Re_hero;
