import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useForm } from "react-hook-form";
import * as qs from 'qs';

import Map from "./Map";
import VARIABLES from "../../config/.env.js";
import './MappingNWC.css'

import button from "./res/button.png";
import component119 from './res/component119.png';

function MappingNWC() {

  const { fetchBaseUrl } = VARIABLES;

  // one state to hold the regular page content loaded from Strapi
  const [state, setState] = useState({
    banner_text: '',
    bannerimage_credit: '',
    bannerimagecredit_more: '',
    basicsearch_text: ''
  });

  // 2nd state to hold map data 
  const [maps, setMap] = useState([]);

  // forms 
  const { register: registerSearch, handleSubmit: handleSubmitSearch, formState: { errors: errorsSearch } } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // submit text search query
  const onSubmitSearch = (data) => {
    var searchQuery = data.searchText;

    fetch([VARIABLES.fetchBaseUrl, `participants?first_name_contains=${searchQuery}`].join('/'))
      .then(response => response.json())
      .then(data => {
        setMap(data);
      })
      .catch(err => console.log(err));
  }

  // submit basic search query
  const onSubmit = data => {
    var roles = [];

    if (data.delegate_alternate)
      roles.push({'nwc_roles.delegate_at_the_nwc': 1});
    
    if (data.national_commissioner) {
      roles.push({'nwc_roles.ford_national_commissioner': 1});
      roles.push({'nwc_roles.carter_national_commissioner': 1});
    }

    if(data.torch_relay_runner) {
      roles.push({'nwc_roles.torch_relay_runner': 1});
    }

    if(data.notable_speaker) {
      roles.push({'notable_speaker': 1});
    }

    if(data.journalists_covering_the_nwc) {
      roles.push({'journalists_covering_the_nwc': 1});
    }

    if(data.staff_volunteer) {
      roles.push({'volunteer': 1});
      roles.push({'paid_staff_member': 1});
    }

    if(data.international_dignitary) {
      roles.push({'international_dignitary': 1});
    }

    if(data.official_observer) {
      roles.push({'official_observer': 1});
    }

    const query = qs.stringify({
      _where:
      {
        _or: roles
      }
    },
      { encode: false });

    fetch(`${fetchBaseUrl}/participants?${query}`)
      .then(res => res.json())
      .then(data => {
        setMap(maps => data);
      })
      .catch(err => console.log(err));
  }

  // adding USA list of states for select inout
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
        setState({
          banner_text: data.Banner_text,
          bannerimage_credit: data.BannerImage_Credit,
          bannerimagecredit_more: data.BannerImageCredit_more,
          basicsearch_text: data.BasicSearch_Text
        });
      })
      .catch(err => console.log(err));
  }, []); // eslint-disable-line

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
        <p>{state.basicsearch_text}</p>
        <h2>ADVANCED SEARCH</h2>
        <p> <Link to="/AdvancedSearch">Click here</Link> if you want to search... </p>

        <form key={1} onSubmit={handleSubmitSearch(onSubmitSearch)} className="mappingNWCSearch_bar">
          <input type="text" placeholder="SEARCH" {...registerSearch("searchText")} />
          <button type="submit" className="mappingNWCSearch_icon">&#x1F50E;&#xFE0E;</button>
        </form>

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form key={2} onSubmit={handleSubmit(onSubmit)} className="basicForm">
          <div className="row">
            <div className='panel'>
              <p>LOCATION AND NWC ROLE</p>
              <p>&nbsp;&nbsp;STATE/TERRITORY</p>
              <Select
                defaultValue={[stateOptions[42]]}
                isMulti
                options={stateOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <p>&nbsp;&nbsp;ROLES</p>
              <label className="form-control">
                <input type="checkbox" {...register("delegate_alternate")} />DELEGATES/ALTERNATES</label>
              <label className="form-control">
                <input type="checkbox" {...register("national_commissioner")} />NATIONAL COMMISSIONERS</label>
              <label className="form-control">
                <input type="checkbox" {...register("notable_speaker")} />NOTABLE SPEAKERS</label>
              <label className="form-control">
                <input type="checkbox" {...register("journalists_covering_the_nwc")} />JOURNALISTS</label>
              <label className="form-control">
                <input type="checkbox" {...register("torch_relay_runner")} />TORCH RELAY RUNNERS</label>
              <label className="form-control">
                <input type="checkbox" {...register("staff_volunteer")} />STAFF/VOLUNTEERS</label>
              <label className="form-control">
                <input type="checkbox" {...register("international_dignitary")} />INTERNATIONAL DIGNITARIES</label>
              <label className="form-control">
                <input type="checkbox" {...register("official_observer")} />OFFICIAL OBSERVERS</label>
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
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="row">
            <button type="reset" className="resetButton">RESET</button>
            <button type="submit" className="searchButton">SEARCH</button>
          </div>
        </form>
      </div>
      {/**MAP */}
      {maps.length !== 0 && <Map map_data={maps} />}
      
    </div>
  )
}

export default MappingNWC
