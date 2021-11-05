import React, { useEffect, useState } from 'react'
import "./Discover.css";
import discoverButton from "../../res/imgs/buttondiscover.png";
import podiumperson from "../../res/imgs/podiumperson.png";
import LCard from '../../components/LCard/LCard';
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import searchPlaceholder from "../../res/imgs/searchplaceholder.png";
import discoverbannerperson from "../../res/imgs/discoverbannerperson.png";
import {fetchBaseUrl} from "../../config/.env.js";
import { loadcards } from './cardloader';
import DiscoverCard from '../../components/DiscoverCard/DiscoverCard';

function Discover() {
    const [cards, setCards] = useState([]);

    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch([fetchBaseUrl, `content-discover-stories`/* + `?_start=${page}&_limit=2`*/].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(console.log);

        console.log(`Page: ${page}.`);
    }, [page]);

    return (
        <div className="discover">
            
            {/**BANNER */}
            <div className="discoverBanner">
                <img src={discoverButton} alt="Discover NWC Stories"/>
                <LCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                <CaptionedImg
                    src={discoverbannerperson}
                    caption="PHOTO BY JANE DOE"
                    caption_more="Here are some more details" />
            </div>

            {/**FEATURED */}
            <div className="discoverFeatured">
                <h2>FEATURED STORIES</h2>
                <div className="discoverFeatured_cards">
                    { cards
                    .filter(c => c.featured === "true")
                    .map(c => <a href={`/discover/${c.id}`}><FeaturedCard
                        id={c.id}
                        name={c.name}
                        imgSrc={c.img}
                        location={c.state}
                        role={c.role}
                    /></a>) }
                    {/*<FeaturedCard
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
                    />*/}
                </div>
            </div>

            {/**SEARCH */}
            <img className="discoverSearch" src={searchPlaceholder} alt="abcdefg"/>

            {/**CARDS */}
            <div className="discoverCards_border"></div>
            {/*<button type="button" onClick={() => page == 2 ? setPage(0) : setPage(2)}>
                Change the Page
            </button>*/}

            <div className="discoverCards">
                {cards.map(c => <DiscoverCard
                    key={Math.random()}
                    color={["yellow", "blue", "red", "teal"][parseInt(Math.random() * 4)]}
                    href={`/discover/${c.id}`}
                    name={c.name}
                    role={c.role}
                    state={c.state}
                />)}

                {/*<FeaturedCard
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
                />*/}
            </div>

        </div>
    )
}

export default Discover
