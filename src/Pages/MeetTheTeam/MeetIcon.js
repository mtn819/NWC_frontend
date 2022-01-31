import React, { useState } from 'react';
import "./MeetIcon.css";

function MeetIcon({img, imghover, name, role, pfp, popupText}) {
  const [currImg, setCurrImg] = useState(img);
  const [popup, setPopup] = useState(false);

  return (
  <div 
    className="meetIcon"
    onMouseEnter={()=>setCurrImg(imghover)}
    onMouseLeave={()=>setCurrImg(img)}
    onClick={()=>setPopup(!popup)}
  >
    <img src={currImg} alt={name} />
    <p className="meetIcon_name">{name}</p>
    <p className="meetIcon_role">{role}</p>
    {
      popup
      ? <div className="meetIcon_popup">
        <img src={pfp} alt={name} />
        <div className="meetIcon_popupText">
          <div className="meetIcon_popupHeader">
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
          <p>{popupText}</p>
        </div>
      </div>
      : ''
    }
  </div>
  );
}

export default MeetIcon;
