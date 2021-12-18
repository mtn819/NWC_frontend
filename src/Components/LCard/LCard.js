import React from 'react'
import ReactMarkdown from 'react-markdown'
import "./LCard.css";

function LCard({text}) {
    return (
        <div className="lcard">
            <div className="lcard_topright"></div>
            <div className="lcard_text">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
            <div className="lcard_bottomleft"></div>
        </div>
    )
}

export default LCard
