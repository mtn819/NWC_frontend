import React from 'react'
import { welcomeVideoUrl } from '../../config/.env';
import "./Welcome.css";
import {
    Link,
  } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome">
            <Link className="welcome_skip" to="/">Skip Video</Link>
            <video className="welcome_video" controls autoPlay muted>
                <source src={welcomeVideoUrl} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Welcome
