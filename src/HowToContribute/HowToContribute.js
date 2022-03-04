import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import './HowToContribute.css';

import HTC_Splash from './HTC_Splash';
import HTC_Navigation from './HTC_Navigation';
import HTC_Involved from './HTC_Involved';
import HTC_Submissions from './HTC_Submissions';

function HowToContribute() {
  return (
    <div className="howtocontribute">
      <HTC_Splash/>
      <HTC_Navigation/>
      <HTC_Involved/>
      <HTC_Submissions/>
    </div>
  )
}

export default HowToContribute
