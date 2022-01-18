import React, { useState, useEffect } from 'react';
import './HighlightsCarousel.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VARIABLES from "../../config/.env.js";

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value)[0];
}

const urlify = (str) => {
  return [VARIABLES.fetchBaseUrl, str].join('/');//VARIABLES.axiosBaseURL.slice(0, VARIABLES.axiosBaseURL.length-1) + "" + str;
}

function HighlightsCarousel() {
  const jack = "_"; // "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";

  const [header1, setHeader1] = useState("ARTICLE / TITLE");
  const [content1, setContent1] = useState(jack);
  const [header2, setHeader2] = useState("ARTICLE / TITLE");
  const [content2, setContent2] = useState(jack);
  const [header3, setHeader3] = useState("ARTICLE / TITLE");
  const [content3, setContent3] = useState(jack);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  

  useEffect(() => {
      fetch([VARIABLES.fetchBaseUrl, "content-homes"].join('/'))
      .then(res => res.json())
      .then(data => {
        const get = (section) => {
          return getWhere(data, 'Section', section)['Content'];
        };
  
        setHeader1(get("homeHighlights_header1"));
        setContent1(get("homeHighlights_content1"));
        setHeader2(get("homeHighlights_header2"));
        setContent2(get("homeHighlights_content2"));
        setHeader3(get("homeHighlights_header3"));
        setContent3(get("homeHighlights_content3"));
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch([VARIABLES.fetchBaseUrl, "content-home-carousels"].join('/'))
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const get = (section) => {
        return urlify(getWhere(data, 'Section', section)["Image"][0]["url"]);
      };

      setImg1(get("highlightsimg1"));
      setImg2(get("highlightsimg2"));
      setImg3(get("highlightsimg3"));
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="homeHighlights_carousel">
      <Carousel autoPlay>
        <div className="homeHighlights_carouselCard">
          <img className="homeHighlights_img1" src={img1} alt="_" />
          {/**
          <div>
            <p className="homeHighlights_cardHeader">{header1}</p>
            <p className="homeHighlights_cardText">{content1}</p>
          </div>
           */}
        </div>
        <div className="homeHighlights_carouselCard" className="homeHighlights_carouselCard">
          <img className="homeHighlights_img2" src={img2} alt="_" />
          {/**
          <div>
            <p className="homeHighlights_cardHeader">{header2}</p>
            <p className="homeHighlights_cardText">{content2}</p>
          </div>
           */}
        </div>
        <div className="homeHighlights_carouselCard">
          <img className="homeHighlights_img3" src={img3} alt="_" />
          {/**
          <div>
            <p className="homeHighlights_cardHeader">{header3}</p>
            <p className="homeHighlights_cardText">{content3}</p>
          </div>
           */}
        </div>
      </Carousel>
    </div>
  )
}

export default HighlightsCarousel
