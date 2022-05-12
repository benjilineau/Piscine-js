let filterShortStateName = (arr) => arr.filter(x => x.length < 7)

let filterStartVowel = (arr) => arr.filter(x => x.match(/^[aeiou]/i))

let filter5Vowels = (arr) => arr.filter(x => x.match(/[aeiou]/gi).length >= 5)

let filter1DistinctVowel = (arr) =>
    arr.filter(function (elem) {
        let len = (str) => str.match(new RegExp(str[0], "ig")).length == str.length;
        return len(elem.match(/[i|a|u|e|o]/gi).join(""));
    });

let multiFilter = (arrObj) =>
    arrObj.filter(
        (elem) =>
            elem["capital"].length > 7 &&
            !/[a|i|u|e|o]/gi.test(elem["name"][0]) &&
            /[a|i|u|e|o]/gi.test(elem["tag"]) &&
            elem["region"] !== "South"
    );