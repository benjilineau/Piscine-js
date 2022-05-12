function firstDayWeek(week, year) {
    let date = new Date(year);
    let jour = (week - 1) * 7;
    date.setDate(date.getDate() + jour)


    if (week == 1) {
        return formatDate(date.setDate(date.getDate()))
    }
    while (date.getDay() > 1) {
        date.setDate(date.getDate() - 1)
    }
    return formatDate(date);
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = '' + d.getFullYear();

    while (year.length < 4) {
        year = '0' + '' + year
    }
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [day, month, year].join('-');
}
