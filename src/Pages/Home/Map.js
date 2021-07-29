import React, { useState } from 'react'
import './Map.css';
import maptick from './res/maptick.png';

import Arrow from './Arrow';

// point format: [name, x, y]
function Map({mapImg, points}) {
  const popupImg = "https://www.htmlcsscolor.com/preview/gallery/CCC9C9.png";
  const popupFeed = [popupImg, popupImg, popupImg]
  const description = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";

  const [hovering, setHovering] = useState(false);
  const [popup, setPopup] = useState(false);

  return (
    <>
    {popup !== false ? <div className="homeMap_grayer" onClick={()=>setPopup(false)}></div> : ""}

    {/**LEFT SIDE */}
    <div className={"homeMap_map" + " " + (popup !== false ? "homeMap_map--grayed" : "")}>
      <div className="homeMap_poi">
        <p className="homeMap_poiHeader">
          POINTS OF INTEREST
        </p>
        {points.map(p => <p
          className={"homeMap_poiText" + " " + (hovering === p[0] ? "homeMap_poiText--hovering" : "")}
          onMouseEnter={() => setHovering(p[0])}
          onMouseLeave={() => setHovering(false)}
          onClick={() => setPopup(p[0])}
        >
          {p[0]}
        </p>)}
      </div>

      {/**RIGHT SIDE */}
      <div className="homeMap_interactive">
        <img className="homeMap_img" src={mapImg}/>

        {points.map(p => <div 
          className={
            "homeMap_dot" + " " +
            (hovering === p[0] ? "homeMap_dot--hovering" : "")}
          onMouseEnter={() => setHovering(p[0])}
          onMouseLeave={() => setHovering(false)}
          onClick={() => setPopup(p[0])}
          style={{
            marginLeft: `calc(${p[1]}*var(--xUnit))`,
            marginTop: `calc(${p[2]}*var(--xUnit))`
          }}
        >
          <img src={maptick}/>
          <div className="homeMap_dotLabel">{p[0]}</div>
        </div>)}
        
        {/**POPUP */}
        {popup !== false ? 
          <div className="homeMap_popup">
            <div className="homeMap_popupTop">
              <div 
                className="homeMap_popupBack"
                onClick={() => setPopup(false)}
              >
                <div className="homeMap_popupBackArrow">
                  <Arrow direction="left" color="#CCC9C9"/>
                </div>
                <p>BACK TO MAP</p>
              </div>
              <div className="homeMap_popupImg"><img src={popupImg}/></div>
              <div className="homeMap_popupSrc"><h3>SOURCE:</h3> <p>JACK</p></div>
              <div className="homeMap_popupFeed">
                <div className="homeMap_popupFeedLeft">
                  <Arrow direction="left" color="#2699FB"/>
                </div>
                {popupFeed.map(i => <div className="homeMap_popupFeedImg">
                  <img src={i}/>
                </div>)}
                <div className="homeMap_popupFeedRight">
                  <Arrow direction="right" color="#2699FB"/>
                </div>
              </div>
            </div>

            <div className="homeMap_popupTitle">TITLE</div>
            <div className="homeMap_popupLocation">{popup}</div>
            <div className="homeMap_popupDescription">
              <h4>DESCRIPTION</h4>
              <p>{description}</p>
            </div>
          </div>
        :""}
      </div>
    </div>
    </>
  )
}

export default Map