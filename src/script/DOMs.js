const DOM = (function () {
    MainSection(address, date, icon, tempFeels) {
        const City = document.getElementsByClassName('city-name') //City Info is here
        const day = document.getElementsByClassName('day') //Day Info is here
        const emoji = document.getElementsByClassName('emoji-mainTemp')
        const weatherInfo = document.getElementsByClassName('weatherInfo')
        const temp = document.getElementsByClassName('section-3')
        //Now let the DOM get their corresponding value
        City.textContent = address
        day.textContent = new Date(date).getDay
    }
})();

function GetDay(date) {
    let num = new Date(date).getDay
    switch (num) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'Error'
    }
}