import {
    format
} from "date-fns";
import clearDay from "../img/clear-day.svg"
import clearNight from "../img/clear-night.svg"
import cloud from "../img/cloudy.svg"
import fog from "../img/fog.svg"
import CloudyDay from "../img/partly-cloudy-day.svg"
import CloudyNight from "../img/partly-cloudy-night.svg"
import rain from "../img/rain.svg"
import snow from "../img/snow.svg"
import wind from "../img/wind.svg"
const sections = document.querySelectorAll('.section')
const footer = document.querySelector('.footer')
const DOM = (function () {
    function MainSection(address, date, icon, tempFeels, ma, mi) {
        document.querySelector('.main-section').style.display = 'flex'
        document.querySelector('.footer').style.display = 'flex'
        sections.forEach((section) => section.style.display = 'flex')
        const City = document.querySelector('.city-name'); // City Info is here
        const day = document.querySelector('.day'); // Day Info is here
        const emoji = document.querySelector('.emoji-mainTemp');
        const weatherInfo = document.querySelector('.weatherInfo');
        const unit = document.querySelector('.active') //Celsius or Fareinhit
        const temp = document.querySelector('.average');
        const max = document.querySelector('.max');
        const min = document.querySelector('.min');
        [emoji.src, weatherInfo.textContent] = Emoji(icon);
        emoji.height = 160
        emoji.width = 150
        //Now let the DOM get their corresponding value
        City.textContent = address.charAt(0).toUpperCase() + address.slice(1)
        day.textContent = date
        if (unit.textContent === 'C') {
            temp.textContent = ConvertintoC(tempFeels)
            max.textContent = '↑' + ConvertintoC(ma);
            min.textContent = '↓' + ConvertintoC(mi);
        } else if (unit.textContent === 'F') {
            temp.textContent = tempFeels
            max.textContent = '↑' + ma;
            min.textContent = '↓' + mi;
        }
        document.querySelector('.main-section').style.borderColor = 'skyblue'
    };

    function WeekDOM(weat, date, temperature, index) {
        footer.style.display = 'flex'
        const dayName = document.querySelector(`.day${index}`)
        const weather = document.querySelector(`img.weather${index}`)
        const temp = document.querySelector(`.temp${index}`)
        dayName.textContent = format(new Date(date), 'EEEE').substring(0, 3).toUpperCase()
        let str;
        [weather.src, str] = Emoji(weat)
        weather.height = 30
        weather.width = 40
        const unit = document.querySelector('.active');
        if (unit.textContent === 'C') temp.textContent = ConvertintoC(temperature)
        else temp.textContent = temperature
    }

    return {
        MainSection,
        WeekDOM
    }
})();

function Emoji(icon) {
    if (icon === 'snow') return [snow, 'Snowy']
    else if (icon === 'rain') return [rain, 'Rainy']
    else if (icon === 'fog') return [fog, 'Foggy']
    else if (icon === 'wind') return [wind, 'Windy']
    else if (icon === 'cloudy') return [cloud, 'Cloudy']
    else if (icon === 'partly-cloudy-day') return [CloudyDay, 'Partially Cloudy']
    else if (icon === 'partly-cloudy-night') return [CloudyNight, 'Partially Cloudy']
    else if (icon === 'clear-day') return [clearDay, 'Clear']
    else if (icon === 'clear-night') return [clearNight, 'Clear']
    else return [cloud, 'Unknown']
}

function ConvertintoC(temp) {
    let x = Number(temp)
    return ((x - 32) / 1.8).toFixed(1)
}

export {
    DOM
}