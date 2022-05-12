const escapeStr = '`\\/"\''
const arr = [4, '2']
const obj = {
    str: "bonjour",
    num: 10,
    bool: true,
    undef: undefined,
}

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "salut",
        num: 10,
        bool: true,
    }
}

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested.obj);
Object.freeze(nested.arr);