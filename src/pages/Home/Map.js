import React, { useState, useEffect } from 'react'
import "./Map.css";
import { getSafe } from "../../components/util/util";
import { fetchBaseUrl } from "../../config/.env.js";
import { loadMap } from "./maploader";
import astrodome from "../../res/imgs/astrodome.png";
import downtown from "../../res/imgs/downtown.png";
import magnoliapark from "../../res/imgs/magnoliapark.png";
import museumdistrict from "../../res/imgs/museumdistrict.png";
import thirdward from "../../res/imgs/thirdward.png";
import maptick from "../../res/imgs/maptick.png";
import ReactMarkdown from 'react-markdown';

function Map() {

    useEffect(() => {
        fetch([fetchBaseUrl, "map-points"].join('/'))
        .then(res => res.json())
        .then(data => loadMap(data, setMapData))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const [mapData, setMapData] = useState();

    const mapmap = { 
        "astrodome": { imgUrl: astrodome, alias: "ASTRODOME" },
        "downtown": { imgUrl: downtown, alias: "DOWNTOWN" },
        "magnoliapark": { imgUrl: magnoliapark, alias: "MAGNOLIAPARK" },
        "museumdistrict": { imgUrl: museumdistrict, alias: "MUSEUMDISTRICT" },
        "thirdward": { imgUrl: thirdward, alias: "THIRDWARD" },
    }
    const [currMap, setCurrMap] = useState("downtown");
    
    const [currHover, setCurrHover] = useState(false);

    const [popup, setPopup] = useState(false);


    return (
        <div className="map">

            {/**POPUP */}
            {
                popup ?
                <>
                <div className="mapPopup_exit" onClick={() => setPopup(false)}></div>
                <div className="mapPopup">
                    <div className="mapPopup_top">
                        <p
                            className="mapPopup_back"
                            onClick={() => setPopup(false)}
                        >&larr; BACK TO MAP</p>
                        <img src={popup.THUMBNAIL} alt={popup.TITLE}/>
                    </div>
                    <div className="mapPopup_bottom">
                        <div className="mapPopup_pdfs">
                            {popup.DOCUMENTS.map(d => 
                                <a href={d.PDF} key={Math.random() * Math.random()}>
                                    <img
                                        src={d.THUMBNAIL}
                                        alt="Point Of Interest Thumbnail"
                                    />
                                </a>
                            )}
                        </div>
                        <h2 className="mapPopup_title">{popup.TITLE}</h2>
                        <div className="mapPopup_content">
                            <ReactMarkdown>
                                {popup.CONTENT}
                            </ReactMarkdown>
                        </div>
                        <div className="mapPopup_citations">
                            <ReactMarkdown>
                                {popup.CITATIONS}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
                </>
                : ""
            }

            {/**TABS */}
            <div className="mapTabs">
                <div className={"mapTabs_tab " + (currMap === "downtown" ? "mapTabs_tab--active" : "")} onClick={()=>setCurrMap("downtown")}>DOWNTOWN</div>
                <div className={"mapTabs_tab " + (currMap === "thirdward" ? "mapTabs_tab--active" : "")} onClick={()=>setCurrMap("thirdward")}>THIRD WARD/UH</div>
                <div className={"mapTabs_tab " + (currMap === "museumdistrict" ? "mapTabs_tab--active" : "")} onClick={()=>setCurrMap("museumdistrict")}>MUSEUM DISTRICT</div>
                <div className={"mapTabs_tab " + (currMap === "magnoliapark" ? "mapTabs_tab--active" : "")} onClick={()=>setCurrMap("magnoliapark")}>MAGNOLIA PARK</div>
                <div className={"mapTabs_tab " + (currMap === "astrodome" ? "mapTabs_tab--active" : "")} onClick={()=>setCurrMap("astrodome")}>ASTRODOME</div>
            </div>

            {/**BODY */}
            <div className="mapBody">
                <div className="mapBody_titles">
                    <h2>POINTS OF INTEREST</h2>
                    <ul>
                        {
                            mapData ? mapData
                            .filter(datum => getSafe(datum, "MAP") === mapmap[currMap].alias)
                            .map(datum => <li
                                className={"mapBody_title " + (currHover === datum.TITLE ? "mapBody_title--active" : "")}
                                onMouseEnter={() => setCurrHover(datum.TITLE)}
                                onMouseLeave={() => setCurrHover(false)}
                                key={"mapBody_titles_" + datum.TITLE}
                                onClick = {() => setPopup(datum)}
                            >
                                    {datum.TITLE}
                            </li>)
                            : ""
                        }
                    </ul>
                </div>
                <div className="mapBody_map">
                    {
                        mapData ? mapData
                        .filter(datum => getSafe(datum, "MAP") === mapmap[currMap].alias)
                        .map(datum => <div
                            className="mapBody_maptick"
                            onMouseEnter={()=>setCurrHover(datum.TITLE)}
                            onMouseLeave={()=>setCurrHover(false)}
                            style={{
                                marginTop: `calc(${datum.Y}vw / 2)`,
                                marginLeft: `calc(${datum.X}vw / 2)`
                            }}
                            key={"mapBody_map_" + datum.TITLE}
                            onClick={() => setPopup(datum)}
                        >
                            {
                                currHover === datum.TITLE ?
                                <p>{datum.TITLE}</p>
                                : ""
                            }
                            <img
                                className="mapBody_maptick"
                                src={maptick}
                                alt={datum.TITLE}
                            />
                        </div>)
                        : ""
                    }
                    <img className="mapBody_bg" src={mapmap[currMap].imgUrl} alt={currMap}/>
                </div>
            </div>
        </div>
    )
}

export default Map
