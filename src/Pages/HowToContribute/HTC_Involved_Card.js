import React from 'react';

function HTC_Involved_Card({ thumbnail, heading, content }) {
  return (
    <div className="htc_involved_card">
      <img src={thumbnail} className="htc_involved_card_thumbnail" />
      <div className="htc_involved_card_text">
        <h3 className="htc_involved_card_heading">{heading}</h3>
        <p className="htc_involved_card_content">{content}</p>
      </div>
    </div>
  )
}

export default HTC_Involved_Card;