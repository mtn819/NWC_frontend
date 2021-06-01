import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import toformamoreperfectunion from "../res/toformamoreperfectunion.png";

function Splash() {
  return (
    <Row className="justify-content-between align-items-center text-white">
      <Col>
        <Image className="border-0 bg-transparent" thumbnail src={toformamoreperfectunion}/>
      </Col>
      <Col className="">
        <Card className="opacity-75 rounded-0 mw-400px ml-4" bg="light">
          <Card.Body>
            <Card.Title className="text-center">
              <h1 className="font-suez-one border-0"><bold>Sharing Stories from 1977</bold></h1>
            </Card.Title>
            <hr style={{color: "red", height: "2px", backgroundColor: "red", borderWidth: "0"}}/>
            <Card.Text className="text-center">
              <p className="font-odibee-sans font-size-xx-large">
                Putting the National Women's Conference on the Map
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Splash
