function filterEntries(obj, func) {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func([key, value])) {
            res[key] = value
        }
    }
    return res
}

function mapEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(func));
}

function reduceEntries(obj, func, acc) {
    if (acc == undefined) {
        return Object.entries(obj).reduce(func)
    }
    return Object.entries(obj).reduce(func, acc);
}


const totalCalories = (cart) => {
    return Number(reduceEntries(cart, ((accumulator, [key, value]) =>
    (accumulator + (nutritionDB[key].calories * value) / 100
    )), 0).toFixed(1))
}

const lowCarbs = (cart) => {
    return filterEntries(cart, ([key, value]) =>
        (nutritionDB[key].carbs * value / 100) < 50
    )
}

const cartTotal = (cart) => {
    return mapEntries(cart, ([key, value]) => {
        let result = {};
        for (let [k, val] of Object.entries(nutritionDB[key]))
            result[k] = parseFloat(((val * value) / 100).toFixed(3))
        return [key, result]
    })
}


