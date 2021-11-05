import { media2url } from "../../components/util/util";

function d2card(datum) {
    console.log(datum);

    return {
        id: datum.id,
        name: datum.name,
        role: datum.role,
        state: datum.state,
        img: media2url(datum.profilepic[0]),
        featured: datum.featured,
    };
};

export function loadcards(data, setState) {
    setState(data.map(d2card));
}