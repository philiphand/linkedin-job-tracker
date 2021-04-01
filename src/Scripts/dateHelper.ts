
// ALL DATES ARE ON THE FORMAT MM/DD/YYYY

export const getToday = () => { // This is buggy
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const dd = String(now.getDate()).padStart(2, '0')
    const yyyy = now.getFullYear()

    return mm + dd + yyyy
}

export const combineDate = (month: number, day: number, year: number) => {
    // Formats date to always be 8 characters long
    let dayString = day < 10 ? "0" + day.toString() : day.toString();
    let monthString = month < 10 ? "0" + month.toString() : month.toString();
    return monthString + dayString + year.toString()
}

// Iterates through every day from the day of the first database entry to yesterday

export const getHistory = () => {
    const today = getToday()

    // This date is the first date logged in the database
    let month = 3;
    let day = 24;
    let year = 2021;
    let date = combineDate(month, day, year)

    let historyDates = []

    for (day; day <= 31; day++) {
        date = combineDate(month, day, year)
        historyDates.push(date)

        if (date === today) break
        if (day === 31) {
            day = 0
            month += 1
        }
        if (month === 12) {
            month = 1
            year += 1
        }
    }

    historyDates.pop() // Removes today from history
    return historyDates
}