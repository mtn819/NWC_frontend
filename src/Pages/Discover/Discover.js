import React, { useEffect, useState } from 'react'
import "./Discover.css";
import discoverButton from "../../res/imgs/buttondiscover.png";
import podiumperson from "../../res/imgs/podiumperson.png";
import LCard from '../../Components/LCard/LCard';
import CaptionedImg from '../../Components/CaptionedImg/CaptionedImg';
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import searchPlaceholder from "../../res/imgs/searchplaceholder.png";
import discoverbannerperson from "../../res/imgs/discoverbannerperson.png";
import VARIABLES from "../../config/.env.js";
import { loadcards } from './cardloader';
import DiscoverCard from '../../Components/DiscoverCard/DiscoverCard';
import { getSafe, processPageOld } from "../../Components/util/util";
import { Link } from 'react-router-dom';

function Discover() {
    const [cards, setCards] = useState([]);

    const [page, setPage] = useState(0);

    const [input, setInput] = useState("");

    const [stateOld, setStateOld] = useState({
        bannerText: "abcdefg",
    }); // Handles the text throughout page.

    const { fetchBaseUrl } = VARIABLES;

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

    function search(){
        fetch([fetchBaseUrl, `content-discover-stories` + `?name_contains=${input}`].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(err => console.log(err));
    }

    const [currentSort, setCurrentSort] = useState("");

    function sortName(){
        fetch([fetchBaseUrl, `content-discover-stories` + `?name_contains=${input}` + `&_sort=name:ASC`].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(err => console.log(err));

        setCurrentSort("name");
    }
    
    function sortRole(){
        fetch([fetchBaseUrl, `content-discover-stories` + `?name_contains=${input}` + `&_sort=role:ASC`].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(err => console.log(err));

        setCurrentSort("role");
    }

    function sortState(){
        fetch([fetchBaseUrl, `content-discover-stories` + `?name_contains=${input}` + `&_sort=state:ASC`].join('/'))
        .then(response => response.json())
        .then(data => loadcards(data, setCards))
        .then(() => console.log(cards))
        .catch(err => console.log(err));

        setCurrentSort("state");
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
                <div className="discoverSearch_bar">
                    <input placeholder="Search Participants" value={input} onChange={e=>setInput(e.target.value)}/>
                    <p className="discoverSearch_icon" onClick={() => search()}>&#x1F50E;&#xFE0E;</p>
                </div>
                <div className="discoverSearch_sortBy">
                    <p>SORT BY:</p>
                    <p className="discoverSearch_separater">|</p>
                    <p className="discoverSearch_sorter" onClick={() => sortName()}>NAME</p>
                    <p className="discoverSearch_separater">|</p>
                    <p className="discoverSearch_sorter" onClick={() => sortRole()}>ROLE</p>
                    <p className="discoverSearch_separater">|</p>
                    <p className="discoverSearch_sorter" onClick={() => sortState()}>STATE</p>
                </div>
            </div>
            <div className="discoverButtons">
                <Link to="/participants">
                    <div className="discoverButtons_participants">VIEW PARTICIPANTS</div>
                </Link>
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
