import React, { useState, useEffect } from 'react'
import "./Home.css";
import toform from "../../res/imgs/toform.png";
import aboutpeople from "../../res/imgs/aboutpeople.png";
import Card from '../../components/Card/Card';
import CaptionedImg from "../../components/CaptionedImg/CaptionedImg";
import Map from './Map';
import { fetchBaseUrl } from '../../config/.env';
import { getSafe, processPage } from '../../components/util/util';

function Home() {
    const [state, setState] = useState({});

    useEffect(() => {
        fetch([fetchBaseUrl, "PAGES?PAGE=HOME"].join('/'))
        .then(req => req.json())
        .then(data => processPage(data, state, setState))
    }, []);

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
                <div className="homeAbout_col">
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

        </div>
    )
}

export default Home
