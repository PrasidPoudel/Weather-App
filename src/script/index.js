import "../style.css"
import {
    DOM
} from "./DOMs"
import {
    format
} from "date-fns";
//Let's Get The Data of City from SearchBar
const SearchButton = document.querySelector('form>button')
const SearchBar = document.getElementById('searchbox')
const loader = document.querySelector('.loader')
const sections = document.querySelectorAll('.section')
const footer = document.querySelector('.footer')
const units = document.querySelectorAll('.unit-child')
units.forEach((unit) => {
    unit.addEventListener('click', () => {
        const another = document.querySelector('.active')
        another.classList.remove('active')
        unit.classList.add('active')
    })
})

SearchButton.addEventListener('click', (event) => {
    document.querySelector('.main-section').style.display='none'
    document.querySelector('.footer').style.display='none'

    event.preventDefault()
    footer.style.display = 'none'
    document.querySelector('.main-section').style.borderColor = 'transparent'
    loader.style.display = 'block'

    GetData(SearchBar.value).then((res) => {
        console.log(res)
        loader.style.display = 'none'
        DOM.MainSection(res.address, format(new Date(), 'EEEE'), res.currentConditions.icon, res.days[0].temp, res.currentConditions.feelslike, res.days[0].tempmin)
        for (let i = 1; i <= 6; i++) {
            let array = res.days[i]
            DOM.WeekDOM(array.icon, array.datetime, array.feelslike, i)
        }
        units.forEach((unit) => {
            unit.addEventListener('click', () => {
                console.log(unit)
                DOM.MainSection(res.address, format(new Date(), 'EEEE'), res.currentConditions.icon, res.currentConditions.feelslike, res.days[0].tempmax, res.days[0].tempmin)
                for (let i = 1; i <= 6; i++) {
                    let array = res.days[i]
                    DOM.WeekDOM(array.icon, array.datetime, array.feelslike, i)
                }
            })
        })

    }).catch((error) => {
        ErrorHandling()
    })
})




async function GetData(Place) {
    const Response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Place}?unitGroup=us&key=RGPYF5RQCEQSE3J6TR6U42KJW&contentType=json`, {
        mode: 'cors'
    })
    return await Response.json()
}

function ErrorHandling() {
    const dialogbox = document.querySelector('dialog')
    const close=document.querySelector('.close')
    dialogbox.style.display = 'flex'
    dialogbox.style.height = '40vh'
    dialogbox.style.width = '50vh'
    dialogbox.style.position='absolute'
    dialogbox.style.justifyContent = 'center'
    dialogbox.style.alignItems = 'center'
    dialogbox.style.fontSize = '4rem'
    dialogbox.style.padding = '10px'
    dialogbox.style.borderRadius = '20px'
    dialogbox.style.backgroundColor = '#d32f2f'
    dialogbox.showModal()
    const WholeBody = document.querySelector('body')
    WholeBody.style.opacity = '0.1'
    close.addEventListener('click',()=>{
        dialogbox.close()
        dialogbox.style='none'
        WholeBody.style.opacity='1'
    })
}
/**
 * .error{
  display: flex;
  height: 50vh;
  width: 50vh;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  border-radius: 30px;
  border: 1px solid;
}
 */