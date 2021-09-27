import React, { useState } from 'react'
import './Map.css';
import maptick from './res/maptick.png';

import Arrow from './Arrow';

// point format: [Name, x, y, Description]
function Map({mapImg, points}) {
  const popupImg = "https://www.htmlcsscolor.com/preview/gallery/CCC9C9.png";
  const popupFeed = [popupImg, popupImg, popupImg]
  const description = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";

  const [hovering, setHovering] = useState(false);
  const [popup, setPopup] = useState(false);
  const [desc, setDesc] = useState(description);
  const [mainImage, setMainImage] = useState("");
  const [pdf1, setPdf1] = useState("");
  const [pdf2, setPdf2] = useState("");
  const [pdf3, setPdf3] = useState("");
  const [pdf4, setPdf4] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4] = useState("");
  const [caption1, setcaption1] = useState("");
  const [caption2, setcaption2] = useState("");
  const [caption3, setcaption3] = useState("");
  const [caption4, setcaption4] = useState("");

  return (
    <>
    {popup !== false ? <div className="homeMap_grayer" onClick={()=>setPopup(false)}></div> : ""}

    {/**LEFT SIDE */}
    <div className={"homeMap_map" + " " + (popup !== false ? "homeMap_map--grayed" : "")}>
      <div className="homeMap_poi">
        <p className="homeMap_poiHeader">
          POINTS OF INTEREST
        </p>
        {points.map(p => <p
          className={"homeMap_poiText" + " " + (hovering === p[0] ? "homeMap_poiText--hovering" : "")}
          onMouseEnter={() => setHovering(p[0])}
          onMouseLeave={() => setHovering(false)}
          onClick={() => {
            setPopup(p[0]);
            setDesc(p[3]);
            setMainImage(p[4]);
            setPdf1(p[5]);
            setPdf2(p[6]);
            setPdf3(p[7]);
            setPdf4(p[8]);
            setimg1(p[9]);
            setimg2(p[10]);
            setimg3(p[11]);
            setimg4(p[12]);
            setcaption1(p[13]);
            setcaption2(p[14]);
            setcaption3(p[15]);
            setcaption4(p[16]);
          }}
        >
          {p[0]}
        </p>)}
      </div>

      {/**RIGHT SIDE */}
      <div className="homeMap_interactive">
        <img className="homeMap_img" src={mapImg}/>

        {points.map(p => <div 
          className={
            "homeMap_dot" + " " +
            (hovering === p[0] ? "homeMap_dot--hovering" : "")}
          onMouseEnter={() => setHovering(p[0])}
          onMouseLeave={() => setHovering(false)}
          style={{
            marginLeft: `calc(${p[1]}*var(--xUnit))`,
            marginTop: `calc(${p[2]}*var(--xUnit))`
          }}
        >
          <img onClick={() => {
            setPopup(p[0]);
            setDesc(p[3]);
            setMainImage(p[4]);
            setPdf1(p[5]);
            setPdf2(p[6]);
            setPdf3(p[7]);
            setPdf4(p[8]);
            setimg1(p[9]);
            setimg2(p[10]);
            setimg3(p[11]);
            setimg4(p[12]);
            setcaption1(p[13]);
            setcaption2(p[14]);
            setcaption3(p[15]);
            setcaption4(p[16]); }} src={maptick}/>
          <div className="homeMap_dotLabel">{p[0]}</div>
        </div>)}
        
        {/**POPUP */}
        {popup !== false ? 
          <div className="homeMap_popup">
            <div className="homeMap_popupTop">
              <div 
                className="homeMap_popupBack"
                onClick={() => setPopup(false)}
              >
                <div className="homeMap_popupBackArrow">
                  <Arrow direction="left" color="#CCC9C9"/>
                </div>
                <p>BACK TO MAP</p>
              </div>
              <div className="homeMap_popupImg"><img src={mainImage}/></div>
              <div className="homeMap_popupSrc">
                <p>{caption1}</p>
                <p>{caption2}</p>
                <p>{caption3}</p>
                <p>{caption4}</p>
              </div>
              <div className="homeMap_popupFeed">
                <a href={pdf1} target="_blank">
                <div className="homeMap_popupFeedImg">
                  <img src={img1}/>
                </div>
                </a>
                <a href={pdf2} target="_blank">
                <div className="homeMap_popupFeedImg">
                  <img src={img2}/>
                </div>
                </a>
                <a href={pdf3} target="_blank">
                <div className="homeMap_popupFeedImg">
                  <img src={img3}/>
                </div>
                </a>
                <a href={pdf4} target="_blank">
                <div className="homeMap_popupFeedImg">
                  <img src={img4}/>
                </div>
                </a>
              </div>
            </div>

            <div className="homeMap_popupLocation">{popup}</div>
            <div className="homeMap_popupDescription">
              <p>{desc}</p>
            </div>
          </div>
        :""}
      </div>
    </div>
    </>
  )
}

export default Map