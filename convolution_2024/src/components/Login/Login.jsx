/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  
  const askServer = async () => {
    const dataToSend = {
      mail,
      password,
    };
  
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
  
      // Wait for the JSON data to be parsed
      const data = await response.json();
  
      console.log(data);
      if(data) {navigate("/")}
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  
  

  return (
    <>
      <div className="flex flex-col items-center justify-center  py-[60px] form_signup_body">
        <h1 className="text-center pt-3 pb-3 form_heading">LOGIN</h1>
        <span className="form_underline"></span>
        <div className="w-[75vw]  p-4">
          <div className="flex flex-col text-center gap-6  py-8">
            <input
              type="text"
              placeholder="Email..."
              value={mail}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setMail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password..."
              value={password}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="py-5 flex text-center justify-center gap-[40px] flex-wrap">
              <button className="form_button" onClick={askServer}>Login</button>
              {/* <button className="form_button">Google Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
