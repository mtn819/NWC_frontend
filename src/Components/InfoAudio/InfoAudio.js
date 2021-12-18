import React from 'react'
import "./InfoAudio.css";

function InfoAudio({src,title}) {
  return (
    <div className="info_audiocontainer">
      <iframe class="info_audioiframe"
          title={title}
          src={src}
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen>
      </iframe>
    </div>
  )
}

export default InfoAudio 