import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Signup/Signup.css";
import Success from "../Successerror/Success";
import Error from "../Successerror/Error";

function Signup() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === cpassword) {
      try {
        sendDataToServer();
        setSuccess(true);
        setName("");
        setMail("");
        setPassword("");
        setCpassword("");
        setCollege("");
        setBranch("");
        setYear("");
        toast.success("Signup successful", {
          autoClose: 3200,
          onClose: () => {
            setTimeout(() => {
              navigate(`/`);
            }, 2000);
          },
        });
      } catch (error) {
        console.log(error);
        setError(true);
        toast.error("Password does not match");
      }
    } else {
      // alert("Passwords do not match");
      toast.error("Password does not match");
    }
  };
  const sendDataToServer = () => {
    const dataToSend = {
      email: mail,
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
    };

    fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // navigate(`/dashboard`);
        // navigate(`/`);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
              <button className="form_button mx-auto " onClick={handleSubmit}>
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
