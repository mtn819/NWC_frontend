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
// import DiscoverNWCStories from "./DiscoverNWCStories/DiscoverNWCStories";
// import HowToContribute from "./HowToContribute/HowToContribute";
import About from "./Pages/AboutProject/About";
import Why from "./Pages/Why/Why";
import Essay from "./Pages/Essay/Essay";
import Torch from "./Pages/Torch/Torch";

function App() {
  return (
    <Router className="App">
      <Navigation/>

      <Switch>
        {/* <Route path = "/MappingNWC">
          <MappingNWC/>
        </Route>
        <Route path = "/DiscoverNWCStories">
          <DiscoverNWCStories/>
        </Route>
        <Route path = "/HowToContribute">
          <HowToContribute/>
        </Route> */}
        <Route path = "/Why">
          <Why/>
        </Route>
        <Route path = "/Essay">
          <Essay/>
        </Route>
        <Route path = "/Torch">
         <Torch/>
        </Route>
        <Route path = "/About">
          <About></About>
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