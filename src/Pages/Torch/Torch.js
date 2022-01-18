import React, { useEffect, useState } from 'react';
import "./Torch.css";
import VARIABLES from '../../config/.env';
import ReactMarkdown from 'react-markdown';
import torchRelayEssayImage from "./res/Torch_Relay_Essay_Image.png";

function Torch() {
    const [pageState, setPageState] = useState({
        Title: "title",
        section1_image: "",
        section1_text: "",
        MidpagePhotoCredit: "",
        section2_title: "",
        Section2_Quote: "",
        Section2_text: "",
        Section2_img1: "",
        Section2_ImgCitation1: "",
        Section2_img2: "",
        Section2_ImgCitation2: "",
        LargeImageMap: "",
        LargeImageMap_Citation: "",
        Section3_title: "",
        Section3_image: "",
        Section3_ImgCitation: "",
        Section3_text: "",
        Sources: [],
        TimelineIframeSrc: "",
        authorCred: "Written by Jane Doe",
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "featured-essay"].join('/'))
        .then(res => res.json())
        .then(data => {
            setPageState({
                ...pageState,
                ...data,
                TimelineIframeSource: data.TimelineIframeSource,
                section1_image: [VARIABLES.fetchBaseUrl, data.Section1.Image.url].join(''),
                section1_text: data.Section1.SectionText,
                section2_title: data.Section2.SectionTitle,
                Section2_text: data.Section2.SectionText,
                Section2_img1: [VARIABLES.fetchBaseUrl, data.Section2.Image.url].join(''),
                Section2_img2: [VARIABLES.fetchBaseUrl, data.Section2AddImage.url].join(''),
                LargeImageMap: [VARIABLES.fetchBaseUrl, data.LargeImageMap.url].join(''),
                LargeImageMap_Citation: data.LargeImageMap_Citation,
                Section3_title: data.Section3.SectionTitle,
                Section3_image: [VARIABLES.fetchBaseUrl, data.Section3.Image.url].join(''),
                Section3_text: data.Section3.SectionText,
                authorCred: data.Author,
            });
        })
        
        .catch(err => console.log(err));
        window.scrollTo(0, 0);
    }, []); // eslint-disable-line

    return (
        <div className="torch">
            {/**BANNER */}
            <div className="torchBanner">
            <iframe title="TorchRelay" src="https://uploads.knightlab.com/storymapjs/877694e00dbf671073fb8b137cf5698e
/wgss-4350
/index.html" frameBorder="0" width="100%" height="800"></iframe>
            </div>

            {/**SECTION 1 */}
            <div className="torchSection1_title">
                <h1>{pageState.Title}</h1>
            </div>
            <div className="torchSection1">
                <div className="torchSection1_img">
                    <img src={pageState.section1_image} alt=""/>
                    <figcaption>
                        {pageState.Section1_ImgCitation}
                    </figcaption>
                </div>
                <ReactMarkdown className="torchSection1_text">
                    {pageState.section1_text}
                </ReactMarkdown>
            </div>

            {/**MIDPHOTO */}
            <figure className="torchMidphoto">
                <img src={torchRelayEssayImage} alt=""/>
                <figcaption title={pageState.MidpagePhotoCredit_more}>
                    {pageState.MidpagePhotoCredit}
                </figcaption>
            </figure>
            <div className="homeAbout_border"></div>

            {/**SECTION 2 */}
            <div className="torchSection2">
                <div className="torchSection2_left">
                    <h2 className="torchSection2_title">{pageState.section2_title}</h2>
                    <div className="torchSection2_quote">
                        <div >
                            {pageState.Section2_Quote}
                        </div>
                    </div>
                    <ReactMarkdown className="torchSection2_text">
                        {pageState.Section2_text}
                    </ReactMarkdown>

                </div>
                <div className="torchSection2_right">
                    <figure>
                        <img src={pageState.Section2_img1} alt=""/>
                        <figcaption>
                            {pageState.Section2_ImgCitation1}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={pageState.Section2_img2} alt=""/>
                        <figcaption>
                            {pageState.Section2_ImgCitation2}
                        </figcaption>
                    </figure>
                </div>
            </div>

            {/**MAP */}
            <div className="torchMap">
                <h2>HOUSTON MAP OF TORCH RELAY</h2>
                <figure>
                    <img src={pageState.LargeImageMap} alt="torch_map"/>
                    <figcaption>
                        {pageState.LargeImageMap_Citation}
                    </figcaption>
                </figure>
            </div>

            {/**SECTION 3 */}
            <div className="torchSection3">
                <div className="torchSection3_left">
                    <h2>{pageState.Section3_title}</h2>
                    <ReactMarkdown>
                        {pageState.Section3_text}
                    </ReactMarkdown>
                </div>
                <div className="torchSection3_right">
                    <img src={pageState.Section3_image} alt=""/>
                    <figcaption>
                        {pageState.Section3_ImgCitation}
                    </figcaption>
                </div>
            </div>

            {/**CONCLUSION */}
            <div className="torchConclusion">
                <h2>CONCLUSION</h2>
                <ReactMarkdown>
                    {pageState.Conclusion}
                </ReactMarkdown>
            </div>

            <ReactMarkdown className="torch_author">
                {pageState.authorCred}
            </ReactMarkdown>

            {/**SOURCES */}
            <div className="torchSources">
                <h2>SOURCES</h2>
                {pageState.Sources.map(src => <p>{src.text}</p>)}
            </div>

            {/**PREF CIT */}
            <div className="torch_prefCit">
                <h2>PREFERRED CITATION</h2>
                {pageState.PreferredCitation}
            </div>

        </div>
    )
}

export default Torch
