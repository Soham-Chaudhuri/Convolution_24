import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../TeamReg/Team_reg.css";
import { app } from "../firebase";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import rules from "../../components/assets/rules.pdf";
const db = getDatabase(app);
function Team_reg({ user }) {
  const navigate = useNavigate();
  const [team_leader, setTeam_leader] = useState(null);
  const [tl1email, setTl1email] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [member1, setMember1] = useState(null);
  const [m1email, setM1email] = useState(null);
  const [member2, setMember2] = useState(null);
  const [m2email, setM2email] = useState(null);
  const [member3, setMember3] = useState(null);
  const [m3email, setM3email] = useState(null);
  const [tl, setTl] = useState(false);
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const uid = uuid();

  const [agreeTerms, setAgreeTerms] = useState(false);

  const eventName = useParams();
  // console.log(eventName.event);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const hyperArr = [
    {
      id: 1,
      hyper: "/events/:event",
    },
  ];

  const dataEntry = async () => {
    try {
      if (
        team_leader !== null &&
        teamName !== null &&
        team_leader !== "" &&
        teamName !== "" &&
        member1 !== null &&
        member1 !== "" &&
        m1email !== null &&
        m1email !== "" &&
        agreeTerms !== false
      ) {
        const checkUser = async (userRef, errorMessage) => {
          return new Promise((resolve, reject) => {
            onValue(userRef, (snapshot) => {
              const data = snapshot.val();
              if (data === null) {
                toast.error(`${errorMessage} : No profile found.`, {
                  autoClose: 3200,
                  theme: "dark",
                });
                reject();
              }
              if (data[eventName.event]) {
                toast.error(`${errorMessage} : Already Registered.`, {
                  autoClose: 3200,
                  theme: "dark",
                });
                reject();
              }
              resolve();
            });
          });
        };
        if (!agreeTerms) {
          toast.error("please agree");
        }
        await checkUser(
          ref(db, `users/${tl1email.replace(/\./g, "_")}`),
          "Team Leader"
        );
        await checkUser(
          ref(db, `users/${m1email.replace(/\./g, "_")}`),
          "Member 1"
        );
        if (member2 !== null && member2 !== "") {
          await checkUser(
            ref(db, `users/${m2email.replace(/\./g, "_")}`),
            "Member 2"
          );
        }
        if (member3 !== null && member3 !== "") {
          await checkUser(
            ref(db, `users/${m3email.replace(/\./g, "_")}`),
            "Member 3"
          );
        }

        console.log(m1);

        set(ref(db, `events/${eventName.event}/${uid}`), {
          Team_Name: teamName,
          Team_Leader: team_leader,
          Member1: member1,
          Member2: member2,
          Member3: member3,
        });

        scrollToTop();
        toast.success("Registration successful!", {
          autoClose: 3200,
          theme: "dark",
        });
        setTimeout(() => {
          navigate(`/dashboard/${user.uid}`);
        }, 0);

        update(ref(db, `users/${tl1email.replace(/\./g, "_")}`), {
          [eventName.event]: true,
        });
        update(ref(db, `users/${m1email.replace(/\./g, "_")}`), {
          [eventName.event]: true,
        });
        if (member2 !== null && member2 !== "") {
          update(ref(db, `users/${m2email.replace(/\./g, "_")}`), {
            [eventName.event]: true,
          });
        }
        if (member3 !== null && member3 !== "") {
          update(ref(db, `users/${m3email.replace(/\./g, "_")}`), {
            [eventName.event]: true,
          });
        }
      } else {
        toast.error(
          `Please affirm that you have read the rules and regulations of this event. `,
          {
            autoClose: 3200,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed.", {
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
              placeholder="Email..."
              value={tl1email}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setTl1email(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Member 1..."
              value={member1}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => {
                setMember1(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Email..."
              value={m1email}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setM1email(e.target.value)}
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
              placeholder="Email..."
              value={m2email}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setM2email(e.target.value)}
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
            <input
              type="text"
              placeholder="Email..."
              value={m3email}
              className="form-input h-14  p-6 form_place form_text"
              onChange={(e) => setM3email(e.target.value)}
              required
            />

            <div className="py-5 flex flex-col gap-6">
              <div className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  style={{ width: "19px", height: "19px" }}
                />
                <label className="checkpara px-3">
                  I affirm that I have read the
                  <a
                    href={rules}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="checkpara px-2 text-[#f76932] cursor-pointer"
                  >
                    rules and regulations
                  </a>
                  of this event and want to proceed.
                </label>
              </div>

              <button
                className={`form_button mx-auto ${
                  !agreeTerms ? "disabled" : ""
                }`}
                onClick={() => {
                  scrollToTop();
                  dataEntry();
                }}
                // disabled={!agreeTerms}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Team_reg;
