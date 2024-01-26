/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./Hero.css";
import Hero_vd from "./Hero_vd";
import thunder from "../assets/Thunder.png";
import About from "./About";
import Event from "./Event";
import Timeline from "./Timeline";
import Teams from "./Teams";
import Contact from "./Contact";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sponsor from "./Sponsor";
const auth = getAuth(app);
function Hero({ user }) {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    await navigate("/");
  };

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
      {/* <Back /> */}
      <Header />

      <div className="hero_bg p-7">
        <div className="flex flex-col">
          <div className="flex gapping">
            <div className="m-4 hero_heading_1_div flex flex-wrap flex-col">
              <span className="hero_heading_1 text-shadow-md">
                JUEE STUDENTS' FORUM
              </span>
              <span className="hero_heading_2 text-shadow-md">
                CONVOLUTION 9.0
              </span>
              <span className="hero_heading_3">
              The Ninth Edition of Annual Techno-Management Meet
              </span>
              <div className="flex hero_btn mt-5">
                <button
                  className="hero_btn_1"
                  onClick={() => {
                    navigate(`/dashboard/${user.uid}`);
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="hero_btn_2"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="hero_thunder flex items-center animated">
              <img src={thunder} alt="" className="hero_thunder_img" />
            </div>
          </div>
          <Hero_vd />
          <About />
          <Event />
          <Timeline />
          <Teams />
          <Sponsor />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hero;
