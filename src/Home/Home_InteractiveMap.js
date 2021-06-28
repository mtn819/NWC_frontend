import React from 'react'
import home_map_downtown from '../res/home_map_downtown.svg';
import Home_InteractiveMap_Map from './Home_InteractiveMap_Map';

function Home_InteractiveMap() {
  //name, x, y
  const pointsOfInterest = [
    ['CITY HALL', 10, 20],
    ['CONVENTION HALL', 30, 50],
  ];

  return (
    <div className="home_interactiveMap">
      <div className="home_interactiveMap_card">
        <div className="home_interactiveMap_card_tabs">
          <div className="home_interactiveMap_card_tab home_interactiveMap_card_tab--active">DOWNTOWN</div>
          <div className="home_interactiveMap_card_tab">THIRD WARD/UH</div>
          <div className="home_interactiveMap_card_tab">MUSEUM DISTRICT</div>
          <div className="home_interactiveMap_card_tab">MAGNOLIA PARK</div>
          <div className="home_interactiveMap_card_tab">ASTRODOME</div>
        </div>
        {/**<div className="home_interactiveMap_card_map">

        </div>
        <div className="home_interactiveMap_card_poi">

        </div>*/}
        {/*<img src={home_map_downtown} className="home_interactiveMap_card_map"/>*/}
        <Home_InteractiveMap_Map pointsOfInterest={pointsOfInterest} background={'filler'}/>
      </div>
    </div>
  )
}

export default Home_InteractiveMap
