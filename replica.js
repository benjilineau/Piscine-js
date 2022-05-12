const superTypeOf = (arg) => toString.call(arg).slice(8, -1)

const replica = (obj, ...copie) => {
    copie.forEach((c) => {
        Object.entries(c).forEach(([key, value]) => {
            if (superTypeOf(value) == 'Object' && superTypeOf(obj[key]) == 'Object') {
                obj[key] = replica(obj[key], value)
            }
            else {
                obj[key] = value
            }
        })
    });
    return obj;
}

