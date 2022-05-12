function round(num) {
    if (num >= 0) {
        return (num - 0.5 + 1) | 0;
    }
    else {
        return (num + 0.5 - 1) | 0;
    }
}

function ceil(num) {
    if (num >= 0) {
        return ((num / 1) + ((num % 1) != 0)) | 0
    }
    else {
        return (((num / 1) - ((num % 1) != 0)) | 0) + 1
    }
}

function floor(num) {
    if (num >= 0) {
        return num | 0;
    }
    else {
        return (num | 0) - 1;
    }
}

function trunc(num) {
    return num - num % 1;
}

console.log(round(4, 870))
