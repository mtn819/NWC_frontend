import React from 'react'

import home_toform from '../res/home_toform.svg';

function Home_Splash() {
  return (
    <div className="home_splash">
      <img src={home_toform} className="home_splash_toform"/>
      <div className="home_splash_card">
        <div className="home_splash_card_heading">
          Sharing Stories from 1977
        </div>
        <hr className="home_splash_card_hr"/>
        <div className="home_splash_card_content">
          PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP
        </div>
      </div>
    </div>
  )
}

export default Home_Splash
