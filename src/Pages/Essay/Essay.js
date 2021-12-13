import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import VARIABLES from '../../config/.env';
import InfoAudio from '../../DiscoverNWCStories/InfoPage/InfoAudio';
import "./Essay.css";
import Layout1 from './Layouts/Layout1';
import Layout2 from './Layouts/Layout2';
import Layout3 from './Layouts/Layout3';

function Essay() {
    const { search } = useLocation();
    const id = search.split('=')[1];

    const [state, setState] = useState({
        header: "SENECAL FALLS SOUTH",
        quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p1: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section4: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        authorCred: "Written by Jane Doe",
        sources: ["Source A", "Source B",],
        PreferredCitation: "",
        LayoutChoice: "Layout3", // this is the default layout because it's simple
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, `content-essays/${id}`].join('/'))
        .then(res => res.json())
        .then(data => {
            function processImage(img) {
                // [imgurl, credit]
                try {
                    return [
                        [VARIABLES.fetchBaseUrl, img.Image[0].url].join(''),
                        img.ImgCredit
                    ];
                } catch(err) {
                    console.log(err);
                }
            }

            setState({
                ...state,
                ...data,
                header: data.Title,
                quote: data.PullQuote1,
                section1_p1: data.Paragraph1 ? data.Paragraph1.slice(0, parseInt(data.Paragraph1.length / 2)) + "-" : '',
                section1_p2: data.Paragraph1 ? data.Paragraph1.slice(parseInt(data.Paragraph1.length / 2)) : '',
                section2: data.Paragraph2,
                section3Text: data.Paragraph3,
                section3Quote: data.PullQuote2,
                section4: data.Paragraph4,
                authorCred: data.AuthorCredit,
                sources: data.Sources.map(src => src.text),
                PreferredCitation: data.PreferredCitation,
                Image1: processImage(data.Image1),
                Image2: processImage(data.Image2),
                Image3: processImage(data.Image3),
                MainImage: processImage(data.MainImage),
                TallImage: processImage(data.TallImage),
            })
        });
        window.scrollTo(0, 0);
    }, []);

    return (<div className="essay">
        {   // LAYOUT SWITCH
            // DEPENDS ON state.LayoutChoice,
            // which is provided by STRAPI

            // if layout is layout 1
            state.LayoutChoice === "Layout1" ? 
            // return layout 1
            <Layout1 props={ state } /> :
            // else
            (
                // if layout is layout 2
                state.LayoutChoice === "Layout2" ?
                // return layout 2
                <Layout2 props={ state } /> :
                // else return layout 3
                <Layout3 props={ state }  />
            )
        }
    </div>)
}

export default Essay
