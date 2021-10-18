import React from 'react'
import "./Corrections.css";

function Corrections() {

    return (
        <form classname="corrections" action="/" method="get">
            <div className="correctionsBlue">
                <h1>CORRECTIONS</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <input name="name" placeholder="Name"/>
                <input name="affiliation" placeholder="Affiliation/Occupation"/>
                <input name="email" placeholder="Email" type="email"/>
                <input name="page" placeholder="Name of Page Needing Correction (please also include corresponding URL)"/>
                <input name="feature" placeholder="Name of specific feature to be corrected (i.e., biography, demographic fact, interpretive essay)"/>
                <textarea name="corrections" placeholder="Corrections"/>
                <input name="source" placeholder="Source for Correction"/>
            </div>
            <button className="corrections_button">SUBMIT</button>
        </form>
    )
}

export default Corrections
