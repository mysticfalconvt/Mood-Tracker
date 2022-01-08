//function that created an object with each month, and each month containing each day set to 0

export default function createBlankYear() {
    const currentYear = new Date().getFullYear();
    let year = { date: currentYear, months: [], inUse: false };
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // create an array of months with each month containing an array of days with each day having a date and a value of 0
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    months.forEach((month, index) => {
        year.months.push({
            name: month,
            days: []
        });
        for (let i = 1; i <= daysInMonth[index]; i++) {
            year.months[index].days.push({
                date: i,
                value: 0
            });
        }
    });

    return year;
}

export function randomizeYearDayValues() {
    const year = createBlankYear();
    year.months.forEach(month => {
        month.days.forEach(day => {
            day.value = Math.floor(Math.random() * 4) + 1;
        })
    })
    return year;
}