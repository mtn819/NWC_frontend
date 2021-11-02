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
        videofiller: videofiller,
        tags: ["ACTIVISM", "AFRICAN-AMERICAN", "AUTHOR", "CIVIL RIGHTS", "POETRY", "WRITER"],
        bigquote1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        archive: [
            // [thumbnail, link]
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
            [docfiller, "https://www.youtube.com/watch?v=LXkF0gAqkdw", "tituloN"],
        ]
    });

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
                    
                    <img className="discoverInfoBody_video" src={pageState.videofiller} alt="video"/>

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
                        <p>{pageState.bigquote1}</p>
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
                <p>Have to turn other cards into solid components</p>
            </div>
        </div>
    )
}

export default DiscoverInfo
