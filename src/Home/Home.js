import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Splash from "./Splash";
import About from "./About";

function Home() {
  return (
    <Container fluid className="mt-4 mb-4">
      <Splash/>
      <About/>
    </Container>
  )
}

export default Home;