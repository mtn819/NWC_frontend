import React, { useState, useEffect } from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

import VARIABLES from "../../config/.env";

import icon from "../../res/imgs/icon.png";
import instagram from "../../res/imgs/instagram.png";
import twitter from "../../res/imgs/twitter.png";
import facebook from "../../res/imgs/facebook.png";
import natendow from "../../res/imgs/natendow.png";

const getWhere = (data, key, value) => {
    return data.filter(e => e[key] === value);
}

function Footer() {

    const [donateLink, setDonateLink] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [paragraph, setParagraph] = useState("");

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-footers"].join('/'))
        .then(response => response.json())
        .then(data => {
            const get = (section) => {
                return getWhere(data, 'Section', section)[0]['Content'];
              };

            setDonateLink (
                get("DonateLink")
            );

            setFacebookLink (
                get("FacebookLink")
            );

            setInstagramLink (
                get("InstagramLink")
            );

            setTwitterLink (
                get("TwitterLink")
            );
      
            setContactEmail (
              get("contactEmail")
            );

            setParagraph (
                get("paragraph")
            );
          })
        }, []);  /* eslint-disable-line */

    return (
        <div className="footer">
                <div className="footer_top icon">
                    <img src={icon} alt="project_icon"/>
                </div>
                <div className="footer_top home">
                    <Link to={'/'}>HOME</Link>
                </div>
                <div className="footer_top contact">
                    <a href={`mailto:${contactEmail}`}><p>CONTACT</p></a>
                </div>
                <div className="footer_top donate">
                    <a href={donateLink}>DONATE</a>
                </div>
                <div className="footer_top social">
                    <div className="socialMedia">
                        <p>SOCIAL MEDIA</p>
                    </div>
                    <div className="instagram">
                        <a href={instagramLink}><img src={instagram} alt="instagram_logo"/></a>
                    </div>
                    <div className="twitter">
                        <a href={twitterLink}><img src={twitter} alt="twitter_logo"/></a>
                    </div>
                    <div className="facebook">
                        <a href={facebookLink}><img src={facebook} alt="facebook_logo"/></a>
                    </div>
                </div>
            <div className="footer_bot">
                <div className="footer_support">
                    The Sharing Stories from 1977 project appreciates the support of the following:
                </div>
                <div className="footer_seal">
                    <img src={natendow} alt="NEH_seal"/> 
                </div>
                {paragraph}
            </div>
        </div>
    )
}

export default Footer
