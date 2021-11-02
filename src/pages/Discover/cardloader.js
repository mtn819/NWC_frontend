function d2card(datum) {
    return {
        id: datum.id,
        name: datum.name,
        role: datum.role,
        state: datum.state,
    };
};

export function loadcards(data, setState) {
    setState(data.map(d2card));
}