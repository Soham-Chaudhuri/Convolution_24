/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Re_header from "./components/Responsive/Header/Re_header";
import Hero from "./components/Body/Hero";
import Lhero from "./components/Body/Lhero";
import Footer from "./components/Footer/Footer";
import Re_hero from "./components/Responsive/Body/Re_hero";
import Re_lhero from "./components/Responsive/Body/Re_lhero";
import Re_footer from "./components/Responsive/Footer/Re_footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Re_dashboard from "./components/Responsive/Dashboard/Re_dashboard";
import Loader from "./Loader";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./components/firebase";
import Team_reg from "./components/TeamReg/Team_reg";
import Algohero from "./Events/Algomaniac/Algohero";
import Re_Algohero from "./Events/Algomaniac/Responsive/Body/Re_Algohero";
const auth = getAuth(app);

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <div>
          {windowWidth >= 1000 ? (
            <>
              {/* <Header /> */}
              <Router>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={<Dashboard user={user} />}
                  />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/reg/:event"
                    element={<Team_reg user={user} />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Hero />} />

                  <Route path="/profile" element={<Lhero user={user} />} />
                  <Route path="/events/algomaniac" element={<Algohero />} />
                </Routes>
              </Router>

              {/* <Footer /> */}
            </>
          ) : (
            <>
              {/* <Re_header /> */}
              <Router>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={<Re_dashboard user={user} />}
                  />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/reg/:event"
                    element={<Team_reg user={user} />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Re_hero />} />
                  <Route path="/profile" element={<Re_lhero user={user} />} />
                  <Route path="/events/algomaniac" element={<Re_Algohero/>} />
                </Routes>
              </Router>
              
              {/* <Re_footer /> */}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
