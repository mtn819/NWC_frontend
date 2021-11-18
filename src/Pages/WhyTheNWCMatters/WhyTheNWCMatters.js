import React, { useState } from 'react'
import Arrow from './Arrow';

import button from './res/button.png';

const min = (a, b) => {
  if(a < b){
    return a;
  }
  return b;
}

function WhyTheNWCMatters() {
  const jack = "ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ";
  const whyBanner_cardText = jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack+jack;

  const [more, setMore] = useState(false);

  const whyDocs_doclist = [
    "https://marketplace.canva.com/EAEjCVH44nE/2/0/1131w/canva-pizza-menu-v-63l6jtYL4.jpg",
    "https://marketplace.canva.com/EAEjCVH44nE/2/0/1131w/canva-pizza-menu-v-63l6jtYL4.jpg",
    "https://marketplace.canva.com/EAEjCVH44nE/2/0/1131w/canva-pizza-menu-v-63l6jtYL4.jpg",
  ]

  const whyTime_img = "http://dailytrojan.com/wp-content/uploads/2013/10/wen_featureArt_TonyZhou.jpg";
  const whyTime_text = jack+jack+jack+jack+jack+jack+jack+jack+jack;

  const whyEssay_essaylist = [...whyDocs_doclist, whyDocs_doclist[0]];

  return (
    <div>

      {/**BANNER */}
      <div className={
          "whyBanner" + " " + (more ? "whyBanner--more" : "")
        }
      >
        <div className="whyBanner_button">
          <img src={button}/>
        </div>
        <div
          className="whyBanner_card"
          onClick={e=>setMore(!more)}
        >
          <p className="whyBanner_header">
            HISTORICAL OVERVIEW
          </p>
          <p className="whyBanner_text">{
            // if text is expanded, show whole text
            more ? whyBanner_cardText :
            // else, show a only a slice of the text
            // or the whole text, if the text is short enough
            whyBanner_cardText.slice(0, min(140, whyBanner_cardText.length)) + "..."
          }</p>
          <p className="whyBanner_more">
            READ {more ? "LESS" : "MORE"}
          </p>
        </div>
      </div>


      {/**Primary Documnets */}
      <div className="whyDocs">
        <div className="whyDocs_social">
          <div className="whyDocs_facebook">
            FACEBOOK
          </div>
          <div className="whyDocs_twitter">
            TWITTER
          </div>
        </div>
        <div className="whyDocs_header">
          <p>PRIMARY DOCUMENTS</p>
        </div>
        <div className="whyDocs_doclist">
          {whyDocs_doclist.map(d => <
            img src={d}
          />)}
        </div>
      </div>

      {/**Timeline */}
      <div className="whyTime">
        <div className="whyTime_svg">
          <div className="whyTime_svgBall"></div>
          <div className="whyTime_svgLine"></div>
          <div className="whyTime_svgBorder"></div>
        </div>
        <div className="whyTime_img">
          <img src={whyTime_img}/>
        </div>
        <div className="whyTime_card">
          <div className="whyTime_date">
            SEPT 1977
          </div>
          <div className="whyTime_header">
            TIMELINE OF THE NWC
          </div>
          <div className="whyTime_text">
            {whyTime_text}
          </div>
        </div>
      </div>

      {/**Essays */}
      <div className="whyEssays">
        <div className="whyEssays_frontdrop">
          <div className="whyEssays_header">
            FEATURED ESSAYS
          </div>
          <div className="whyEssays_container">
            <Arrow direction="left" color="white"/>
            <div className="whyEssays_essays">
              {whyEssay_essaylist.map(e => <
                img src={e}
              />)}
            </div>
            <Arrow direction="right" color="white"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyTheNWCMatters
