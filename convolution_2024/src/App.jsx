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
import Frameshero from "./Events/24frames/Frameshero";
import Aboltabolhero from "./Events/Aboltabol/Aboltabolhero";
import Circuisticshero from "./Events/Circuistics/Circuisticshero";
import Sparkhackhero from "./Events/Sparkhack/Sparkhackhero";
import Decisiahero from "./Events/Decisia/Decisiahero";
import Eurekahero from "./Events/Eureka/Eurekahero";
import Inquizzitivehero from "./Events/Inquizzitive/Inquizzitivehero";
import Papierhero from "./Events/Papier/Papierhero";
import Re_Frameshero from "./Events/24frames/Responsive/Body/Re_Frameshero"
import Re_Aboltabolhero from "./Events/Aboltabol/Responsive/Body/Re_Aboltabolhero"
import Re_Circuisticshero from "./Events/Circuistics/Responsive/Body/Re_Circuisticshero"
import Re_Decisiahero from "./Events/Decisia/Responsive/Body/Re_Decisiahero"
import Re_Eurekahero from "./Events/Eureka/Responsive/Body/Re_Eurekahero"
import Re_Inquizzitivehero from "./Events/Inquizzitive/Responsive/Body/Re_Inquizzitivehero"
import Re_Papierhero from "./Events/Papier/Responsive/Body/Re_Papierhero"
import Re_Sparkhackhero from "./Events/Sparkhack/Responsive/Body/Re_Sparkhackhero"
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
                    path="/dashboard/:userid"
                    element={<Dashboard user={user} />}
                  />
                  <Route path="/signup" element={<Signup/>} />
                  <Route
                    path="/reg/:event"
                    element={<Team_reg user={user} />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Hero />} />

                  <Route path="/profile/:userid" element={<Lhero user={user} />} />
                  <Route path="/events/algomaniac" element={<Algohero />} />
                  <Route path="/events/24frames" element={<Frameshero />} />
                  <Route path="/events/aboltabol" element={<Aboltabolhero />} />
                  <Route
                    path="/events/circuistics"
                    element={<Circuisticshero />}
                  />
                  <Route path="/events/sparkhack" element={<Sparkhackhero />} />
                  <Route path="/events/papier" element={<Papierhero />} />
                  <Route path="/events/eureka" element={<Eurekahero />} />
                  <Route path="/events/decisia" element={<Decisiahero />} />
                  <Route
                    path="/events/inquizzitive"
                    element={<Inquizzitivehero />}
                  />
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
                    path="/dashboard/:userid"
                    element={<Re_dashboard user={user} />}
                  />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/reg/:event"
                    element={<Team_reg user={user} />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Re_hero />} />
                  <Route path="/profile/:userid" element={<Re_lhero user={user} />} />
                  <Route path="/events/algomaniac" element={<Re_Algohero />} />
                  <Route path="/events/24frames" element={<Re_Frameshero />} />
                  <Route path="/events/aboltabol" element={<Re_Aboltabolhero />} />
                  <Route
                    path="/events/circuistics"
                    element={<Re_Circuisticshero />}
                  />
                  <Route path="/events/sparkhack" element={<Re_Sparkhackhero />} />
                  <Route path="/events/papier" element={<Re_Papierhero />} />
                  <Route path="/events/eureka" element={<Re_Eurekahero />} />
                  <Route path="/events/decisia" element={<Re_Decisiahero />} />
                  <Route
                    path="/events/inquizzitive"
                    element={<Re_Inquizzitivehero />}
                  />
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
