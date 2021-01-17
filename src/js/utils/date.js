export {
    fromDate,
    times,
    DaysWeek,
    getMonth
}
const date = new Date();
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
// const months = [
//     'января',
//     'февраля',
//     'марта',
//     'апреля',
//     'мая',
//     'июня',
//     'июля',
//     'августа',
//     'сентября',
//     'октября',
//     'ноября',
//     'декабря'];
function fromDate() {
    const todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const sevenDay = new Date(date.setDate(date.getDate() - 7));
    const from = `${sevenDay.getFullYear()}-${sevenDay.getMonth() + 1}-${sevenDay.getDate()}`;
    return from;
}
function times(str) {
    const date = new Date(str);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}y.`
}
function DaysWeek() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[this.date.getDay()];
}

function getMonth() {
    return months[date.getMonth()].toUpperCase();
}
