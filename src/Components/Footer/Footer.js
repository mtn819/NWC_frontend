import React, { useState, useEffect } from 'react'
import './Footer.css';
import icon from './res/icon.png';
import instagram from "./res/Instagram.png";
import twitter from "./res/Twitter.png";
import facebook from "./res/Facebook.png";

import axios from '../../config/axios';

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value);
}

function Footer() {

  const [instagramLink, setInstagramLink] = useState("/");
  const [twitterLink, setTwitterLink] = useState("/");
  const [facebookLink, setFacebookLink] = useState("/");

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-footers');

      const get = (section) => {
        return getWhere(req.data, 'Section', section)[0]['Content'];
      };

      setInstagramLink(get("InstagramLink"));
      setTwitterLink(get("TwitterLink"));
      setFacebookLink(get("FacebookLink"));
    }

    fetchData();
  }, []);

  return (
    <div className="footer">

      <div className="footer_top">
        <div className="footer_icon">
          <img src={icon}/>
        </div>

        <div className="footer_home">
          <p>HOME</p>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_about">
          <p>ABOUT</p>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_contact">
          <p>CONTACT</p>
        </div>
        <div className="footer_bar"></div>

        <div className="footer_social">
          <p>SOCIAL MEDIA</p>
          <div className="footer_socialIcons">
            <a href={instagramLink}><div className="footer_instagram"><img src={instagram}/></div></a>
            <a href={twitterLink}><div className="footer_twitter"><img src={twitter}/></div></a>
            <a href={facebookLink}><div className="footer_facebook"><img src={facebook}/></div></a>
          </div>
        </div>
      </div>

      <div className="footer_bot">
        Sharing Stories from 1977 is a Flagship Project of the Center for Public History, the Digital Research Commons, and the Institute for Research on Women, Gender &amp; Sexuality at the University of Houston.
      </div>
    </div>
  )
}

export default Footer
