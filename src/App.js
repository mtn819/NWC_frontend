import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Custom.css';

import './Custom.scss';
import Footer from "./Components/Footer/Footer";
import Navigation from './Components/Navigation/Navigation';
import Home from './Home/Home';
import MappingNWC from "./MappingNWC/MappingNWC";
import DiscoverNWCStories from "./DiscoverNWCStories/DiscoverNWCStories";

function App() {
  return (
    <Router className="App">
      <Navigation/>

      <Switch>
        <Route path = "/MappingNWC">
          <MappingNWC/>
        </Route>
        <Route path = "/DiscoverNWCStories">
          <DiscoverNWCStories/>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>

      <Footer/>
    </Router> 
  );
}

export default App;