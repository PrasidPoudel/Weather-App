import "../style.css"
import {
    DOM
} from "./DOMs"
import { format } from "date-fns";
//Let's Get The Data of City from SearchBar
const SearchButton = document.querySelector('form>button')
const SearchBar = document.getElementById('searchbox')

SearchButton.addEventListener('click', (event) => {
    event.preventDefault()
     GetData(SearchBar.value).then((res) => {
        console.log(res)
        DOM.MainSection(res.address, format(new Date(), 'EEEE'),res.currentConditions.feelslike)
    })
})




async function GetData(Place) {
    const Response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Place}?unitGroup=us&key=RGPYF5RQCEQSE3J6TR6U42KJW&contentType=json`, {
        mode: 'cors'
    })
    return await Response.json()
}