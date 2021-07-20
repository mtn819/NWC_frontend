import React from 'react'
import Splash from './Splash';
import Card from './Card';
import Featured from './Featured';
import InfoPage from './InfoPage/InfoPage';

import './Discover.css';

import filler from './res/fillerimg.png';
import Stories from './Stories';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function DiscoverNWCStories() {

  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:storyId`}>
        <InfoPage/>
      </Route>

      <Route path={match.path}>
        <div className="discover">
          <Splash/>
          <Featured path={match.path}/>
          <Stories path={match.path}/>
        </div>
      </Route>
    </Switch>
  )
}

export default DiscoverNWCStories
