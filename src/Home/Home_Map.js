import React from 'react'
import Home_InteractiveMap from './Home_InteractiveMap';

function Home_Map({content}) {
  return (
    <>
    <div className="home_map">
      <div className="home_map_card">
        <div className="home_map_card_heading">Interactive Map</div>
        <div className="home_map_card_hr"></div>
        <div className="home_map_card_content"><bold>
          {content}
          All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.
        </bold></div>
      </div>
    </div>
    <Home_InteractiveMap/>
    </>
  )
}

export default Home_Map
