function defaultCurry(obj1) {
    return (obj2) => {
        let res = Object.assign({}, obj1);
        Object.keys(obj2).forEach(key => res[key] = obj2[key]);
        return res;
    }
}

function mapCurry(obj1) {
    return (obj2) => {
        return Object.fromEntries(Object.entries(obj2).map(obj1));
    }
}

function reduceCurry(obj1) {
    return (obj2, acc) => {
        return Object.entries(obj2).reduce(obj1, (acc))
    }
}

function filterCurry(func) {
    return function (obj) {
        let res = {};
        for (const [key, value] of Object.entries(obj)) {
            if (func([key, value])) {
                res[key] = value;
            }
        }

        return res
    }

}


const mapAverage = (obj) => {
    let res = {}
    Object.entries(obj).map(([key, value]) => {
        res[key] = Object.assign(value)
        res[key].averageScore = (value.shootingScore + value.pilotingScore) / 2
    })
    return res
}

function reduceScore(obj, value) {
    return reduceCurry((acc, [key, val]) => acc + val.pilotingScore + val.shootingScore)(filterCurry(([key, val]) => val.isForceUser)(obj), value)
}

function filterForce(obj) {
    return filterCurry((([key, val]) => val.shootingScore >= 80 && val.isForceUser))(obj)
}


// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }

// const filter = {
//     calebDume: { id: 11, isForceUser: true, pilotingScore: 71, shootingScore: 85 },
// }
// console.log(mapAverage(personnel))