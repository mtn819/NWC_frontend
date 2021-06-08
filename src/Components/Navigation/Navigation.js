import React from 'react'

import './Navigation.css';
import navigation_hamburger from '../../res/navigation_hamburger.svg';
import navigation_search from '../../res/navigation_search.svg';

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';



function Navigation() {
  return (
    <>
    <div className="navigation">
      <div className="navigation_top">
        <img className="navigation_hamburger" src={navigation_hamburger}/>
        <img className="navigation_search" src={navigation_search}/>
      </div>
      <div className="navigation_bot">
        <Link className="navigation_link" to="/">HOME</Link>
        <Link className="navigation_link" to="/DiscoverNWCStories">DISCOVER NWC STORIES</Link>  
        <Link className="navigation_link" to="/">WHY THE NWC MATTERS</Link>
        <Link className="navigation_link" to="/MappingNWC">MAPPING THE NWC</Link>
        <Link className="navigation_link" to="/">HOW TO CONTRIBUTE</Link>

      </div>
    </div>
    <div className="navigation_border">

    </div>
    </>
  )
}

export default Navigation
