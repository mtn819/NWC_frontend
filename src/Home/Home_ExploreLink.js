import React from 'react'

function Home_ExploreLink({imgSrc, content}) {
  return (
    <div className="home_explorelink">
      <img src={imgSrc} className="home_explorelink_img"/>
      <div className="home_explorelink_content">{content}</div>
    </div>
  )
}

export default Home_ExploreLink
