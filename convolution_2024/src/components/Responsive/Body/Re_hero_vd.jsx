import React from 'react'
import Re_video from "../../assets/Coming Soon.mp4";
import "../Body/Re_hero_vd.css"


function Re_hero_vd() {
  return (
    <>
      <div className="Re_hero_video py-[3rem] px-[1.75rem]">
      <video className="video" loop autoPlay muted playsInline >
          <source src={Re_video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Re_hero_vd
