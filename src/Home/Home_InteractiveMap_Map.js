import React from 'react'
import home_maptick from '../res/home_maptick.png';

//a point is given a [name, x, y]
function Home_InteractiveMap_Map({pointsOfInterest, backgroundImage}) {
  return (
    <div className="home_interactiveMap_map">
      <div className="home_interactiveMap_map_scroll">
        <div className="home_interactiveMap_map_header">POINTS OF INTEREST</div>
        <div className="home_interactiveMap_map_names">
          {
            pointsOfInterest
              .map(p => 
                <p className="home_interactiveMap_map_names_poi">{p[0]}</p>
              )
          }
        </div>
      </div>
      <div className="home_interactiveMap_map_points">
        {
          pointsOfInterest
            .map(p =>
              <img src={home_maptick} className="home_interactive_map_points_poi" style={{
                marginLeft: `${p[1]}px`,
                marginTop: `${p[2]}px`,
              }}/>  
            )
        }
      </div>
    </div>
  )
}

export default Home_InteractiveMap_Map
