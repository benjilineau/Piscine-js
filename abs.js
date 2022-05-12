function isPositive(value) {
    if (value > 0) {
        return true;
    }
    else {
        return false;
    }
}

function abs(value) {
    if (value < 0) {
        value *= -1;
        return value;
    }
    else if (value == 0) {
        return 0;
    }
    else {
        return value;
    }
}