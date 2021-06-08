import React, {useState, useEffect} from 'react';
import Home_Splash from './Home_Splash';
import Home_About from './Home_About';

import './Home.css'

import axios from '../config/axios';

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
    </div>
  )
}

export default Home;