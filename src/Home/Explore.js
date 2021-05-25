import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'

function Explore() {
  return (
    <>
      <Row>
        <Col>
          <Image thumbnail src="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"/>
        </Col>
        <Col>
          <Card>
            <Card.Title>
              <h3>Explore the Site</h3>
            </Card.Title>
            <Card.Text>
              (Will be fetched) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Card.Text>
          </Card>
        </Col>
      </Row><hr/>
      <Row>
        <Col xs={6}>
          <a href="/">Why the NWC Matters</a>
          <p>(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </Col>
        <Col xs={6}>
          <a href="/">How to Contribute</a>
          <p>(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </Col>
        <Col xs={6}>
          <a href="/">Mapping the NWC</a>
          <p>(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </Col>
        <Col xs={6}>
          <a href="/">Discover NWC Stories</a>
          <p>(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </Col>
      </Row>
    </>
  )
}

export default Explore
