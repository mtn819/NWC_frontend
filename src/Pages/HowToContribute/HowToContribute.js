import React, { useEffect, useState } from 'react';
import VARIABLES from '../../config/.env';
import './HowToContribute.css';
import htcBannerPic from "./res/htcBannerPic.png"
import archivists_button from "./res/archivists_button.png"
import archivists_button_hover from "./res/archivists_button_hover.png"
import researcher_button from "./res/researcher_button.png"
import researcher_button_hover from "./res/researcher_button_hover.png"
import educators_button from "./res/educators_button.png"
import educators_button_hover from "./res/educators_button_hover.png"
import students_button from "./res/students_button.png"
import students_button_hover from "./res/students_button_hover.png"
import nwc_button from "./res/nwc_participants_button.png"
import nwc_button_hover from "./res/nwc_participants_button_hover.png"
import how_to_contribute_button from "./res/how_to_contribute_button.png"
import nwcArchivistsPhoto from "./res/NWC_Archivists_Photo.png"
import nwcEducatorsPhoto from "./res/NWC_Educators_Photo.png"
import nwcParticipants from "./res/NWC_Participants.png"
import nwcResearchersPhoto from "./res/NWC_Researchers_Photo.png"
import studentsPhoto from "./res/Students_Photo.png"
import favInsta from "./res/favInsta.png"
import favFace from "./res/favFace.png"
import favTwitter from "./res/favTwitter.png"
import favShare from "./res/favShare.png"
import LCard from "../../Components/LCard/LCard";
import CaptionedImg from "../../Components/CaptionedImg/CaptionedImg";

const getWhere = (data, key, value) => {
    return data.filter(e => e[key] === value);
}

