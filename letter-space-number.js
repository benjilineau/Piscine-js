function letterSpaceNumber(str) {
    let res = []
    let match = str.match(/. \d((?=\W)|$)/g)
    for (let i = 0; i < str.length; i++) {
        if (match) {
            return match
        }
        else {
            return res
        }

    }
    return res
}