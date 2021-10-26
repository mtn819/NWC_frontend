import React, { useState } from 'react'
import {
    useParams,
    Link,
} from "react-router-dom";
import "./DiscoverInfo.css";
import mayaangelou from "../../res/imgs/mayaangelou.png";

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
                <div clasName="dicoverInfoBody_right">
                    ABCDEFG
                </div>

            </div>

        </div>
    )
}

export default DiscoverInfo
