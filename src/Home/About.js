import React from 'react'
import aboutchicks from './res/aboutchicks.png';

function About({content}) {
  const fillerString =
    <>
      <p>All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
      <br/>
      <p>All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
    </>

  return (
    <div className="home_about">
      <div className="home_about_card">
        <div className="home_about_cardHeading">ABOUT THE PROJECT</div>
        <div className="home_about_cardHr"></div>
        <div className="home_about_cardContent">{content.length > 0 ? content : fillerString}</div>
      </div>
      <img className="home_about_img" src={aboutchicks}/>
    </div>
  )
}

export default About
