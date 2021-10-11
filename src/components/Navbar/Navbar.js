import React from 'react'
import {
  Link
} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
    )
}

export default Navbar
