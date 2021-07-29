import React, { useState } from 'react'
import './Home.css';
import Map from './Map';

import dt from './res/dt.png';
import tw from './res/tw.png';
import museo from './res/museo.png';
import mag from './res/mag.png';
import astro from './res/astro.png';

import toform from './res/toform.png';
import aboutchicks from './res/aboutchicks.png';
import explorechicks from './res/explorechicks.png';
import button1 from './res/button1.png';
import button2 from './res/button2.png';
import button3 from './res/button3.png';
import button4 from './res/button4.png';

function Home() {
  const [currMap, setCurrMap] = useState("dt");

  const homeAbout_p1 = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";
  const homeAbout_p2 = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";
  const homeMap_text = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. "
  const homeExplore_text = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";
  const maps = {
    dt: {
      name: 'DOWNTOWN',
      mapImg: dt,
      points: [
        ["CITY HALL", 83.02, 69.72],
        ["CONVENTION HALL", 644.02, 28.66],
        ["HYATT HOTEL", 378.02, 128.12],
        ["RAMADA INN", 294.02, 179.69],
        ["SENECA FALLS SOUTH", 344.02, 210.48],
        ["TORCH RELAY", 436.02, 214.08],
        ["UNION STATION", 901.02, 403.85],
      ]
    },
    tw: {
      name: 'THIRD WARD/UH',
      mapImg: tw,
      points: [
        ["SOME POINT 1", 69, 420]
      ]
    },
    museo: {
      name: 'MUSEUM DISTRICT',
      mapImg: museo,
      points: [
        ["SOME POINT 2", 420, 69]
      ]
    },
    mag: {
      name: 'MAGNOLIA PARK',
      mapImg: mag,
      points: [
        ["SOME POINT 3", 500, 500]
      ]
    },
    astro: {
      name: 'ASTRODOME',
      mapImg: astro,
      points: [
        ["SOME POINT 4", 200, 200]
      ]
    },
  }

  


  return (
    <div className="home">

      {/**SPLASH */}
      <div className="homeSplash">

        <div className="homeSplash_toForm">
          <img src={toform}/>
        </div>

        <div className="homeSplash_card">
          <h3>Sharing Stories from 1977</h3>
          <div className="homeSplash_cardHr"></div>
          <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
        </div>

      </div>

      {/**ABOUT */}
      <div className="homeAbout">
        <div className="homeAbout_beigeBackdrop"></div>
        <div className="homeAbout_content">

          <div className="homeAbout_card">
            <div className="homeAbout_headerBackdrop"></div>
            <p className="homeAbout_header">ABOUT THE PROJECT</p>
            <div className="homeAbout_cardHr"></div>
            <p className="homeAbout_p1">{homeAbout_p1}</p>
            <p className="homeAbout_p2">{homeAbout_p2}</p>
          </div>

          <div className="homeAbout_chicks">
            <img src={aboutchicks}/>
            <div className="homeAbout_imgCred">
              <p>PHOTO BY JANE DOE</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="homeAbout_border"></div>
      
      {/**MAP */}
      <div className="homeMap">

        <div className="homeMap_card">
          <div className="homeMap_headerBackdrop"></div>
          <p className="homeMap_header">INTERACTIVE MAP</p>
          <div className="homeMap_cardHr"></div>
          <p className="homeMap_text">{homeMap_text}</p>
        </div>

        <div className="homeMap_tabs">
          {Object.keys(maps).map(m => (
            <div
              className={currMap === m ? "homeMap_tab--active" : ""}
              onClick={()=>setCurrMap(m)}
            >
              <p>{maps[m].name}</p>
            </div>
          ))}
        </div>
        <div className="homeMap_tabsHr"></div>

        <Map mapImg={maps[currMap].mapImg} points={maps[currMap].points}/>

      </div>

      {/**EXPLORE */}
      <div className="homeExplore">
        
        <div className="homeExplore_card">
          <div className="homeExplore_headerBackdrop"></div>
          <p className="homeExplore_header">EXPLORE THE SITE</p>
          <div className="homeExplore_hr"></div>
          <p className="homeExplore_text">{homeExplore_text}</p>
        </div>
        
        <div className="homeExplore_img">
          <img src={explorechicks}/>
        </div>
        <div className="homeExplore_imgSrc"><p>PHOTO BY JANE DOE</p></div>

        <div className="homeExplore_borderBot"></div>

      </div>

      {/**BUTTONS */}
      {/*<div className="homeButtons">
        <div className="homeButtons_button">
          <div className="homeButtons_buttonImg homeButtons_button1">

          </div>
        </div>
      </div>*/}

    </div>
  )
}

export default Home
