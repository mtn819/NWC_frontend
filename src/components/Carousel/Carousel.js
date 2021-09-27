import React, { useState, useEffect } from 'react'
import { CircularArray } from "../utilityFunctions/CircularArray";
import { fetchBaseUrl } from "../../config/.env.js";

function Carousel({page}) {
  const [state, setState] = useState(new CircularArray([]));

  useEffect(() => {
    
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Carousel