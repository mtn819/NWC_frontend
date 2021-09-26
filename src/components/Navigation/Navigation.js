import React from 'react'
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation()

  const renderClass = (element, modifier, condition) => {
    /**
     * Passed "block", "on", v => v > 5,
     * will return "block--on" if v > 5.
     */
    if(condition()){
      return `${element} ${element}--${modifier}`
    }
    return element;
  }
  
  const getCondition = pathname => {
    return () => location.pathname == pathname;
  }

  const rcCurried = pathname => {
    // renderClass, curried for the Links.
    const element = "NavigationTop_link";
    const modifier = "active";
    const condition = getCondition(pathname);
    return renderClass(element, modifier, condition);
  }

  return (
    <div className="Navigation">
      <div className="NavigationTop">
        <Link to='/' className={rcCurried('/')}>Home</Link>
        <Link to='/about' className={rcCurried('/about')}>About</Link>
      </div>
      <div className="NavigationBorder"></div>
    </div>
  )
}

export default Navigation
