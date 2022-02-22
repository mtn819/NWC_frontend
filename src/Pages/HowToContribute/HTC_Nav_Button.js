import React from 'react'

function HTC_Nav_Button({imgSrc, active}) {
  return (
    <div className="htc_nav_button">
      <img src={imgSrc} className="htc_nav_button_img"/>
    </div>
  )
}

export default HTC_Nav_Button
