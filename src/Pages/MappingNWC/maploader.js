function d2map(datum) {
    return {
        id: datum.id,
        name: datum.name,
        role: datum.role,
        state: datum.state,
        featured: datum.featured,
    };
};

export function loadmap(data, setState) {
    try{
        setState(data.map(d2map));
    } catch(e) {
        console.log(e);
    }
}