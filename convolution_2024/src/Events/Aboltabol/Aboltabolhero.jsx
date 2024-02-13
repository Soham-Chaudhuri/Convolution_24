import React, { useEffect, useState } from "react";
import "./Hero.css";

import thunder from "../../components/assets/8.webp";
import About from "./About";

import Timeline from "./Timeline";
import Teams from "./Teams";

import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sponsor from "./Sponsor";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import Judges from "./Judges";
import Faq from "./Faq";
import Contact from "../../components/Body/Contact";
import Prizes from "./Prizes";

function Aboltabolhero({user}) {
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
      <Header user={user}/>
      <div className="hero_bg p-7">
        <div className="flex flex-col">
          <section id="hero">
            <div className="flex gapping  gap-[12.5rem]">
              <div className="m-4 hero_heading_1_div flex flex-wrap flex-col">
                <span className="hero_heading_1 text-shadow-md">
                  Convolution 9.0 Presents
                </span>
                <span className="hero_heading_2 text-shadow-md">
                  ABOL TABOL
                </span>
                <span className="hero_heading_3">The Curious Case of Quirky Nonscience</span>
                <div className="flex hero_btn mt-5">
                  <button
                    className="hero_btn_1"
                    onClick={() => {
                      if(user!==null){
                        navigate(`/dashboard/${user.uid}`);
                        console.log(user.uid);
                      }
                      else{
                        navigate("/");
                      }
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="hero_thunder flex items-center animated">
                <img src={thunder} alt="" className="hero_thunder_img" />
              </div>
            </div>
          </section>

          <About />

          <Timeline />
          <Prizes dat={"Gallery"} />
          <Judges />
          <Prizes dat={"Prizes"} />
          <Faq />
          <Teams />
          <Contact />

          {/* <Sponsor /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboltabolhero;
