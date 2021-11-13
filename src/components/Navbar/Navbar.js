import React from 'react'
import {
  Link,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";

function NavbarLink({text, url}){
    const location = useLocation("/");
    return <Link to={url} className={location.pathname === url ? "navbar_a--active" : ""}>{text}</Link>
}

function Navbar() {

    return (
        <nav className="navbar">
            <NavbarLink text="HOME" url="/"/>
            <NavbarLink text="ABOUT" url="/about"/>
            <NavbarLink text="DISCOVER" url="/discover"/>
            <NavbarLink text="WHY THE NWC MATTERS" url="/why"/>
            <NavbarLink text="HOW TO CONTRIBUTE" url="/contribute"/>
        </nav>
    )
}

export default Navbar
