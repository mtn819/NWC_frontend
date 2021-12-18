import { media2url, getSafe } from "../util/util";

function datum2frame(datum){
    return {
        "CAPTION": getSafe(datum, "CAPTION"),
        "PDF": media2url(getSafe(datum, "PDF", 0)),
        "THUMBNAIL": media2url(getSafe(datum, "THUMBNAIL", 0)),
    }
}



export function loadCarousel(data, carousel, setCarousel){
    try{
        setCarousel(getSafe(data, 0, "SLIDE").map(datum => datum2frame(datum)));
    } catch(e) {
        console.log(e);
        return "";
    }
}