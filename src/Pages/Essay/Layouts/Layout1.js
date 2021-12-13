import React from 'react'
import "./Layout1.css";

function getSafe(arr, i) {
    try {
        return arr[i];
    } catch(e) {
        console.log(e);
    }
}

function layout1({props}) {
    return (
        <div className="layout1">
            {/**BANNER */}
            <div className="layout1Banner">
                <h1>{props.Title}</h1>
            </div>
            <div className="layout1Banner_hr"></div>
            <figure>
                <img src={getSafe(props.MainImage, 0)} alt=""/>
                <figcaption>{getSafe(props.MainImage, 1)}</figcaption>
            </figure>

            {/**P1 */}
            <div className="layout1P1">
                <div className="layout1P1_left">
                    <figure>
                        <img src={getSafe(props.TallImage, 0)} alt=""/>
                        <figcaption>
                            {getSafe(props.TallImage, 1)}
                        </figcaption>
                    </figure>
                </div>
                <div className="layout1P1_right">
                    <figure className="layout1P1_img">
                        <img src={getSafe(props.Image1, 0)} alt=""/>
                        <figcaption>
                            {getSafe(props.Image1, 1)}
                        </figcaption>
                    </figure>

                    <p>{props.Paragraph1}</p>
                </div>
            </div>

            {/**P2 */}
            <div className="layout1P2">
                <p>{props.Paragraph2}</p>
            </div>

            {/**P3 */}
            <div className="layout1P3">
                <p>{props.Paragraph3}</p>
                <figure>
                    <img src={getSafe(props.Image2, 0)} alt=""/>
                    <figcaption>
                        {getSafe(props.Image2, 1)}
                    </figcaption>
                </figure>
            </div>

            {/**P4 */}
            <div className="layout1P4">
                <p>{props.Paragraph4}</p>
                <figure>
                    <img src={getSafe(props.Image3, 0)} alt=""/>
                    <figcaption>
                        {getSafe(props.Image3, 1)}
                    </figcaption>
                </figure>
            </div>

            {/**SOURCES */}
            <div className="layout1Sources">
                <p className="layout1Sources_author">{props.author}</p>
                <h2>Sources:</h2>
                {props.sources.map(src => <p className="layout1Sources_src">
                    {src}
                </p>)}
            </div>
        </div>
    )
}

export default layout1
