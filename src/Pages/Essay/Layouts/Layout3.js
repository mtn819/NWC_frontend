import React from 'react'
import toform from "../res/toform.png";
import "./Layout3.css";
import ReactMarkdown from 'react-markdown';

function Layout3({props}) {

    return (
        <div className="layout3">
            <h1>{props.header}</h1>
            <img src={toform} alt=""/>
            <p className="layout3_quote">{props.quote}</p>
            <p className="layout3_section1">
                <ReactMarkdown>
                {props.section1_p1}
                </ReactMarkdown>
                <ReactMarkdown>
                {props.section1_p2}
                </ReactMarkdown>
            </p>
            <ReactMarkdown className="layout3_section2">
                {props.section2}
            </ReactMarkdown>
            <p className="layout3_section3">
                <ReactMarkdown className="layout3_section3Text">
                    {props.section3Text}
                </ReactMarkdown>
                <p className="layout3_section3Quote">{props.section3Quote}</p>
            </p>
            <ReactMarkdown className="layout3_section2">
                {props.section4}
            </ReactMarkdown>
            <ReactMarkdown className="layout3_author">
                {props.authorCred}
            </ReactMarkdown>
            <div className="layout3_sources">
                <h2>SOURCES</h2>
                {props.sources.map(src => <p>{src}</p>)}
            </div>

            {/**PREF CIT */}
            <div className="layout3_prefCit">
                <h2>PREFERRED CITATION</h2>
                {props.PreferredCitation}
            </div>

        </div>
    )
}

export default Layout3
