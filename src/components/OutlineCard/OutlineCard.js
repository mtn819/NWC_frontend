import React from 'react'
import "./OutlineCard.css";

function OutlineCard({heading, children, headingbg}) {
  if(headingbg === undefined){
    headingbg = "white";
  }

  return (
    <div className="OutlineCard">
      <h1 style={{backgroundColor: headingbg}}>&nbsp;{heading}&nbsp;</h1>
      <div className="OutlineCard_children">{children}</div>
    </div>
  )
}

export default OutlineCard
