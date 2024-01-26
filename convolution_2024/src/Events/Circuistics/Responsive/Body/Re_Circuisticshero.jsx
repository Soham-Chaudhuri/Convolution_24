import React, { useEffect, useState } from "react";
import "../Body/Re_hero.css";

import Re_about from "./Re_about";

import Re_teams from "./Re_teams";
import Re_contact from "./Re_contact";
import Re_faq from "./Re_faq";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Re_timeline from "./Re_timeline";

import Re_footer from "../Footer/Re_footer";
import Re_eventhead from "../Header/Re_eventhead";
import Re_judges from "./Re_judges";
import Prizes from "../../Prizes";


function Re_Circuisticshero() {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  return (
    <>
      <Re_eventhead />


      <div className="Re_hero_bg p-3">
        <div className="flex flex-col">
          <section id="Re_hero">
            <div className="flex flex-col-reverse Re_gapping gap-[0.8rem]">
              <div className="m-4 Re_hero_heading_1_div">
              <span className="Re_hero_heading_1 text-shadow-md">
                  CONVOLUTION 9.0 PRESENTS
                </span>
                <br />
                <span className="Re_hero_heading_2 text-shadow-md block">
                  CIRCUISTICS
                </span>
                <br />
                <span className="Re_hero_heading_3">
                  LET YOUR CODE SPEAK
                </span>
                <div className="flex Re_hero_btn">
                <button
                    className="Re_hero_btn_1"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="Re_hero_thunder">
                
              </div>
            </div>
          </section>

          <Re_about />

          <Re_timeline />
          <Prizes dat={"Gallery"}/>
          <Re_judges/>
          <Prizes dat={"Prizes"}/>
          <Re_faq/>
          <Re_teams />

          <Re_contact />
        </div>
      </div>
      <Re_footer />
    </>
  );
}

export default Re_Circuisticshero;
