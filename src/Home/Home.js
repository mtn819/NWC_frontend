import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Splash from "./Splash";
import About from "./About";
import Map from "./Map";
import Explore from './Explore';
import Highlights from './Highlights';

function Home() {
  return (
    <Container fluid>
      <Splash/><hr/>
      <About/><hr/>
      <Map/><hr/>
      <Explore/><hr/>
      <Highlights/><hr/>
    </Container>
  )
}

export default Home;