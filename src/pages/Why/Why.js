import React, { useState } from 'react'
import "./Why.css";
import button from "../../res/imgs/buttonwhy.png";
import bannerhuman from "../../res/imgs/whybannerhuman.png";
import "./Why.css";
import CaptionedImg from "../../components/CaptionedImg/CaptionedImg";

function Why() {
    const [page, setPage] = useState({
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        bannerImgCaption: "PHOTO BY JANE DOE",
        bannerImgCaption_more: "ABCDEFG MORE CAPTION",
        documents: [
            // [thumb, url]
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
        ],
        essays: [
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
            ["https://static01.nyt.com/images/2015/06/21/arts/21SIMONE/21SIMONE-superJumbo.jpg", "https://www.youtube.com/watch?v=VRU2qs82DAg"],
        ]
    });

    return (
        <div className="why">
            {/**BANNER */}
            <div className="whyBanner">
                <div className="whyBanner_button">
                    <img src={button} alt="decorative button"/>
                </div>
                <div className="whyBanner_card">
                    <h2>HISTORICAL OVERVIEW</h2>
                    <p>{page.overview}</p>
                </div>
                <CaptionedImg
                    src={bannerhuman}
                    caption={page.bannerImgCaption}
                    caption_more={page.bannerImgCaption_more}
                />
            </div>
            <div className="whyBanner_coverup"></div>

            {/**DOCUMENTS */}
            <div className="whyDocuments">
                <h2>PRIMARY DOCUMENTS</h2>
                <div className="whyDocuments_docs">
                    {page.documents.map(doc => <a href={doc[1]} key={Math.random()*Math.random()}>
                        <img src={doc[0]} alt="Document cover"/>
                    </a>)}
                </div>
            </div>

            {/**TIMELINE */}
            <div className="whyTimeline">
                <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1gJFmDjbpCIQ5UIpHfAD6ElmtjIbriYa8dkDqshqyAaY&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> 
            </div>

            {/**ESSAYS */}
            <div className="whyEssays">
                <h2>FEATURED ESSAYS</h2>
                <div className="whyEssays_essays">
                    {page.essays.map(e => <a href={e[1]} key={Math.random()*Math.random()}>
                        <img src={e[0]} alt="Document cover"/>
                    </a>)}
                </div>
            </div>
        </div>
    )
}

export default Why
