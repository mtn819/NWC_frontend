import React, { useState, useEffect } from 'react'
import "./About.css";

import button from "./res/button.png";
import chick from './res/chick.png';
import tl from './res/tl.png';
import meet from './res/meatteem.png';
import bottomchart from './res/bottomchart.png';

import axios from '../../config/axios';
import VARIABLES from "../../config/.env.js";
import { ArrowCounterclockwise } from 'react-bootstrap-icons';

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value);
}

function About() {
  const jack = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY.";
  const yt = "https://www.youtube.com";

  const [aboutBanner_card, setAboutBanner_card] = useState(jack);
  const [aboutImgCredit, setAboutImgCredit] = useState("JANE DOE");
  const [aboutTimeline_1, setAboutTimeline_1] = useState(jack);
  const [aboutTimeline_2, setAboutTimeline_2] = useState(jack);
  const [aboutTimeline_3, setAboutTimeline_3] = useState(jack);
  const [aboutTimeline_4, setAboutTimeline_4] = useState(jack);
  const [aboutTimeline_5, setAboutTimeline_5] = useState(jack);

  const [aboutDocuments_ddlink, setAboutDocuments_ddlink] = useState(jack);
  const [aboutDocuments_cblink, setAboutDocuments_cblink] = useState(jack);
  const [aboutDocuments_aplink, setAboutDocuments_aplink] = useState(jack);
  const [aboutDocuments_frlink, setAboutDocuments_frlink] = useState(jack);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-abouts');

      const get = (section) => {
        return getWhere(req.data, 'Section', section)[0]['Content'];
      };

      setAboutBanner_card (
        get("aboutBanner_card")
      );

      setAboutImgCredit(
        get("aboutImgCredit")
      );

      setAboutTimeline_1 (
        get("aboutTimeline_1")
      );

      setAboutTimeline_2 (
        get("aboutTimeline_2")
      );

      setAboutTimeline_3 (
        get("aboutTimeline_3")
      );

      setAboutTimeline_4 (
        get("aboutTimeline_4")
      );

      setAboutTimeline_5(
        get("aboutTimeline_5")
      );
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-about-pdfs');

      console.log("Pizza!");
      console.log(VARIABLES.axiosBaseURL.slice(0, VARIABLES.axiosBaseURL.length-1));

      const get = (section) => {
        return VARIABLES.axiosBaseURL.slice(0, VARIABLES.axiosBaseURL.length-1) + getWhere(req.data, 'Section', section)[0]["pdf"][0]["url"];
      };

      setAboutDocuments_ddlink(
        get("aboutDocuments_ddlink")
      );

      setAboutDocuments_cblink(
        get("aboutDocuments_cblink")
      );

      setAboutDocuments_frlink(
        get("aboutDocuments_frlink")
      );

      setAboutDocuments_aplink(
        get("aboutDocuments_aplink")
      );

    }

    fetchData();
  }, []);

  return (
    <div className="about">
      
      {/**BANNER */}
      <div className="aboutBanner">
        <img src={button} className="aboutBanner_button"/>
        <div className="aboutBanner_card">
          <p>
            {aboutBanner_card}
          </p>
        </div>
        <div className="aboutBanner_credit"><p>PHOTO BY {aboutImgCredit}</p></div>
        <img src={chick} className="aboutBanner_chick"/>
      </div>
    
      {/**TIMELINE */}
      <div className="aboutTimeline">
        <div className="aboutTimeline_header"><p>PROJECT TIMELINE</p></div>
        <div className="aboutTimeline_annot aboutTimeline_annot1">
          <div className="aboutTimeline_annotNo"><p>1</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_1}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot2">
          <div className="aboutTimeline_annotNo"><p>2</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_2}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot3">
          <div className="aboutTimeline_annotNo"><p>3</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_3}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot4">
          <div className="aboutTimeline_annotNo"><p>4</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_4}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot5">
          <div className="aboutTimeline_annotNo"><p>5</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_5}</div>
        </div>
        <img src={tl} className="aboutTimeline_tl"/>
      </div>

      {/**DOCUMENTS */}
      <div className="aboutDocuments">
        <a href={aboutDocuments_ddlink} target="_blank">
        <div className="aboutDocuments_item aboutDocuments_design">
          DESIGN DOCUMENTS
        </div>
        </a>
        <a href={aboutDocuments_cblink} target="_blank">
        <div className="aboutDocuments_item aboutDocuments_code">
          CODEBOOK
        </div>
        </a>
        {/*<a href={aboutDocuments_aplink} target="_blank">
        <div className="aboutDocuments_item aboutDocuments_approach">
          APPROACH TO DIGITAL HUMANITIES
        </div>
        </a>*/}
        <a href={aboutDocuments_frlink} target="_blank">
        <div className="aboutDocuments_item aboutDocuments_further">
          FURTHER READING
        </div>
        </a>

      </div>

      {/**MEET */}
      <div className="aboutMeet">
        <img src={meet}/>
      </div>

      {/**BOTTOMCHART */}
      <div className="aboutChart">
        <img src={bottomchart}/>
      </div>
    
    </div>
  )
}

export default About
