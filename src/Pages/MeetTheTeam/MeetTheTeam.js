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
        pfp="data:image/png;base64,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"
        popupText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
