// Core imports
import React, { useState, useEffect } from 'react'
import "./Home.css";
import { fetchBaseUrl } from '../../config/.env';
import ReactMarkdown from "react-markdown";

// Components
import {getText} from '../../components/utilityFunctions/utilityFunctions';
import OutlineCard from '../../components/OutlineCard/OutlineCard';
import Map from './Map';

// Res
import splashLogo from "../../res/splashLogo.png";
import holdingFlag from "../../res/holdingFlag.png";
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      [fetchBaseUrl, "pages?NAME=HOME"].join('/')
    )
    .then(response => response.json())
    .then(data => setData(data));
  }, []);


  return (
    <main className="Home">
      {/**
       * SPLASH
       */}
      <div className="HomeSplash">
        <div className="HomeSplash_logo">
          <img src={splashLogo} alt="People holding a flag."/>
        </div>
        <div className="HomeSplash_card">
          <h1>Sharing Stories from 1977</h1>
          <div className="HomeSplash_cardHr"></div>
          <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
        </div>
      </div>

      {/**
       * ABOUT
       */}
      <div className="HomeAbout">
        <OutlineCard
          heading="ABOUT THE PROJECT"
          headingbg="var(--themeColorBeige)"
        >
          <ReactMarkdown>{getText(data, "ABOUT_CARD")}</ReactMarkdown>
        </OutlineCard>
        <CaptionedImg img={holdingFlag} caption={`PHOTO BY ${getText(data, "ABOUT_PHOTOBY")}`} />
      </div>
      <div className="HomeAbout_border"></div>

      {/**
       * MAP
       */}
      <div className="HomeMap">
        <OutlineCard
          heading="INTERACTIVE MAP"
        >
          <ReactMarkdown>{getText(data, "MAP_CARD")}</ReactMarkdown>
        </OutlineCard>

        <Map/>
      </div>

    </main>

  )
}

export default Home
