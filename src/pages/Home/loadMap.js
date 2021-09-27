import {
  getSafe,
  getAllWhere,
  media2url,
} from "../../components/utilityFunctions/utilityFunctions";

const pdf2url = pdf => {
  // turns PDF field in mappoint into an obj of 2 urls
  return {
    "PDF": media2url(getSafe(pdf, "PDF")),
    "THUMBNAIL": media2url(getSafe(pdf, "THUMBNAIL")),
  }
}

const mapDp2obj = dp => {
  // translates ugly json from strapi to pretty points
  return {
    "TITLE": getSafe(dp, "TITLE"),
    "CONTENT": getSafe(dp, "CONTENT"),
    "X": getSafe(dp, "POSITION", "X"),
    "Y": getSafe(dp, "POSITION", "Y"),
    "MAIN_IMG": media2url(getSafe(dp, "MAIN_IMAGE")),
    "PDFS": getSafe(dp, "PDF").map(pdf => pdf2url(pdf)),
  }
}

const getPoints = (data, mapName) => {
  // gets all points from strapi call for specific map
  return (
    getAllWhere(data, "MAP", mapName)
    .map(dp => mapDp2obj(dp))
  )
};

const getMapPoints = (data, reponseName, map, state) => {
  // returns the map, with the points fetched and cleaned.
  return {
    ...getSafe(state, "maps", map),
    "points": getPoints(data, reponseName),
  }
}

const getMaps = (data, state) => {
  // Returns all the maps, with their points fetched and cleaned.

  const RESPONSE_ALIAS = {
    "Astrodome": "ASTRO",
    "Downtown": "DOWNTOWN",
    "Magnolia Park": "MAGNOLIA",
    "Museum District": "MUSEUM",
    "Third Ward/UH": "THIRD",
  }

  const maps = {};
  for(let mapName of Object.keys(getSafe(state, "maps"))){
    maps[mapName] = getMapPoints(
      data,
      RESPONSE_ALIAS[mapName],
      mapName,
      state,
    )
  }

  return maps;
}

export const setMapState_inplace = (data, state, setState) => {
  // sets state["maps"] Map.js
  setState({
    ...state,
    "maps": {...getMaps(data, state)},
  });
}
