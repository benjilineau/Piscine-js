function manipDate(date1, date2) {
    let ONE_DAY = 1000 * 60 * 60 * 24
    let time_difference = date2.getTime() - date1.getTime();
    let days_difference = Math.abs(time_difference / (1000 * 60 * 60 * 24));
    if (date1 instanceof Date && !isNaN(date1) || date2 instanceof Date && !isNaN(date2)) {
        let leap = true;
        let leap2 = true;
        if ((0 == date1.getFullYear() % 4) && (0 != date1.getFullYear() % 100) || (0 == date1.getFullYear() % 400)) {
            leap = true;
        } else {
            leap = false;
        }
        if ((0 == date2.getFullYear() % 4) && (0 != date2.getFullYear() % 100) || (0 == date2.getFullYear() % 400)) {
            leap2 = true;
        } else {
            leap2 = false;
        }
        let res = {
            daysBetween: days_difference,
            isFirstLeap: leap,
            isSecondLeap: leap2,

        }
        return res
    }
    return "impossible"
}

module.exports = manipDate