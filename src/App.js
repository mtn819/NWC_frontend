import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './Custom.css';
import Footer from "./Components/Footer/Footer";
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
// import MappingNWC from "./MappingNWC/MappingNWC";
// import HowToContribute from "./HowToContribute/HowToContribute";
import About from "./Pages/AboutProject/About";
import Why from "./Pages/Why/Why";
import Essay from "./Pages/Essay/Essay";
import Torch from "./Pages/Torch/Torch";
import Participants from "./Pages/Participants/Participants";
import Discover from "./Pages/Discover/Discover";
import DiscoverInfo from "./Pages/Discover/DiscoverInfo";

function App() {
  return (
    <Router basename={'/dev'} className="App">
      <Navigation/>

      <Switch>
        {/*
        <Route path = "/MappingNWC">
          <MappingNWC/>
        </Route>
        <Route path = "/HowToContribute">
          <HowToContribute/>
        </Route>
        */}
        <Route path = "/DiscoverNWCStories">
          <Discover />{/*<DiscoverNWCStories/>*/}
        </Route>
        <Route path="/discover/:storyId">
          <DiscoverInfo/>
        </Route>
        <Route path = "/Discover">
          <Discover />
        </Route>
        <Route path = "/Why">
          <Why/>
        </Route>
        <Route path = "/Essay">
          {/*<Essay/>*/}
          <Essay/>
        </Route>
        <Route path = "/Torch">
         <Torch/>
        </Route>
        <Route path = "/About">
          <About></About>
        </Route>
        <Route path = "/Participants">
          <Participants />
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
