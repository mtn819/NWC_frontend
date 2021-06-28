import React from 'react'

import toform from './res/toform.png';

function Splash() {
  return (
    <div className="home_splash">
    
      <img className="home_splash_img" src={toform}/>

      <div className="home_splash_card">
        <h3 className="home_splash_cardHeading">Sharing Stories from 1977</h3>
        <div className="home_splash_cardHr"></div>
        <p className="home_splash_cardContent">PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
      </div>
    
    </div>
  )
}

export default Splash
