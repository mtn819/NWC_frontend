import React, { useState, useEffect, } from 'react'
import "./About.css";
import LCard from "../../components/LCard/LCard";
import buttonabout from "../../res/imgs/buttonabout.png";
import CaptionedImg from "../../components/CaptionedImg/CaptionedImg";
import podiumperson from "../../res/imgs/podiumperson.png";
import tl from "../../res/imgs/tl.png";
import meetteam from "../../res/imgs/meetteam.png";
import bottomchart from "../../res/imgs/bottomchart.png";
import { getSafe, processPage } from "../../components/util/util";
import { fetchBaseUrl } from "../../config/.env.js";

function About() {
    const [state, setState] = useState({});

    useEffect(() => {
        fetch([fetchBaseUrl, "PAGES?PAGE=ABOUT"].join('/'))
        .then(response => response.json())
        .then(data => processPage(data, setState))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="about">

            {/**SPLASH */}
            <div className="aboutSplash">
                <div className="aboutSplash_col aboutSplash_button">
                    <img src={buttonabout} alt="ABOUT THIS PROJECT"/>
                </div>
                <div className="aboutSplash_col aboutSplash_card">
                    <LCard text={getSafe(state, "SPLASH_TEXT")}/>
                </div>
                <div className="aboutSplash_col aboutSplash_img">
                    <CaptionedImg
                        src={podiumperson}
                        caption={getSafe(state, "SPLASH_CAPTION")}
                        caption_more={getSafe(state, "SPLASH_CAPTION_MORE")}
                    />
                </div>
            </div>

            {/**TIMELINE */}
            <div className="aboutTimeline">
                <h2>PROJECT TIMELINE</h2>
                <div className="aboutTimeline_body">
                    <div className="aboutTimeline_num aboutTimeline_1">
                        <h2>1</h2>
                        <p>{getSafe(state, "TIMELINE_1")}</p>
                    </div>
                    <div className="aboutTimeline_num aboutTimeline_2">
                        <h2>2</h2>
                        <p>{getSafe(state, "TIMELINE_2")}</p>
                    </div>
                    <div className="aboutTimeline_num aboutTimeline_3">
                        <h2>3</h2>
                        <p>{getSafe(state, "TIMELINE_3")}</p>
                    </div>
                    <div className="aboutTimeline_num aboutTimeline_4">
                        <h2>4</h2>
                        <p>{getSafe(state, "TIMELINE_4")}</p>
                    </div>
                    <div className="aboutTimeline_num aboutTimeline_5">
                        <h2>5</h2>
                        <p>{getSafe(state, "TIMELINE_5")}</p>
                    </div>
                    <img className="aboutTimeline_mainImg" src={tl} alt="NWC Timeline"/>
                </div>
            </div>

            {/**PDFS */}
            <div className="aboutPdfs">
                <a href={getSafe(state, "PDF_DESIGN_DOCUMENTS")}>DESIGN DOCUMENTS</a>
                <a href={getSafe(state, "PDF_CODEBOOK")}>CODEBOOK</a>
                <a href={getSafe(state, "PDF_FURTHER_READING")}>FURTHER READING</a>
            </div>

            {/**BOTTOM */}
            <div className="aboutBottom">
                <div className="aboutBottom_col">
                    <img className="aboutBottom_meet" src={meetteam} alt="Meet the team!"/>
                </div>
                <div className="aboutBottom_col">
                    <img className="aboutBottom_chart" src={bottomchart} alt="Credits"/>
                </div>
            </div>

        </div>
    )
}

export default About
