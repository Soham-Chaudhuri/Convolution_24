import React, { useState, useEffect } from "react";
import "../Signup/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  function submit() {
    if (password === cpassword) {
      const user = [name, mail, password, college, branch, year];

      console.log(user);
    } else {
      alert("you banchod cant even fill a form properly");
    }
  }

  return (
    <>
      {}
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
              <button className="form_button mx-auto " onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
