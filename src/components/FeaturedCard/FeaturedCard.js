import React from 'react'
import "./FeaturedCard.css";
import shelf from "../../res/imgs/shelf.png";

function FeaturedCard({
    imgSrc,
    location,
    href,
}) {
    return (
        <a href={href}>
        <div className="featuredCard">
            <img className="featuredCard_person" src={imgSrc} alt={location}/>
            <img className="featuredCard_shelf" src={shelf} alt={location}/>
            <p className="featuredCard_location">{location}</p>
            <p className="featuredCard_stamp">National Women's Conference</p>
        </div>
        </a>
    )
}

export default FeaturedCard
