import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

function InvolveCard({imgUrl, title, text}) {
  return (
    <Row className="mb-2">
      <Col xs={4}>
        <Image thumbnail src={imgUrl}/>
      </Col>
      <Col>
        <h3>{title}</h3>
        <p>{text}</p>
      </Col>
    </Row>
  )
}

export default InvolveCard
