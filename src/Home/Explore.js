import React from 'react'
import explorechicks from './res/explorechicks.png';
import button1 from './res/button1.png';
import button2 from './res/button2.png';
import button3 from './res/button3.png';
import button4 from './res/button4.png';

import dots1 from './res/dots1.png';
import dots2 from './res/dots2.png';
import dots3 from './res/dots3.png';
import dots4 from './res/dots4.png';


function Explore() {
  return (
    <div className="home_explore">
      <div className="home_explore_card">
        <h3 className="home_explore_cardHeading">EXPLORE THE SITE</h3>
        <div className="home_explore_cardHr"></div>
        <p className="home_explore_cardContent">
        All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. 
        </p>
      </div>

      <div className="home_explore_chicks">
        <img className="home_explore_chicksImg" src={explorechicks}/>
        <div className="home_explore_chicksCredit">"PHOTO" BY JANE DOE</div>
      </div>

      <div className="home_explore_buttons">

        <img className="home_explore_dots home_explore_dots1" src={dots1}/>
        <img className="home_explore_dots home_explore_dots2" src={dots2}/>
        <img className="home_explore_dots home_explore_dots3" src={dots3}/>
        <img className="home_explore_dots home_explore_dots4" src={dots4}/>

        <div className="home_explore_buttonRow">

          <div className="home_explore_button">
            <img className="home_explore_buttonImg" src={button1}/>
            <p className="home_explore_buttonText">All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
          </div>

          <div className="home_explore_button">
            <img className="home_explore_buttonImg" src={button2}/>
            <p className="home_explore_buttonText">All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
          </div>

        </div>

        <div className="home_explore_buttonRow home_explore_row2">

          <div className="home_explore_button">
            <img className="home_explore_buttonImg" src={button3}/>
            <p className="home_explore_buttonText">All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
          </div>

          <div className="home_explore_button">
            <img className="home_explore_buttonImg" src={button4}/>
            <p className="home_explore_buttonText">All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Explore
