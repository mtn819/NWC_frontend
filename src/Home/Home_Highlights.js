import React from 'react';
import Home_Highlights_Item from './Home_Highlights_Item';
import home_highlights_item1 from '../res/home_highlights_item1.svg';

function Home_Highlights() {
  return (
    <div className="home_highlights">
      <div className="home_highlights_card">
        <div className="home_highlights_card_heading">
          SITE HIGHLIGHTS
        </div>
        <div className="home_highlights_carousel">
          <Home_Highlights_Item imgSrc={home_highlights_item1} heading="ARTICLE/PAGE" content="all work and no play makes jack a dull boy"/>
          <Home_Highlights_Item imgSrc={home_highlights_item1} heading="ARTICLE/PAGE" content="all work and no play makes jack a dull boy" active={true}/>
          <Home_Highlights_Item imgSrc={home_highlights_item1} heading="ARTICLE/PAGE" content="all work and no play makes jack a dull boy"/>
        </div>
        <div className="home_highlights_carousel_trackers">
          <div className="home_highlights_carousel_tracker"></div>
          <div className="home_highlights_carousel_tracker"></div>
          <div className="home_highlights_carousel_tracker"></div>
          <div className="home_highlights_carousel_tracker"></div>
        </div>
      </div>
    </div>
  )
}

export default Home_Highlights
