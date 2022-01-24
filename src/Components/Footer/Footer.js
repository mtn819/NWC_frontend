import React, { useState, useEffect } from 'react'
import "./Footer.css";

import VARIABLES from "../../config/.env";
import { processPage, getSafe } from "../../Components/util/util";

import icon from "../../res/imgs/icon.png";
import instagram from "../../res/imgs/instagram.png";
import twitter from "../../res/imgs/twitter.png";
import facebook from "../../res/imgs/facebook.png";
import natendow from "../../res/imgs/natendow.png";
import { Link } from 'react-router-dom';

function Footer() {
    // const [state, setState] = useState({});
    const [email, setEmail] = useState({});
    // const 

    const { fetchBaseUrl } = VARIABLES;

    useEffect(() => {
        fetch([fetchBaseUrl, "content-footers"].join('/'))
        .then(response => response.json())
        .then(data => {
            // extract text field;
            function etf(section){
                const obj = data.filter(obj => obj.Section === section)[0];
                return obj.Content + '';
            }

            setEmail(etf('email'));
        })
        .catch(err => console.log(err));
    }, []) /* eslint-disable-line */

    return (
        <div className="footer">
            <div className="footer_top">
                <img src={icon} alt="Nwc Icon"/>
                <div className="footer_home">
                    <Link to="/">HOME</Link>
                </div>
                <div className="footer_about">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="footer_contact">
                    <a href={`mailto:${email}`}>CONTACT</a>
                </div>
                <div className="footer_donate">
                    <a href={getSafe(email, "DONATE_LINK")}>DONATE</a>
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
                <p className="footer_bottomText">{getSafe(email, "BOTTOM_TEXT")}</p>
            </div>
        </div>
    )
}

export default Footer
