import React from 'react';
import fem from './res/fem.png';
import button from './res/button.png';

function Splash() {
  return (
    <div className="discover_splash">
      <div className="discover_splash_button"><img src={button}/></div>
      <div className="discover_splash_card">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="discover_splash_fem"><img src={fem}/></div>
    </div>
  )
}

export default Splash
