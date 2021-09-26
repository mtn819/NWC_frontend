import React from 'react'
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { renderClass } from '../utilityFunctions/utilityFunctions';

function Navigation() {
  const location = useLocation()
  
  const getCondition = pathname => {
    return () => location.pathname === pathname;
  }

  const rcCurried = pathname => {
    // renderClass, curried for the Links.
    const element = "NavigationTop_link";
    const modifier = "active";
    const condition = getCondition(pathname);
    return renderClass(element, modifier, condition);
  }

  return (
    <nav className="Navigation">
      <div className="NavigationTop">
        <Link to='/' className={rcCurried('/')}>Home</Link>
        <Link to='/about' className={rcCurried('/about')}>About</Link>
      </div>
      <div className="NavigationBorder"></div>
    </nav>
  )
}

export default Navigation
