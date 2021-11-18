import React, { useEffect, useState } from 'react'
import "./Why.css";
import buttonwhy from "./res/buttonwhy.png";
import whybannerhuman from "./res/whybannerhuman.png";
import VARIABLES from '../../config/.env';

function Why() {
    const [pageState, setPageState] = useState({
        HistoricalOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        BannerPhotoCredit: "Photo by Jane Doe",
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-whies"].join('/'))
    }, []);

    return (
        <div className="why">
            {/**BANNER */}
            <div className="whyBanner">
                <img className="whyBanner_button" src={buttonwhy} alt=""/>
                <div className="whyBanner_card">
                    <h2>HISTORICAL OVERVIEW</h2>
                    <p>{pageState.HistoricalOverview}</p>
                </div>
                <figure>
                    <img src={whybannerhuman} alt=""/>
                    <figcaption>
                        {pageState.BannerPhotoCredit}
                    </figcaption>
                </figure>
            </div>

            {/**TIMELINE */}
            <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Yjky3oa3s751TooQVoeVZasxl98_i8EcjTAqo896d1s&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> 
        </div>
    )
}

export default Why
