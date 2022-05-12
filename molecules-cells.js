
function RNA(DNA) {
    let res = '';

    for (let i = 0; i < DNA.length; i++) {
        switch (DNA[i]) {
            case 'G':
                res += 'C';
                continue
            case 'C':
                res += 'G';
                continue
            case 'T':
                res += 'A';
                continue
            case 'A':
                res += 'U';
                continue
            default:
                res += DNA[i];
                continue
        }
    }

    return res
}

function DNA(RNA) {
    let res = '';

    for (let i = 0; i < RNA.length; i++) {
        switch (RNA[i]) {
            case 'C':
                res += 'G';
                continue
            case 'G':
                res += 'C';
                continue
            case 'A':
                res += 'T';
                continue
            case 'U':
                res += 'A';
                continue
            default:
                res += RNA[i];
                continue
        }
    }

    return res
}
console.log(DNA('AUCG'))
console.log(RNA('TAGC'))
console.log(DNA(RNA('AUCG')))