function addWeek(date) {

    const init = new Date("0001-01-01")

    let jour = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
    ]
    let i = 0;
    while (!isEgale(date, init)) {
        init.setDate(init.getDate() + 1)
        i++
    }
    return jour[i % 14];

}

function isEgale(date1, date2) {
    if (date1.getFullYear() === date2.getFullYear()) {
        if (date1.getMonth() === date2.getMonth()) {
            if (date1.getDate() === date2.getDate()) {
                return true;
            }
        }
    }
    return false;
}

function timeTravel(data) {
    let date = new Date(data["date"]);
    date.setHours(data["hour"]);
    date.setMinutes(data["minute"]);
    date.setSeconds(data["second"]);
    return date;
}

console.log(addWeek(new Date('0001-01-08')))