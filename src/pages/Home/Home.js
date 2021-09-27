// Core imports
import React, { useState, useEffect } from 'react'
import "./Home.css";
import { fetchBaseUrl } from '../../config/.env';
import ReactMarkdown from "react-markdown";

// Components
import { getText, getLink } from '../../components/utilityFunctions/utilityFunctions';
import OutlineCard from '../../components/OutlineCard/OutlineCard';
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';
import CaptionedButton from '../../components/CaptionedButton/CaptionedButton';
import Map from './Map';

// Res
import splashLogo from "../../res/splashLogo.png";
import holdingFlag from "../../res/holdingFlag.png";
import podiumGroup from "../../res/podiumGroup.png";
import buttonWhy from "../../res/buttonWhy.png";
import buttonDiscover from "../../res/buttonDiscover.png";
import buttonMapping from "../../res/buttonMapping.png";
import buttonHow from "../../res/buttonHow.png";

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

      {/**
       * EXPLORE
       */}
      <div className="HomeExplore">
        <OutlineCard
          heading="EXPLORE THE SITE"
          headingbg="var(--themeColorBeige)"
        >
          <ReactMarkdown>{getText(data, "EXPLORE_CARD")}</ReactMarkdown>
        </OutlineCard>
        <CaptionedImg
          img={podiumGroup}
          caption={`PHOTO BY ${getText(data, "EXPLORE_PHOTOBY")}`}
        />
      </div>
      <div className="HomeExplore_border"></div>

      {/**
       * BUTTONS
       */}
      <div className="HomeButtons">
        <CaptionedButton
          img={buttonWhy}
          href={getLink(data, "BUTTONS_WHY")}
        >
          {getText(data, "BUTTONS_WHY")}
        </CaptionedButton>
        <CaptionedButton
          img={buttonDiscover}
          href={getLink(data, "BUTTONS_DISCOVER")}
        >
          {getText(data, "BUTTONS_DISCOVER")}
        </CaptionedButton>
        <CaptionedButton
          img={buttonMapping}
          href={getLink(data, "BUTTONS_MAPPING")}
        >
          {getText(data, "BUTTONS_MAPPING")}
        </CaptionedButton>
        <CaptionedButton
          img={buttonHow}
          href={getLink(data, "BUTTONS_HOW")}
        >
          {getText(data, "BUTTONS_HOW")}
        </CaptionedButton>
      </div>

    </main>

  )
}

export default Home
