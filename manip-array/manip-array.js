function manipArray(arr) {
    let total = []
    if (arr.length == 0) {
        return total
    }
    let res = arr.map(x => x * 2)
    let res2 = arr.map(x => x - 5)
    let res3 = arr.filter(x => x > 5)
    total.push(res, res2, res3)
    return total
}

module.exports = manipArray