function HowToContribute() {

    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");

    const [banner_card, setBannerText] = useState("");
    const [imgCredit, setBannerImageCredit] = useState("");
    const [imgCredit_more, setBannerImageCredit_more] = useState("");
    const [researchersText, setResearchersText] = useState("");
    const [nwcParticipantsText, setNwcParticipantsText] = useState("");
    const [educatorsText, setEducatorsText] = useState("");
    const [studentsText, setStudentsText] = useState("");
    const [archivistsText, setArchivistsText] = useState("");


    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-how-to-contribute"].join('/'))
            .then(res => res.json())
            .then(data => {

                setBannerText(
                    data.BannerText
                );
                setBannerImageCredit(
                    data.BannerImageCredit
                );
                setBannerImageCredit_more(
                    data.BannerImageCredit_more
                );
                setResearchersText(
                    data.ResearchersText
                );
                setNwcParticipantsText(
                    data.NwcParticipantsText
                );
                setEducatorsText(
                    data.EducatorsText
                );
                setStudentsText(
                    data.StudentsText
                );
                setArchivistsText(
                    data.ArchivistsText
                );
            })
    }, []);

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "content-footers"].join('/'))
            .then(response => response.json())
            .then(data => {
                const get = (section) => {
                    return getWhere(data, 'Section', section)[0]['Content'];
                };

                setFacebookLink(
                    get("FacebookLink")
                );

                setInstagramLink(
                    get("InstagramLink")
                );

                setTwitterLink(
                    get("TwitterLink")
                );

            })
    }, []);  /* eslint-disable-line */

    return (
        <div className="howToContribute">

            {/* BANNER */}
            <div className="contributeBanner">
                <img src={how_to_contribute_button} alt="How to Contribute" />
                <LCard text={banner_card} />
                <CaptionedImg
                    src={htcBannerPic}
                    caption={"Photo by " + imgCredit}
                    caption_more={imgCredit_more} />
            </div>

            {/* BUTTONS */}
            <div className="howToContributeButtons_container">
                <div class="howToContributeButtons_column">
                    <a href="#howToContributeInvolved_researcherText">
                        <img src={researcher_button}
                            className="howToContributeButtons_button"
                            alt="_" />
                        <img src={researcher_button_hover}
                            alt="_"
                            className="howToContributeButtons_button_hover"
                        />
                    </a>
                </div>
                <div class="howToContributeButtons_column">
                    <a href="#howToContributeInvolved_archivistsText">
                        <img src={archivists_button}
                            className="howToContributeButtons_archivists_button"
                            alt="_" />
                        <img src={archivists_button_hover}
                            className="howToContributeButtons_archivists_button_hover"
                            alt="_"
                        />
                    </a>
                </div>
                <div class="howToContributeButtons_column">
                    <a href="#howToContributeInvolved_nwcParticipantsText">
                        <img src={nwc_button}
                            className="howToContributeButtons_button"
                            alt="_" />
                        <img src={nwc_button_hover}
                            className="howToContributeButtons_button"
                            alt="_" />
                    </a>
                </div>
                <div class="howToContributeButtons_column">
                    <a href="#howToContributeInvolved_educatorsText">
                        <img src={educators_button}
                            className="howToContributeButtons_button"
                            alt="_" />
                        <img src={educators_button_hover}
                            className="howToContributeButtons_button"
                            alt="_" />
                    </a>
                </div>
                <div class="howToContributeButtons_column">
                    <a href="#howToContributeInvolved_studentsText">
                        <img src={students_button}
                            className="howToContributeButtons_button"
                            alt="_" />
                        <img src={students_button_hover}
                            className="howToContributeButtons_button"
                            alt="_" />
                    </a>
                </div>
            </div>

            {/* HOW TO GET INVOLVED BANNER */}
            <div className="howToContributeInvolved_banner">
                <div className="howToContributeInvolved_socialMedia">
                    <div className="howToContributeInvolved">
                        <h1>HOW TO GET INVOLVED</h1>
                    </div>
                    <div className="howToContributeInvolved_favFace">
                        <a href={facebookLink}><img src={favFace} alt="facebook_logo" /></a>
                    </div>
                    <div className="howToContributeInvolved_favTwitter">
                        <a href={twitterLink}><img src={favTwitter} alt="twitter_logo" /></a>
                    </div>
                    <div className="howToContributeInvolved_favInsta">
                        <a href={instagramLink}><img src={favInsta} alt="instagram_logo" /></a>
                    </div>
                    <div className="howToContributeInvolved_favShare">
                        <a href={instagramLink}><img src={favShare} alt="share_logo" /></a>
                    </div>
                </div>
            </div>

            {/* HOW TO GET INVOLVED LIST */}
            <div className="howToContributeInvolved_container">
                <div className="howToContributeInvolved_researcherImg"
                    id="howToContributeInvolved_researcherText">
                    <img src={nwcResearchersPhoto} alt="_"></img>
                </div>
                <div class="howToContributeInvolved_content">
                    <div className="howToContributeInvolved_researcherText">
                        <h1>RESEARCHERS</h1>
                        <p>{researchersText}</p>
                    </div>
                </div>
            </div>
            <div className="howToContributeInvolved_container">
                <div className="howToContributeInvolved_researcherImg"
                    id="howToContributeInvolved_archivistsText">
                    <img src={nwcArchivistsPhoto} alt="_"></img>
                </div>
                <div class="howToContributeInvolved_content">
                    <div className="howToContributeInvolved_researcherText">
                        <h1>ARCHIVISTS</h1>
                        <p>{archivistsText}</p>
                    </div>
                </div>
            </div>
            <div className="howToContributeInvolved_container">
                <div className="howToContributeInvolved_researcherImg"
                    id="howToContributeInvolved_nwcParticipantsText">
                    <img src={nwcParticipants} alt="_"></img>
                </div>
                <div class="howToContributeInvolved_content">
                    <div className="howToContributeInvolved_researcherText">
                        <h1>NWC PARTICIPANTS</h1>
                        <p>{nwcParticipantsText}</p>
                    </div>
                </div>
            </div>
            <div className="howToContributeInvolved_container">
                <div className="howToContributeInvolved_researcherImg"
                    id="howToContributeInvolved_educatorsText">
                    <img
                        src={nwcEducatorsPhoto}
                        alt="_">

                    </img>
                </div>
                <div class="howToContributeInvolved_content">
                    <div className="howToContributeInvolved_researcherText">
                        <h1>EDUCATORS</h1>
                        <p>{educatorsText}</p>
                    </div>
                </div>
            </div>
            <div className="howToContributeInvolved_container">
                <div className="howToContributeInvolved_researcherImg"
                    id="howToContributeInvolved_studentsText">
                    <img
                        src={studentsPhoto}
                        alt="_">

                    </img>
                </div>
                <div class="howToContributeInvolved_content">
                    <div className="howToContributeInvolved_researcherText">
                        <h1>STUDENTS</h1>
                        <p>{studentsText}</p>
                    </div>
                </div>
            </div>

            {/* SUBMISSIONS */}
            <div className="howToContributeSubmission_container">
                <div className="howToContributeSubmission_frontdrop">
                    <div className="howToContributeSubmission_header">
                        SUBMISSIONS
                    </div>
                    <div className="howToContributeSubmission_body">
                        <p>{banner_card}</p>
                    </div>
                    <div className="howToContributeSubmission_body_links">
                        <div className="howToContributeSubmission_oral"
                            style={{ marginRight: "50px" }}>
                            <p>ORAL HISTORY/BIOGRAPHY SUBMISSIONS</p>
                        </div>
                        <div className="howToContributeSubmission_corrections"
                            style={{ marginRight: "50px" }}>
                            <p>CORRECTIONS</p>
                        </div>
                        <div className="howToContributeSubmission_archival"
                            style={{ marginRight: "50px" }}>
                            <p>ARCHIVAL INFORMATION SUBMISSIONS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HowToContribute