import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InvolveCard from './InvolveCard'

function Involve() {
  const images = [
    "https://media.gettyimages.com/photos/balanced-stones-on-a-pebble-beach-during-sunset-picture-id157373207?s=612x612",
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  ]

  return (
    <>
      <Row><Col><h3>How to Get Involved</h3></Col></Row><hr/>
      <InvolveCard 
        imgUrl={images[0]}
        title="Researchers"
        text="(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
      <InvolveCard 
        imgUrl={images[1]}
        title="Archivists"
        text="(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
      <InvolveCard 
        imgUrl={images[0]}
        title="NWC Participants"
        text="(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
      <InvolveCard 
        imgUrl={images[1]}
        title="Educators"
        text="(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
      <InvolveCard 
        imgUrl={images[0]}
        title="Students"
        text="(Will be fetched) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
    </>
  )
}

export default Involve
