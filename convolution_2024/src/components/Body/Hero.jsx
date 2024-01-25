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
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Sponsor from "./Sponsor";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Hero() {
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
      <Header />
      <div className="hero_bg p-7">
        <div className="flex flex-col">
          <section id="hero">
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
                      navigate("/signup");
                    }}
                  >
                    SignUp
                  </button>
                  <button
                    className="hero_btn_2"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="hero_thunder flex items-center">
                <img src={thunder} alt="" className="hero_thunder_img" />
              </div>
            </div>
          </section>

          <Hero_vd />
          <About />
          <Event />
          <Timeline />
          <Teams />
          <Sponsor />
          <Contact />

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Hero;
