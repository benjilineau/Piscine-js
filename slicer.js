function slice(str, index, end = str.length) {
    let res = undefined
    if (typeof str == "string") {
        res = ""
    }
    else {
        res = []
    }
    if (index < 0) {
        index = str.length + index
    }
    if (end < 0) {
        end = str.length + end
    }
    for (let i = index; i < end; i++) {
        if (typeof str == "string") {
            res += str[i]
        }
        else {
            res.push(str[i])
        }
    }
    return res
}

console.log(slice('abcdef', 2))
console.log("Résultat attendu: 'cdef'")
console.log(slice('abcdef', -2))
console.log("Résultat attendu: 'ef'")
console.log(slice('abcdef', 0, 2))
console.log("Résultat attendu: 'ab'")
console.log(slice('abcdef', 0, -2))
console.log("Résultat attendu: 'abcd'")
console.log(slice('abcdef', 2, 4))
console.log("Résultat attendu: 'cd'")
console.log(slice('abcdef', -3, -1))
console.log("Résultat attendu: 'de'")