import React from 'react'
import './Footer.css';
import footer_icon from '../../res/toformamoreperfectunion.png';
import footer_socmedic from '../../res/socmedic.png';
import { Jumbotron } from 'react-bootstrap'

function Footer() {
  return (
    <div className="footer">
      <img src={footer_icon} className="footer_icon"/>

      <div className="footer_home">
        <h4 className="footer_header">HOME</h4>
        <a className="footer_item">LINK</a>
      </div>

      <div className="footer_about">
        <h4 className="footer_header">ABOUT</h4>
        <a className="footer_item">PROJECT CONTRIBUTORS</a>
      </div>

      <div className="footer_contact">
        <h4 className="footer_header">CONTACT</h4>
        <a className="footer_item">EMAIL</a>
      </div>

      <div className="footer_media">
        <img src={footer_socmedic} className="footer_socmedic"/>
      </div>
      
    </div>
  )
}

export default Footer
