import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Signup/Signup.css";

import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const dataEntry = () => {
    set(ref(db, `users/${mail.replace(/\./g, "_")}`), {
      name: name,
      college: college,
      branch: branch,
      year: year,
      papier: false,
      eureka: false,
      abol_tabol: false,
      decisia: false,
      circuistics: false,
      inquizzitive: false,
      spark_hack: false,
      algomaniac: false,
      _frames: false,
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const singUpUser = () => {
    createUserWithEmailAndPassword(auth, mail, password)
    .then((value) => {
      console.log(value);
      dataEntry();
      scrollToTop();
      toast.success("Signup successful!", { autoClose: 3200 });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      toast.error(`Signup failed . Invalid email address or weak password`);
      
    });
  };

  return (
    <>
      {/* {error && <Error />} */}
      {/* {success && <Success message="Registration successful" />} */}
      <div className="flex flex-col items-center justify-center  py-[60px] form_signup_body">
        <h1 className="text-center pt-3 pb-3 form_heading">YOUR DETAILS</h1>
        <span className="form_underline"></span>
        <div className="w-[75vw]  p-4">
          <div className="flex flex-col text-center gap-6  py-8">
            <input
              type="text"
              placeholder="Name..."
              value={name}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="College..."
              value={college}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setCollege(e.target.value)}
            />

            <input
              type="text"
              placeholder="Branch..."
              value={branch}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setBranch(e.target.value)}
            />

            <input
              type="text"
              placeholder="Year..."
              value={year}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setYear(e.target.value)}
            />

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

            <input
              type="password"
              placeholder="Confirm Password..."
              value={cpassword}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setCpassword(e.target.value)}
            />
            <div className="py-5">
              <button className="form_button mx-auto " onClick={singUpUser}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
