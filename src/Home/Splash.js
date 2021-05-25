import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

function Splash() {
  return (
    <Row>
      <Col>
        <Image thumbnail src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"/>
      </Col>
      <Col className="mr-2">
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>Sharing Stories from 1977</h3>
            </Card.Title>
            <hr/>
            <Card.Text>
              <p>
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
