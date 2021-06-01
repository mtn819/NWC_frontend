import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

function About({content}) {
  return (
    <Row className="mt-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>About the Project</h3>
            </Card.Title>
            <hr/>
            <Card.Text>
              <p>
                {content}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Image thumbnail src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
      </Col>
    </Row>
  )
}

export default About
