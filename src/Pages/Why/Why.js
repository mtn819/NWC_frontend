import React, { useEffect, useState } from 'react'
import "./Why.css";
import buttonwhy from "./res/buttonwhy.png";
import whybannerhuman from "./res/whybannerhuman.png";
import VARIABLES from '../../config/.env';
import { Link } from 'react-router-dom';
import InfoVideo from "../../Components/Avalon/InfoVideo";

function Why() {
    const [pageState, setPageState] = useState({
        HistoricalOverview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        BannerPhotoCredit: "Photo by Jane Doe",
        BannerPhotoCredit_more: "More Stuff",
        TimelineIframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Yjky3oa3s751TooQVoeVZasxl98_i8EcjTAqo896d1s&font=Default&lang=en&initial_zoom=2&height=650",
        documents: [],
        videoSRC: " https://av.lib.uh.edu:443/master_files/nk322d406/embed",
        videoTitle: "Video Title",
    });

    const [essays, setEssays] = useState([[]]);

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-whies"].join('/'))
        .then(res => res.json())
        .then(data => {

            const primaryDocuments = data[0].PrimaryDocuments.map(pd => {
                // [THUMBNAIL, PDF]    
                const thumbnail = [VARIABLES.fetchBaseUrl, pd.THUMBNAIL[0].url].join('');
                const pdf = [VARIABLES.fetchBaseUrl, pd.PDF[0].url].join('');

                return [thumbnail, pdf];
            });

            setPageState({
                ...pageState,
                ...data[0],
                documents: primaryDocuments,
            })
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-essays"].join('/'))
        .then(res => res.json())
        .then(data => {
            setEssays(
                data.map(d => {
                    const thumbnail = [VARIABLES.fetchBaseUrl, d.TallImage.Image[0].url].join('')
                    const id = d.id;

                    return [id, thumbnail];
                })
            )
        })
        .catch(err => console.log(err));
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
                    <figcaption title={pageState.BannerPhotoCredit_more}>
                        {pageState.BannerPhotoCredit}
                    </figcaption>
                </figure>
            </div>

            {/**VIDEO */}
            <div className="whyoutsideVideo">
                <div className="whyVideo">
                    <InfoVideo src={pageState.videoSRC} title={pageState.videoTitle} />
                </div>
            </div>

            {/**TIMELINE */}
            <iframe src={pageState.TimelineIframeSrc} width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> 


            <div className="whylowerSection">
                {/**ESSAYS */}
                <div className="whyEssays">
                    <h2>FEATURED ESSAYS</h2>
                    <div className="whyEssays_list">
                        {essays.map(e => <Link to={`essay?id=${e[0]}`}>
                            <img src={e[1]} alt="" key={e[0]} />
                        </Link>)}
                    </div>
                </div>

                {/**PUBLICATIONS */}
                <div className="whyPublications">
                    <h2>CONFERENCE PUBLICATIONS</h2>
                    <div className="whyPublications_list">
                        {pageState.documents.map(d => <a href={d[1]}>
                            <img src={d[0]} alt="" />
                        </a>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
