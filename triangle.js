function triangle(str, num) {
    let res = ''
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            res += str
        }
        if (i === num) {
            return res
        }
        res += '\n'
    }
    return res
}

console.log(triangle('*', 8))