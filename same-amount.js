function sameAmount(data, reg1, reg2) {
    let regx = new RegExp(reg1, 'g');
    let regy = new RegExp(reg2, 'g');
    let resx = data.match(regx);
    let resy = data.match(regy);

    if (resx == null) {
        resx = []
    }
    if (resy == null) {
        resy = []
    }
    return resx.length === resy.length
}