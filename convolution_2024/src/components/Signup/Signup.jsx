import React, { useState, useEffect } from "react";
import "../Signup/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  function submit() {
    if (password === cpassword) {
      const user = [name, mail, password, branch, year];

      console.log(user);
    } else {
      console.log("you banchod");
    }
  }

  return (
    <>
      <div>
        <div>
          <h1>SIGNUP</h1>

          <input
            type="text"
            placeholder="name"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="mail"
            value={mail}
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="confirm password"
            value={cpassword}
            className="form-control"
            onChange={(e) => setCpassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="branch"
            value={branch}
            className="form-control"
            onChange={(e) => setBranch(e.target.value)}
          />

          <input
            type="text"
            placeholder="year"
            value={year}
            className="form-control"
            onChange={(e) => setYear(e.target.value)}
          />

          <button onClick={submit}>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
