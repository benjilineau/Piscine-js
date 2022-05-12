const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they']

function pronoun(str) {
    let res = {}
    let arr = str.toLowerCase().match(/\w+/ig)
    arr.forEach((mot, i) => {
        if (pronouns.includes(mot.toLowerCase())) {
            if (!(mot in res)) {
                res[mot] = { word: [], count: 0 }
            }
            if (arr[i + 1] !== undefined && !(pronouns.includes(arr[i + 1].toLowerCase()))) {
                res[mot]['word'].push(arr[i + 1])
            }
            res[mot]['count'] += 1
        }
    })
    return res
}