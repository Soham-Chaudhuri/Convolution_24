/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Re_header from "./components/Responsive/Header/Re_header";
import Hero from "./components/Body/Hero";
import Footer from "./components/Footer/Footer";
import Re_hero from "./components/Responsive/Body/Re_hero";
import Re_footer from "./components/Responsive/Footer/Re_footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Re_dashboard from "./components/Responsive/Dashboard/Re_dashboard";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {windowWidth >= 1000 ? (
          <>
            <Header />
            <Router>
              <Routes>
                <Route path="/dashboard" element={<Re_dashboard />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Hero />} />
              </Routes>
            </Router>
            {/* <Hero /> */}
            <Footer />
          </>
        ) : (
          <>
            <Re_header />
            <Re_hero />
            <Re_footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
