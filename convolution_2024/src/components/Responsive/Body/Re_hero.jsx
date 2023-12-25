import React from 'react';
import "../Body/Re_hero.css";
// import thunder from "../../assets/Thunder.png";

function Re_hero() {
  return (
    <>
      <div className="Re_hero_bg p-3">
        <div className="flex flex-col h-screen">
          <div className="flex flex-col-reverse Re_gapping gap-[3.65rem]">
            <div className="m-4 Re_hero_heading_1_div">
              <span className="Re_hero_heading_1 text-shadow-md">
                JUEE STUDENTS' FORUM
              </span>
              <br/>
              <span className="Re_hero_heading_2 text-shadow-md">
                CONVOLUTION 9.0
              </span>
              <br/>
              <span className="Re_hero_heading_3">
                The Ninth Edition of Annual Technical Meet
              </span>
              <div className="flex Re_hero_btn">
                <button className="Re_hero_btn_1">SignUp</button>
                <button className="Re_hero_btn_2">Login</button>
              </div>
            </div>
            <div className="Re_hero_thunder">
              {/* <img src={thunder} alt="" className="Re_hero_thunder_img" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Re_hero;