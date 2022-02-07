import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import Map from "./Map";
import VARIABLES from "../../config/.env.js";
import './MappingNWC.css'
import { loadmap } from './maploader';

import button from "./res/button.png";
import component119 from './res/component119.png';

function MappingNWC() {

  const { fetchBaseUrl } = VARIABLES;

  const [ state, setState ] = useState({
    banner_text: '',
    bannerimage_credit: '',
    bannerimagecredit_more: '',
    basicsearch_text: ''
  });


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

  // grab page data from strapi
  useEffect(() => {
    fetch(`${fetchBaseUrl}/content-mapping-nwc`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
        setState({
            banner_text: data.Banner_text,
            bannerimage_credit: data.BannerImage_Credit,
            bannerimagecredit_more: data.BannerImageCredit_more,
            basicsearch_text: data.BasicSearch_Text
        });
    })
    .catch(err => console.log(err));
}, []); // eslint-disable-line

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
            {state.banner_text}
          </p>
        </div>
        <div className="mappingNWC_credit" title={state.bannerimagecredit_more}><p>PHOTO BY {state.bannerimage_credit}</p></div>
        <img src={component119} className="mappingNWC_component119" alt="_" />
      </div>

      {/**SEARCH */}
      <div className="mappingNWCSearch">
        <h1>HOW TO SEARCH this DATA</h1>
        <hr></hr>
        <h2>BASIC SEARCH</h2>
        <p> {state.basicsearch_text} </p>
        <h2>ADVANCED SEARCH</h2>
        <p> <Link to="/AdvancedSearch">Click here</Link> if you want to search... </p>

        <div className="mappingNWCSearch_bar">
          <input placeholder="SEARCH" value={input} onChange={e => setInput(e.target.value)} />
          <p className="mappingNWCSearch_icon" onClick={() => search()}>&#x1F50E;&#xFE0E;</p>
        </div>
        <form className="basicForm" action="">
          <div className="row">
            <div className='panel'>
              <p>LOCATION AND NWC ROLE</p>
              <p>&nbsp;&nbsp;STATE/TERRITORY</p>
              <Select
                defaultValue={[stateOptions[42]]}
                isMulti
                name="colors"
                options={stateOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <p>&nbsp;&nbsp;ROLES</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="delegates" />DELEGATES/ALTERNATES</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="national commissioner" />NATIONAL COMMISSIONERS</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="notable Speakers" />NOTABLE SPEAKERS</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="journalists" />JOURNALISTS</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="torch relay runners" />TORCH RELAY RUNNERS</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="staff" />STAFF/VOLUNTEERS</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="international dignitaries" />INTERNATIONAL DIGNITARIES</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="offcial observer" />OFFICIAL OBSERVERS</label>
            </div>
            <div className='panel'>
              <p>RACE AND ETHNICITY IDENTIFIERS</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="asian american" />ASIAN AMERICAN/PACIFIC ISLANDER</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="black" />BLACK</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="hispanic" />HISPANIC</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="native american" />NATIVE AMERICAN/AMERICAN INDIAN</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="white" />WHITE</label>
            </div>
            <div className='panel'>
              <p>RELIGION</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="agnostic" />AGNOSTIC</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="atheist" />ATHEIST</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="catholic" />CATHOLIC</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="christian" />CHRISTIAN NON CATHOLIC</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="eastern religions" />EASTERN RELIGIONS</label>
                <label className="form-control">
                <input type="checkbox" name="favorite1" value="jewish" />JEWISH</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="mormon" />MORMON</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="muslim" />MUSLIM</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="unknown" />UNKNOWN</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="non of the above" />NONE OF THE ABOVE</label>
            </div>
            <div className='panel'>
              <p>HIGHEST LEVEL OF EDUCATION</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="high school" />HIGH SCHOOL</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="college" />COLLEGE</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="graduate" />GRADUATE/PROFESSIONAL</label>
            </div>
            <div className='panel'>
              <p>POLITICAL OFFICES HELD</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="city" />CITY LEVEL</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="county" />COUNTY LEVEL</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="state" />STATE LEVEL</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="federal" />FEDERAL LEVEL</label>
            </div>
            <div className='panel'>
              <p>POLITICAL PARTY MEMBERSHIP</p>
              <label className="form-control">
                <input type="checkbox" name="favorite1" value="democratic" />DEMOCRATIC PARTY</label>
              <label className="form-control">
                <input type="checkbox" name="favorite2" value="republic" />REPUBLICAN PARTY</label>
              <label className="form-control">
                <input type="checkbox" name="favorite3" value="third" />THIRD PARTY</label>
            </div>
            <div className='panel'>
              <p>ERA STANCE</p>
            </div>
          </div>
          <div className="row">
            <button type="reset" name="action"  class="resetButton">RESET</button>
            <button type="submit" name="action" formaction="/search" class="searchButton">SEARCH</button>
          </div>

        </form>
      </div>
      {/**MAP */}
      <Map />
    </div>
  )
}

export default MappingNWC
