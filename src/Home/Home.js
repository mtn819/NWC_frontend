import React, {useState, useEffect} from 'react';
import Home_Splash from './Home_Splash';
import Home_About from './Home_About';
import Home_Map from './Home_Map';

import './Home.css'

import axios from '../config/axios';
import Home_Explore from './Home_Explore';
import Home_Highlights from './Home_Highlights';

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
      <Home_Splash/>
      <Home_About content={aboutContent}/>
      <Home_Map content={mapContent}/>
      <Home_Explore content={"All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. "}/>
      <Home_Highlights/>
    </div>
  )
}

export default Home;