import React, { useState } from 'react'
import home_maptick from '../res/home_maptick.png';

//a point is given a [name, x, y]
function Home_InteractiveMap_Map({pointsOfInterest, background}) {
  const [popup, setPopup] = useState(false);

  return (
    <div className={"home_interactiveMap_map" + " " + (popup ? "bgGray" : "")}>
      <div className="home_interactiveMap_map_scroll">
        <div className="home_interactiveMap_map_header">POINTS OF INTEREST</div>
        <div className="home_interactiveMap_map_names">
          {
            pointsOfInterest
              .map(p => 
                <p
                  className="home_interactiveMap_map_names_poi"
                  onClick={e=>setPopup(p[0])}
                >{p[0]}</p>
              )
          }
        </div>
      </div>
      <div className={`home_interactiveMap_map_points ${background}`}>
        {(popup !== false ? <>
          <div className="home_interactiveMap_map_popup">
            <div className="home_interactiveMap_map_popupTop">
                <div
                  className="back2map"
                  onClick={e=>setPopup(false)}
                >
                  &lt;- BACK TO MAP
                </div>
                <div className="graybox"></div>
                
                <div className="images">
                  <div className="graybox_small"></div>
                  <div className="graybox_small"></div>
                  <div className="graybox_small"></div>
                </div>
            </div>
            <div className="title">
              TITLE
            </div>
            <div className="location">
              {popup}
            </div>
            <div className="content">
              ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. 
            </div>
          </div>
        </> :
        
          pointsOfInterest
            .map(p =>
              <img src={home_maptick} className="home_interactive_map_points_poi" style={{
                marginLeft: `calc(${p[1]}*var(--xUnit))`,
                marginTop: `calc(${p[2]}*var(--xUnit))`,
              }}
              onClick={e=>setPopup(p[0])}
              />  
            )
        )}
      </div>
    </div>
  )
}

export default Home_InteractiveMap_Map
