// These pages are roughly split into 3 sections.
// 1. The associated .css file ("./DiscoverInfo.css" for this particular one)
// 2. Data fetching with useState and useEffect
// 3. The actual UI
// If there is anything you already understand, feel free to skim through it.
// If there is anything that i do not go through thoroughly enough, feel free to ask questions.

import React, { useState, useEffect } from 'react'
import {
    useParams,
    Link,
} from "react-router-dom";
import "./DiscoverInfo.css"; // This is section 1.
import ReactMarkdown from 'react-markdown';
import VARIABLES from '../../config/.env';
import button from "../../res/imgs/toform.png";


function DiscoverInfo() {
    const { storyId } = useParams(); // WILL BE USED TO GRAB STRAPI DATA

    const { fetchBaseUrl } = VARIABLES;

    // this is section 2.
    // i predefine here mostly to avoid crashes.
    // for instance, if i have not defined state.career as an array, it does not have the map function.
    // so, in the user interface, if i have {state.career.map(c => c)}, it will throw an error before state.career is populated with an array object.
    // will throw an error along the lines of "undefined has no attribute 'map'".
    const [state, setState] = useState({
        bigquote1: '',
        bigquote2: '',
        career: [],
        dob: '',
        imgcaption: '',
        maintext: '',
        name: '',
        profilepic: '',
        profilepic_alt: '',
        role: '',
        rolesAtNwc: [],
        sources: [],
        state: '',
        usertags: [],
    });
    // grab page data from strapi
    useEffect(() => {
        // this pattern is pretty much seen on all data-driven pages
        fetch(`${fetchBaseUrl}/content-discover-stories?_id=${storyId}`)
            .then(res => res.json())
            .then(data => {

                // IF Conditional statement to ensure data[0].profilepic[0] TypeError resolved
                // If it exists, we can set the state to that profile pic
                // Else set it to our "button" picture, this is subject to change

                let profilepic = state.profilepic
                let profilepic_alt = state.profilepic_alt
                if (data[0].profilepic[0]) {
                    profilepic = `${fetchBaseUrl}${data[0].profilepic[0].url}`;
                    profilepic_alt = data[0].profilepic[0].alternativeText;
                } else {

                    profilepic = button
                    profilepic_alt = "No Picture Available"
                }

                // here i keep the attribute names close to what is served in strapi.
                // there is still come cleaning I do, as useState does NOT like nested loops.
                // for example
                // setState({ nestedEl: { a: 'b' } }); // this will crash things.
                // this is why the occasional map function is seen in below's assignments.
                // we want [literal1, literal2, ...], not [{object1}, {object2}, ...] (which is the purpose of the occasional .map)
                setState({
                    bigquote1: data[0].bigquote1,
                    bigquote2: data[0].bigquote2,
                    career: data[0].career.map(c => c.text),
                    dob: data[0].dob,
                    imgcaption: data[0].imgcaption,
                    maintext: data[0].maintext,
                    name: data[0].name,
                    // this is just getting the url. this pattern is common for media objects, like images and pdf files.
                    // this is also acheived in media2url, which can be found in util.js,
                    // but i think that level of abstraction is unnecessary.
                    // the string literal is my personal preference.
                    profilepic,
                    profilepic_alt,
                    role: data[0].role,
                    rolesAtNwc: data[0].rolesAtNwc.map(r => r.text),
                    sources: data[0].sources.map(s => s.text),
                    state: data[0].state,
                    usertags: data[0].usertags.map(t => t.text),
                });
            })
            .catch(err => console.log(err));
    }, []); // eslint-disable-line

    // this is section 3, the UI section.
    // the general philosophy here is to do as much with HTML and CSS as possible.
    // there is arguably more memorization in HTML and CSS,
    // but HTML and CSS are pretty much incapable of crashing things.
    // it also helps the pages read top to bottom, which saves maintainers from hunting down what certain abstractions actually do.
    // there are some exceptions. if there is code that is repeated an absurd amount of times, abstract it to remove absurd clutter.
    // but shoot for less rather than more abstraction.
    //
    // to each their own, but I would generally prefer something like
    // arr.map(e => (
    //    <p className="pageSection_element">
    //          <a>{e.text} more html...</a>
    //          more html...
    //    </p>
    // </p>));
    //
    // instead of
    // arr.map(e => <SomeComponentIMade prop={e.someAttribute} />)
    //
    // the first example pretty much shows what anyone familiar with boring, basic HTML would be expecting to see on the page.
    // the second example would require a (likely small but at least considerable) degree of scavenging.
    // things that get used on tons of different pages are good candidates for getting abstracted into components.
    //
    // Of course, all these comments are my personal preference.
    // Do at your discression. if things get really messy, abstract.
    // If you have something you truly believe to be a superior alternative, please pursue that.
    // But yeah, my general approach again was: do as much with HTML and CSS as possible, as those are braindead and more fool-proof.
    // Using react and javascript minimally, in my opinion, seems to reduce bugs.
    // The website still has its fair share of bugs.
    // But if I did not try to keep things braindead for myself, I'm sure I'd end up with the Crash-Master-2000.
    // I'm not trying to self-deprecate either; just generally goes hand-in-hand with my honesty.
    //
    // A lot of my other files outsource code into pretty shoddy abstractions.
    // Don't look to those as any sort of example.
    // I was being silly.
    // Abstractions (generally) use Javascript.
    // Braindead HTML pretty much does not.

    return (
        <div className="discoverInfo">

            {/**BANNER */}
            <div className="discoverInfoBanner">
                <div className="discoverInfoBanner_left">
                    <Link to="/discover">&larr; BACK TO DISCOVER PAGE</Link>
                    <h1>{state.name}</h1>
                </div>
            </div>

            {/**BODY */}
            <div className="discoverInfoBody">

                {/**BODY_LEFT */}
                <div className="discoverInfoBody_left">
                    <div className="discoverInfoBody_profile">
                        <img className="discoverInfoBody_pfp" src={state.profilepic} alt={state.profilepic_alt} />
                        <p className="discoverInfoBody_caption">{state.imgcaption}</p>

                        <h3 className="discoverInfoBody_hname">NAME</h3>
                        <p className="discoverInfoBody_name">{state.name}</p>

                        <h3 className="discoverInfoBody_hdob">BORN</h3>
                        <p className="discoverInfoBody_dob">{state.dob}</p>

                        <h3 className="discoverInfoBody_hcareer">CAREER</h3>
                        <p className="discoverInfoBody_career">
                            {<>{state.career.map(c => c).join(', ')}</>}
                        </p>

                        <h3 className="discoverInfoBody_hrole">ROLE AT NWC</h3>
                        {state.rolesAtNwc.map(r => <p className="discoverInfoBody_role" key={r}>
                            {r}
                        </p>)}
                    </div>
                    <button type="button" className="discoverInfoBody_submit">SUBMIT CORRECTIONS</button>
                </div>

                {/**BODY_RIGHT */}
                <div className="discoverInfoBody_right">

                    <h2 className="discoverInfoBody_bioh">
                        BIOGRAPHY
                    </h2>

                    <div className="discoverInfoBody_bigquote discoverInfoBody_bigquote1">
                        <p>{state.bigquote1}</p>
                    </div>

                    <div className="discoverInfoBody_text">
                        <ReactMarkdown>
                            {state.maintext}
                        </ReactMarkdown>
                    </div>

                    <div className="discoverInfoBody_bigquote discoverInfoBody_bigquote1">
                        <p>{state.bigquote2}</p>
                    </div>

                    <div className="discoverInfoBody_sources">
                        <h3>Sources</h3>
                        {state.sources.map(s => <p key={s}>
                            {s}
                        </p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverInfo
