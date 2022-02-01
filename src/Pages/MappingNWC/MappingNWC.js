import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import Map from "./Map";
import VARIABLES from "../../config/.env.js";
import './MappingNWC.css'
import { loadmap } from './maploader';

import button from "./res/button.png";
import component119 from './res/component119.png';
import AdvancedSearch from './AdvancedSearch';

function MappingNWC() {

  const [banner_card, setBanner_card] = useState("");
  const [imgCredit, setImgCredit] = useState("");
  const [imgCredit_more, setImgCredit_more] = useState("")

  const [basicSearch_text, setBasicSearch_text] = useState("")

  const [maps, setMap] = useState([]);
  const [input, setInput] = useState("");

  const stateOptions = [
    { value: "AL", label: "Alabama" },
{ value: "AK", label: "Alaska" },
{ value: "AZ", label: "Arizona" },
{ value: "AR", label: "Arkansas" },
{ value: "CA", label: "California" },
{ value: "CO", label: "Colorado" },
{ value: "CT", label: "Connecticut" },
{ value: "DE", label: "Delaware" },
{ value: "FL", label: "Florida" },
{ value: "GA", label: "Georgia" },
{ value: "HI", label: "Hawaii" },
{ value: "ID", label: "Idaho" },
{ value: "IL", label: "Illinois" },
{ value: "IN", label: "Indiana" },
{ value: "IA", label: "Iowa" },
{ value: "KS", label: "Kansas" },
{ value: "KY", label: "Kentucky" },
{ value: "LA", label: "Louisiana" },
{ value: "ME", label: "Maine" },
{ value: "MD", label: "Maryland" },
{ value: "MA", label: "Massachusetts" },
{ value: "MI", label: "Michigan" },
{ value: "MN", label: "Minnesota" },
{ value: "MS", label: "Mississippi" },
{ value: "MO", label: "Missouri" },
{ value: "MT", label: "Montana" },
{ value: "NE", label: "Nebraska" },
{ value: "NV", label: "Nevada" },
{ value: "NH", label: "New Hampshire" },
{ value: "NJ", label: "New Jersey" },
{ value: "NM", label: "New Mexico" },
{ value: "NY", label: "New York" },
{ value: "NC", label: "North Carolina" },
{ value: "ND", label: "North Dakota" },
{ value: "OH", label: "Ohio" },
{ value: "OK", label: "Oklahoma" },
{ value: "OR", label: "Oregon" },
{ value: "PA", label: "Pennsylvania" },
{ value: "RI", label: "Rhode Island" },
{ value: "SC", label: "South Carolina" },
{ value: "SD", label: "South Dakota" },
{ value: "TN", label: "Tennessee" },
{ value: "TX", label: "Texas" },
{ value: "UT", label: "Utah" },
{ value: "VT", label: "Vermont" },
{ value: "VA", label: "Virginia" },
{ value: "WA", label: "Washington" },
{ value: "WV", label: "West Virginia" },
{ value: "WI", label: "Wisconsin" },
{ value: "WY", label: "Wyoming" },
  ]

  useEffect(() => {
    fetch([VARIABLES.fetchBaseUrl, "content-mapping-nwc"].join('/'))
    .then(res => res.json())
    .then(data => {
      setBanner_card (
        data.Banner_text
      );

      setImgCredit(
        data.BannerImage_Credit
      );

      setImgCredit_more(
          data.BannerImageCredit_more
      );

      setBasicSearch_text(
        data.BasicSearch_Text
    );
    })
  }, []);

  function search(){
    fetch([VARIABLES.fetchBaseUrl, `participants?name_contains=${input}`].join('/'))
    .then(response => response.json())
    .then(data => loadmap(data, setMap))
    .catch(err => console.log(err));
}


  
  return (
    <div className="mappingNWC">
      
      {/**BANNER */}
      <div className="mappingNWCBanner">
        <img src={button} className="mappingNWC_button" alt="_" />
        <div className="mappingNWC_card">
          <p>
            {banner_card}
          </p>
        </div>
        <div className="mappingNWC_credit" title={imgCredit_more}><p>PHOTO BY {imgCredit}</p></div>
        <img src={component119} className="mappingNWC_component119" alt="_" />
      </div>

      {/**SEARCH */}
      <div className="mappingNWCSearch">
          <h1>HOW TO SEARCH this DATA</h1>
          <hr></hr>
          <h2>BASIC SEARCH</h2>
          <p> {basicSearch_text} </p>
          <h2>ADVANCED SEARCH</h2>
          <p> <Link to="/AdvancedSearch">Click here</Link> if you want to search... </p>
        </div>
        <div className="mappingNWCSearch_bar">
          <input placeholder="SEARCH" value={input} onChange={e=>setInput(e.target.value)}/>
          <p className="mappingNWCSearch_icon" onClick={() => search()}>&#x1F50E;&#xFE0E;</p>
        </div>
        <form action="">
          <div className='panel'>
            <p>LOCATION AND NWC ROLE</p>
            <Select
              defaultValue={[stateOptions[2], stateOptions[3]]}
              isMulti
              name="colors"
              options={stateOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <label class="form-control">
              <input type="checkbox" name="favorite1" value="chocolate" /> DELEGATES/ALTERNATES</label>
            <label class="form-control">
              <input type="checkbox" name="favorite2" value="vanilla" /> NATIONAL COMMISSIONERS</label>
            <label class="form-control">
              <input type="checkbox" name="favorite3" value="mint" /> NOTABLE SPEAKERS</label>
          </div>
          <div className='panel'>
            <p>RACE AND ETHNICITY IDENTIFIERS</p>
          </div>
          <div className='panel'>
            <p>RELIGION</p>
          </div>
          <div className='panel'>
            <p>HIGHEST LEVEL OF <br></br>EDUCATION</p>
          </div>
          <div className='panel'>
            <p>POLITICAL OFFICES HELD</p>
          </div>
          <div className='panel'>
            <p>POLITICAL PARTY MEMBERSHIP</p>
          </div>
          <div className='panel'>
            <p>ERA STANCE</p>
          </div>
        </form>
        
      {/**MAP */}
      <Map />
    </div>
  )
}

export default MappingNWC
