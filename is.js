is.num = (n) => {
    if (typeof (n) === 'number') {
        return true;
    }
    return false;
}

is.nan = (n) => {
    if (Number.isNaN(n)) {
        return true;
    }
    return false;
}

is.str = (n) => {
    if (typeof (n) === 'string') {
        return true;
    }
    return false;
}

is.bool = (n) => {
    if (typeof (n) === 'boolean') {
        return true;
    }
    return false;
}

is.undef = (n) => {
    if (typeof (n) === 'undefined') {
        return true;
    }
    return false;
}

is.def = (n) => {
    if (typeof (n) === 'undefined') {
        return false;
    }
    return true;
}

is.arr = (n) => {
    if (Array.isArray(n)) {
        return true;
    }
    return false;
}

is.obj = (n) => {
    return Object.prototype.toString.call(n) === "[object Object]"
}

is.fun = (n) => {
    if (typeof (n) === 'function') {
        return true;
    }
    return false;
}

is.truthy = (n) => {
    if (n) {
        return true;
    }
    return false;
}

is.falsy = (n) => {
    if (!n) {
        return true;
    }
    return false;
}
