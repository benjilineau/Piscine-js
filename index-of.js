function indexOf(obj, value, jumpto = 0) {
    for (let i = jumpto; i < obj.length; i++) {
        if (obj[i] === value) {
            return i
        }
    }
    return -1
}

function lastIndexOf(obj, value, jumpto = obj.length - 1) {
    for (let i = jumpto; i >= 0; i--) {
        if (obj[i] === value) {
            return i
        }
    }
    return -1
}

function includes(obj, value) {
    let found = false
    for (const mot of obj) {
        if (mot === value) {
            found = true
        }
    }
    return found
}

