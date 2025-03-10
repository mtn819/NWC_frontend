import { media2url } from "../../Components/util/util";

export function loaddiscover(data, setState, state={}) {
    console.log(data);

    setState({
        ...state,
        pfpsrc: media2url(data[0].profilepic[0]),
        pfpalt: data[0].name,
        pfcaption: data[0].imgcaption,
        pfname: data[0].name,
        pfdob: data[0].dob,
        pfcareer: data[0].career.map(c => c.text),
        pfrole: data[0].rolesAtNwc.map(r => r.text),
        tags: data[0].usertags.map(t => t.text),
        bigquote1: data[0].bigquote1,
        bigquote2: data[0].bigquote2,
        text: data[0].maintext,
        sources: data[0].sources.map(s => s.text),
    });
}