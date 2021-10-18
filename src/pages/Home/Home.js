// CORE
import React, { useState, useEffect } from 'react'
import "./Home.css";
import { fetchBaseUrl } from '../../config/.env';

// RES
import toform from "../../res/imgs/toform.png";
import aboutpeople from "../../res/imgs/aboutpeople.png";
import explorepeople from "../../res/imgs/explorepeople.png";
import buttonwhy from "../../res/imgs/buttonwhy.png";
import buttondiscover from "../../res/imgs/buttondiscover.png";
import buttonmapping from "../../res/imgs/buttonmapping.png";
import buttonhow from "../../res/imgs/buttonhow.png";

// COMPONENTS
import Card from '../../components/Card/Card';
import CaptionedImg from "../../components/CaptionedImg/CaptionedImg";
import Map from './Map';
import { getSafe, processPage, processPageOld } from '../../components/util/util';
import ReactMarkdown from 'react-markdown';
import MyCarousel from '../../components/MyCarousel/MyCarousel';
import { loadCarousel } from '../../components/MyCarousel/carouselLoader';

function Home() {
    const [state, setState] = useState([]);
    const [stateOld, setStateOld] = useState([]);

    useEffect(() => {
        fetch([fetchBaseUrl, "PAGES?PAGE=HOME"].join('/'))
        .then(req => req.json())
        .then(data => processPage(data, setState))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        fetch([fetchBaseUrl, "CAROUSELS?PAGE=HOME"].join('/'))
        .then(req => req.json())
        .then(data => loadCarousel(data, carousel, setCarousel))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // OLD API; DATA GETS LOADED INTO stateOld
    useEffect(() => {
        fetch([fetchBaseUrl, "content-homes"].join('/'))
        .then(req => req.json())
        .then(data => processPageOld(data, setStateOld))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="home">

            {/**SPLASH */}
            <div className="homeSplash">
                <div className="homeSplash_col">
                    <img className="homeSplash_toform" src={toform} alt="Logo"/>
                </div>
                <div className="homeSplash_col">
                    <div className="homeSplash_card">
                        <h2>Sharing Stories from 1977</h2>
                        <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
                    </div>
                </div>
            </div>

            {/**ABOUT */}
            <div className="homeAbout">
                <div className="homeAbout_col">
                    <Card
                        header="ABOUT THE PROJECT"
                        content={getSafe(state, "ABOUT_TEXT")}
                        headerBackdrop="var(--colorBeige)"
                        maxLength={200}
                    />
                </div>
                <div className="homeAbout_col homeAbout_imgCol">
                    <CaptionedImg
                        src={aboutpeople}
                        caption={getSafe(state, "ABOUT_CAPTION")}
                        caption_more={getSafe(state, "ABOUT_CAPTION_MORE")}
                    />
                </div>
            </div>
            <div className="homeAbout_hr"></div>

            {/**MAP */}
            <div className="homeMap">
                <Card
                    header="Interactive Map"
                    content={getSafe(state, "MAP_TEXT")}
                    headerBackdrop="white"
                />
                <Map/>
            </div>

            {/**EXPLORE */}
            <div className="homeExplore">
                <Card
                    header="EXPLORE THE SITE"
                    headerBackdrop="var(--colorBeige)"
                    content={getSafe(state, "EXPLORE_TEXT")}
                />
                <CaptionedImg
                    src={explorepeople}
                    caption={getSafe(state, "EXPLORE_CAPTION")}
                    caption_more={getSafe(state, "EXPLORE_CAPTION_MORE")}
                />
            </div>
            <div className="homeExplore_hr"></div>

            {/**BUTTONS */}
            {/**WHY DISCOVER MAP HOW */}
            <div className="homeButtons">
                <a href={getSafe(state, "BUTTONS_LINK_WHY")}>
                    <div className="homeButtons_item">
                        <img src={buttonwhy} alt="Why the NWC Matters"/>
                        <div className="homeButtons_text">
                            <ReactMarkdown>
                                {getSafe(state, "BUTTONS_TEXT_WHY")}
                            </ReactMarkdown>
                        </div>
                    </div>
                </a>
                <a href={getSafe(state, "BUTTONS_LINK_DISCOVER")}>
                    <div className="homeButtons_item">
                        <img src={buttondiscover} alt="Discover NWC Stories"/>
                        <div className="homeButtons_text">
                            <ReactMarkdown>
                                {getSafe(state, "BUTTONS_TEXT_DISCOVER")}
                            </ReactMarkdown>
                        </div>
                    </div>
                </a>
                <a href={getSafe(state, "BUTTONS_LINK_MAPPING")}>
                    <div className="homeButtons_item">
                        <img src={buttonmapping} alt="Mapping the NWC"/>
                        <div className="homeButtons_text">
                            <ReactMarkdown>
                                {getSafe(state, "BUTTONS_TEXT_MAPPING")}
                            </ReactMarkdown>
                        </div>
                    </div>
                </a>
                <a href={getSafe(state, "BUTTONS_LINK_HOW")}>
                    <div className="homeButtons_item">
                        <img src={buttonhow} alt="How to contribute"/>
                        <div className="homeButtons_text">
                            <ReactMarkdown>
                                {getSafe(state, "BUTTONS_TEXT_HOW")}
                            </ReactMarkdown>
                        </div>
                    </div>
                </a>
            </div>

            {/**HIGHLIGHTS */}
            <div className="homeHighlights">
                <div className="homeHighlights_card">
                    <h2>SITE HIGHLIGHTS</h2>
                    <MyCarousel carouselData={carousel}/>
                </div>
            </div>
        </div>
    )
}

export default Home
