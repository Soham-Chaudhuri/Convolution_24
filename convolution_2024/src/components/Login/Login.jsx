/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
function Login() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // useEffect(() => {
  //   scrollToTop();
  // }, []);
  const signinUser = () => {
    signInWithEmailAndPassword(auth, mail, password)
      .then((value) => {
        console.log("Success");
        scrollToTop();
        toast.success("Login successful!", { autoClose: 3200, theme: "dark" });
        setTimeout(() => {
          navigate(`/profile/${value.user.uid}`);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed. Please check your credentials.", {
          theme: "dark",
        });
      });
  };

  return (
    <>
    {/* {scrollToTop()} */}
      <div className="flex flex-col items-center justify-center  py-[60px] form_signup_body h-[100vh]">
        <h1 className="text-center pt-3 pb-3 form_heading">LOGIN</h1>
        <span className="form_underline"></span>
        <div className="w-[75vw] p-4">
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
              <button className="form_button" onClick={signinUser}>
                Login
              </button>
              {/* <button className="form_button">Google Sign In</button> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Login;
