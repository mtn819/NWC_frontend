import React, { useEffect, useState } from 'react'
import "./Torch.css";
import VARIABLES from '../../config/.env';

function Torch() {
    const [pageState, setPageState] = useState({
        Title: "title",
        section1_image: "",
        section1_text: "",
        midphoto: "https://images.wallpaperscraft.com/image/single/gray_light_background_dots_perforation_72423_300x168.jpg",
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
        Section3_text: "",
        Sources: [],
        TimelineIframeSrc: "",
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, "featured-essay"].join('/'))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log("Abc");
            setPageState({
                ...pageState,
                ...data,
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
            });
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="torch">
            {/**BANNER */}
            <div className="torchBanner">
                <iframe src={pageState.TimelineIframeSrc} width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
                {/*<div className="torchBanner_right">
                    <h1>THE TORCH RELAY</h1>
                    <h2>HOUSTON NATIONAL WOMEN'S CONFERENCE, 1977</h2>
                    <p>
                        In 1977, more than 20,000 attendees gathered at the National Women's Conference in Houston. The goal was to formulate a Plan of Action that would improve the lives of American women. A symbol of this conference is the "Torch of Freedom," that hundreds of relay runners carried from the sight of the first women's conference in the U.S. The relay run began in Seneca Falls, New York and was routed through the states to Houston, Texas. The map shows the stops as planned in the tentative NWC torch relay route. This digital and interactive map will take you through the route followed by Relay for ERA runners.
                    </p>
                    <p>
                        Information about the date, number of days, miles and destination can be found underneath each cities clide. Sourced from the UNiversity of Houston's Special Collections department; NVH Box .7 - Folder 12. The archives used for this map include: Tentative Route IWY Torch Relay, Torch Relay Fact Sheet, IWY Torch Relay Day Schedule.
                    </p>
                </div>*/}
            </div>

            {/**SECTION 1 */}
            <div className="torchSection1_title">
                <h2>{pageState.Title}</h2>
            </div>
            <div className="torchSection1">
                <div className="torchSection1_img">
                    <img src={pageState.section1_image} alt=""/>
                </div>
                <div className="torchSection1_text">
                    <p>{pageState.section1_text}</p>
                </div>
            </div>

            {/**MIDPHOTO */}
            <figure className="torchMidphoto">
                <img src={pageState.midphoto} alt=""/>
                <figcaption>
                    {pageState.MidpagePhotoCredit}
                </figcaption>
            </figure>

            {/**SECTION 2 */}
            <div className="torchSection2">
                <div className="torchSection2_left">
                    <h2 className="torchSection2_title">{pageState.section2_title}</h2>
                    <div className="torchSection2_quote">
                        {pageState.Section2_Quote}
                    </div>
                    <div className="torchSection2_text">
                        {pageState.Section2_text}
                    </div>
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
                    <img src={pageState.LargeImageMap}/>
                    <figcaption>
                        {pageState.LargeImageMap_Citation}
                    </figcaption>
                </figure>
            </div>

            {/**SECTION 3 */}
            <div className="torchSection3">
                <div className="torchSection3_left">
                    <h2>{pageState.Section3_title}</h2>
                    <p>{pageState.Section3_text}</p>
                </div>
                <div className="torchSection3_right">
                    <img src={pageState.Section3_image} alt=""/>
                </div>
            </div>

            {/**CONCLUSION */}
            <div className="torchConclusion">
                <h2>CONCLUSION</h2>
                <p>{pageState.Conclusion}</p>
            </div>

            {/**SOURCES */}
            <div className="torchSources">
                <h2>SOURCES</h2>
                {pageState.Sources.map(src => <p>{src.text}</p>)}
            </div>

        </div>
    )
}

export default Torch
