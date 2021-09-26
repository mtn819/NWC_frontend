import React from 'react'
import "./CaptionedImg.css";

function CaptionedImg({img, caption}) {
  return (
    <div className="CaptionedImg">
      <img src={img}/>
      <p>{caption}</p>
    </div>
  )
}

export default CaptionedImg
