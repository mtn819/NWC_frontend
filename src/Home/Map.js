import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'
import InteractiveMap from './InteractiveMap'

function Map() {
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
              (Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <InteractiveMap/>
    </>
  )
}

export default Map
