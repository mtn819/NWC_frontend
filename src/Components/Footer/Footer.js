import React, { useState, useEffect } from 'react'
import './Footer.css';
import icon from './res/icon.png';
import instagram from "./res/Instagram.png";
import twitter from "./res/Twitter.png";
import facebook from "./res/Facebook.png";
import neh_seal from "./res/neh.png";

import VARIABLES from '../../config/.env';

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value);
}

function Footer() {
 
  const [instagramLink, setInstagramLink] = useState("/");
  const [twitterLink, setTwitterLink] = useState("/");
  const [facebookLink, setFacebookLink] = useState("/");
  const [contactEmail, setContactEmail] = useState("abc@defg.com");
  const [paragraph, setParagraph] = useState("all work and no play makes jack a dull boy.")
  const [donateLink, setDonateLink] = useState("/");

  useEffect(() => {
    fetch([VARIABLES.fetchBaseUrl, "content-footers"].join('/'))
    .then(res => res.json())
    .then(data => {
      const get = (section) => {
        return getWhere(data, 'Section', section)[0]['Content'];
      };

      setInstagramLink(get("InstagramLink"));
      setTwitterLink(get("TwitterLink"));
      setFacebookLink(get("FacebookLink"));
      setContactEmail(get("contactEmail"));
      setParagraph(get("paragraph"));
      setDonateLink(get("DonateLink"));
    })
    .catch(err => console.log(err));
  }, []);

  return (
     <div className="footer">
        <div className="footer_top icon">
          <img src={icon} alt="project_icon"/>
        </div>
        <div className="footer_top home">
          <a href="/"><p>HOME</p></a>
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
            <img src={neh_seal} alt="NEH_seal"/> 
          </div>
          {paragraph}
        </div>
        
    </div>
  
      
      
      /* <div className="footer">

      <div className="footer_top">
        <div className="footer_icon">
          <img src={icon} alt="project_icon"/>
        </div>

        <div className="footer_home">
          <a href="/"><p>HOME</p></a>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_contact">
          <a href={`mailto:${contactEmail}`}><p>CONTACT</p></a>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_donate">
            <a href={donateLink}>DONATE</a>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_social">
          <p>SOCIAL MEDIA</p>
          <div className="footer_socialIcons">
            <a href={instagramLink}><div className="footer_instagram"><img src={instagram} alt="instagram_logo"/></div></a>
            <a href={twitterLink}><div className="footer_twitter"><img src={twitter} alt="twitter_logo"/></div></a>
            <a href={facebookLink}><div className="footer_facebook"><img src={facebook} alt="facebook_logo"/></div></a>
          </div>
        </div>
      </div>

      <div className="footer_bot">
        <div className="footer_support">
        The Sharing Stories from 1977 project appreciates the support of the following:
        </div>
        <div className="footer_seal">
          <img src={neh_seal} alt="NEH_seal"/> 
        </div>
        {paragraph}
      </div>
    </div> */
  
  )
}

export default Footer
