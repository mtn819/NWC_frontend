import React from 'react'
import ReactMarkdown from 'react-markdown'
import "./CarouselFrame.css";

function CarouselFrame({title, image, className, children}) {
  return (
    <div className={`CarouselFrame ${className}`}>
      <img src={image} alt={title}/>
      <div className="CarouselFrame_text">
        <h2>{title}</h2>
        <div className="CarouselFrame_children">
          <ReactMarkdown>
            {`${children}`}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default CarouselFrame
