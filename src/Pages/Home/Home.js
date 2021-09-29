import React, { useState, useEffect } from 'react'
import './Home.css';
import Map from './Map';
import HighlightsCarousel from './HighlightsCarousel';
import './OverlayVid.css';

import dt from './res/dt.png';
import tw from './res/tw.png';
import museo from './res/museo.png';
import mag from './res/mag.png';
import astro from './res/astro.png';

import toform from './res/toform.png';
import aboutpeople from './res/aboutpeople.png';
import explorechicks from './res/explorechicks.png';
import button1 from './res/button1.png';
import button2 from './res/button2.png';
import button3 from './res/button3.png';
import button4 from './res/button4.png';
import dots1 from './res/dots1.png';
import dots2 from './res/dots2.png';
import dots3 from './res/dots3.png';
import dots4 from './res/dots4.png';
import overlaymp4 from './res/overlayvid.mp4';

import axios from '../../config/axios';
import VARIABLES from '../../config/.env';
import ReactMarkdown from 'react-markdown';

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value);
}

const urlify = (str) => {
  return VARIABLES.axiosBaseURL.slice(0, VARIABLES.axiosBaseURL.length-1) + "" + str;
}

export const superSorter = (list) => {
  const cpy = [...list];
  cpy.sort((a, b) => a[0] - b[0]);
  return cpy;
}

