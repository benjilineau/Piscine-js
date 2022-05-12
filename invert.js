function invert(obj) {
    let retobj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            retobj[obj[key]] = key;
        }
    }
    return retobj;
}