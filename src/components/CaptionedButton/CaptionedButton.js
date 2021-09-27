import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./CaptionedButton.css";

function CaptionedButton({img, href, children}) {
  return (
    <a
      className="CaptionedButton_linkWrapper"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="CaptionedButton">
        <img src={img} alt="Button"/>
        <div className="CaptionedButton_children">
          <ReactMarkdown>
            {children}
          </ReactMarkdown>
        </div>
      </div>
    </a>
  )
}

export default CaptionedButton
