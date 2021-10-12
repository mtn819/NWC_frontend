import React from 'react'
import {
  Link,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    const location = useLocation("/");

    return (
        <nav className="navbar">
            <Link to="/" className={location.pathname === "/" ? "navbar_a--active" : ""}>HOME</Link>
            <Link to="/about" className={location.pathname === "/about" ? "navbar_a--active" : ""}>ABOUT</Link>
        </nav>
    )
}

export default Navbar
