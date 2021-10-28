import React, { useState } from 'react'
import "./Contribute.css";
import bannerperson from "../../res/imgs/howbannerperson.png";
import bannerbutton from "../../res/imgs/buttonhow.png";
import CaptionedImg from '../../components/CaptionedImg/CaptionedImg';
import buttonresearcher from "../../res/imgs/buttonresearcher.png";
import buttonarchivist from "../../res/imgs/buttonarchivist.png";
import buttonparticipant from "../../res/imgs/buttonparticipant.png";
import buttoneducator from "../../res/imgs/buttoneducator.png";
import buttonstudent from "../../res/imgs/buttonstudent.png";

function Contribute() {
    const [page, setPage] = useState({
        bannerCaption: "PHOTO BY JANE DOE",
        bannerCaption_more: "ASDFGEDFG",
        panels: [
            // [img, header, text]
            [
                "http://ftp.riken.jp/tex-archive/macros/latex/contrib/mwe/example-image-16x9.jpg",
                "RESEARCHERS", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
            ],
            [
                "http://ftp.riken.jp/tex-archive/macros/latex/contrib/mwe/example-image-16x9.jpg",
                "RESEARCHERS", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
            ],
            [
                "http://ftp.riken.jp/tex-archive/macros/latex/contrib/mwe/example-image-16x9.jpg",
                "RESEARCHERS", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
            ],
        ],
        submissionsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis",
    });

    return (
        <div className="contribute">
            {/**BANNER */}
            <div className="contributeBanner">
                <div className="contributeBanner_button">
                    <img src={bannerbutton} alt="decorative button" />
                </div>
                <div className="contributeBanner_card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non mi in purus varius accumsan. Ut mattis magna vel ligula pretium interdum. Suspendisse dapibus condimentum urna non aliquet. Nulla et dui eu eros dignissim porttitor. Cras purus dui, feugiat et ipsum nec, consequat vehicula nibh. Donec eget quam felis. Aliquam aliquam nec magna vitae finibus. Quisque</p>
                </div>
                <CaptionedImg
                    src={bannerperson}
                    caption={page.bannerCaption}
                    caption_more={page.bannerCaption_more}
                />
            </div>

            {/**BUTTONS */}
            <div className="contributeButtons">
                <div className="contributeButton">
                    <img src={buttonresearcher} alt="decorative button" />
                </div>
                <div className="contributeButton">
                    <img src={buttonarchivist} alt="decorative button" />
                </div>
                <div className="contributeButton">
                    <img src={buttonparticipant} alt="decorative button" />
                </div>
                <div className="contributeButton">
                    <img src={buttoneducator} alt="decorative button" />
                </div>
                <div className="contributeButton">
                    <img src={buttonstudent} alt="decorative button" />
                </div>
            </div>

            {/**INVOLVE */}
            <div className="contributeInvolve">
                <h2>HOW TO GET INVOLVED</h2>
                <div className="contributeInvolve_panels">
                    {page.panels.map(p => <div className="contributeInvolve_panel" key={Math.random() * Math.random()}>
                        <div className="contributeInvolve_thumbnail">
                            <img src={p[0]} alt={`${p[1]} thumbnail`} />
                        </div>
                        <div className="contributeInvolve_text">
                            <h3>{p[1]}</h3>
                            <p>{p[2]}</p>
                        </div>
                    </div>)}
                </div>
            </div>

            {/**SUBMISSIONS */}
            <div className="contributeSubmissions">
                <h2>SUBMISSIONS</h2>
                <p>{page.submissionsText}</p>
                <div className="contributeSubmissions_buttonRow">
                    <button type="button">ORAL HISTORY/BIOGRAPHY SUBMISSIONS</button>
                    <button type="button">CORRECTIONS</button>
                    <button type="button">ARCHIVAL INFORMATION SUBMISSIONS</button>
                </div>
            </div>

        </div>
    )
}

export default Contribute
