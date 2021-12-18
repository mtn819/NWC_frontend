import React, { useState } from 'react'
import "./Card.css";
import ReactMarkdown from 'react-markdown';

function Card({header, content, headerBackdrop, maxLength}) {
    const [more, setMore] = useState(false);
    
    function readmore(content) {
        if(maxLength === undefined){
            return content;
        }

        if(more) {
            return content;
        } else {
            if(typeof content === "string"){
                return content.slice(0, maxLength);
            }
        }
    }

    return (
        <div className="card">
            <h2 style={{backgroundColor: headerBackdrop}}>{header}</h2>
            <div className="card_content">
                <ReactMarkdown>{readmore(content)}</ReactMarkdown>
            </div>
            {maxLength === undefined ? "" : 
                <p className="card_readmore" onClick={() => setMore(!more)}>READ {more ? "LESS" : "MORE"}</p>
            }
        </div>
    )
}

export default Card
