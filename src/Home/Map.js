import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'
import InteractiveMap from './InteractiveMap'

function Map({content}) {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Title>
              <h3>
                Interactive Map
              </h3>
            </Card.Title>
            <hr/>
            <Card.Text>
              {content}
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <InteractiveMap/>
    </>
  )
}

export default Map
