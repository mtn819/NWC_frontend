import React, { useState, useEffect } from 'react'
import {
    useParams,
    Link,
} from "react-router-dom";
import "./DiscoverInfo.css";
import mayaangelou from "../../res/imgs/mayaangelou.png";
import videofiller from "../../res/imgs/videofiller.png";
import ReactMarkdown from 'react-markdown';
import docfiller from "../../res/imgs/docfiller1.png";
import {processPageOld} from "../../components/util/util";
import { fetchBaseUrl } from '../../config/.env';
import { loaddiscover } from "./discoverInfoLoader";
import { loadcards } from "./cardloader";
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import InfoVideo from '../../components/InfoVideo/InfoVideo';

function DiscoverInfo({}) {
    const { storyId } = useParams(); // WILL BE USED TO GRAB STRAPI DATA
    
    const [ pageState, setPageState ] = useState({
        /**PROFILE STUFF (left) */
        pfpsrc: mayaangelou,
        pfpalt: "MAYA ANGELOU",
        pfcaption: "PHOTO BY JANE DOE",
        pfname: "MAYA ANGELOU",
        pfdob: "4 April, 1928",
        pfcareer: ["POET", "WRITER", "CIVIL RIGHTS ACTIVIST"],
        pfrole: [
            "NATIONAL COMMISSIONER",
            `WROTE POEM "TO FORM A MORE PERFECT UNION"`,
            "WROTE THE NEW DECLARATION OF SENTIMENTS",
        ],
        AvalonUrl: "abcdefg",
        AvalonTitle: "querty",
        tags: ["ACTIVISM", "AFRICAN-AMERICAN", "AUTHOR", "CIVIL RIGHTS", "POETRY", "WRITER"],
        bigquote1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        bigquote2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        sources: [],
        archive: [
            // [thumbnail, link]
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
        ]
    });

    // grab page data
    useEffect(() => {
        fetch([fetchBaseUrl, `content-discover-stories?_id=${storyId}`].join('/'))
        .then(res => res.json())
        .then(data => loaddiscover(data, setPageState, pageState))
        .then(data => console.log(pageState))
        .catch(err => console.log(err));
    }, []);

    const [cards, setCards] = useState([]);

    // grab featureds
    useEffect(() => {
        fetch([fetchBaseUrl, `content-discover-stories?featured=true`].join('/'))
        .then(res => res.json())
        .then(data => loadcards(data, setCards))
        .then(data => console.log(cards))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="discoverInfo">
            
            {/**BANNER */}
            <div className="discoverInfoBanner">
                <div className="discoverInfoBanner_left">
                    <Link to="/discover">&larr; BACK TO DISCOVER PAGE</Link>
                    <h1>MAYA ANGELOU</h1>
                </div>
                <div className="discoverInfoBanner_right">
                    <Link to="/">BIOGRAPHY</Link>
                    <Link to="/">RELATED ARCHIVAL ITEMS</Link>
                    <Link to="/">SOURCES</Link>
                </div>
            </div>

            {/**BODY */}
            <div className="discoverInfoBody">

                {/**BODY_LEFT */}
                <div className="discoverInfoBody_left">
                    <div className="discoverInfoBody_profile">
                        <img className="discoverInfoBody_pfp" src={pageState.pfpsrc} alt={pageState.pfpalt}/>
                        <p className="discoverInfoBody_caption">{pageState.pfcaption}</p>

                        <h3 className="discoverInfoBody_hname">NAME</h3>
                        <p className="discoverInfoBody_name">{pageState.pfname}</p>

                        <h3 className="discoverInfoBody_hdob">BORN</h3>
                        <p className="discoverInfoBody_dob">{pageState.pfdob}</p>

                        <h3 className="discoverInfoBody_hcareer">CAREER</h3>
                        <p className="discoverInfoBody_career">
                            {<>{pageState.pfcareer.map(c => c).join(', ')}</>}
                        </p>

                        <h3 className="discoverInfoBody_hrole">ROLE AT NWC</h3>
                        {pageState.pfrole.map(r => <p className="discoverInfoBody_role" key={r}>
                            {r}
                        </p>)}
                    </div>
                    <button type="button" className="discoverInfoBody_submit">SUBMIT CORRECTIONS</button>
                </div>

                {/**BODY_RIGHT */}
                <div className="discoverInfoBody_right">
                    
                    <InfoVideo src={pageState.AvalonUrl} title={pageState.AvalonTitle} />

                    <div className="discoverInfoBody_tagh">
                        <h3>USER TAGS</h3>
                    </div>
                    <div className="discoverInfoBody_tags">{
                        pageState.tags.map(t => <p className="discoverInfoBody_tag">
                            {t}
                        </p>)
                    }</div>

                    <h2 className="discoverInfoBody_bioh">
                        BIOGRAPHY
                    </h2>

                    <div className="discoverInfoBody_bigquote discoverInfoBody_bigquote1">
                        <p>{pageState.bigquote1}</p>
                    </div>

                    <div className="discoverInfoBody_text">
                        <ReactMarkdown>
                            {pageState.text}
                        </ReactMarkdown>
                    </div>

                    <div className="discoverInfoBody_bigquote discoverInfoBody_bigquote1">
                        <p>{pageState.bigquote2}</p>
                    </div>

                    <div className="discoverInfoBody_sources">
                        <h3>Sources</h3>
                        {pageState.sources.map(s => <p>
                            {s}
                        </p>)}
                    </div>
                </div>
            </div>

            {/**ARCHIVE */}
            <div className="discoverInfoArchive">
                <h2>EXPLORE MORE FROM THE ARCHIVE</h2>
                <div className="discoverInfoArchive_items">
                    {pageState.archive.map(item => <a className="discoverInfoArchive_item" href={item[1]}>
                        <img className="discoverInfoArchive_thumb" src={item[0]} alt="Archive Paper" key={Math.random()*Math.random()}/>
                        <p className="discoverInfoArchive_title">{item[2]}</p>
                    </a>)}
                </div>
            </div>

            {/**STORIES */}
            <div className="discoverInfoStories">
                <h2>EXPLORE MORE STORIES</h2>
                <div className="discoverInfoStories_stories">
                    { cards.map(c => <a href={`/discover/${c.id}`}><FeaturedCard
                        id={c.id}
                        name={c.name}
                        imgSrc={c.img}
                        location={c.state}
                        role={c.role}
                    /></a>) }
                </div>
            </div>
        </div>
    )
}

export default DiscoverInfo
