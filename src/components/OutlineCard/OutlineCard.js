import React from 'react'
import ReactMarkdown from 'react-markdown';
import "./OutlineCard.css";

function OutlineCard({heading, children, headingbg}) {
  if(headingbg === undefined){
    headingbg = "white";
  }

  return (
    <div className="OutlineCard">
      <h2 style={{backgroundColor: headingbg}}>&nbsp;{heading}&nbsp;</h2>
      <div className="OutlineCard_children">
        <ReactMarkdown>
          {children}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default OutlineCard
