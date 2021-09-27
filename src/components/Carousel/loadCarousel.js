import { CircularArray } from "../utilityFunctions/CircularArray.js";
import { getSafe, media2url } from "../utilityFunctions/utilityFunctions.js"

const cleanFrame = frame => {
  return {
    "TITLE": getSafe(frame, "TITLE"),
    "CONTENT": getSafe(frame, "CONTENT"),
    "IMAGE": media2url(getSafe(frame, "IMAGE")),
    "HREF": getSafe(frame, "HREF"),
  };
}

export const loadCarousel_inplace = (data, state, setState) => {
  return setState(new CircularArray([
    ...getSafe(data, 0, "FRAME")
    .map(f => cleanFrame(f))
  ]));
}