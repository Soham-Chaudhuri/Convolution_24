/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Re_header from "./components/Responsive/Header/Re_header";
import Hero from "./components/Body/Hero";

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
      <div>{windowWidth >= 1000 ? (<><Header /><Hero /></>) : (<><Re_header /></>)}</div>
    </>
  );
}

export default App;
