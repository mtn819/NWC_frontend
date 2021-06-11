import React from 'react'

import Home_ExploreLink from './Home_ExploreLink';


import home_explore_chicks from '../res/home_explore_chicks.svg';
import home_explore_but_discovernwcstories from '../res/home_explore_but_discovernwcstories.svg';
import home_explore_but_howtocontribute from '../res/home_explore_but_howtocontribute.svg';
import home_explore_but_mappingthenwc from '../res/home_explore_but_mappingthenwc.svg';
import home_explore_but_whythenwcmatters from '../res/home_explore_but_whythenwcmatters.svg';

function Home_Explore({content}) {
  return (
    <div className="home_explore">
      <div className="home_explore_card_container">
        <div className="home_explore_card">
          <div className="home_explore_card_heading">EXPLORE THE SITE</div>
          <div className="home_explore_card_hr1"></div>
          <div className="home_explore_card_hr2"></div>
          <div className="home_explore_card_content">{content}</div>
        </div>
      </div>
      <img src={home_explore_chicks} className="home_explore_chicks"/>
      <div className="home_explore_links">
        <div className="home_explore_links_row">
          <Home_ExploreLink imgSrc={home_explore_but_discovernwcstories} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}></Home_ExploreLink>
          <Home_ExploreLink imgSrc={home_explore_but_howtocontribute} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}></Home_ExploreLink>
        </div>
        <div className="home_explore_links_row">
          <Home_ExploreLink imgSrc={home_explore_but_mappingthenwc} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}></Home_ExploreLink>
          <Home_ExploreLink imgSrc={home_explore_but_whythenwcmatters} content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}></Home_ExploreLink>
        </div>
      </div>
    </div>
  )
}

export default Home_Explore
