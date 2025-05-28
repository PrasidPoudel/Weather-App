const DOM = (function () {
    function MainSection(address, date, /*icon,*/ tempFeels) {
        const City = document.querySelector('.city-name'); // City Info is here
        const day = document.querySelector('.day'); // Day Info is here
        const emoji = document.querySelector('.emoji-mainTemp');
        const weatherInfo = document.querySelector('.weatherInfo');
        const temp = document.querySelector('.section3');

        console.log(City, day, temp)
        //Now let the DOM get their corresponding value
        City.textContent = address
        day.textContent = date
        temp.textContent = tempFeels
    };

    return {
        MainSection
    }
})();

export {
    DOM
}