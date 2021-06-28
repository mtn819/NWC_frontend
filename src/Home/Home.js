import React, {useState, useEffect} from 'react';
import Home_Map from './Home_Map';

import './Home.css'

import axios from '../config/axios';
import Home_Explore from './Home_Explore';
import Home_Highlights from './Home_Highlights';


import Splash from './Splash';
import About from './About';


const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value)[0];
}

function Home() {
  const [aboutContent, setAboutContent] = useState([]);
  const [mapContent, setMapContent] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-homes');

      const get = (section) => {
        return getWhere(req.data, 'Section', section)['Content'];
      }

      setAboutContent(
        get("About_The_Project")
      );

      setMapContent(
        get("Interactive_Map")
      )
    }

    fetchData();
  }, [])

  return (
    <div className="home">
      {/*<div className="fontref">
        <p className="font-babas_neue">ABCDabcd babas_neue</p>
        <p className="font-gotham_book">ABCDabcd gotham_book</p>
        <p className="font-neobulletin">ABCDabcd neobulletin</p>
        <p className="font-subway_ds">ABCDabcd subway_ds</p>
      </div>*/}
      <Splash/>
      <About content={aboutContent}/>
      <Home_Map content={mapContent}/>
      <Home_Explore content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>
      <Home_Highlights/>
    </div>
  )
}

export default Home;