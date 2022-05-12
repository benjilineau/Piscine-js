function get(src, path) {
    let chem = path.split('.');
    let curr = src
    chem.forEach((element) => {
        if (curr === undefined) return curr
        curr = curr[element]
    })
    return curr
}