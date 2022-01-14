import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';



function Navigation() {
  const location = useLocation();

  function JuicyLink({navname, pathname}) {
    return (
      <Link
        className={
          `navigation_link ${
            (
              location.pathname === pathname
              ? "navigation_link--selected"
              : ""
            )
          }`
        }
        to={pathname}
      >
        {navname}
      </Link>
    );
  }

  return (
    <div className="navigation_total">
    <div className="navigation">
        <div></div>
        <JuicyLink navname="Home" pathname="/"/>
        <JuicyLink navname="About Project" pathname="/About"/>
        <JuicyLink navname="Why The NWC Matters" pathname="/Why"/>
        <JuicyLink navname="List Of Participants" pathname="/Participants"/>
        <JuicyLink navname="Discover NWC Stories" pathname="/DiscoverNWCStories"/>
        <div></div> 
        {/*<Link className="navigation_link" to="/DiscoverNWCStories">DISCOVER NWC STORIES</Link>  
        <Link className="navigation_link" to="/WhyTheNWCMatters">WHY THE NWC MATTERS</Link>
        <Link className="navigation_link" to="/MappingNWC">MAPPING THE NWC</Link>
        <Link className="navigation_link" to="/HowToContribute">HOW TO CONTRIBUTE</Link>
        <img className="navigation_search" src={icon_search}/>*/}
    </div>
    <div className="navigation_border">
      
    </div>
    </div>
  )
}

export default Navigation
