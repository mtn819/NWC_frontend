import React from 'react'
import { useState } from 'react'
import toform from "./res/toform.png";
import "./Layout3.css";

function Layout3() {
    const [pageState, setPageState] = useState({
        header: "SENECAL FALLS SOUTH",
        quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p1: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        authorCred: "Written by Jane Doe",
        sources: ["Source A", "Source B",]
    });

    return (
        <div className="layout3">
            <h1>{pageState.header}</h1>
            <img src={toform} alt=""/>
            <p className="layout3_quote">{pageState.quote}</p>
            <div className="layout3_section1">
                <p>{pageState.section1_p1}</p>
                <p>{pageState.section1_p2}</p>
            </div>
            <p className="layout3_section2">
                {pageState.section2}
            </p>
            <p className="layout3_section3">
                <p className="layout3_section3Text">{pageState.section3Text}</p>
                <p className="layout3_section3Quote">{pageState.section3Quote}</p>
            </p>
            <p className="layout3_author">
                {pageState.authorCred}
            </p>
            <div className="layout3_sources">
                <h2>SOURCES</h2>
                {pageState.sources.map(src => <p>{src}</p>)}
            </div>
        </div>
    )
}

export default Layout3
