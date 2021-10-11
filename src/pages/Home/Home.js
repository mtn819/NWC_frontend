import React from 'react'
import "./Home.css";
import toform from "../../res/imgs/toform.png";

function Home() {
    return (
        <div className="home">

            {/**SPLASH */}
            <div className="homeSplash">
                <div className="homeSplash_col">
                    <img className="homeSplash_toform" src={toform}/>
                </div>
                <div className="homeSplash_col">
                    <div className="homeSplash_card">
                        <h2>Sharing Stories from 1977</h2>
                        <p>PUTTING THE NATIONAL WOMEN'S CONFERENCE ON THE MAP</p>
                    </div>
                </div>
            </div>

            {/**ABOUT */}
            <div className="homeAbout">
                <div className="homeAbout_col">

                </div>
                <div className="homeAbout_col">
                </div>
            </div>

        </div>
    )
}

export default Home
