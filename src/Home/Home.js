import React, {useState, useEffect} from 'react';
import Home_Map from './Home_Map';

import './Home.css';
import './OverlayVid.css';

import axios from '../config/axios';
import Home_Highlights from './Home_Highlights';


import Splash from './Splash';
import About from './About';
import Explore from './Explore';
import OverlayVid from './OverlayVid';
import overlaymp4 from './res/overlayvid.mp4';

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

  const [videoOn, setVideoOn] = useState(true);

  return (
    <>
    <div className={"overlay_vid" + " " + (videoOn ? "": "overlay_vid--off")}>
      <video autoPlay muted>
        <source src={overlaymp4} type="video/mp4"></source>
      </video>
      <div className="overlay_vid_continue" onClick={e => setVideoOn(!videoOn)}>
        Continue To Site -&gt;
      </div>

      <div className="overlay_vid_card">
        <h3>Sharing Stories from</h3>
        <div className="overlay_vid_cardhr"></div>
        <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
        <div className="overlay_vid_cardbut" onClick={e => setVideoOn(!videoOn)}>Enter Site</div>
      </div>
    </div>


    <div className={"home" + " " + (videoOn ? "overlay_vid--off": "")}>
      {/*<div className="fontref">
        <p className="font-babas_neue">ABCDabcd babas_neue</p>
        <p className="font-gotham_book">ABCDabcd gotham_book</p>
        <p className="font-neobulletin">ABCDabcd neobulletin</p>
        <p className="font-subway_ds">ABCDabcd subway_ds</p>
      </div>*/}
      <Splash/>
      <About content={aboutContent}/>
      <Home_Map content={mapContent}/>
      <Explore content={""}/>
      <Home_Highlights/>
    </div>
    </>
  )
}

export default Home;