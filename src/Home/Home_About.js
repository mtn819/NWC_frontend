import React from 'react'

import home_about_chicks from '../res/home_about_chicks.svg';

function Home_About({content}) {
  return (
    <div className="home_about">
      <div className="home_about_card">
        <div className="home_about_card_playnice">
        <div className="home_about_card_heading">
          About the Project
        </div>
        <div className="home_about_card_semiline"></div>
        <div className="home_about_card_content">
          {content}
        </div>
        </div>
      </div>
      <img src={home_about_chicks} className="home_about_chicks"/>
    </div>
  )
}

export default Home_About
