import React from 'react'
import "./DiscoverCard.css";
import yellowlogo from "./yellowlogo.png";
import bluelogo from "./bluelogo.png";
import redlogo from "./redlogo.png";
import teallogo from "./teallogo.png";

function DiscoverCard({
    color, // yellow, blue, red, teal
    href,
    name,
    role,
    state,
}) {
    // const color = ["yellow", "blue", "red", "teal"][parseInt(Math.random() * 4)];
    let logo;
    let border;
    const getborder = color => `4px solid ${color}`;
    switch (color) {
        case "yellow":
            logo = yellowlogo;
            border = getborder("#FFD048");
            break;
        case "blue":
            logo = bluelogo;
            border = getborder("#9EC7E1");
            break;
        case "red":
            logo = redlogo;
            border = getborder("#CB4E28");
            break;
        case "teal":
            logo = teallogo;
            border = getborder("#00597C");
            break;
    }

    return (
        <a className="discoverCard" href={href} style={{"border": border}}>
            <div href="discoverCard_body">
                <div className="discoverCard_holePunch" style={{"border": border}}></div>
                <div className="discoverCard_items">
                    <div className="discoverCard_logo">
                        <img src={logo} alt={name + Math.random()}/>
                    </div>
                    <div className="discoverCard_data">
                        <p className="discoverCard_name" style={{"border": border, "borderLeft": "none"}}>{name}</p>
                        <p className="discoverCard_role" style={{"border": border, "borderTop": "none", "borderLeft": "none"}}>{role}</p>
                        <p className="discoverCard_state" style={{"border": border, "borderTop": "none", "borderLeft": "none"}}>{state}</p>
                    </div>
                </div>
                <p className="discoverCard_bottom">National Women's Conference 1977</p>
            </div>
        </a>
    )
}

export default DiscoverCard
