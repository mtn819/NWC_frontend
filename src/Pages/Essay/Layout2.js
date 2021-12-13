import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import VARIABLES from '../../config/.env';
import "./Layout2.css";
import toform from "./res/toform.png";

function Layout2() {
    const ipsum = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

    const { search } = useLocation();
    const id = search.split('=')[1];
    const [pageState, setPageState] = useState({
        Title: "WHY THE NWC MATTERS",
        Image1: ["data:image/png;base64,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", "Caption"],
        Image2: ["data:image/png;base64,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", "Caption"],
        Image3: '/',
        MainImage: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Aspect_ratio_-_16x9.svg/1200px-Aspect_ratio_-_16x9.svg.png', "FigCaption"],
        TallImage: ["https://ftp.sun.ac.za/ftp/CTAN/macros/latex2e/contrib/mwe/example-image-9x16.png", "Image Caption"],
        Paragraph1: ipsum,
        Paragraph2: ipsum,
        Paragraph3: ipsum,
        srcs: [],
        audioUrl: "/",
        author: "Written by Jane Doe; University of Houston, Class of 2020",
    });

    /*useEffect(() => {
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
    }, []);*/

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

            {/**P2 */}
            <div className="essayP2">
                <p>{pageState.Paragraph2}</p>
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

export default Layout2;
