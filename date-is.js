function isValid(date) {
    if (typeof date === 'string') {
        return false;
    }
    let date2 = new Date(date)
    return date2 instanceof Date && !isNaN(date2);
}

function isAfter(date1, date2) {
    if (date1 > date2) {
        return true;
    }
    return false
}

function isBefore(date1, date2) {
    if (date1 < date2) {
        return true;
    }
    return false
}

function isFuture(date1) {
    let datx = isValid(date1)
    let date2 = new Date()
    if (datx) {
        if (date1 > date2) {
            return true
        } else {
            return false
        }
    }
}

function isPast(date1) {
    let datx = isValid(date1)
    let date2 = new Date()
    if (datx) {
        if (date1 < date2) {
            return true
        } else {
            return false
        }
    }
}

