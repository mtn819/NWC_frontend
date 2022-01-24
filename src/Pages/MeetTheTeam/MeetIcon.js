import React, { useState } from 'react';
import "./MeetIcon.css";

function MeetIcon({img, imghover, name, role}) {
  const [currImg, setCurrImg] = useState(img);

  return (
  <div 
    className="meetIcon"
    onMouseEnter={()=>setCurrImg(imghover)}
    onMouseLeave={()=>setCurrImg(img)}
  >
    <img src={currImg} alt={name} />
    <p className="meetIcon_name">{name}</p>
    <p className="meetIcon_role">{role}</p>
  </div>
  );
}

export default MeetIcon;
