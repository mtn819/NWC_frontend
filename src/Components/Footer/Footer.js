import React, { useState, useEffect } from 'react'
import "./Footer.css";

import VARIABLES from "../../config/.env";
import { processPage, getSafe } from "../../Components/util/util";

import icon from "../../res/imgs/icon.png";
import instagram from "../../res/imgs/instagram.png";
import twitter from "../../res/imgs/twitter.png";
import facebook from "../../res/imgs/facebook.png";
import natendow from "../../res/imgs/natendow.png";

function Footer() {
    const [state, setState] = useState([]);

    const { fetchBaseUrl } = VARIABLES;

    useEffect(() => {
        fetch([fetchBaseUrl, "PAGES?PAGE=FOOTER"].join('/'))
        .then(response => response.json())
        .then(data => processPage(data, setState))
        .catch(err => console.log(err));
    }, []) /* eslint-disable-line */

    return (
        <div className="footer">
            <div className="footer_top">
                <img src={icon} alt="Nwc Icon"/>
                <div className="footer_home">
                    <a href={getSafe(state, "HOME_LINK")}>HOME</a>
                </div>
                <div className="footer_about">
                    <a href={getSafe(state, "ABOUT_LINK")}>ABOUT</a>
                </div>
                <div className="footer_contact">
                    <a href={getSafe(state, "CONTACT_LINK")}>CONTACT</a>
                </div>
                <div className="footer_donate">
                    <a href={getSafe(state, "DONATE_LINK")}>DONATE</a>
                </div>
                <div className="footer_media">
                    <p>SOCIAL MEDIA</p>
                    <div className="footer_mediaIcons">
                        <img src={instagram} alt="instagram"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={facebook} alt="facebook"/>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>THE SHARING STORIES FROM 1977 PROJECT APPRECIATES THE SUPPORT OF THE FOLLOWING:</p>
                <img src={natendow} alt="NATIONAL ENDOWMENT FOR THE HUMANITIES"/>
                <p className="footer_bottomText">{getSafe(state, "BOTTOM_TEXT")}</p>
            </div>
        </div>
    )
}

export default Footer
