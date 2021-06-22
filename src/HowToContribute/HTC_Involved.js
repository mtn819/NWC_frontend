import React from 'react'

import socmedic from '../res/socmedic.png';
import HTC_Involved_Card from './HTC_Involved_Card';
import home_toform from '../res/home_toform.svg';

function HTC_Involved() {
  return (
    <div className="htc_involved">
      <div className="htc_involved_heading">
        <h3 className="htc_involved_heading_txt">HOW TO GET INVOLVED</h3>
        <img src={socmedic} className="htc_involved_heading_img"/>
      </div>
      <div className="htc_involved_cards">
        <HTC_Involved_Card thumbnail={home_toform} heading={"Heading"} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>
        <HTC_Involved_Card thumbnail={home_toform} heading={"Heading"} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>
        <HTC_Involved_Card thumbnail={home_toform} heading={"Heading"} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>
        <HTC_Involved_Card thumbnail={home_toform} heading={"Heading"} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>  
      </div>
    </div>
  )
}

export default HTC_Involved
