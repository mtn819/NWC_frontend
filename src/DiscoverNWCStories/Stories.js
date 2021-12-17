import React from 'react';
import Card from './Card';



import navfiller from './res/navfiller.png';
import filler from './res/fillerimg.png';
import viewmaps from './res/viewmaps.png';
import addstory from './res/addstory.png';
import { Link } from 'react-router-dom';

function Stories({path}) {

  const ids=[5]

  return (
    <div className="discover_stories">
      <div className="discover_stories_interface">
        <img src={navfiller}/>

        <div className="discover_stories_buttons">
          <Link to="/participants">
            <div className="discover_stories_participants">View Participants</div>
            {/*<img src={viewmaps}/>
            <img src={addstory}/>*/}
          </Link>
        </div>
      </div>
      
      <div className="discover_stories_dump">
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      <Card link={`${path}/${ids[0]}`} thumbnail={filler} name="Nombre" role="Role" state="State" bottomText="National Women's Conference"/>
      </div>
    </div>
  )
}

export default Stories
