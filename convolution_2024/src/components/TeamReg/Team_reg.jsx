import React, { useState, useEffect } from "react";
import { Navigate, useNavigate , useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../TeamReg/Team_reg.css";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase(app);
function Team_reg() {
  const navigate = useNavigate();
  const [team_leader, setTeam_leader] = useState("");
  const [teamName, setTeamName] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");

  const eventName = useParams();
  // console.log(eventName.event);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const dataEntry = () => {
    try {
      
      set(ref(db, `events/${eventName.event}/${teamName}`), {
        Team_Leader: team_leader,
        Member1: member1,
        Member2: ((member2.length>0)?(member2):("N/A")),
        Member3: ((member3.length>0)?(member3):("N/A")),
      });
      scrollToTop();
        toast.success("Registration successful!", { autoClose: 3200 });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(`Registration failed.`);
    }
  };

  return (
    <>
      {/* {error && <Error />} */}
      {/* {success && <Success message="Registration successful" />} */}
      <div className="flex flex-col items-center justify-center  py-[60px] form_signup_body">
        <h1 className="text-center pt-3 pb-3 form_heading">TEAM DETAILS</h1>
        <span className="form_underline"></span>
        <div className="w-[75vw]  p-4">
          <div className="flex flex-col text-center gap-6  py-8">
            <input
              type="text"
              placeholder="Team Name..."
              value={teamName}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setTeamName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Team Leader..."
              value={team_leader}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setTeam_leader(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Member 1..."
              value={member1}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setMember1(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Member 2..."
              value={member2}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setMember2(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Member 3..."
              value={member3}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setMember3(e.target.value)}
              required
            />
            <div className="py-5">
              <button className="form_button mx-auto " onClick={dataEntry}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Team_reg;
