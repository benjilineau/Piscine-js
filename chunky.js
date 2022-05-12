function chunk(arr, num) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr.slice(0, num))
        arr = arr.slice(num)
        if (arr.length < num && arr.length != 0) {
            res.push(arr)
            return res
        }
    }
    return res
}