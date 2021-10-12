import { getSafe, media2url } from "../../components/util/util";

function dclean(datum) {
    const documents = getSafe(datum, "DOCUMENT").map(function(d){
        return {
            "PDF": media2url(getSafe(d, "PDF", 0)),
            "THUMBNAIL": media2url(getSafe(d, "THUMBNAIL", 0)),
        }
    });

    return {
        "TITLE": getSafe(datum, "TITLE"),
        "MAP": getSafe(datum, "MAP"),
        "X": getSafe(datum, "POINT") ? getSafe(datum, "POINT").X : 0,
        "Y": getSafe(datum, "POINT") ? getSafe(datum, "POINT").Y : 0,
        "THUMBNAIL": media2url(getSafe(datum, "THUMBNAIL", 0)),
        "CONTENT": getSafe(datum, "CONTENT"),
        "CITATIONS": getSafe(datum, "CITATIONS"),
        "DOCUMENTS": documents,
    }
}

export function loadMap(data, setMapData) {
    setMapData(data.map(datum => dclean(datum)));
}