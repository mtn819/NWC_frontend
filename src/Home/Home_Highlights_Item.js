import React from 'react'

function Home_Highlights_Item({imgSrc, heading, content, active}) {
  return (
    <div className="home_highlights_item">
      <img src={imgSrc} className={"home_highlights_item_img" + " " + (active ? "home_highlights_item--active" : "")}/>
      <div className="home_highlights_item_caption">
          <div className="home_highlights_item_playnice">
          <div className="home_highlights_item_heading">{heading}</div>
          <div className="home_highlights_item_heading">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Home_Highlights_Item
