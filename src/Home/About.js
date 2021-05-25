import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

function About() {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <img width="400px" height="400px" src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
      </Col>
    </Row>
  )
}

export default About
