import "../style.css"

//Let's Get The Data of City from SearchBar
const SearchButton = document.querySelector('form>button')
const SearchBar = document.getElementById('searchbox')

SearchButton.addEventListener('click', (event) => {
    event.preventDefault()
    GetData(SearchBar.value)
})




async function GetData(Place) {
    const Response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Place}?unitGroup=us&key=RGPYF5RQCEQSE3J6TR6U42KJW&contentType=json`, {
        mode: 'cors'
    })
    const weatherData = await Response.json()
    console.log(weatherData)
    return weatherData;
}