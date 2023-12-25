import React from 'react'
import Re_video from "../../assets/Dwai.mp4";
import "../Body/Re_hero_vd.css"


function Re_hero_vd() {
  return (
    <>
      <div className="Re_hero_video py-[3rem] px-[1rem]">
        <video className="video" controls loop>
          <source src={Re_video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Re_hero_vd
