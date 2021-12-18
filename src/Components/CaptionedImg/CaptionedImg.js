import React from 'react'
import "./CaptionedImg.css";

function CaptionedImg({src, caption, caption_more}) {
    return (
        <div className="captionedImg">
            <img src={src} alt={caption}/>
            <p className="captionedImg_caption" title={caption_more}>{caption}</p>
        </div>
    )
}

export default CaptionedImg
