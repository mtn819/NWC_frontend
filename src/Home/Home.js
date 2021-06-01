import React, {useState, useEffect} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Splash from "./Splash";
import About from "./About";
import Map from "./Map";
import Explore from './Explore';
import Highlights from './Highlights';

import axios from '../config/axios';

const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value)[0];
}

function Home() {
  const [aboutContent, setAboutContent] = useState([]);
  const [mapContent, setMapContent] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/content-homes');

      const get = (section) => {
        return getWhere(req.data, 'Section', section)['Content'];
      }

      setAboutContent(
        get("About_The_Project")
      );

      setMapContent(
        get("Interactive_Map")
      )
    }

    fetchData();
  }, [])

  return (
    <Container className="bg-beige pt-4" style={{borderTop: "8px solid red"}}  fluid>
      <Splash/><hr/>
      <About content={aboutContent}/><hr/>
      <Map content={mapContent}/><hr/>
      <Explore/><hr/>
      <Highlights/><hr/>
    </Container>
  )
}

export default Home;