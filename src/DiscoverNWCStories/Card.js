import React from 'react'
import "./Card.css";

function Card({link, thumbnail, name, role, state, bottomText}) {
  return (
    <a href={link}>
    <div className="discover_card">
      <div className="discover_card_thumbnail">
        <img src={thumbnail} alt="Thumbnail" />
      </div>

      <div className="discover_card_hole">

      </div>

      <div className="discover_card_stateTop">
        {state}
      </div>

      <div className="discover_card_shelf">
        <div className="discover_card_shelf1"></div>
        <div className="discover_card_shelf2"></div>
        <div className="discover_card_shelf3"></div>
      </div>

      <div className="discover_card_data">
        <p className="discover_card_name">
          {name}
        </p>
        <p className="discover_card_role">
          {role}
        </p>
        <p className="discover_card_state">
          {state}
        </p>
      </div>

      <div className="discover_card_bottomText">
        {bottomText}
      </div>
    </div>
    </a>
  )
}

export default Card
