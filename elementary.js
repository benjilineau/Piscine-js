function multiply(a, b) {
    let res = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        res += Math.abs(a)
    }
    if (a < 0 && b < 0) {
        return Math.abs(res);
    } else if (a < 0 || b < 0) {
        return -res;
    }
    return res
}


function divide(a, b) {
    let neg = false;
    let res = 0
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        neg = true;
    }
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (x >= y) {
        x -= y;
        res += 1;
    }
    if (x > y) {
        return 0
    }
    if (neg == true) {
        return -res
    }
    return res
}

function modulo(a, b) {
    return a - multiply(divide(a, b), b)
}



console.log(multiply(-34, -78) + " = " + 2652)
console.log(divide(-123, 22) + " = " + -5)
console.log(divide(34, 74) + " = " + 0)
console.log(multiply(34, -78) + " = " + -2652)


