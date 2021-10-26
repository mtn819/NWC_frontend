import React from 'react'
import "./Discover.css";
import discoverButton from "../../res/imgs/buttondiscover.png";
import podiumperson from "../../res/imgs/podiumperson.png";
import LCard from '../../components/LCard/LCard';
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';
import FeaturedCard from './FeaturedCard';
import searchPlaceholder from "../../res/imgs/searchplaceholder.png";

function Discover() {
    return (
        <div className="discover">
            
            {/**BANNER */}
            <div className="discoverBanner">
                <img src={discoverButton} alt="Discover NWC Stories"/>
                <LCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                <CaptionedImg
                    src={podiumperson}
                    caption="PHOTO BY JANE DOE"
                    caption_more="Here are some more details" />
            </div>

            {/**FEATURED */}
            <div className="discoverFeatured">
                <h2>FEATURED STORIES</h2>
                <div className="discoverFeatured_cards">
                    <FeaturedCard
                        imgSrc={podiumperson}
                        location="Shanghai, CH"
                        href="https://www.youtube.com"
                    />
                    <FeaturedCard
                        imgSrc={podiumperson}
                        location="Shanghai, CH"
                        href="https://www.youtube.com"
                    />
                    <FeaturedCard
                        imgSrc={podiumperson}
                        location="Shanghai, CH"
                        href="https://www.youtube.com"
                    />
                </div>
            </div>

            {/**SEARCH */}
            <img className="discoverSearch" src={searchPlaceholder} alt="abcdefg"/>

            {/**CARDS */}
            <div className="discoverCards_border"></div>
            <div className="discoverCards">
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
                <FeaturedCard
                    imgSrc={podiumperson}
                    location="Shanghai, CH"
                    href="https://www.youtube.com"
                />
            </div>

        </div>
    )
}

export default Discover
