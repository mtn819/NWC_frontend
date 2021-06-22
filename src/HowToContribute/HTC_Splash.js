import React from 'react';

import {Row, Col} from 'react-bootstrap';
import home_explore_but_howtocontribute from '../res/home_explore_but_howtocontribute.svg';
import home_about_chicks from '../res/home_about_chicks.svg';

function HTC_Splash() {
  return (
    <div className="htc_splash">
      <img className="htc_splash_button" src={home_explore_but_howtocontribute}/>
      <div className="htc_splash_card">
        All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. 
      </div>
      <img className="htc_splash_chick" src={home_about_chicks}/>
    </div>
  )
}

export default HTC_Splash
