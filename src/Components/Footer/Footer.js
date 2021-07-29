import React from 'react'
import './Footer.css';
import icon from './res/icon.png';
import instagram from "./res/Instagram.png";
import twitter from "./res/Twitter.png";
import facebook from "./res/Facebook.png";

function Footer() {
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
            <div className="footer_instagram"><img src={instagram}/></div>
            <div className="footer_twitter"><img src={twitter}/></div>
            <div className="footer_facebook"><img src={facebook}/></div>
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
