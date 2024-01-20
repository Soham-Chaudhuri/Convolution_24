import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../TeamReg/Team_reg.css";
import { app } from "../firebase";
import { getDatabase, ref, set , update } from "firebase/database";
const db = getDatabase(app);
function Team_reg({user}) {
  const navigate = useNavigate();
  const [team_leader, setTeam_leader] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [member1, setMember1] = useState(null);
  const [member2, setMember2] = useState(null);
  const [member3, setMember3] = useState(null);

  const eventName = useParams();
  // console.log(eventName.event);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const dataEntry = () => {
    try {
      
      if(team_leader!==null && teamName!==null && team_leader!=="" && teamName!=="" && (member1!==null) && (member1!=="")){

        set(ref(db, `events/${eventName.event}/${teamName}`), {
          Team_Leader: team_leader,
          Member1: member1,
          Member2: member2,
          Member3: member3,
        });
        scrollToTop();
          toast.success("Registration successful!", { autoClose: 3200, theme:"dark" });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
  
          update(ref(db, `users/${user.email.replace(/\./g, "_")}`), {
            [eventName.event] : true,
          });
      }
      else{
        toast.error("Registration failed.",{
          autoClose: 3200,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed.",{
        theme: "dark",
      });
    }
  };

  return (
    <>
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
              onChange={(e) => {setMember1(e.target.value)}}
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
      <ToastContainer theme="dark"/>
    </>
  );
}

export default Team_reg;
