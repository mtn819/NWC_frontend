import React from 'react'
import "./Layout2.css";

function tryWrap(f) {
    try {
        return f();
    } catch(e) {
        console.log(e);
    }
}

function Layout2({props}) {

    return (
        <div className="layout2">
            {/**BANNER */}
            <div className="layout2Banner">
                <h1>{props.Title}</h1>
            </div>
            <div className="layout2Banner_hr"></div>
            <figure>
                <img src={tryWrap(() => props.MainImage[0])} alt=""/>
                <figcaption>{tryWrap(() => props.MainImage[1])}</figcaption>
            </figure>

            {/**P1 */}
            <div className="layout2P1">
                <div className="layout2P1_left">
                    <figure>
                        <img src={tryWrap(() => props.TallImage[0])} alt=""/>
                        <figcaption>
                            {tryWrap(() => props.TallImage[1])}
                        </figcaption>
                    </figure>
                </div>
                <div className="layout2P1_right">
                    <figure className="layout2P1_img">
                        <img src={tryWrap(() => props.Image1[0])} alt=""/>
                        <figcaption>
                            {tryWrap(() => props.Image1[1])}
                        </figcaption>
                    </figure>

                    <p>{props.Paragraph1}</p>
                </div>
            </div>

            {/**P3 */}
            <div className="layout2P3">
                <p>{props.Paragraph3}</p>
                <figure>
                    <img src={tryWrap(() => props.Image2[0])} alt=""/>
                    <figcaption>
                        {tryWrap(() => props.Image2[1])}
                    </figcaption>
                </figure>
            </div>

            {/**P2 */}
            <div className="layout2P2">
                <p>{props.Paragraph2}</p>
            </div>

            {/**P4 */}
            <div className="layout2P4">
                <p>{props.Paragraph4}</p>
                <figure>
                    <img src={tryWrap(() => props.Image3[0])} alt=""/>
                    <figcaption>
                        {tryWrap(() => props.Image3[1])}
                    </figcaption>
                </figure>
            </div>

            {/**SOURCES */}
            <div className="layout2Sources">
                <p className="layout2Sources_author">{props.author}</p>
                <h2>Sources:</h2>
                {props.sources.map(src => <p className="layout2Sources_src">
                    {src}
                </p>)}
            </div>
        </div>
    )
}

export default Layout2;
