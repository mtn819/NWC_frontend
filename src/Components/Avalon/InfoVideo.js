import React from 'react'
import "./InfoVideo.css";

function InfoVideo({src,title}) {
  return (
    <iframe class="info_videoiframe"
        title={title}
        src={src}
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen>
    </iframe>
  )
}

export default InfoVideo