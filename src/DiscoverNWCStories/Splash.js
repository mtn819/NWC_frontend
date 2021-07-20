import React from 'react';
import fem from './res/fem.png';
import button from './res/button.png';

function Splash() {
  return (
    <div className="discover_splash">
      <div className="discover_splash_button"><img src={button}/></div>
      <div className="discover_splash_card">
        <p>
          "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY."
        </p>
      </div>
      <div className="discover_splash_fem"><img src={fem}/></div>
    </div>
  )
}

export default Splash
