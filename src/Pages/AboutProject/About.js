import React, { useState, useEffect } from 'react'
import "./About.css";

import button from "./res/button.png";
import chick from './res/chick.png';
import tl from './res/tl.png';
import meet from './res/meatteem.png';
import bottomchart from './res/bottomchart.png';

import VARIABLES from "../../config/.env.js";

import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';



const getWhere = (data, key, value) => {
  return data.filter(e => e[key] === value);
}

const urlify = (str) => {
  return [VARIABLES.fetchBaseUrl, str].join('/');//VARIABLES.axiosBaseURL.slice(0, VARIABLES.axiosBaseURL.length-1) + "" + str;
}

function About() {
  const jack = "_";//"ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY. ALL WORK AND NO PLAY MAKES JACK A DULL BOY.";

  const [aboutBanner_card, setAboutBanner_card] = useState(jack);
  const [aboutImgCredit, setAboutImgCredit] = useState("JANE DOE");
  const [aboutImgCredit_more, setAboutImgCredit_more] = useState("")

  const [aboutTimeline_1, setAboutTimeline_1] = useState(jack);
  const [aboutTimeline_2, setAboutTimeline_2] = useState(jack);
  const [aboutTimeline_3, setAboutTimeline_3] = useState(jack);
  const [aboutTimeline_4, setAboutTimeline_4] = useState(jack);
  const [aboutTimeline_5, setAboutTimeline_5] = useState(jack);

  const [aboutDocuments_ddlink, setAboutDocuments_ddlink] = useState(jack);
  const [aboutDocuments_cblink, setAboutDocuments_cblink] = useState(jack);
  const [aboutDocuments_aplink, setAboutDocuments_aplink] = useState(jack);
  const [aboutDocuments_frlink, setAboutDocuments_frlink] = useState(jack);

  const contributors = {
    "PROJECT LEADS": [
      {
        name: "Nancy Beck Young",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8oKCiPj4/7+/sFBQVlZWW9vb35+fn19fXo6OjJyckrKyvMzMxdXV0TExNeXl4wMDBqamq8vLyXl5dXV1fr6+vU1NQNDQ1ubm40NDS0tLQ5OTkeHh6lpaXExMScnJzf399JSUncR1bBAAAC8UlEQVR4nO3aW3PaMBCGYYvIlDMJ4UxSmv7/H1nLxkYywvaaprN03ueiF2Ws0cdubFkiSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+B5p86fNH/9Dq/OP3Pun7Lq0PYQs5Gc2BzeR87Dlu5N6MRdvwoF/Ns9keW6rcs2snMiLaBrtqoQDwUVZdX4Zs8kixENk/zsxu7zOnccc6EqYrN0lr/cbcWJsFlFSRV0JXUBrbV7FqG0WUBhRU8JlUUFnE6liWlTQ2Qkmoimh+xss2Hijbi8BRRFVJdxlLepVsf7xpApo7LHzoKoSJtNrhpsqpmXA7N/RrPuYihK6QPMqoDWLoIp7r4LjwZPeaZy516iL6rmYugqWyUUV1JYwqKIxw6pR/QqOZN+ZuoTRRk39Fp3JVm26EuamZhTcbtJrBa24ggoT1m43bhm+DCsopC6hE/4t7h9o0URpwuC5ePjyAr7Jx1KY0N0/p16jBgHlL7EKE+b8KpZJx92Xah6dCYMqPtKiidaETj1iVsFe+yx6EwbPxb4tmihOmNXr7Afs/UUpTrj/8m42dnF3e6qF2oTBSsYZ9twMVptwXwtYf1/sTGfCNHibKL32alSdCW8q+ECj6kwYq6DTp1FVJvTfB8fHs/dcXMirqDFh8Lp0DJfh8ojqEuY728YPmC/DI9tTHalL6G382mKxnTbvo7bRl3B7LVix2K6/L949tonTldA7fLHh69K0drt53h3hbXTL4nY3/GkTNmw6+dtTkueiroSNhy9+o266j6kq4fZ+BevHNr87D6oq4cHkZSoqGOnD4tjGnXOfug+qKGFWptXlmujWfVVFUUBNCV2GQ7RFy0/LiKfnvZe6KtrGw5d51sfvookoS+iq2HD4kjfqScmapvrhiOiwyEX8aE6wFq5Lq199rSVXdfCxGhaWf3lgqeVlHquWb+4Ban4u+V0zURNQzUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Kf+AN1iGFg+mCFSAAAAAElFTkSuQmCC",
      },
      {
        name: "Lola Babalola",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8oKCiPj4/7+/sFBQVlZWW9vb35+fn19fXo6OjJyckrKyvMzMxdXV0TExNeXl4wMDBqamq8vLyXl5dXV1fr6+vU1NQNDQ1ubm40NDS0tLQ5OTkeHh6lpaXExMScnJzf399JSUncR1bBAAAC8UlEQVR4nO3aW3PaMBCGYYvIlDMJ4UxSmv7/H1nLxkYywvaaprN03ueiF2Ws0cdubFkiSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+B5p86fNH/9Dq/OP3Pun7Lq0PYQs5Gc2BzeR87Dlu5N6MRdvwoF/Ns9keW6rcs2snMiLaBrtqoQDwUVZdX4Zs8kixENk/zsxu7zOnccc6EqYrN0lr/cbcWJsFlFSRV0JXUBrbV7FqG0WUBhRU8JlUUFnE6liWlTQ2Qkmoimh+xss2Hijbi8BRRFVJdxlLepVsf7xpApo7LHzoKoSJtNrhpsqpmXA7N/RrPuYihK6QPMqoDWLoIp7r4LjwZPeaZy516iL6rmYugqWyUUV1JYwqKIxw6pR/QqOZN+ZuoTRRk39Fp3JVm26EuamZhTcbtJrBa24ggoT1m43bhm+DCsopC6hE/4t7h9o0URpwuC5ePjyAr7Jx1KY0N0/p16jBgHlL7EKE+b8KpZJx92Xah6dCYMqPtKiidaETj1iVsFe+yx6EwbPxb4tmihOmNXr7Afs/UUpTrj/8m42dnF3e6qF2oTBSsYZ9twMVptwXwtYf1/sTGfCNHibKL32alSdCW8q+ECj6kwYq6DTp1FVJvTfB8fHs/dcXMirqDFh8Lp0DJfh8ojqEuY728YPmC/DI9tTHalL6G382mKxnTbvo7bRl3B7LVix2K6/L949tonTldA7fLHh69K0drt53h3hbXTL4nY3/GkTNmw6+dtTkueiroSNhy9+o266j6kq4fZ+BevHNr87D6oq4cHkZSoqGOnD4tjGnXOfug+qKGFWptXlmujWfVVFUUBNCV2GQ7RFy0/LiKfnvZe6KtrGw5d51sfvookoS+iq2HD4kjfqScmapvrhiOiwyEX8aE6wFq5Lq199rSVXdfCxGhaWf3lgqeVlHquWb+4Ban4u+V0zURNQzUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Kf+AN1iGFg+mCFSAAAAAElFTkSuQmCC",
      },
      {
        name: "Lola Babalola 2",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8oKCiPj4/7+/sFBQVlZWW9vb35+fn19fXo6OjJyckrKyvMzMxdXV0TExNeXl4wMDBqamq8vLyXl5dXV1fr6+vU1NQNDQ1ubm40NDS0tLQ5OTkeHh6lpaXExMScnJzf399JSUncR1bBAAAC8UlEQVR4nO3aW3PaMBCGYYvIlDMJ4UxSmv7/H1nLxkYywvaaprN03ueiF2Ws0cdubFkiSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+B5p86fNH/9Dq/OP3Pun7Lq0PYQs5Gc2BzeR87Dlu5N6MRdvwoF/Ns9keW6rcs2snMiLaBrtqoQDwUVZdX4Zs8kixENk/zsxu7zOnccc6EqYrN0lr/cbcWJsFlFSRV0JXUBrbV7FqG0WUBhRU8JlUUFnE6liWlTQ2Qkmoimh+xss2Hijbi8BRRFVJdxlLepVsf7xpApo7LHzoKoSJtNrhpsqpmXA7N/RrPuYihK6QPMqoDWLoIp7r4LjwZPeaZy516iL6rmYugqWyUUV1JYwqKIxw6pR/QqOZN+ZuoTRRk39Fp3JVm26EuamZhTcbtJrBa24ggoT1m43bhm+DCsopC6hE/4t7h9o0URpwuC5ePjyAr7Jx1KY0N0/p16jBgHlL7EKE+b8KpZJx92Xah6dCYMqPtKiidaETj1iVsFe+yx6EwbPxb4tmihOmNXr7Afs/UUpTrj/8m42dnF3e6qF2oTBSsYZ9twMVptwXwtYf1/sTGfCNHibKL32alSdCW8q+ECj6kwYq6DTp1FVJvTfB8fHs/dcXMirqDFh8Lp0DJfh8ojqEuY728YPmC/DI9tTHalL6G382mKxnTbvo7bRl3B7LVix2K6/L949tonTldA7fLHh69K0drt53h3hbXTL4nY3/GkTNmw6+dtTkueiroSNhy9+o266j6kq4fZ+BevHNr87D6oq4cHkZSoqGOnD4tjGnXOfug+qKGFWptXlmujWfVVFUUBNCV2GQ7RFy0/LiKfnvZe6KtrGw5d51sfvookoS+iq2HD4kjfqScmapvrhiOiwyEX8aE6wFq5Lq199rSVXdfCxGhaWf3lgqeVlHquWb+4Ban4u+V0zURNQzUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Kf+AN1iGFg+mCFSAAAAAElFTkSuQmCC",
      },
    ],
    "PROJECT LEADS 2": [
      {
        name: "ABCDEFG",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8oKCiPj4/7+/sFBQVlZWW9vb35+fn19fXo6OjJyckrKyvMzMxdXV0TExNeXl4wMDBqamq8vLyXl5dXV1fr6+vU1NQNDQ1ubm40NDS0tLQ5OTkeHh6lpaXExMScnJzf399JSUncR1bBAAAC8UlEQVR4nO3aW3PaMBCGYYvIlDMJ4UxSmv7/H1nLxkYywvaaprN03ueiF2Ws0cdubFkiSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+B5p86fNH/9Dq/OP3Pun7Lq0PYQs5Gc2BzeR87Dlu5N6MRdvwoF/Ns9keW6rcs2snMiLaBrtqoQDwUVZdX4Zs8kixENk/zsxu7zOnccc6EqYrN0lr/cbcWJsFlFSRV0JXUBrbV7FqG0WUBhRU8JlUUFnE6liWlTQ2Qkmoimh+xss2Hijbi8BRRFVJdxlLepVsf7xpApo7LHzoKoSJtNrhpsqpmXA7N/RrPuYihK6QPMqoDWLoIp7r4LjwZPeaZy516iL6rmYugqWyUUV1JYwqKIxw6pR/QqOZN+ZuoTRRk39Fp3JVm26EuamZhTcbtJrBa24ggoT1m43bhm+DCsopC6hE/4t7h9o0URpwuC5ePjyAr7Jx1KY0N0/p16jBgHlL7EKE+b8KpZJx92Xah6dCYMqPtKiidaETj1iVsFe+yx6EwbPxb4tmihOmNXr7Afs/UUpTrj/8m42dnF3e6qF2oTBSsYZ9twMVptwXwtYf1/sTGfCNHibKL32alSdCW8q+ECj6kwYq6DTp1FVJvTfB8fHs/dcXMirqDFh8Lp0DJfh8ojqEuY728YPmC/DI9tTHalL6G382mKxnTbvo7bRl3B7LVix2K6/L949tonTldA7fLHh69K0drt53h3hbXTL4nY3/GkTNmw6+dtTkueiroSNhy9+o266j6kq4fZ+BevHNr87D6oq4cHkZSoqGOnD4tjGnXOfug+qKGFWptXlmujWfVVFUUBNCV2GQ7RFy0/LiKfnvZe6KtrGw5d51sfvookoS+iq2HD4kjfqScmapvrhiOiwyEX8aE6wFq5Lq199rSVXdfCxGhaWf3lgqeVlHquWb+4Ban4u+V0zURNQzUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Kf+AN1iGFg+mCFSAAAAAElFTkSuQmCC",
      },
      {
        name: "HIJKLMNOP",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8oKCiPj4/7+/sFBQVlZWW9vb35+fn19fXo6OjJyckrKyvMzMxdXV0TExNeXl4wMDBqamq8vLyXl5dXV1fr6+vU1NQNDQ1ubm40NDS0tLQ5OTkeHh6lpaXExMScnJzf399JSUncR1bBAAAC8UlEQVR4nO3aW3PaMBCGYYvIlDMJ4UxSmv7/H1nLxkYywvaaprN03ueiF2Ws0cdubFkiSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+B5p86fNH/9Dq/OP3Pun7Lq0PYQs5Gc2BzeR87Dlu5N6MRdvwoF/Ns9keW6rcs2snMiLaBrtqoQDwUVZdX4Zs8kixENk/zsxu7zOnccc6EqYrN0lr/cbcWJsFlFSRV0JXUBrbV7FqG0WUBhRU8JlUUFnE6liWlTQ2Qkmoimh+xss2Hijbi8BRRFVJdxlLepVsf7xpApo7LHzoKoSJtNrhpsqpmXA7N/RrPuYihK6QPMqoDWLoIp7r4LjwZPeaZy516iL6rmYugqWyUUV1JYwqKIxw6pR/QqOZN+ZuoTRRk39Fp3JVm26EuamZhTcbtJrBa24ggoT1m43bhm+DCsopC6hE/4t7h9o0URpwuC5ePjyAr7Jx1KY0N0/p16jBgHlL7EKE+b8KpZJx92Xah6dCYMqPtKiidaETj1iVsFe+yx6EwbPxb4tmihOmNXr7Afs/UUpTrj/8m42dnF3e6qF2oTBSsYZ9twMVptwXwtYf1/sTGfCNHibKL32alSdCW8q+ECj6kwYq6DTp1FVJvTfB8fHs/dcXMirqDFh8Lp0DJfh8ojqEuY728YPmC/DI9tTHalL6G382mKxnTbvo7bRl3B7LVix2K6/L949tonTldA7fLHh69K0drt53h3hbXTL4nY3/GkTNmw6+dtTkueiroSNhy9+o266j6kq4fZ+BevHNr87D6oq4cHkZSoqGOnD4tjGnXOfug+qKGFWptXlmujWfVVFUUBNCV2GQ7RFy0/LiKfnvZe6KtrGw5d51sfvookoS+iq2HD4kjfqScmapvrhiOiwyEX8aE6wFq5Lq199rSVXdfCxGhaWf3lgqeVlHquWb+4Ban4u+V0zURNQzUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Kf+AN1iGFg+mCFSAAAAAElFTkSuQmCC",
      },
    ],
  };

  const [currentTab, setCurrentTab] = useState("PROJECT LEADS");

  useEffect(() => {
    fetch([VARIABLES.fetchBaseUrl, "content-abouts"].join('/'))
    .then(res => res.json())
    .then(data => {
      const get = (section) => {
        return getWhere(data, 'Section', section)[0]['Content'];
      };

      setAboutBanner_card (
        get("aboutBanner_card")
      );

      setAboutImgCredit(
        get("aboutImgCredit")
      );

      setAboutImgCredit_more(
          get("aboutImgCredit_more")
      )

      setAboutTimeline_1 (
        get("aboutTimeline_1")
      );

      setAboutTimeline_2 (
        get("aboutTimeline_2")
      );

      setAboutTimeline_3 (
        get("aboutTimeline_3")
      );

      setAboutTimeline_4 (
        get("aboutTimeline_4")
      );

      setAboutTimeline_5(
        get("aboutTimeline_5")
      );
    })
  }, []);

  useEffect(() => {
    fetch([VARIABLES.fetchBaseUrl, "content-about-pdfs"].join('/'))
    .then(res => res.json())
    .then(data => {
      const get = (section) => {
        return urlify(getWhere(data, 'Section', section)[0]["pdf"][0]["url"]);
      };

      setAboutDocuments_ddlink(
        get("aboutDocuments_ddlink")
      );

      setAboutDocuments_cblink(
        get("aboutDocuments_cblink")
      );

      setAboutDocuments_frlink(
        get("aboutDocuments_frlink")
      );

      setAboutDocuments_aplink(
        get("aboutDocuments_aplink")
      );
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="about">
      
      {/**BANNER */}
      <div className="aboutBanner">
        <img src={button} className="aboutBanner_button" alt="_" />
        <div className="aboutBanner_card">
          <p>
            {aboutBanner_card}
          </p>
        </div>
        <div className="aboutBanner_credit" title={aboutImgCredit_more}><p>PHOTO BY {aboutImgCredit}</p></div>
        <img src={chick} className="aboutBanner_chick" alt="_" />
      </div>
    
      {/**TIMELINE */}
      <div className="aboutTimeline">
        <div className="aboutTimeline_header"><p>PROJECT TIMELINE</p></div>
        <div className="aboutTimeline_annot aboutTimeline_annot1">
          <div className="aboutTimeline_annotNo"><p>1</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_1}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot2">
          <div className="aboutTimeline_annotNo"><p>2</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_2}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot3">
          <div className="aboutTimeline_annotNo"><p>3</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_3}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot4">
          <div className="aboutTimeline_annotNo"><p>4</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_4}</div>
        </div>
        <div className="aboutTimeline_annot aboutTimeline_annot5">
          <div className="aboutTimeline_annotNo"><p>5</p></div>
          <div className="aboutTimeline_annotText">{aboutTimeline_5}</div>
        </div>
        <img src={tl} className="aboutTimeline_tl" alt="_" />
      </div>

      {/**DOCUMENTS */}
      <div className="aboutDocuments">
        <a href={aboutDocuments_ddlink} target="_blank" rel="noreferrer" >
        <div className="aboutDocuments_item aboutDocuments_design">
          DESIGN DOCUMENTS
        </div>
        </a>
        <a href={aboutDocuments_cblink} target="_blank" rel="noreferrer" >
        <div className="aboutDocuments_item aboutDocuments_code">
          CODEBOOK
        </div>
        </a>
        {/*<a href={aboutDocuments_aplink} target="_blank">
        <div className="aboutDocuments_item aboutDocuments_approach">
          APPROACH TO DIGITAL HUMANITIES
        </div>
        </a>*/}
        <a href={aboutDocuments_frlink} target="_blank" rel="noreferrer" >
        <div className="aboutDocuments_item aboutDocuments_further">
          FURTHER READING
        </div>
        </a>

      </div>

      {/**MEET */}
      {/*<div className="aboutMeet">
        <img src={meet} alt="_" />
      </div>*/}

      <MeetTheTeam />

      {/**TABLE */}
      <div className="aboutTable">
        <div className="aboutTable_tabs">
          {
            Object.keys(contributors).map(k => 
              <div
                key={Math.random() * Math.random()}
                className={`aboutTable_tab ${currentTab === k ? 'aboutTable_tab--active' : ''}`}
                onClick={e=>setCurrentTab(k)}
              >
                <p>{k}</p>
              </div>
            )
          }
        </div>
        <div className="aboutTable_entries">
          {
            contributors[currentTab].map(c => 
              <div
                className="aboutTable_entry"
                key={Math.random()}
              >
                <img src={c.img} alt="_" />
                <div className="aboutTable_alpha">
                  <p className="aboutTable_name">{c.name}</p>
                  <p className="aboutTable_txt">{c.txt}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>

      {/**BOTTOMCHART */}
      <div className="aboutChart">
        <img src={bottomchart} alt="_" />
      </div>
    
    </div>
  )
}

export default About
