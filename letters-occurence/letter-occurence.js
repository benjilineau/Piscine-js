function lettersOccurence(str) {
    var res = {};
    str.replace(/\S/g, function (l) { res[l] = (isNaN(res[l]) ? 1 : res[l] + 1); });
    return res;
}

module.exports = lettersOccurence