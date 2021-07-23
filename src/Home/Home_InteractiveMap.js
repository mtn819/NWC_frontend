import React, { useState } from 'react'
import home_map_downtown from '../res/home_map_downtown.svg';
import Home_InteractiveMap_Map from './Home_InteractiveMap_Map';

function Home_InteractiveMap() {
  //name, x, y
  const pointsOfInterest = {
    "dt": [
      ['CITY HALL', 10, 20],
      ['CONVENTION HALL', 30, 50],
    ],
    "tw": [
    ],
    "museo": [
    ],
    "mag": [],
    "astro": [],
  };

  const [activeTab, setActiveTab] = useState(0);
  const [map, setMap] = useState('dt');

  return (
    <div className="home_interactiveMap">
      <div className="home_interactiveMap_card">
        <div className="home_interactiveMap_card_tabs">
          <div onClick={e => setMap('dt')} className={"home_interactiveMap_card_tab" + " " +
            (map== 'dt' ? "home_interactiveMap_card_tab--active" : "")}>DOWNTOWN</div>
          <div onClick={e => setMap('tw')} className={"home_interactiveMap_card_tab" + " " +
            (map== 'tw' ? "home_interactiveMap_card_tab--active" : "")}>THIRD WARD/UH</div>
          <div onClick={e => setMap('museo')} className={"home_interactiveMap_card_tab" + " " +
            (map== 'museo' ? "home_interactiveMap_card_tab--active" : "")}>MUSEUM DISTRICT</div>
          <div onClick={e => setMap('mag')} className={"home_interactiveMap_card_tab" + " " +
            (map== 'mag' ? "home_interactiveMap_card_tab--active" : "")}>MAGNOLIA PARK</div>
          <div onClick={e => setMap('astro')} className={"home_interactiveMap_card_tab" + " " +
            (map== 'astro' ? "home_interactiveMap_card_tab--active" : "")}>ASTRODOME</div>
        </div>
        {/**<div className="home_interactiveMap_card_map">

        </div>
        <div className="home_interactiveMap_card_poi">

        </div>*/}
        {/*<img src={home_map_downtown} className="home_interactiveMap_card_map"/>*/}
        <Home_InteractiveMap_Map pointsOfInterest={pointsOfInterest[map]} background={map}/>
      </div>
    </div>
  )
}

export default Home_InteractiveMap
