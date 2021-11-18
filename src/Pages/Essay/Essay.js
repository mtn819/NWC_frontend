import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import VARIABLES from '../../config/.env';
import InfoAudio from '../../DiscoverNWCStories/InfoPage/InfoAudio';
import "./Essay.css";

function Essay() {
    const { search } = useLocation();
    const id = search.split('=')[1];
    const [pageState, setPageState] = useState({
        Title: "WHY THE NWC MATTERS",
        Image1: '/',
        Image2: '/',
        Image3: '/',
        MainImage: '/',
        TallImage: '/',
        Paragraph1: "ABCDEFG",
        Paragraph2: "DEFGHIJ",
        Paragraph3: "HIJSALL",
        srcs: [],
        audioUrl: "/",
        author: "Written by Jane Doe; University of Houston, Class of 2020",
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, `content-essays/${id}`].join('/'))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            function processImage(img) {
                // [imgurl, credit]
                return [
                    [VARIABLES.fetchBaseUrl, img.Image[0].url].join(''),
                    img.ImgCredit
                ];
            }
            
            const sources = data.Sources.map(s => s.text);

            setPageState({
                ...pageState,
                ...data,
                srcs: sources,
                Image1: processImage(data.Image1),
                Image2: processImage(data.Image2),
                Image3: processImage(data.Image3),
                MainImage: processImage(data.MainImage),
                TallImage: processImage(data.TallImage),
            });

            console.log("HERE! TODAY!asdf", pageState);
        });
    }, []);

    return (
        <div className="essay">
            {/**BANNER */}
            <div className="essayBanner">
                <h1>{pageState.Title}</h1>
            </div>
            <div className="essayBanner_hr"></div>
            <figure>
                <img src={pageState.MainImage[0]} alt=""/>
                <figcaption>{pageState.MainImage[1]}</figcaption>
            </figure>

            {/**P1 */}
            <div className="essayP1">
                <div className="essayP1_left">
                    <figure>
                        <img src={pageState.TallImage[0]} alt=""/>
                        <figcaption>
                            {pageState.TallImage[1]}
                        </figcaption>
                    </figure>
                </div>
                <div className="essayP1_right">
                    <figure className="essayP1_img">
                        <img src={pageState.Image1[0]} alt=""/>
                        <figcaption>
                            {pageState.Image1[1]}
                        </figcaption>
                    </figure>

                    <p>{pageState.Paragraph1}</p>
                </div>
            </div>

            {/**P2 */}
            <div className="essayP2">
                <p>{pageState.Paragraph2}</p>
            </div>

            {/**P3 */}
            <div className="essayP3">
                <p>{pageState.Paragraph3}</p>
                <figure>
                    <img src={pageState.Image2[0]} alt=""/>
                    <figcaption>
                        {pageState.Image2[1]}
                    </figcaption>
                </figure>
            </div>

            {/**P4 */}
            <div className="essayP4">
                <p>{pageState.Paragraph4}</p>
                <figure>
                    <img src={pageState.Image3[0]} alt=""/>
                    <figcaption>
                        {pageState.Image3[1]}
                    </figcaption>
                </figure>
            </div>

            {/**SOURCES */}
            <div className="essaySources">
                <p className="essaySources_author">{pageState.author}</p>
                <h2>Sources:</h2>
                {pageState.srcs.map(src => <p className="essaySources_src">
                    {src}
                </p>)}
            </div>
        </div>
    )
}

export default Essay
