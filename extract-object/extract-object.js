// Programme non fonctionel

function extractObject(obj) {
    let res = []
    let deb = [];
    let fin = [];

    for (let i = 0; i < obj.lenght; i++) { // sert a trouvé {
        for (let j = 0; j < obj.length; j++) { // sert a trouvé }
            if (obj[i] === "{") {
                deb.push(i);
            }
            if (obj[j] === "}") {
                fin.push(j);
            }
        }
    }
    for (let k = 0; k < obj.match(/{/g).length; k++) { //insertion des éléments dans le tableau
        res.push(JSON.parse(obj.substring(deb[k], fin[k] + 1)));
    }
    return res.map(el => reverse(el)); //envoie les élements pour inverser la clé, value

}

//fonction qui inverse la clé et la value
function reverse(obj) {
    let retobj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            retobj[obj[key]] = key;
        }
    }
}

module.exports = extractObject