
// ALL DATES ARE ON THE FORMAT MM/DD/YYYY

export const getYesterday = () => {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const dd = String(now.getDate()).padStart(2, '0')
    const yyyy = now.getFullYear()

    const yesterday = parseInt(dd) - 1
    const yesterdayString = yesterday < 10 ? "0" + yesterday.toString() : yesterday.toString();

    return mm + yesterdayString + yyyy
}

const combineDate = (month: number, day: number, year: number) => {
    // Formats date to always be 8 characters long
    let dayString = day < 10 ? "0" + day.toString() : day.toString();
    let monthString = month < 10 ? "0" + month.toString() : month.toString();
    return monthString + dayString + year.toString()
}


export const getLastWeek = () => {

}


// Iterates through every day from the day of the first database entry to yesterday

export const getHistory = () => {
    const yesterday = getYesterday()

    // This date is the first date logged in the database
    let month = 3;
    let day = 19;
    let year = 2021;
    let date = combineDate(month, day, year)

    let historyDates = []

    for (day; day <= 31; day++) {
        date = combineDate(month, day, year)
        historyDates.push(date)

        if (date === yesterday) break
        if (day === 31) {
            day = 1
            month += 1
        }
        if (month === 12) {
            month = 1
            year += 1
        }
    }
    return historyDates
}