import React from 'react'
import Card from './Card';
import socmed from './res/socmedic.png';
import filler from './res/fillerimg.png';



function Featured({path}) {
  const ids = [2, 4, 6];

  return (
    <div className="discover_featured">
      <h3 className="discover_featured_heading">FEATURED STORIES</h3>
      <div className="discover_featured_socmed">
        <img src={socmed}/>
      </div>

      <div className="discover_featured_cards">
        <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
        <Card link={`${path}/${ids[1]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
        <Card link={`${path}/${ids[2]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      </div>
    </div>
  )
}

export default Featured
