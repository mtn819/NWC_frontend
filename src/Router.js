import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Welcome from "./pages/Welcome/Welcome";
import Corrections from "./pages/Corrections/Corrections";
import ToolkitsEducators from "./pages/Toolkits/ToolkitsEducators";
import Discover from "./pages/Discover/Discover";
import DiscoverInfo from "./pages/Discover/DiscoverInfo";
import Why from "./pages/Why/Why";
import Contribute from "./pages/Contribute/Contribute";

function Router() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/toolkits/educators">
          <ToolkitsEducators/>
        </Route>
        <Route path="/contribute">
          <Contribute/>
        </Route>
        <Route path="/why">
          <Why/>
        </Route>
        <Route path="/corrections">
          <Corrections/>
        </Route>
        <Route path="/discover/:storyId">
          <DiscoverInfo/>
        </Route>
        <Route path="/discover">
          <Discover/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
