export function getSafe(data, ...keys) {
    let curr = data;
    keys.forEach(k => {
        if(curr[k] === undefined) return undefined;
        curr = curr[k];
    });
    if(Object.keys(curr).length === 0){
        return undefined;
    }
    return curr;
}

export function processPage(data, state, setState) {
    const stateTextfields = {};
    const textfields = getSafe(data, 0, "TEXTFIELD");
    if(textfields !== undefined) {
        textfields.forEach(tf => {
            stateTextfields[getSafe(tf, "SECTION")] =
                getSafe(tf, "CONTENT");
        })
        setState({
            ...state,
            ...stateTextfields,
        })
    }
}