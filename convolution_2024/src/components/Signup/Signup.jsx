import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "../Signup/Signup.css";

import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCpassword] = useState(null);
  const [phnumber, setphNumber] = useState(null);
  const [college, setCollege] = useState(null);
  const [branch, setBranch] = useState(null);
  const [year, setYear] = useState(null);

  const sendWelcomeEmail = () => {
    const templateParams = {
      mail: mail,
      name: name,
    };

    emailjs
      .send(
        "service_tpy2avm",
        "template_61yi17j",
        templateParams,
        "PUkw79pWv5_JpHXX-"
      )

      // .send(
      //   "service_xvsw9ej",
      //   "template_ju83qrd",
      //   templateParams,
      //   "IGbvuzMK9_y4lpaDb"
      // )

      .then((response) => {
        console.log("Welcome email sent:", response);
      })
      .catch((error) => {
        console.error("Error sending welcome email:", error);
      });
  };

  const validateAndSetMail = (value) => {
    const lowerCaseEmail = value.toLowerCase();
    setMail(lowerCaseEmail);
    return lowerCaseEmail;
  };

  const dataEntry = () => {
    set(ref(db, `users/${mail.replace(/\./g, "_")}`), {
      name: name,
      college: college,
      branch: branch,
      year: year,
      number: phnumber,
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
      behavior: "smooth",
    });
  };

  const singUpUser = () => {
    if (
      !name ||
      !college ||
      !branch ||
      !year ||
      !phnumber ||
      !mail ||
      !password ||
      !cpassword
    ) {
      toast.error("Please fill in all required fields", {
        theme: "dark",
      });
      return;
    }

    if (mail !== validateAndSetMail(mail)) {
      toast.error("Email should be in lowercase", {
        theme: "dark",
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        theme: "dark",
      });
      return;
    }

    if (phnumber.length < 10) {
      toast.error("Please enter the correct phone number", {
        theme: "dark",
      });
      return;
    }

    if (password !== cpassword) {
      toast.error("Password doesn't match", {
        theme: "dark",
      });
      return false;
    }
    createUserWithEmailAndPassword(auth, mail, password)
      .then((value) => {
        console.log(value);
        dataEntry();
        scrollToTop();
        toast.success("Signup successful!", { autoClose: 4200, theme: "dark" });

        sendWelcomeEmail();
        setTimeout(() => {
          navigate(`/profile/${value.user.uid}`);
        }, 3000);
        toast.info("Heads up! Sign-up email sent. Check your inbox!", {
          autoClose: 4200,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.error("Signup failed", err);

        if (err.code === "auth/email-already-in-use") {
          toast.error("Email is already in use", {
            theme: "dark",
          });
        } else {
          toast.error("Signup failed. Please try again.", {
            theme: "dark",
          });
        }
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
              required
            />

            <input
              type="text"
              placeholder="College..."
              value={college}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setCollege(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Branch..."
              value={branch}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setBranch(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Graduation Year..."
              value={year}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setYear(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone..."
              value={phnumber}
              className="form-input h-14  p-6 form_place form_text"
              pattern="[0-9]*"
              maxLength="10"
              onChange={(e) => setphNumber(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Email..."
              value={mail}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setMail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password..."
              value={password}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password..."
              value={cpassword}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <div className="py-5">
              <button className="form_button mx-auto " onClick={singUpUser}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Signup;
