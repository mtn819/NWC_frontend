// CORE IMPORTS
import React, { useState, useEffect } from 'react'
import "./Map.css";

// different map images
import astro from "../../res/mapAstro.png";
import dt from "../../res/mapDt.png";
import mag from "../../res/mapMag.png";
import museo from "../../res/mapMuseo.png";
import tw from "../../res/mapTw.png";

// assets/snippets/components
import { fetchBaseUrl } from '../../config/.env';
import { setMapState_inplace } from './loadMap';
import { getSafe, renderClass, insert } from '../../components/utilityFunctions/utilityFunctions';
import tick from "../../res/tick.png";

const initMap = img => ({
  // this is to control error in map initialization in state.
  "img": img,
  "points": [],
});

function Map() {
  const [state, setState] = useState({
    "currMap": "Downtown",
    "currPoint": undefined,
    "currHover": undefined,
    "maps": {
      "Downtown": initMap({dt}),
      "Third Ward/UH": initMap({tw}),
      "Museum District": initMap({museo}),
      "Magnolia Park": initMap({mag}),
      "Astrodome": initMap({astro}),
    },
  });

  useEffect(() => {
    fetch(
      [fetchBaseUrl, "MAP-POINTS"].join('/')
    )
    .then(response => response.json())
    .then(data => setMapState_inplace(data, state, setState));

    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rcTab = map => {
    // curried version of renderClass, for tabs
    return renderClass(
      "MapTabs_tab",
      "active",
      () => getSafe(state, "currMap") === map,
    )
  }

  const rcTick = title => {
    // curried version of renderClass, for point ticks
    return renderClass(
      "MapBody_tick",
      "hover",
      () => getSafe(state, "currHover") === title,
    )
  }

  const rcTitle = title => {
    // curried version of renderClass, for points titles
    return renderClass(
      "MapBody_title",
      "hover",
      () => getSafe(state, "currHover") === title,
    )
  }

  const setCurrMap_inplace = map => {
    setState(insert(state, "currMap", map));
  }

  const setCurrHover_inplace = title => {
    setState(insert(state, "currHover", title));
  }

  const setCurrPoint_inplace = title => {
    setState(insert(state, "currPoint", title));
  }

  const getCurrMapImg = () => {
    const currMap = getSafe(state, "currMap");
    const img = getSafe(state, "maps", currMap, "img");
    const imgUrlKey = getSafe(Object.keys(img), 0);
    const imgUrl = getSafe(img, imgUrlKey);
    return imgUrl;
  }

  const getCurrPoints = () => {
    const currMap = getSafe(state, "currMap");
    const points = getSafe(state, "maps", currMap, "points");
    return points;
  }

  // "Get Title" of passed point.
  const gt = p => getSafe(p, "TITLE");

  return (
    <div className="Map">

      {/**
       * TABS
      */}
      <div className="MapTabs">
        {
          Object.keys(getSafe(state, "maps"))
          .map(m =>
            <div
              className={rcTab(m)}
              onClick={() => setCurrMap_inplace(m)}
              key={m}
            >
              <p>{m}</p>
            </div>
          )
        }
      </div>

      {/**
       * BODY
       */}
      <div className="MapBody">

        {/**
         * PANEL
         */}
        <div className="MapBody_panel">
          <h2>Points of Interest</h2>
          <ul>
          {
            getCurrPoints()
            .map(p =>
              <li
                className={rcTitle(gt(p))}
                onMouseEnter={()=>setCurrHover_inplace(gt(p))}
                onMouseLeave={()=>setCurrHover_inplace(undefined)}
                onClick={()=>setCurrPoint_inplace(gt(p))}
                key={gt(p)}
              >
                {gt(p)}
              </li>
            )
          }
          </ul>
        </div>
        
        {/**
         * MAP
         */}
        <div className="MapBody_map">
          {
            getCurrPoints().map(p =>
              <div
                className={rcTick(gt(p))}
                style={{
                  marginLeft: `${getSafe(p, "X")}rem`,
                  marginTop: `${getSafe(p, "Y")}rem`,
                }}
                onMouseEnter={()=>setCurrHover_inplace(gt(p))}
                onMouseLeave={()=>setCurrHover_inplace(undefined)}
                onClick={()=>setCurrPoint_inplace(gt(p))}
                key={gt(p)}
              >
                <img
                  src={tick}
                  alt="point"
                />
                {
                  getSafe(state, "currHover") === gt(p) ?
                  <div><p>{gt(p)}</p></div> :
                  ""
                }
              </div>
            )
          }
          <img
            className="MapBody_bg"
            src={getCurrMapImg()} alt="map"
          />
        </div>
      </div>

      
    </div>
  )
}

export default Map
