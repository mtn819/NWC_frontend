import React, { useState, useEffect } from 'react'
import { CircularArray } from "../utilityFunctions/CircularArray";
import { getSafe } from '../utilityFunctions/utilityFunctions';
import { useInterval } from '../utilityFunctions/useInterval';
import { fetchBaseUrl } from "../../config/.env.js";
import { loadCarousel_inplace } from "./loadCarousel";
import CarouselFrame from './CarouselFrame';
import "./Carousel.css";

function Carousel({page}) {
  const [state, setState] = useState(new CircularArray([]));
  let [prev, curr, next] = state.getTrio();

  useEffect(() => {
    fetch(
      [fetchBaseUrl, `CAROUSELS?PAGE=${page}`].join('/')
    )
    .then(response => response.json())
    .then(data => loadCarousel_inplace(data, state, setState));

    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*const [trans, setTrans] = useState();
  let switcher = true;
  const setSwitcher = () => {
    switcher = !switcher;
    setTrans(switcher ? "Carousel_visible--1" : "Carousel_visible--2")
  }
  setSwitcher();*/

  const increaseCurr = () => {
    setState(state.next());
  }

  const decreaseCurr = () => {
    setState(state.prev());
  }

  useInterval(increaseCurr, 5000);

  return (
    <div className="Carousel">
      <div className={`Carousel_visible`}>
        <span className="Carousel_link" onClick={decreaseCurr}>
          <CarouselFrame
            title={getSafe(prev, "TITLE")}
            className="Carousel_prev"
            image={getSafe(prev, "IMAGE")}
            href={getSafe(prev, "HREF")}
            onClick={decreaseCurr}
          >
            {getSafe(prev, "CONTENT")}
          </CarouselFrame>
        </span>
        <a className="Carousel_link" href={getSafe(curr, "HREF")}>
          <CarouselFrame
            title={getSafe(curr, "TITLE")}
            className="Carousel_curr"
            image={getSafe(curr, "IMAGE")}
            href={getSafe(prev, "HREF")}
          >
            {getSafe(curr, "CONTENT")}
          </CarouselFrame>
        </a>
        <span className="Carousel_link" onClick={increaseCurr}>
          <CarouselFrame
            title={getSafe(next, "TITLE")}
            className="Carousel_next"
            image={getSafe(next, "IMAGE")}
            href={getSafe(prev, "HREF")}
            onClick={increaseCurr}
          >
            {getSafe(next, "CONTENT")}
          </CarouselFrame>
        </span>
      </div>
    </div>
  )
}

export default Carousel