function Home() {
  //temp
  //const overlaymp4 = "https://www.w3schools.com/html/mov_bbb.mp4";

  const jack = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";
  const [homeAbout_p1, setHomeAbout_p1] = useState(jack+jack);
  const [homeAbout_p2, setHomeAbout_p2] = useState(jack);
  const [homeAbout_p, setHomeAbout_p] = useState(jack+jack);
  const [homeMap_text, setHomeMap_text] = useState(jack+jack+jack);
  const [homeAboutReadmore, setHomeAboutReadmore] = useState(false);
  const [homeAboutImgCredit, setHomeAboutImgCredit] = useState("Jane Doe");
  const [homeExplore_text, setHomeExplore_text] = useState(jack+jack);
  const [homeButton1_text, setHomeButton1_text] = useState(jack);
  const [homeButton1_link, setHomeButton1_link] = useState('/');
  const [homeButton2_text, setHomeButton2_text] = useState(jack);
  const [homeButton2_link, setHomeButton2_link] = useState('/');
  const [homeButton3_text, setHomeButton3_text] = useState(jack);
  const [homeButton3_link, setHomeButton3_link] = useState('/');
  const [homeButton4_text, setHomeButton4_text] = useState(jack);
  const [homeButton4_link, setHomeButton4_link] = useState('/');
  const [homeDowntown, setHomeDowntown] = useState([]);
  const [homeThirdward_uh, setHomeThirdward_uh] = useState([]);
  const [homeMuseum_district, setHomeMuseum_district] = useState([]);
  const [homeMagnolia_park, setHomeMagnolia_park] = useState([]);
  const [homeAstrodome, setHomeAtrodome] = useState([]);
  const [photoByExplore, setPhotoByExplore] = useState([]);

  const scroll = () => {
    window.scrollTo(0, 0);
    return <></>
  }

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-homes');

      const get = (section) => {
        return getWhere(req.data, 'Section', section)[0]['Content'];
      };

      setHomeAbout_p1(
        get("homeAbout_p1")
      );

      setHomeAbout_p2(
        get("homeAbout_p2")
      );

      setHomeAbout_p(
        get("homeAbout_p")
      )

      setHomeAboutImgCredit(
        get("aboutImgCredit")
      )

      setHomeMap_text(
        get("homeMap_text")
      );

      setHomeExplore_text(
        get("homeExplore_text")
      );

      setHomeButton1_text(
        get("homeButton1_text")
      );

      setHomeButton1_link(
        get("homeButton1_link")
      );

      setHomeButton2_text(
        get("homeButton2_text")
      );

      setHomeButton2_link(
        get("homeButton2_link")
      );

      setHomeButton3_text(
        get("homeButton3_text")
      );

      setHomeButton3_link(
        get("homeButton3_link")
      );

      setHomeButton4_text(
        get("homeButton4_text")
      );

      setHomeButton4_link(
        get("homeButton4_link")
      );

      setPhotoByExplore(
        get("PhotoByExplore")
      );
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-home-maps');

      const get = map => {
        return (
          superSorter(
          getWhere(req.data, 'Map', map)
          .map(p => {
            const p2 = [];
            p2[0] = p['Name'];
            p2[1] = p['x'];
            p2[2] = p['y'];
            p2[3] = p['Description'];
            p2[4] = p.mainImage[0] ? urlify(p.mainImage[0].url) : undefined;
            p2[5] = p.pdf1[0] ? urlify(p.pdf1[0].url) : undefined;
            p2[6] = p.pdf2[0] ? urlify(p.pdf2[0].url) : undefined;
            p2[7] = p.pdf3[0] ? urlify(p.pdf3[0].url) : undefined;
            p2[8] = p.pdf4[0] ? urlify(p.pdf4[0].url) : undefined;
            p2[9] = p.img1[0] ? urlify(p.img1[0].url) : undefined;
            p2[10] = p.img2[0] ? urlify(p.img2[0].url) : undefined;
            p2[11] = p.img3[0] ? urlify(p.img3[0].url) : undefined;
            p2[12] = p.img4[0] ? urlify(p.img4[0].url) : undefined;
            p2[4] = [
              p2[9], p2[10], p2[11], p2[12]
            ]
            p2[4] = p2[4][Math.floor(Math.random()*p2[4].length)];
            //console.log(p);
            p2[13] = p["citation1"] ? p["citation1"] : "";
            //console.log(p);
            p2[14] = p.citation2 !== undefined ? p.citation2 : "";
            p2[15] = p.citation3 !== undefined ? p.citation3 : "";
            p2[16] = p.citation4 !== undefined ? p.citation4 : "";
            //console.log(p);
            console.log(p2);

            return p2;
          }))
        );
      }

      setHomeDowntown(get("downtown"));
      setHomeThirdward_uh(get("thirdward_uh"));
      setHomeMuseum_district(get("museum_district"));
      setHomeMagnolia_park(get("magnolia_park"));
      setHomeAtrodome(get("astrodome"));
    }

    fetchData();
  }, [])

  const [currMap, setCurrMap] = useState("dt");

  const maps = {
    dt: {
      name: 'DOWNTOWN',
      mapImg: dt,
      points: homeDowntown,
    },
    tw: {
      name: 'THIRD WARD/UH',
      mapImg: tw,
      points: homeThirdward_uh,
    },
    museo: {
      name: 'MUSEUM DISTRICT',
      mapImg: museo,
      points: homeMuseum_district,
    },
    mag: {
      name: 'MAGNOLIA PARK',
      mapImg: mag,
      points: homeMagnolia_park,
    },
    astro: {
      name: 'ASTRODOME',
      mapImg: astro,
      points: homeAstrodome,
    },
  }

  const [videoOn, setVideoOn] = useState(true)
  

  return (
    <>
    <div className={"overlay_vid" + " " + (videoOn ? "": "overlay_vid--off")}>
      {(() => {window.scrollTo(0, document.body.scrollHeight); return "";})()}
      <p 
        className="overlay_vid_skip"
        onClick={e => {setVideoOn(!videoOn); scroll()}}
      >
        Skip Video
      </p>
      <video autoPlay controls muted onEnded={e => {setVideoOn(!videoOn); scroll()}}>
        <source src={overlaymp4} type="video/mp4"></source>
      </video>
      {/*<a href='#'>
        <div className="overlay_vid_continue" onClick={e => setVideoOn(!videoOn)}>
          Continue To Site -&gt;
        </div>
  </a>*/}

      {/*<div className="overlay_vid_card">
        <h3>Sharing Stories from</h3>
        <div className="overlay_vid_cardhr"></div>
        <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
        <a href='#'>
          <div className="overlay_vid_cardbut" onClick={e => {setVideoOn(!videoOn); scroll()}}>Enter Site</div>
        </a>
      </div>*/}
    </div>

    {!videoOn ? 
    <div className="home">
      {(() => {scroll(); return "";})()}
      {/**SPLASH */}
      <div className="homeSplash">

        <div className="homeSplash_toForm">
          <img src={toform}/>
        </div>

        <div className="homeSplash_card">
          <h3>Sharing Stories from 1977</h3>
          <div className="homeSplash_cardHr"></div>
          <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
        </div>

      </div>

      {/**ABOUT */}
      <div className="homeAbout">
        <div className="homeAbout_beigeBackdrop"></div>
        <div className="homeAbout_content">

          <div className="homeAbout_card">
            <div className="homeAbout_headerBackdrop"></div>
            <p className="homeAbout_header">ABOUT THE PROJECT</p>
            <div className="homeAbout_cardHr"></div>

            {/*<p className="homeAbout_p1"><ReactMarkdown>{homeAbout_p}</ReactMarkdown></p>*/}
            <div className="homeAbout_peas">
            <p className="homeAbout_p1">{homeAbout_p1}</p>
            {homeAboutReadmore ? <p className="homeAbout_p2">{homeAbout_p2}</p> : ""}
            </div>
            <p className="homeAbout_readmore" onClick={e=>setHomeAboutReadmore(!homeAboutReadmore)}>READ {homeAboutReadmore ? "LESS" : "MORE"}</p>
          </div>

          <div className="homeAbout_chicks">
            <img src={aboutpeople}/>
            <div className="homeAbout_imgCred">
              <p>PHOTO BY {homeAboutImgCredit}</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="homeAbout_border"></div>
      
      {/**MAP */}
      <div className="homeMap">

        <div className="homeMap_card">
          <div className="homeMap_headerBackdrop"></div>
          <p className="homeMap_header">INTERACTIVE MAP</p>
          <div className="homeMap_cardHr"></div>
          <p className="homeMap_text">{homeMap_text}</p>
        </div>

        <div className="homeMap_tabs">
          {Object.keys(maps).map(m => (
            <div
              className={currMap === m ? "homeMap_tab--active" : ""}
              onClick={()=>setCurrMap(m)}
            >
              <p>{maps[m].name}</p>
            </div>
          ))}
        </div>
        <div className="homeMap_tabsHr"></div>

        <Map mapImg={maps[currMap].mapImg} points={maps[currMap].points}/>

      </div>

      {/**EXPLORE */}
      <div className="homeExplore">
        
        <div className="homeExplore_card">
          <div className="homeExplore_headerBackdrop"></div>
          <p className="homeExplore_header">EXPLORE THE SITE</p>
          <div className="homeExplore_hr"></div>
          <p className="homeExplore_text">{homeExplore_text}</p>
        </div>
        
        <div className="homeExplore_img">
          <img src={explorechicks}/>
        </div>
        <div className="homeExplore_imgSrc"><p>PHOTO BY {photoByExplore}</p></div>

        <div className="homeExplore_borderBot"></div>

      </div>

      {/**BUTTONS */}
      <div className="homeButtons">
        <a href={homeButton1_link}>
          <div className="homeButtons_button homeButtons_button1">
              <img src={button1}/>
              <p>{homeButton1_text}</p>
          </div>
        </a>
        <a href={homeButton2_link}>
          <div className="homeButtons_button homeButtons_button2">
              <img src={button2}/>
              <p>{homeButton2_text}</p>
          </div>
        </a>
        <a href={homeButton3_link}>
          <div className="homeButtons_button homeButtons_button3">
              <img src={button3}/>
              <p>{homeButton3_text}</p>
          </div>
        </a>
        <a href={homeButton4_link}>
          <div className="homeButtons_button homeButtons_button4">
              <img src={button4}/>
              <p>{homeButton4_text}</p>
          </div>
        </a>

        <img className="homeButtons_dots homeButtons_dots1" src={dots1}/>
        <img className="homeButtons_dots homeButtons_dots2" src={dots2}/>
        <img className="homeButtons_dots homeButtons_dots3" src={dots3}/>
        <img className="homeButtons_dots homeButtons_dots4" src={dots4}/>
      </div>

      {/**HIGHLIGHTS */}
      <div className="homeHighlights">
        <div className="homeHighlights_frontDrop"></div>
        <div className="homeHighlights_frontDrop2">
          <h2>COMING SOON</h2>
          <p>Public Launch: 11/21</p>
        </div>
        <p className="homeHighlights_header">SITE HIGHLIGHTS</p>
        <HighlightsCarousel/>
      </div>
    </div>
    : ""}
    </>
  )
}

export default Home
