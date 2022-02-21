import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  function JuicyLink({ navname, pathname }) {
    return (
      <Link
        className={`navigation_link ${
          location.pathname === pathname ? 'navigation_link--selected' : ''
        }`}
        to={pathname}
      >
        {navname}
      </Link>
    );
  }

  return (
    <div className="navigation_total">
      <nav className="navigation">
        <div></div>
        <JuicyLink navname="Home" pathname="/" />
        <JuicyLink navname="About Project" pathname="/About" />
        <JuicyLink navname="Why The NWC Matters" pathname="/Why" />
        <JuicyLink
          navname="Discover NWC Stories"
          pathname="/DiscoverNWCStories"
        />
        <JuicyLink navname="Mapping the NWC" pathname="/MappingNWC" />
        <JuicyLink navname="How to Contribute" pathname="/HowToContribute" />
        <div></div>
        {/*
        <Link className="navigation_link" to="/HowToContribute">HOW TO CONTRIBUTE</Link>
        <img className="navigation_search" src={icon_search}/>*/}
      </nav>
      <div className="navigation_border"></div>
    </div>
  );
}

export default Navigation;
