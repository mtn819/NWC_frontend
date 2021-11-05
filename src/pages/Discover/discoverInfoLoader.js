import { getSafe, media2url } from "../../components/util/util";

export function loaddiscover(data, setPageState, pageState={}) {
    console.log(data);

    setPageState({
        ...pageState,
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