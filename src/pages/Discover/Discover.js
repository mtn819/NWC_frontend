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
import { getSafe, processPageOld } from "../../components/util/util";

function Discover() {
    const [cards, setCards] = useState([]);

    const [page, setPage] = useState(0);

    const [input, setInput] = useState("");

    const [filter, setFilter] = useState("");

    const [stateOld, setStateOld] = useState({
        bannerText: "abcdefg",
    }); // Handles the text throughout page.

    useEffect(() => {
        fetch([fetchBaseUrl, `content-discover-stories`/* + `?_start=${page}&_limit=2`*/].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(console.log);

        console.log(`Page: ${page}.`);
    }, []);

    useEffect(() => {
        fetch([fetchBaseUrl, "content-discovers"].join('/'))
        .then(req => req.json())
        .then(data => processPageOld(data, setStateOld))
        .catch(err => console.log(err));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function filterCards(){
        const urlFilter = `${filter}=${input}`;
        fetch([fetchBaseUrl, `content-discover-stories?${urlFilter}`/* + `?_start=${page}&_limit=2`*/].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(console.log);
    }


    return (
        <div className="discover">
            
            {/**BANNER */}
            <div className="discoverBanner">
                <img src={discoverButton} alt="Discover NWC Stories"/>
                <LCard text={getSafe(stateOld, "BannerText")}/>
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
                    /></a>)
                    }
                </div>
            </div>

            {/**SEARCH */}
            <div className="discoverSearch">
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <div className="discoverSearch_sortBy">
                    <p>SORT BY:</p>
                    <p onClick={filterCards}>Go!</p>
                    <p onClick={() => setFilter("Name")}>NAME</p>
                </div>
            </div>

            {/**CARDS */}
            <div className="discoverCards_border"></div>
            {/*<button type="button" onClick={() => page == 2 ? setPage(0) : setPage(2)}>
                Change the Page
            </button>*/}

            <div className="discoverCards">
                {cards.map((value, index) => <DiscoverCard
                    key={Math.random()}
                    color={["yellow", "blue", "red", "teal"][index % 4]}
                    href={`/discover/${value.id}`}
                    name={value.name}
                    role={value.role}
                    state={value.state}
                />)
                }
            </div>

        </div>
    )
}

export default Discover
