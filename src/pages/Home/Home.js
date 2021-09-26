import React from 'react'

const get_safe = (dict, ...keys) => {
  // safely retrieves dict[k1][k2][k3]..., incase a given dict does not have it.
  let curr = dict;
  for(let k of keys){
    if(curr[k] === undefined){
      return undefined;
    }
    curr = curr[k];
  }
  return curr;
}

function Home() {

  return (
    <div className="Home">
      {/**
       * SPLASH
       */}
      <div className="HomeSplash">
        
      </div>
    </div>
  )
}

export default Home
