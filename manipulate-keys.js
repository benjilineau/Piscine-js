function filterKeys(obj, func) {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func(key)) {
            res[key] = value
        }
    }
    return res
}

function mapKeys(obj, func) {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        res[func(key)] = value
    }
    return res
}

function reduceKeys(obj, func, acc) {
    if (acc == undefined) {
        return Object.keys(obj).reduce(func)
    }
    return [acc].concat(Object.keys(obj)).reduce(func)
}