// Core imports
import React, { useState, useEffect } from 'react'
import "./Home.css";
import { fetchBaseUrl } from '../../config/.env';

// Components
import { getSafe } from '../../components/utilityFunctions/utilityFunctions';
import OutlineCard from '../../components/OutlineCard/OutlineCard';

// Res
import splashLogo from "../../res/splashLogo.png";
import holdingFlag from "../../res/holdingFlag.png";
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';

function Home() {
  const [data, setData] = useState({});

  useEffect(async () => {
    fetch(
      [fetchBaseUrl, "pages?Name=Home"].join('/')
    )
    .then(response => response.json())
    .then(data => setData(data))
    .then(() => console.log(data));
  }, []);


  return (
    <div className="Home">

      {/**
       * SPLASH
       */}
      <div className="HomeSplash">
        <div className="HomeSplash_logo">
          <img src={splashLogo}/>
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
          <p>ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. </p>
        </OutlineCard>
        <CaptionedImg img={holdingFlag} caption={`PHOTO BY ${"JANE DOE"}`} />
      </div>
      <div className="HomeAbout_border"></div>

      {/**
       * MAP
       */}
      <div className="HomeMap">
        <OutlineCard
          heading="INTERACTIVE MAP"
        >
          <p>ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. </p>
        </OutlineCard>
      </div>

    </div>

  )
}

export default Home
