import React from 'react';
import MeetIcon from './MeetIcon';
import lola from "./res/lola.png";
import lolahover from "./res/lolahover.png";
import caitlyn from "./res/caitlyn.png";
import caitlynhover from "./res/caitlynhover.png";
import "./MeetTheTeam.css";

function MeetTheTeam() {
  return <div className="meet">
    {/**HEAD */}
    <div className="meetHead">
      <h1 className="meetHead_board">
        MEET OUR TEAM
      </h1>
      <h2>
        PROJECT LEADS
      </h2>
    </div>

    {/**LEADS */}
    <div className="meetLeads">
      <MeetIcon
        img={lola}
        imghover={lolahover}
        name="Lola Babalola"
        role="Graphic Designer"
      />
      <MeetIcon
        img={caitlyn}
        imghover={caitlynhover}
        name="Caitlyn Jones"
        role="Research Assistant"
      />

      {/**FOR TESTING PURPOSES */}
      <MeetIcon
        img={lola}
        imghover={lolahover}
        name="Lola Babalola"
        role="Graphic Designer"
      />
      <MeetIcon
        img={caitlyn}
        imghover={caitlynhover}
        name="Caitlyn Jones"
        role="Research Assistant"
      />
      <MeetIcon
        img={lola}
        imghover={lolahover}
        name="Lola Babalola"
        role="Graphic Designer"
      />
      <MeetIcon
        img={caitlyn}
        imghover={caitlynhover}
        name="Caitlyn Jones"
        role="Research Assistant"
      />
      <MeetIcon
        img={lola}
        imghover={lolahover}
        name="Lola Babalola"
        role="Graphic Designer"
      />
      <MeetIcon
        img={caitlyn}
        imghover={caitlynhover}
        name="Caitlyn Jones"
        role="Research Assistant"
      />
      <MeetIcon
        img={lola}
        imghover={lolahover}
        name="Lola Babalola"
        role="Graphic Designer"
      />
      <MeetIcon
        img={caitlyn}
        imghover={caitlynhover}
        name="Caitlyn Jones"
        role="Research Assistant"
      />
    </div>
  </div>
}

export default MeetTheTeam;
