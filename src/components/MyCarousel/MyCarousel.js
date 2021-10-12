import React from 'react'
import "./MyCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function MyCarousel({carouselData}) {

    return (
        <Carousel className="myCarousel" dynamicHeight={true}>
            {carouselData.map(datum => <a
                href={datum.PDF}
                key={"CAROUSEL_" + datum.CAPTION + Math.random()}
                title={datum.CAPTION}
            >
                <img src={datum.THUMBNAIL} alt={datum.CAPTION}/>
            </a>)}
        </Carousel>
    )
}

export default MyCarousel
