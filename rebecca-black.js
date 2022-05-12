function isFriday(date) {
    if (date.getDay() == 5) {
        return true
    }
    return false
}

function isWeekend(date) {
    if (date.getDay() == 6 || 0) {
        return true
    }
    return false
}

function isLeapYear(year) {
    return (year.getFullYear() % 100 === 0) ? (year.getFullYear() % 400 === 0) : (year.getFullYear() % 4 === 0);
}

function isLastDayOfMonth(date) {
    let test = new Date(date.getTime());
    let month = test.getMonth();
    test.setDate(test.getDate() + 1)
    return test.getMonth() !== month;
}

